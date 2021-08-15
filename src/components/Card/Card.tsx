import React from "react";
import StyledCard from "./StyledCard";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ ribbon, children, ...props }) => (
  <StyledCard {...props}>
    {ribbon}
    {children}
  </StyledCard>
);
export default Card;
