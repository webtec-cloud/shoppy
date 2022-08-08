import { Facebook, Instagram, Pinterest, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35vh;
  background-color: wheat;
`;
const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div``;
const FooterLinks = styled.div`
  display: flex;
`;

const Footer = () => {
  return (
    <Container>
      <h1 className="text-center">Shoppy.</h1>
      <p className="footer-para">
        There are many variations of passages of Lorem Ipsum available, but the
        majority have suffered alteration in some form, by injected humour, or
        randomised words which dont look even slightly believable;
      </p>

      <Title>Useful Links</Title>

      <FooterLinks>
        <a className="single-footer-link" href="">
          Home
        </a>
        <a className="single-footer-link" href="">
          Car
        </a>
        <a className="single-footer-link" href="">
          Man Fashion
        </a>
        <a className="single-footer-link" href="">
          Woman Fashion
        </a>
        <a className="single-footer-link" href="">
          Accessories
        </a>
        <a className="single-footer-link" href="">
          My Account
        </a>
        <a className="single-footer-link" href="">
          Order Tracking
        </a>
        <a className="single-footer-link" href="">
          Wishlist
        </a>
        <a className="single-footer-link" href="">
          Wishlist
        </a>
        <a className="single-footer-link" href="">
          Terms
        </a>
      </FooterLinks>

      <SocialContainer>
        <SocialIcon>
          <Facebook />
        </SocialIcon>
        <SocialIcon>
          <Instagram />
        </SocialIcon>
        <SocialIcon>
          <Twitter />
        </SocialIcon>
        <SocialIcon>
          <Pinterest />
        </SocialIcon>
      </SocialContainer>

      <Title>Contact</Title>
      <div className="contact-details">
        <a href="">622 Dixie Path , South Tobinchester 98336</a>
        <a href="">+1 234 56 78</a>
        <a href="">contact@Shoppy.dev</a>
      </div>
    </Container>
  );
};

export default Footer;
