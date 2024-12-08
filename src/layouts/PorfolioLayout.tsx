"use client";
import { Box, Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import TopBar from "@/components/portfolioComponents/TopBar";
import { useGlobalStore } from "@/store/GlobalStore";
import SideBar from "@/components/dashboard/SideBar";
import GlobalPopUp from "@/components/global/GlobalPopUp";
import useRoutes from "@/hooks/useRoutes";
import GLoader from "@/components/global/GLoader";
import Image from "next/image";

type Props = {
  children: any;
};

export default function CommonLayout({ children }: Props) {
  const pathname: any = usePathname();
  const { setIsScrolled, setIsLoading } = useGlobalStore();
  const [isClient, setisClient] = useState(false);
  useRoutes();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    setIsLoading(false);
    setisClient(true);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);
  if (isClient) {
    if (pathname.split("/")[1] && pathname.split("/")[1] != "dashboard") {
      return (
        <Stack>
          <TopBar />
          <GLoader />
          {children}
        </Stack>
      );
    } else if (pathname.includes("/dashboard")) {
      return (
        <SideBar>
          <GlobalPopUp />
          {children}
        </SideBar>
      );
    } else {
      return (
        <>
          <GLoader />
          {children}
        </>
      );
    }
  } else {
    return (
      <div
        style={{
          height: "100vh",
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Sora-bold",
          color: "var(--text)",
          flexDirection: "column",
          gap: 5,
          fontSize: "30px",
        }}
      >
        <Box
          component={"img"}
          alt="Logo"
          src={"/favicon-48x48.png"}
          sx={{ height: "80px", width: "80px" }}
        />
        Welcome to Jersfolio 2.0
      </div>
    );
  }
}
