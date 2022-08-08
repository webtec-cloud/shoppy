import React from "react";
import styled from "styled-components";
import Annoucement from "../components/annoucement";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Newsletter from "../components/newsletter";
import Popularproducts from "../components/popularproducts";
import { mobile } from "../responsive";
const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const Productlist = () => {
  return (
    <Container>
      <Navbar />
      <Annoucement />
      <Title>dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>Green</Option>
            <Option>Black</Option>
            <Option>Blue</Option>
            <Option>Red</Option>
          </Select>
          <Select>
            <Option disabled selected>
              Size
            </Option>
            <Option>SS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select>
            <Option>Newest</Option>
            <Option>Price Asending</Option>
            <Option>Price Descending</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Popularproducts />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Productlist;
