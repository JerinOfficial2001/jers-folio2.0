"use client";
import { Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import TopBar from "@/components/portfolioComponents/TopBar";
import { useGlobalStore } from "@/store/GlobalStore";
import SideBar from "@/components/dashboard/SideBar";
import GlobalPopUp from "@/components/global/GlobalPopUp";
import useRoutes from "@/hooks/useRoutes";
import GLoader from "@/components/global/GLoader";

type Props = {
  children: any;
};

export default function CommonLayout({ children }: Props) {
  const pathname: any = usePathname();
  const { setIsScrolled, setIsLoading } = useGlobalStore();

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

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
}
