import AllProducts from "../pages/AllProducts";
import AllUserCarts from "../pages/AllUserCarts";
import SingleProduct from "../pages/SingleProduct";
import PropTypes from "prop-types";

Conditional.propTypes = {
  option: PropTypes.number,
};

function Conditional({ option }) {
  const component = () => {
    if (option == 1) {
      return <AllProducts />;
    } else if (option == 2) {
      return <AllUserCarts />;
    } else if (option == 3) {
      return <SingleProduct />;
    } else {
      return <AllProducts />;
    }
  };
  return component();
}

export default Conditional;
