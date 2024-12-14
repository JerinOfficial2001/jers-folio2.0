import {
  IconButton,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import React from "react";

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
}: Props) {
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
        {icon}
      </IconButton>
    </BootstrapTooltip>
  );
}
