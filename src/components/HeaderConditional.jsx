import PropTypes from "prop-types";

HeaderConditional.propTypes = {
  setOption: PropTypes.func,
};

function HeaderConditional({ setOption }) {
  return (
    <>
      <div
        onClick={() => {
          setOption(1);
        }}
      >
        2
      </div>
      <div
        onClick={() => {
          setOption(2);
        }}
      >
        1
      </div>
      <div
        onClick={() => {
          setOption(3);
        }}
      >
        3
      </div>
    </>
  );
}

export default HeaderConditional;
