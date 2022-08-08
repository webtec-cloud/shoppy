import React from "react";
import styled from "styled-components";

const Login = () => {
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
  return (
    <Container>
      <Wrapper>
        <Title>Sign in</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>Login</Button>
          <Link>Forgot your password?</Link>
          <Link>Create a new account</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
