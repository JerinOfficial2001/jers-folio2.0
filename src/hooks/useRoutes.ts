import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalStore } from "@/store/GlobalStore";
import { getDecryptedCookie } from "@/utils/encryptedCookies";
import axiosInstance from "@/utils/axios-client";
export default function useRoutes() {
  const pathname: any = usePathname();
  const router = useRouter();

  const { setIsAuthenticated, isAuthenticated } = useGlobalStore();
  useEffect(() => {
    const encryptedToken: any = getDecryptedCookie("jersfolioV2-token");
    setIsAuthenticated(!!encryptedToken);

    if (encryptedToken) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${encryptedToken}`;
    }
  }, [pathname]);

  return {};
}
