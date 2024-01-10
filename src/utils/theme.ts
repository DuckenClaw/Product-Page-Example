import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

export const inter = Inter({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
