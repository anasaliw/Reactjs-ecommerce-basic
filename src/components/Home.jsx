import { Box, Grid, Typography } from "@mui/material";
import React, { useContext } from "react";
import { HeadComponent } from "./styles";
import { DataProvider } from "../Context/ContextApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { products } = useContext(DataProvider);
  const navigate = useNavigate();
  return (
    <>
      <Box sx={{ mt: "100px" }}>
        <HeadComponent>
          <Grid container spacing={3}>
            {products.map((list, index) => {
              return (
                <Grid
                  key={index}
                  lg={3}
                  md={4}
                  sm={6}
                  xs={12}
                  item
                  onClick={() => navigate(`/product/${list.id}`)}
                  sx={{ cursor: "pointer", width: "100%" }}
                >
                  <img
                    style={{
                      width: "100%",
                      maxHeight: "218px",
                      minHeight: "218px",
                      objectFit: "cover",
                      borderRadius: "10px",
                    }}
                    src={list?.image}
                    alt='pic'
                  />
                  <Typography>{list.title}</Typography>
                  <Typography>{list.price}$</Typography>
                </Grid>
              );
            })}
          </Grid>
        </HeadComponent>
      </Box>
    </>
  );
};

export default Home;
