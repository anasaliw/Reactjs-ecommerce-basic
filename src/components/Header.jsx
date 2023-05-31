import {
  AppBar,
  Box,
  InputAdornment,
  List,
  TextField,
  Toolbar,
  useMediaQuery,
  Drawer,
  ListItem,
  Divider,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import React, { useContext } from "react";
import { Title } from "./styles";
import { DataProvider } from "../Context/ContextApi";
import { HambergerMenu } from "iconsax-react";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
// import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  const [searchText, setSearchText] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const responsive = useMediaQuery("(max-width:800px)");
  const { products, setProducts } = useContext(DataProvider);
  const handleCloseDrawer = async () => {
    setOpen(false);
  };
  return (
    <>
      {/* Header */}
      <AppBar elevation={0} sx={{ backgroundColor: "#151617" }}>
        <Toolbar>
          {responsive ? (
            <>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <img
                  src='/assets/bitcoin.png'
                  alt='logo'
                  style={{ width: "30px", marginRight: "10px" }}
                />
                <Title
                  component={Link}
                  style={{ textDecoration: "none", color: "white" }}
                  to={"/"}
                >
                  Ecommerce
                </Title>
              </Box>
              <Box sx={{ ml: "auto", cursor: "pointer" }}>
                <HambergerMenu onClick={() => setOpen(true)} />
              </Box>
            </>
          ) : (
            <>
              <Box sx={{ display: "flex", pl: "55px", alignItems: "center" }}>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <img
                    src='/assets/bitcoin.png'
                    alt='logo'
                    style={{ width: "30px", marginRight: "10px" }}
                  />
                  <Title
                    component={Link}
                    style={{ textDecoration: "none", color: "white" }}
                    to={"/"}
                  >
                    Ecommerce
                  </Title>
                </Box>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <TextField
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                    sx={{
                      background: "gray",
                      ml: "40px",
                      borderRadius: "20px",
                      color: "white",
                    }}
                    variant='standard'
                    inputProps={{ sx: { color: "white" } }}
                    InputProps={{
                      disableUnderline: true,
                      color: "white",

                      startAdornment: (
                        <InputAdornment
                          position='start'
                          sx={{ ml: "20px", color: "#FFFF", pt: "2px" }}
                        >
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Box>
                {searchText && (
                  <List
                    sx={{
                      position: "absolute",
                      backgroundColor: "#2b2b2b",
                      top: 70,
                      left: 260,
                      width: "300px",
                      borderRadius: "20px",
                    }}
                  >
                    {products
                      .filter((product) =>
                        product.title
                          .toLowerCase()
                          .includes(searchText.toLowerCase())
                      )
                      .map((filteredText) => (
                        <ListItem
                          component={Link}
                          sx={{ color: "white" }}
                          to={`/product/${filteredText.id}`}
                          onClick={() => setSearchText("")}
                        >
                          {/* <Link
                            to={`/product/${filteredText._id}`}
                            style={{ textDecoration: "none", color: "inherit" }}
                            onClick={() => setSearchText("")}
                          >
                          </Link> */}
                          {filteredText.title}
                        </ListItem>
                      ))}
                  </List>
                )}
              </Box>
            </>
          )}
        </Toolbar>
      </AppBar>

      {/* Drawer Will Open */}
      <Drawer
        open={open}
        onClose={handleCloseDrawer}
        anchor='right'
        PaperProps={{
          sx: {
            width: "280px",
            background: "transparent",

            backdropFilter: "blur(30px)",
          },
        }}
      >
        <Box sx={{ m: "15px 15px 5px auto", cursor: "pointer" }}>
          <Close onClick={() => setOpen(false)} />
        </Box>
        <Box sx={{ color: "white" }}>
          {["Home", "Gallery", "About", "Contact us"].map((data, index) => (
            <Link
              key={index}
              to='/'
              onClick={handleCloseDrawer}
              style={{ textDecoration: "none", marginBottom: "12px" }}
            >
              <Typography style={{ padding: "0px 12px", color: "white" }}>
                {data}
              </Typography>
              <Divider style={{ backgroundColor: "gray" }} />
            </Link>
          ))}
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
