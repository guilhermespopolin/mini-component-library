import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const barStylesBySize = {
  small: {
    "--height": "calc(8rem / 16)",
    "--margin": "0",
  },
  medium: {
    "--height": "calc(12rem / 16)",
    "--margin": "0",
  },
  large: {
    "--height": "calc(16rem/ 16)",
    "--margin": "4px",
  },
};

const wrapperStylesBySize = {
  small: {
    "--radius": "4px",
    "--padding": "0",
  },
  medium: {
    "--radius": "4px",
    "--padding": "0",
  },
  large: {
    "--radius": "8px",
    "--padding": "4px",
  },
};

const ProgressBar = ({ value = 0, size = "medium" }) => {
  return (
    <Wrapper
      style={wrapperStylesBySize[size]}
      role="progressbar"
      aria-valuemin="0"
      aria-valuemax="100"
      aria-valuenow={value}
    >
      <BarWrapper>
        <Bar style={barStylesBySize[size]} value={value} />
      </BarWrapper>
      <VisuallyHidden>{value}%</VisuallyHidden>
    </Wrapper>
  );
};

const Wrapper = styled.div({
  borderRadius: "var(--radius)",
  padding: "var(--padding)",
  boxShadow: `inset 0px 2px 4px ${COLORS.transparentGray35}`,
  backgroundColor: COLORS.transparentGray15,
});

const BarWrapper = styled.div({
  borderRadius: "4px",
  overflow: "hidden",
});

const Bar = styled.div(({ value }) => ({
  width: `${value}%`,
  height: "var(--height)",
  backgroundColor: COLORS.primary,
}));

export default ProgressBar;
