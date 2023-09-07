import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const { pathname } = useLocation();
  const nav = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: "30px",
          }}
        >
          <Button
            color="inherit"
            sx={{
              padding: "5px",
              minWidth: "100px",
              backgroundColor: pathname == "/products" ? "#ccc6" : "none",
            }}
            onClick={() => {
              nav("products");
            }}
          >
            Products
          </Button>
          <Button
            color="inherit"
            sx={{
              padding: "5px",
              minWidth: "100px",
              backgroundColor: pathname == "/carts" ? "#ccc6" : "none",
            }}
            onClick={() => {
              nav("carts");
            }}
          >
            Carts
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
