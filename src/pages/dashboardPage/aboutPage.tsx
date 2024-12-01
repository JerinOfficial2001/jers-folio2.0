"use client";
import GlobalCard from "@/components/global/GlobalCard";
import GToggleButton from "@/components/global/GToggleButton";
import { Stack } from "@mui/material";
import React, { useState } from "react";

type Props = {};

export default function AboutPage({}: Props) {
  const [type, setType] = useState("Experience");
  const handleOnchange = (e: any, value: string) => {
    setType(value);
  };
  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        alignItems: "center",
        gap: 5,
      }}
    >
      <GToggleButton
        handleChange={handleOnchange}
        alignment={type}
        buttons={["Experience", "Education"]}
        customStyle={{ width: "190px", position: "sticky", top: 0 }}
      />
      <GlobalCard projectName="Coimbatore" title="UI Developer" />
    </Stack>
  );
}
