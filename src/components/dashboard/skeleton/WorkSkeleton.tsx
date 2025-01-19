import { flexStyle } from "@/styles/commonStyles";
import { Box, Grid2, Skeleton, Stack } from "@mui/material";
import React from "react";
import Card from "../Card";

type Props = {
  index: number;
  isWebsite: boolean;
  defaultImageStyle: any;
};

export const WorkSkeleton = ({
  index,
  isWebsite,
  defaultImageStyle,
}: Props) => {
  return (
    <Grid2
      size={{
        md: 12,
      }}
      key={index}
    >
      <Card btnDirection="row">
        <Stack direction={"row"} gap={3} sx={{ width: "100%" }}>
          <Box sx={{ height: "100%", overflow: "hidden", width: "460px" }}>
            <Grid2
              container
              columnGap={1}
              rowGap={1}
              sx={{ ...flexStyle("", 1, "", "space-between") }}
            >
              <Grid2 size={isWebsite ? 8 : 2.75}>
                <Skeleton
                  variant="rectangular"
                  sx={{
                    ...defaultImageStyle,
                    background: "var(--skeleton)",
                    height: isWebsite ? "145px" : "220px",
                    width: isWebsite ? "100%" : "120px",
                  }}
                />
              </Grid2>

              <Grid2 size={isWebsite ? 3.7 : 8.5}>
                <Grid2
                  container
                  columnGap={1}
                  rowGap={isWebsite ? 1.5 : 1}
                  sx={{
                    ...flexStyle(
                      "",
                      isWebsite ? 1 : 2,
                      "",
                      isWebsite ? "space-between" : ""
                    ),
                    width: "100%",
                  }}
                >
                  {[
                    ...((isWebsite as any)
                      ? [1, 2]
                      : [1, 2, 3, 4, 5, 6, 7, 8, 9]),
                  ].map((elem: any, index: number) => {
                    return (
                      <Grid2 key={index} size={isWebsite ? 12 : 1.9}>
                        <Skeleton
                          variant="rectangular"
                          sx={{
                            ...defaultImageStyle,
                            background: "var(--skeleton)",
                            height: isWebsite ? "60px" : "100px",
                            width: isWebsite ? "100%" : "60px",
                          }}
                        />
                      </Grid2>
                    );
                  })}
                </Grid2>
              </Grid2>

              {isWebsite &&
                [1, 2, 3].map((data: any, index: number) => {
                  return (
                    <Grid2 key={index} size={3.7} sx={{ position: "relative" }}>
                      <Skeleton
                        variant="rectangular"
                        sx={{
                          ...defaultImageStyle,
                          background: "var(--skeleton)",
                          height: "66px",
                        }}
                      />
                    </Grid2>
                  );
                })}
            </Grid2>
          </Box>
          <Stack sx={{ width: "50%" }}>
            <Skeleton
              variant="text"
              sx={{
                width: "200px",
                background: "var(--skeleton)",
                height: "30px",
              }}
            />
            {[1, 2, 3, 4, 5, 6, 7].map((elem: any) => {
              return (
                <Skeleton
                  key={elem}
                  variant="text"
                  sx={{
                    background: "var(--skeleton)",
                  }}
                />
              );
            })}
            <Skeleton
              variant="text"
              sx={{
                background: "var(--skeleton)",
                width: "70%",
              }}
            />
          </Stack>
        </Stack>
      </Card>
    </Grid2>
  );
};
