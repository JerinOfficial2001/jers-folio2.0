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
type Props = { icon: any; title?: any; onClickHandler: any };

export default function GIconButton({ icon, title, onClickHandler }: Props) {
  return (
    <BootstrapTooltip placement="top" title={title}>
      <IconButton
        onClick={onClickHandler}
        sx={{ color: "var(--primary)", border: "1px solid var(--primary)" }}
        size="small"
      >
        {icon}
      </IconButton>
    </BootstrapTooltip>
  );
}
