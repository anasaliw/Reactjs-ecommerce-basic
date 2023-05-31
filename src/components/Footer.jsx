import React from "react";
import { Box, Link } from "@mui/material";
import {
  AlternateEmail,
  Telegram,
  Twitter,
  WhatsApp,
} from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import {
  MainText,
  ParentContainer,
  LogoBox,
  LinkParentBox,
  LinkText,
  LinkText2,
  BottomText,
  LinkBox,
  InfoBox,
  GradientText,
  ContactText,
  BottomBox,
} from "./FooterStyles";

const web3List = [
  { href: "https://www.youtube.com/", title: "NFT Marketplace" },
  { href: "https://www.youtube.com/", title: "NFT Minting" },
  { href: "https://www.youtube.com/", title: "NFT Generator" },
  { href: "https://www.youtube.com/", title: "NFT Stacking" },
  { href: "https://www.youtube.com/", title: "Farming" },
  { href: "https://www.youtube.com/", title: "Voting" },
  { href: "https://www.youtube.com/", title: "ICO/Presale" },
];
const monkiList = [
  { href: "https://www.youtube.com/", title: "Audits&Kyc" },
  { href: "https://www.youtube.com/", title: "Wallet Genration" },
  { href: "https://www.youtube.com/", title: "Swap" },
  { href: "https://www.youtube.com/", title: "Lock&Vesting" },
  { href: "https://www.youtube.com/", title: "Stacking" },
  { href: "https://www.youtube.com/", title: "Multisender" },
  { href: "https://www.youtube.com/", title: "Token generation" },
];

const consultingList = [
  { href: "https://www.youtube.com/", title: "Security" },
  { href: "https://www.youtube.com/", title: "Tokenization" },
  { href: "https://www.youtube.com/", title: "Development" },
  { href: "https://www.youtube.com/", title: "Project management" },
];

function Footer() {
  return (
    <ParentContainer>
      <LogoBox>
        <img
          src='assets/bitcoin.png'
          alt='logo'
          style={{ marginRight: 2, padding: 0 }}
        />
        <MainText>Ecommerce</MainText>
      </LogoBox>
      <MainText id='services'>Services</MainText>
      <LinkParentBox>
        {/* <Box> */}
        {/* //! First Column */}
        <LinkBox>
          <MainText sx={{ marginBottom: "20px" }}>Web3 Applications</MainText>
          {web3List.map((data) => (
            <LinkText href={data.href} target='_blank'>
              {data.title}
            </LinkText>
          ))}
        </LinkBox>
        {/* //! 2nd Column */}
        <LinkBox>
          <MainText sx={{ marginBottom: "20px" }}>MONKI SAAS SERVICES</MainText>
          {monkiList.map((data) => (
            <LinkText href={data.href} target='_blank'>
              {data.title}
            </LinkText>
          ))}
        </LinkBox>

        {/* //! Third Column */}

        <LinkBox>
          <MainText sx={{ marginBottom: "20px" }}>CONSULTING</MainText>
          {consultingList.map((data) => (
            <LinkText href={data.href} target='_blank'>
              {data.title}
            </LinkText>
          ))}
        </LinkBox>

        {/* //! 4th Column */}

        <LinkBox>
          <InfoBox>
            <GradientText>CONTACT INFO</GradientText>
            <ContactText>Phone +39 3917867690 </ContactText>
            <ContactText>Email: info@ecommerce.com</ContactText>
            <Box
              sx={{
                marginTop: "30px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link
                href='https://medium.com/'
                target='_blank'
                style={{ textDecoration: "none" }}
              >
                <Telegram
                  sx={{
                    width: "35px",
                    height: "30px",
                    padding: "5px",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "#00F902",
                    },
                  }}
                />
              </Link>
              <Link
                href='https://medium.com/'
                target='_blank'
                style={{ textDecoration: "none" }}
              >
                <Twitter
                  sx={{
                    width: "35px",
                    height: "30px",
                    padding: "5px",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "#00F902",
                    },
                  }}
                />
              </Link>
              <Link
                href='https://medium.com/'
                target='_blank'
                style={{ textDecoration: "none" }}
              >
                <WhatsApp
                  sx={{
                    width: "35px",
                    height: "30px",
                    padding: "5px",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "#00F902",
                    },
                  }}
                />
              </Link>
              <Link
                href='https://medium.com/'
                target='_blank'
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon
                  style={{ width: "32px", height: "34px", color: "gray" }}
                  className='awesome-icon'
                  icon={faDiscord}
                />
              </Link>

              <Link
                href='https://medium.com/'
                target='_blank'
                style={{ textDecoration: "none" }}
              >
                <AlternateEmail
                  sx={{
                    width: "35px",
                    height: "30px",
                    padding: "5px",
                    cursor: "pointer",
                    color: "gray",
                    "&:hover": {
                      color: "#00F902",
                    },
                  }}
                />
              </Link>
            </Box>
          </InfoBox>
        </LinkBox>
        {/* </Box> */}
      </LinkParentBox>
      <Box
        sx={{ border: "1px solid #8E8D8D", marginTop: "50px", width: "100%" }}
      ></Box>
      <BottomBox>
        <BottomText>Copyright MonkiFinance.com 2022-2023</BottomText>
        <LinkText2 href='#' target='_blank'>
          Privacy Policy
        </LinkText2>
        <LinkText2 href='#' target='_blank'>
          Terms of Service
        </LinkText2>
      </BottomBox>
    </ParentContainer>
  );
}

export default Footer;
