"use client";
import SideBar from "@/components/dashboard/SideBar";
import GLoader from "@/components/global/GLoader";
import GlobalPopUp from "@/components/global/GlobalPopUp";
import TopBar from "@/components/portfolioComponents/TopBar";
import usePortfolioFunction from "@/hooks/functions/usePortfolioFunction";
import useRoutes from "@/hooks/useRoutes";
import { useGlobalStore } from "@/store/GlobalStore";
import { Box, Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type Props = {
  children: any;
};

export default function CommonLayout({ children }: Props) {
  const pathname: any = usePathname();
  const { setIsScrolled, setIsLoading } = useGlobalStore();
  const [isClient, setisClient] = useState(false);
  const userName = pathname.split("/")[1];
  const { portfolio, portfolioLoading } = usePortfolioFunction({
    single: userName != "dashboard" ? userName : "",
  });
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
    if (
      pathname.split("/")[1] &&
      pathname.split("/")[1] != "dashboard" &&
      pathname != "/template-two"
    ) {
      return (
        <Stack>
          <TopBar
            isLoading={portfolioLoading}
            email={portfolio?.user?.email}
            isProject={portfolio?.project?.length > 0}
          />
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
