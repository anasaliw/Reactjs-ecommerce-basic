import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { DataProvider } from "../Context/ContextApi";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { HeadComponent } from "./styles";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  const { products } = useContext(DataProvider);
  const handleFilter = () => {
    const filteredProduct = products.filter(
      (data) => data.id.toString() === id
    );
    setProduct(...filteredProduct);
  };
  console.log(typeof id);
  useEffect(() => {
    handleFilter();
  }, []);
  return (
    <HeadComponent sx={{ mt: 13 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            lg: "row",
            md: "row",
            sm: "column",
            xs: "column",
          },
        }}
      >
        <Box
          sx={{
            width: {
              lg: "100%",
              md: "100%",
              sm: "100%",
              xs: "100%",
            },
            mb: {
              lg: "0",
              md: "0",
              sm: "20px",
              xs: "20px",
            },
          }}
        >
          <img
            style={{
              width: "100%",
              // height: "100%",
              minHeight: "300px",
              maxHeight: "500px",
              objectFit: "cover",
            }}
            src={product?.image}
            alt='pic'
          />
        </Box>
        <Box
          sx={{
            width: "100%",
            pl: { lg: "20px", md: "20px", sm: "0px", xs: "0px" },
            "& > p, div": {
              marginBottom: "10px",
            },
          }}
        >
          <Typography sx={{ fontWeight: 600, fontSize: "18px" }}>
            {product?.title}
          </Typography>
          <Typography>{product?.description}</Typography>

          <Typography sx={{ fontSize: "18px", textAlign: "start" }}>
            Price
          </Typography>
          <Box
            sx={{
              border: " 1px solid #D9D9D9",
              width: "218px",
              height: "35px",
              borderRadius: "10px",
              background: "#2B2B2B",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography sx={{ pl: "20px" }}>{product?.price}$</Typography>
          </Box>

          <Box
            sx={{
              width: { lg: "318px", md: "318px", sm: "280px", xs: "240px" },
              height: "35px",
              cursor: "pointer",
              background: "#2B2B2B",
              borderRadius: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mt: 3,
            }}
          >
            <ShoppingCartOutlinedIcon />
            <Typography sx={{ ml: "10px" }}>Add to cart</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src='/assets/verified.png' alt='verified' />
            <Typography sx={{ ml: "10px" }}>
              Instant Digital Delivery
            </Typography>
          </Box>
          <Accordion
            sx={{
              backgroundColor: "#151617",
              color: "white",
              // borderRadius: "10px",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", pt: "20px" }} />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>Description</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Nesciunt earum laudantium eum quam cum. Nam blanditiis nisi
                laboriosam nostrum ad architecto ab recusandae eligendi quis, et
                distinctio consequuntur expedita nobis.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            sx={{
              backgroundColor: "#151617",
              color: "white",
              boxShadow: "none",
            }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon sx={{ color: "white", pt: "20px" }} />
              }
              aria-controls='panel1a-content'
              id='panel1a-header'
            >
              <Typography>How to Redeem</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </HeadComponent>
  );
};

export default SingleProduct;
