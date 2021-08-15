import React, { cloneElement, Children, ReactElement } from "react";
import StyledButtonMenu from "./StyledButtonMenu";
import { sizes, variants } from "../Button/types";
import { ButtonMenuProps, ButtonMenuItemProps } from "./types";

const ButtonMenu: React.FC<ButtonMenuProps> = ({
  activeIndex = 0,
  size = sizes.MD,
  variant = variants.PRIMARY,
  onClick,
  children,
}) => (
  <StyledButtonMenu variant={variant}>
    {Children.map(children, (child: ReactElement<ButtonMenuItemProps>, index) =>
      cloneElement(child, {
        isActive: activeIndex === index,
        onClick: onClick ? () => onClick(index) : undefined,
        size,
        variant,
      })
    )}
  </StyledButtonMenu>
);

export default ButtonMenu;
