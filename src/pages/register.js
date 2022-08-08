import React from "react";
import styled from "styled-components";

const Register = () => {
  const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const Wrapper = styled.div`
    width: 25%;
    background-color: white;
    padding: 20px;
  `;
  const Title = styled.h1`
    font-size: 25px;
    font-weight: 300;
  `;
  const Form = styled.form`
    display: flex;
    flex-direction: column;
  `;
  const Input = styled.input`
    flex: 1;
    margin: 10px 0;
    padding: 10px;
    min-width: 40%;
  `;
  const Button = styled.button`
    width: 40%;
    border: none;
    background-color: teal;
    color: white;
    padding: 15px 20px;
    cursor: pointer;
    margin-bottom: 10px;
  `;

  const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
  `;
  const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0;
  `;
  return (
    <Container>
      <Wrapper>
        <Title>Create an Account</Title>
        <Form>
          <Input placeholder="name" />
          <Input placeholder="lastname" />
          <Input placeholder="username" />
          <Input placeholder="email" />
          <Input placeholder="password" />
          <Input placeholder="confirm-password" />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
