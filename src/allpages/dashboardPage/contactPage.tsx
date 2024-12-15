"use client";
import {
  PrimaryTypography,
  SecondaryTypography,
} from "@/components/CustomTypography";
import Card from "@/components/dashboard/Card";
import NoDataFound from "@/components/dashboard/NoDataFound";
import GButton from "@/components/global/GButton";
import GInput from "@/components/global/GInput";
import GlobalCard from "@/components/global/GlobalCard";
import AboutCard from "@/components/portfolioComponents/AboutCard";
import { flexStyle } from "@/styles/commonStyles";
import { Grid2, Stack } from "@mui/material";
import React from "react";
import { MdAdd } from "react-icons/md";

type Props = {};

export default function ContactPage({}: Props) {
  const fields = [
    {
      content: [
        {
          label: "Phone",
          name: "phone",
          onChange: () => {},
          value: "",
          type: "number",
        },
        {
          label: "Email",
          name: "email",
          onChange: () => {},
          value: "",
          type: "email",
        },
      ],
    },
    {
      label: "Address",
      name: "address",
      onChange: () => {},
      value: "",
      type: "text",
      content: [],
      size: "big",
    },
  ];
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
      <Grid2 container sx={{ width: "100%" }} columnGap={1} rowGap={1}>
        <Grid2
          size={{
            md: 12,
          }}
        >
          <PrimaryTypography name={"Contact Details"} />
        </Grid2>{" "}
        {fields.map((elem: any, index: number) => {
          if (elem.content.length > 0) {
            return (
              <Grid2
                key={index}
                size={{
                  md: 5.9,
                }}
                direction={"column"}
                sx={{ ...flexStyle("column", 1) }}
              >
                {elem.content.map((subElem: any, subIndex: number) => {
                  return (
                    <GInput
                      key={subIndex}
                      name={subElem.name}
                      placeholder={subElem.label}
                      type={subElem.type}
                    />
                  );
                })}
              </Grid2>
            );
          } else {
            return (
              <Grid2
                size={{
                  md: 5.9,
                }}
                key={index}
              >
                <GInput
                  name={elem.name}
                  placeholder={elem.label}
                  type={elem.type}
                  multiline={true}
                  rows={6}
                />
              </Grid2>
            );
          }
        })}
        <Grid2
          size={{
            md: 12,
          }}
          sx={{ ...flexStyle("", "", "", "flex-start") }}
        >
          <SecondaryTypography name={"Notifications"} />
        </Grid2>
        {[1, 2, 3].map((elem: any, index: number) => {
          return (
            <Grid2
              size={{
                md: 5.9,
              }}
              key={index}
            >
              <Card btnDirection="row" size="sm">
                <AboutCard
                  year={"Jerin T"}
                  title={"jerinoffiacial@gmail.com"}
                  place={"Phone : 9384912517"}
                  message={`
                Message : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quasi mollitia recusandae optio beatae, consequuntur possimus corporis tempore! Sit eius tenetur quidem recusandae alias voluptate laudantium excepturi similique debitis repellat?
                    `}
                  sx={{ marginTop: 4 }}
                />
              </Card>
            </Grid2>
          );
        })}
      </Grid2>

      <NoDataFound />
    </Stack>
  );
}
