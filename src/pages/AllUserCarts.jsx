import {
  Box,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import Cart from "../components/Cart";
import { useMutation, useQuery } from "react-query";
import Service from "../Service";
import { Fragment } from "react";

function AllUserCarts() {
  const usersQuery = useQuery({
    queryKey: ["users"],
    queryFn: () => Service.getUsers(),
  });

  const cartsMutation = useMutation((selectedUser) => {
    return Service.getUserCarts(selectedUser);
  });

  const handleChange = (event) => {
    if (event.target.value) {
      cartsMutation.mutate(event.target.value);
    }
  };

  return (
    <Container maxWidth="md">
      <Typography variant="h4" component="h4" align="center" fontWeight="bold">
        Carts
      </Typography>
      <Box
        display="flex"
        justifyContent="center"
        sx={{
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        <FormControl sx={{ width: "50%" }}>
          <InputLabel id="user-select-label">User</InputLabel>
          <Select
            labelId="user-select-label"
            id="user-select"
            label="User"
            onChange={handleChange}
            defaultValue={-1}
          >
            <MenuItem value={-1} sx={{ display: "none" }}></MenuItem>
            {usersQuery.data?.map((user) => (
              <MenuItem key={user.id} value={user.id}>
                {user.name.firstname + " " + user.name.lastname}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Stack spacing={2}>
        {cartsMutation.data?.map((cart, index, array) => (
          <Fragment key={cart.id}>
            <Cart cart={cart} />
            <Box>
              <Box
                sx={{
                  width: "50%",
                  minHeight: "10px",
                  backgroundColor: index < array.length - 1 ? "#cccf" : "",
                  m: "auto",
                }}
              ></Box>
            </Box>
          </Fragment>
        ))}
      </Stack>
    </Container>
  );
}

export default AllUserCarts;
