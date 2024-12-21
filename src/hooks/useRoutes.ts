import React, { useEffect } from "react";
import { useFolioData } from "./useFolioData";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalStore } from "@/store/GlobalStore";
import Cookies from "js-cookie";
import axios from "axios";
export default function useRoutes() {
  // const { folioData } = useFolioData();
  const pathname: any = usePathname();
  // const userName = pathname.split("/")[1];
  const router = useRouter();
  // console.log(userName, folioData);
  // const value = Cookies.get("JERSFOLIO-V2-AUTH");
  // Function to get a cookie by name

  const { setIsAuthenticated, isAuthenticated } = useGlobalStore();
  useEffect(() => {
    async function checkAuth() {
      try {
        const response = await fetch("/api/auth");
        const data = await response.json();
        setIsAuthenticated(data.isAuthenticated);
      } catch (error) {
        console.error("Error checking authentication:", error);
      }
    }
    checkAuth();
    // if (!isAuthenticated && pathname.includes("dashboard")) {
    //   router.push("/");
    // }
  }, [pathname]);
  // console.log(value, "Cookie");

  // useEffect(() => {
  //   if (pathname.includes(folioData?.user_name)) {
  //     return;
  //   } else if (!pathname.includes("dashboard")) {
  //     router.push("/");
  //   }
  // }, [pathname, folioData]);

  return {};
}
