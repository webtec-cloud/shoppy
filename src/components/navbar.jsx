import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Navbar = () => {
  const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px" })}
  `;
  const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
  `;
  const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
  `;
  const Center = styled.div`
    flex: 1;
    text-align: center;
  `;
  const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  `;
  const Language = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
  `;
  const SearchContainer = styled.div`
    border: 0.5px solid lightgray;
    display: flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
  `;
  const Input = styled.input`
    border: none;
  `;
  const Logo = styled.h1`
    font-weight: bold;
  `;
  const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    margin-left: 25px;
  `;
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="search" />
            <Search style={{ color: "gray", fontSize: "16px" }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo> Shoppy.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
