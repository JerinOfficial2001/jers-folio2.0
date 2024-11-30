"use client";
import { Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import TopBar from "@/app/components/portfolioComponents/TopBar";
import { useGlobalStore } from "../store/GlobalStore";
import SideBar from "../components/dashboard/SideBar";
import GlobalPopUp from "../components/global/GlobalPopUp";

type Props = {
  children: any;
};

export default function CommonLayout({ children }: Props) {
  const pathname = usePathname();
  const { setIsScrolled } = useGlobalStore();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (pathname.split("/")[1] && pathname.split("/")[1] != "dashboard") {
    return (
      <Stack>
        <TopBar />
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
    return children;
  }
}
