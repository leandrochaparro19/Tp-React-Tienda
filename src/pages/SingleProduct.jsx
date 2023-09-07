import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router";

function SingleProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    getProduct();
  }, [id]);

  const ShowDetails = () => {
    return (
      <>
        <div className="row d-flex justify-content-center bg-light">
          <div className="row">
            <div className="col-md-4 d-flex justify-content-center align-items-center">
              <div className=" text-center p-2">
                <img
                  id="main-image"
                  alt="product"
                  src={product.image}
                  width="250px"
                />
              </div>
            </div>
            <div className="d-flex flex-column justify-content-between col-md-8  p-4">
              <div>
                <Typography variant="h4" component="h4" fontWeight="bold">
                  {product.title}
                </Typography>
                <Typography
                  variant="h6"
                  component="h6"
                  align="right"
                  fontWeight="bold"
                >
                  {product.category}
                </Typography>
              </div>
              <Typography variant="subtitle1">{product.description}</Typography>

              <div className="d-flex justify-content-end align-items-end">
                <Typography variant="h4" component="h4" fontWeight="bold">
                  {product.price} USD
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="container px-0 mb-5" style={{ marginTop: "66px" }}>
        <ShowDetails />
      </div>
    </>
  );
}

export default SingleProduct;
