import { Divider, Stack } from "@mui/material";
import { useState } from "react";
import { Link } from "react-scroll";
import { PrimaryTypography } from "../CustomTypography";
import useMuiBreakpoints from "@/app/hooks/useMuiBreakpoints";

export default function ListItem({
  isSelected,
  lable,
  onClick,
  to,
  offset,
}: {
  isSelected?: boolean;
  lable: string;
  onClick: any;
  to: string;
  offset: number;
}) {
  const [isHover, setisHover] = useState(false);
  const { isxs, issm } = useMuiBreakpoints();
  return (
    <Link
      activeClass="link-active"
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={100}
      style={{
        width: isxs || issm ? "100%" : "auto",
      }}
    >
      <Stack
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        onClick={onClick}
        sx={{
          transform: isHover || isSelected ? "translateY(-1px)" : "unset",
          transition: ".3s",
          cursor: "pointer",
          gap: 1,
        }}
      >
        <PrimaryTypography name={lable} size="xs" />

        <Divider
          sx={{
            display:
              isHover || (isSelected && lable == "Works") ? "flex" : "none",
            background: "var(--buttonPrimary)",
            border: "none",
            height: "2px",
            borderRadius: "10px",
            animation: "draw-divider .5s forwards",
            width: "100%",
          }}
        />
      </Stack>
    </Link>
  );
}
