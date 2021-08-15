import React from "react";
import StyledProgress, { Bar } from "./StyledProgress";
import { ProgressSalt } from "../Svg";
import { ProgressProps } from "./types";
import SaltyProgressWrapper from "./SaltyProgressWrapper";

const stepGuard = (step: number) => {
  if (step < 0) {
    return 0;
  }

  if (step > 100) {
    return 100;
  }

  return step;
};

const Progress: React.FC<ProgressProps> = ({ primaryStep = 0, secondaryStep = null, showSaltyProgress = false }) => (
  <StyledProgress>
    {showSaltyProgress && (
      <SaltyProgressWrapper style={{ left: `${stepGuard(primaryStep)}%` }}>
        <ProgressSalt />
      </SaltyProgressWrapper>
    )}
    <Bar primary style={{ width: `${stepGuard(primaryStep)}%` }} />
    {secondaryStep ? <Bar style={{ width: `${stepGuard(secondaryStep)}%` }} /> : null}
  </StyledProgress>
);
export default Progress;
