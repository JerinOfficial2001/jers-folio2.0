import {
  IconButton,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import React from "react";
import { FaArrowsRotate } from "react-icons/fa6";

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "var(--cardBg)",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "var(--cardBg)",
    color: "var(--text)",
    fontFamily: "Sora-regular",
  },
}));
type Props = {
  icon: any;
  title?: any;
  loading?: boolean;
  onClickHandler: any;
  sx?: any;
  variant?: "primary";
  toolTipPlacement?: "top" | "right" | "left" | "bottom";
};

export default function GIconButton({
  sx,
  icon,
  title,
  onClickHandler,
  variant,
  toolTipPlacement,
  loading,
}: Props) {
  const rotateAnimation = {
    animation: "spin 2s linear infinite",
  };
  return (
    <BootstrapTooltip placement={toolTipPlacement || "top"} title={title}>
      <IconButton
        onClick={onClickHandler}
        sx={{
          color: variant == "primary" ? "var(--secondary)" : "var(--primary)",
          border: variant == "primary" ? "none" : "1px solid var(--primary)",
          background: variant == "primary" ? "var(--primary)" : "transparent",
          ...sx,
        }}
        size="small"
      >
        {loading ? <FaArrowsRotate style={rotateAnimation} /> : icon}
      </IconButton>
    </BootstrapTooltip>
  );
}
