import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const history = useHistory();
  const [searchVal, setSearchVal] = useState();
  console.log(searchVal);
  return (
    <Wrapper>
      <Logo>BandT</Logo>
      <Input type="text" onChange={(e) => setSearchVal(e.target.value)} />
      <button onClick={() => history.push(`/artists/${searchVal}`)}>
        Take me to Merch!
      </button>
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

const Input = styled.input``;
const Button = styled.button``;

export default Header;
