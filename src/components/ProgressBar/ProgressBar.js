import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

const sizeStyles = {
  small: {
    "--height": "calc(8rem / 16)",
    "--borderRadius": "4px",
  },
  medium: {
    "--height": "calc(12rem / 16)",
    "--borderRadius": "4px",
  },
  large: {
    "--height": "calc(24rem / 16)",
    "--borderRadius": "8px",
  },
};

const progressbarLabelId = "progressbar-label";

const ProgressBar = ({ value = 0, size = "medium" }) => {
  let ProgressBarComponent = null;
  switch (size) {
    case "large":
      ProgressBarComponent = LargeProggressBar;
      break;
    case "small":
      ProgressBarComponent = SmallProgressBar;
      break;
    case "medium":
    default:
      ProgressBarComponent = MediumgProgressBar;
      break;
  }

  return (
    <Wrapper>
      <strong id={progressbarLabelId}>{value}%</strong>
      <ProgressBarComponent style={sizeStyles[size]} value={value} />
    </Wrapper>
  );
};

const Wrapper = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "32px",
});

const BaseProgressBar = styled.span.attrs(({ value }) => ({
  "aria-role": "progressbar",
  "aria-valuemin": "0",
  "aria-valuemax": "100",
  "aria-valuenow": value,
  "aria-labelledby": progressbarLabelId,
}))(({ value }) => ({
  position: "relative",
  flex: 1,
  backgroundColor: COLORS.transparentGray15,
  width: "100%",
  height: "var(--height)",
  borderRadius: "var(--borderRadius)",
  overflow: "hidden",
  boxShadow: `inset 0px 2px 4px ${COLORS.transparentGray35}`,

  "&::after": {
    content: "''",
    position: "absolute",
    width: `${value}%`,
    height: "100%",
    backgroundColor: COLORS.primary,
  },
}));

const SmallProgressBar = styled(BaseProgressBar)({});

const MediumgProgressBar = styled(BaseProgressBar)({});

const LargeProggressBar = styled(BaseProgressBar)({
  padding: "4px",

  "&::after": {
    height: "calc(100% - 8px)",
    top: "4px",
    left: "4px",
    borderTopLeftRadius: "4px",
    borderBottomLeftRadius: "4px",
  },
});

export default ProgressBar;
