import { Stack } from "@mui/material";
import React from "react";
import {
  PrimaryTypography,
  SecondaryTypography,
  TeritaryTypography,
} from "../CustomTypography";

type Props = {
  year: string;
  title: string;
  place: string;
  message?: string;
  sx?: any;
};

export default function AboutCard({ message, year, title, place, sx }: Props) {
  const from = year[0].split("-")[0];
  const to = year[1].split("-")[0];
  return (
    <Stack
      sx={{
        padding: "20px 30px",
        borderRadius: "20px",
        background: "var(--cardBg)",
        width: "100%",
        "&:hover": {
          background: "var(--cardhoverBg)",
        },
        transition: "background 1s",
        ...sx,
      }}
    >
      <PrimaryTypography name={from + " - " + to} variant="primary" />
      <PrimaryTypography name={title} size="md" variant="secondary" />
      <TeritaryTypography name={place} />
      {message && <TeritaryTypography name={message} />}
    </Stack>
  );
}
