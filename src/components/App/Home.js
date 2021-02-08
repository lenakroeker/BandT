import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Shirt from "../../assets/tshirt.png";

const Home = () => {
  const history = useHistory();
  const [searchVal, setSearchVal] = useState();
  console.log(searchVal);
  return (
    <Wrapper>
      <Logo>BandT</Logo>
      <HomeBody>
        <img src={Shirt} width="300px" />
        <Input type="text" onChange={(e) => setSearchVal(e.target.value)} />
        <Button onClick={() => history.push(`/artists/${searchVal}`)}>
          Take me to Merch!
        </Button>
      </HomeBody>
    </Wrapper>
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
const HomeBody = styled.div`
  text-align: center;
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
`;

const Input = styled.input`
  margin: 20px auto;
  display: block;
`;
const Button = styled.button`
  margin: auto;
  display: block;
`;

export default Home;
