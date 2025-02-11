import React, { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalStore } from "@/store/GlobalStore";
import { getDecryptedCookie } from "@/utils/encryptedCookies";
import axiosInstance from "@/utils/axios-client";
import { useQueryClient } from "@tanstack/react-query";
import { useFormDatatore } from "@/store/FormDataStore";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export default function useRoutes() {
  const pathname: any = usePathname();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setIsAuthenticated, isAuthenticated, resetAllGlobalStore } =
    useGlobalStore();
  const { resetAllForm } = useFormDatatore();
  const token: any = getDecryptedCookie("jersfolioV2-token");
  useEffect(() => {
    const tokenExpiresAt: any = getDecryptedCookie("expireTime");
    const expirationDate = tokenExpiresAt ? new Date(tokenExpiresAt) : false;
    const currentDate = new Date();

    if (expirationDate && currentDate > expirationDate) {
      router.push("/");
      router.refresh();
      Cookies.remove("jersfolioV2-token");
      Cookies.remove("expireTime");
      resetAllForm();
      resetAllGlobalStore();
      setIsAuthenticated(false);
      toast.error("Token expired");
    } else {
      setIsAuthenticated(!!token);
    }

    if (token) {
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
  }, [pathname]);

  return {};
}
