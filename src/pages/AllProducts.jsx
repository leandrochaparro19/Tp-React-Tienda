import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

function AllProducts() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);

  useEffect(() => {
    let componentMounted = true;
    const getProdcuts = async () => {
      const response = await fetch("https://fakestoreapi.com/products");
      if (componentMounted) {
        const data = await response.json();
        setData(data);
        setFilter(data);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProdcuts();
  }, []);

  const ShowProducts = () => {
    return (
      <>
        <div className="col-md-9 py-md-3">
          <div className="row">
            {filter.map((product) => {
              return (
                <div className="col-6 col-md-6 col-lg-4 mb-3" key={product.id}>
                  <div className="card h-100">
                    <img
                      src={product.image}
                      className="m-3"
                      style={{
                        height: "200px",
                        width: "auto",
                        objectFit: "contain",
                      }}
                      alt={product.title}
                    />
                    <div className="m-3 mb-0">
                      <small className="card-title">
                        {product.title.substring(0, 50)}...
                      </small>
                    </div>
                    <div style={{ marginTop: "auto" }}>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="m-3">
                          <b>${product.price}</b>
                        </div>
                        <NavLink
                          className="stretched-link"
                          to={`/products/${product.id}`}
                        >
                          <button className="btn btn-sm m-3 border-primary">
                            <i className="fa fa-arrow-right text-muted"></i>
                          </button>
                        </NavLink>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="container">
      <h1 className=" m-4 d-flex justify-content-center align-items-center font-weight-bold">
        Products
      </h1>
      <div className="mb-4">
        <b className="d-flex justify-content-center align-items-center">
          Random descriptive text for the content
        </b>
        <b className=" d-flex justify-content-center align-items-center">
          this should be a simple filler text to make an example
        </b>
      </div>
      <div className="row d-flex justify-content-center align-items-center">
        <ShowProducts />
      </div>
    </div>
  );
}

export default AllProducts;
