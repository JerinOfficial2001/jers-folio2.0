"use client";
import Card from "@/app/components/dashboard/Card";
import { Box, Grid2, Stack } from "@mui/material";
import { it } from "node:test";
import React from "react";

type Props = {};

export default function DashboardPage({}: Props) {
  const GridDatas = [
    {
      title: "Home",
      data: "",
      content: [],
    },
    {
      title: "Home",
      data: "",
      content: [
        {
          title: "Home",
          data: "",
          width: 12,
          card: "xs",
        },
        {
          title: "Home",
          data: "",
          width: 5.9,
          card: "sm",
        },
        {
          title: "Home",
          data: "",
          width: 5.9,
          card: "sm",
        },
      ],
    },
    {
      title: "Home",
      data: "",
      content: [],
    },
    {
      title: "Home",
      data: "",
      content: [],
    },
    {
      title: "Home",
      data: "",
      content: [],
    },
    {
      title: "Home",
      data: "",
      content: [],
    },
  ];
  return (
    <Stack sx={{ height: "100%", justifyContent: "flex-start" }}>
      <Grid2
        container
        sx={{ width: "100%", height: "100%" }}
        rowGap={1}
        columnGap={1}
      >
        {GridDatas.map((elem, index) => {
          if (elem.content.length > 0) {
            return (
              <Grid2 key={index} size={{ md: 5.9 }}>
                <Grid2
                  container
                  rowGap={1}
                  columnGap={1}
                  sx={{ width: "100%", height: "100%" }}
                >
                  {elem.content.map((nestedElem, nestedIndex) => {
                    return (
                      <Grid2 key={nestedIndex} size={{ md: nestedElem.width }}>
                        <Card size={nestedElem.card}>Home</Card>
                      </Grid2>
                    );
                  })}
                </Grid2>
              </Grid2>
            );
          } else {
            return (
              <Grid2 key={index} size={{ md: 5.9 }}>
                <Card>Home</Card>
              </Grid2>
            );
          }
        })}
      </Grid2>
    </Stack>
  );
}
