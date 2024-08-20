import styled from "styled-components";
import { m as Motion } from "framer-motion";

export const Arrow = styled.div`
  &,
  &::before {
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 2px;
    z-index: -1;
  }

  &::before {
    content: "";
    transform: rotate(45deg);
    background: linear-gradient(90.58deg, #FF3701 -0.85%, #E8843B 101.4%);
  }
`;

export const StyledTooltip = styled(Motion.div)`
  padding: 16px;
  font-size: 16px;
  line-height: 130%;
  border-radius: 16px;
  max-width: 320px;
  z-index: 101;
  background: linear-gradient(90.58deg, #FF3701 -0.85%, #E8843B 101.4%);
  color: ${({ theme }) => theme.tooltip.text};
  box-shadow: ${({ theme }) => theme.tooltip.boxShadow};

  &[data-popper-placement^="top"] > ${Arrow} {
    bottom: -4px;
  }

  &[data-popper-placement^="bottom"] > ${Arrow} {
    top: -4px;
  }

  &[data-popper-placement^="left"] > ${Arrow} {
    right: -4px;
  }

  &[data-popper-placement^="right"] > ${Arrow} {
    left: -4px;
  }
`;