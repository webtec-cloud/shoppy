import { Container } from "@material-ui/core";
import React from "react";
import Categorieitem from "./categorieitem";
import { categories } from "./data";
import styled from "styled-components";


const Categories = () => {
  const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
  `;
  return (
    <Container>
      {categories.map((item) => (
        <Categorieitem item={item} />
      ))}
    </Container>
  );
};

export default Categories;
