"use client";
import GlobalCard from "@/app/components/global/GlobalCard";
import GToggleButton from "@/app/components/global/GToggleButton";
import { Stack } from "@mui/material";
import React, { useState } from "react";

type Props = {};

export default function Works({}: Props) {
  const [project, setproject] = useState("Website");
  const handleOnchange = (e: any, value: string) => {
    setproject(value);
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
        alignment={project}
        buttons={["Website", "Application"]}
        customStyle={{ width: "180px", position: "sticky", top: 0 }}
      />
      <GlobalCard projectName="Coimbatore" title="UI Developer" />
    </Stack>
  );
}
