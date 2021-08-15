import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => (
  <Svg viewBox="0 0 196 196" {...props}>
    <circle stroke="#979797" strokeWidth={4} fill="#D8D8D8" cx={98} cy={98} r={98} fillRule="evenodd" />
  </Svg>
);

export default Icon;
