import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const RightArrow = (props: SvgProps) => (
  <Svg width={18} height={8} fill="#fff" {...props}>
    <Path d="M17.383 4.354a.5.5 0 0 0 0-.708L14.2.464a.5.5 0 1 0-.707.708L16.322 4l-2.828 2.828a.5.5 0 1 0 .707.708l3.182-3.182ZM0 4.5h17.03v-1H0v1Z" />
  </Svg>
);
export default RightArrow;
