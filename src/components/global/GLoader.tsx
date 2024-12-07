import { useGlobalStore } from "@/store/GlobalStore";
import { flexStyle } from "@/styles/commonStyles";
import { Box } from "@mui/material";
import React from "react";

type Props = {
  isVisible?: boolean;
};

export default function GLoader({ isVisible }: Props) {
  const { isLoading } = useGlobalStore();
  return (
    <>
      {(isLoading || isVisible) && (
        <Box
          sx={{
            width: "100%",
            height: "100vh",
            position: "fixed",
            ...flexStyle(),
            backdropFilter: "blur(5px)",
            zIndex: 1000,
          }}
        >
          <div className="loader">
            <span className="loader-text">loading</span>
            <span className="load"></span>
          </div>
        </Box>
      )}
    </>
  );
}
