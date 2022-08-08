import React from "react";
import styled from "styled-components";
import { popularProducts } from "./data";
import Productcard from "./productcard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 20px;
`;
const Popularproducts = () => {
  return (
    <Container className="">
      {popularProducts.map((item, id) => (
        <Productcard item={item} />
      ))}
    </Container>
  );
};

export default Popularproducts;
