import { styled, Typography, Box } from "@mui/material";

export const Title = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: "28px",
  lineHeight: "33.89px",
  color: "white",
}));
export const HeadComponent = styled(Box)(({ theme }) => ({
  padding: "60px 80px 20px 80px",
  minHeight: "67vh",
  [theme.breakpoints.down(900)]: {
    padding: "60px 30px 20px 30px",
  },
  [theme.breakpoints.down(550)]: {
    padding: "60px 30px 10px 30px",
  },
}));
