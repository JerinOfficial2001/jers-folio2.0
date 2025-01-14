import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalStore } from "@/store/GlobalStore";
import { getDecryptedCookie } from "@/utils/encryptedCookies";
import axiosInstance from "@/utils/axios-client";
import { useQueryClient } from "@tanstack/react-query";
export default function useRoutes() {
  const pathname: any = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();

  const { setIsAuthenticated, isAuthenticated } = useGlobalStore();
  const encryptedToken: any = getDecryptedCookie("jersfolioV2-token");
  const tokenExpiresAt: any = getDecryptedCookie("expireTime");
  useEffect(() => {
    const currentDate = new Date();
    console.log(currentDate, tokenExpiresAt);

    if (
      currentDate &&
      tokenExpiresAt &&
      currentDate > tokenExpiresAt &&
      pathname.includes("/dashboard")
    ) {
      queryClient.invalidateQueries({ queryKey: ["logout"] });
      router.push("/");
      router.refresh();
    }
    setIsAuthenticated(!!encryptedToken);

    if (encryptedToken) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${encryptedToken}`;
    }
  }, [pathname]);

  return {};
}
