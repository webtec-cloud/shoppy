import React from "react";
import styled from "styled-components";
import { Send } from "@material-ui/icons";

const Newsletter = () => {
  const Container = styled.div`
    height: 60vh;
    background-color: #fcf5f5;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  `;
  const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 20px;
  `;
  const Desc = styled.div`
    font-size: 20px;
    margin-bottom: 20px;
  `;
  const InputContainer = styled.div`
    width: 50%;
    background-color: white;
    height: 40px;
    display: flex;
    justify-content: space-between;
  `;
  const Input = styled.input`
    border: none;
    flex: 8;
  `;
  const Button = styled.button`
    flex: 1;
    border: none;
    background-color: teal;
    color: white;
  `;
  return (
    <Container>
      <Title>newsletter</Title>
      <Desc>Get timely updates from your favorite products</Desc>
      <InputContainer>
        <Input />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
