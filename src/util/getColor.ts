import { DefaultTheme } from "styled-components";
import getThemeValue from "./getThemeValue";

const getColor = (color: string, theme: DefaultTheme): string => getThemeValue(`colors.${color}`, color)(theme);

export default getColor;
