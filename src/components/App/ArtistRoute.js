import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import {
  requestArtistInfo,
  receiveArtistInfo,
  receiveArtistInfoError,
} from "../../actions";
import { fetchArtistProfile } from "../../helpers/api-helpers";
import Shirt from "../../assets/tshirt.png";
import Hoodie from "../../assets/Hoodie.png";

const ArtistRoute = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const accessToken = useSelector((state) => state.auth.token);
  const { id } = useParams();
  const [color, setColor] = useState("white");
  const [style, setStyle] = useState(Shirt);

  console.log(color);

  // re-try once token
  useEffect(() => {
    if (!accessToken) {
      return;
    }
    dispatch(requestArtistInfo());
    fetchArtistProfile(accessToken, id)
      .then((data) => {
        dispatch(receiveArtistInfo(data));
      })
      .catch((err) => {
        dispatch(receiveArtistInfoError(err));
      });
  }, [accessToken]);

  const currentArtist = useSelector((state) => state.artists.currentArtist);

  const artistName = currentArtist ? currentArtist.profile.name : undefined;

  let imageUrl;
  if (currentArtist && currentArtist.profile.images.length > 0) {
    imageUrl = currentArtist.profile.images[0].url;
  } else {
    imageUrl = undefined;
  }
  console.log(currentArtist);

  return currentArtist ? (
    <Wrapper>
      <Logo onClick={() => history.push(`/`)}>BandT</Logo>
      <Image src={imageUrl} />
      <Name style={color === "black" ? { color: "white" } : { color: "black" }}>
        {artistName}
      </Name>
      <Garment src={style} />
      <ShirtColor style={{ background: `${color}` }}></ShirtColor>
      <InputDiv>
        <Label htmlFor="color">Select a Colour</Label>
        <Select
          id="color"
          name="color"
          onChange={(e) => setColor(e.target.value)}
        >
          <Option value="white">White</Option>
          <Option value="black">Black</Option>
          <Option value="rgb(242, 247, 245)">Worn White</Option>

          <Option value="rgb(171, 150, 34)">Gold</Option>
          <Option value="rgb(87, 205, 255)">Sky Blue</Option>
          <Option value="rgb(250, 47, 91)">Crimson</Option>
          <Option value="lightPink">Light Pink</Option>
        </Select>
        <Label htmlFor="color">Select a Style</Label>
        <Select
          id="style"
          name="style"
          onChange={(e) => setStyle(e.target.value)}
        >
          <Option value={Shirt}>Shirt</Option>
          <Option value={Hoodie}>Hoodie</Option>
        </Select>
      </InputDiv>
    </Wrapper>
  ) : (
    <p>Please wait...</p>
  );
};

const Wrapper = styled.div`
  text-align: center;
  background: rgb(242, 247, 245);
  color: white;
  width: 100vw;
  margin: auto;
  height: 100vh;
`;

const Logo = styled.p`
  position: fixed;
  color: navy;
  z-index: 4;
  left: 30px;
  font-size: 25px;
  background: mintcream;
  padding: 0 5px;
  border-radius: 2px;
  box-shadow: -3px 3px 0px 0px navy;
  font-family: "Bungee Shade", cursive;
  cursor: pointer;
`;

const Name = styled.h1`
  font-size: 25px;
  font-weight: 700;
  position: fixed;
  color: black;
  width: 18vw;
  margin-top: 280px;
  margin-left: 15.5vw;
  z-index: 3;
  opacity: 0.7;
  font-family: "Bungee Shade", cursive;
`;

const Image = styled.img`
  margin-top: 30px;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 190.5px;
  position: fixed;
  left: 18.5vw;
  top: 18vh;
  z-index: 2;
  opacity: 0.8;
`;

const Garment = styled.img`
  position: fixed;
  left: 0;
  z-index: 1;
`;

const ShirtColor = styled.div`
  height: 100vh;
  width: 44vw;
  position: fixed;
  left: 0;
  top: 0;
`;

const InputDiv = styled.div`
  position: fixed;
  left: 60vw;
  top: 100px;
  color: black;
`;
const Label = styled.label`
  display: block;
`;
const Select = styled.select``;
const Option = styled.option``;

export default ArtistRoute;
