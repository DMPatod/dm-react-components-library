import React from "react";
import PropTypes from "prop-types";

const Line = (props) => {
  const { style } = props;

  return (
    <hr
      style={{
        marginTop: 5,
        borderTop: "1px solid rgba(0, 0, 0, 0.2)",
        ...style,
      }}
    />
  );
};

Line.propTypes = {
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

export default Line;
