import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import Header from "./components/Header";
import { Box } from "@mui/material";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Box
        sx={{
          minHeight: "100px",
        }}
      ></Box>
      <QueryClientProvider client={queryClient}>
        <Routes />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
