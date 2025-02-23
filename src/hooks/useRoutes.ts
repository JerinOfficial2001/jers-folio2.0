import { useFormDatatore } from "@/store/FormDataStore";
import { useGlobalStore } from "@/store/GlobalStore";
import axiosInstance from "@/utils/axios-client";
import { getDecryptedCookie } from "@/utils/encryptedCookies";
import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
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

    if (pathname.includes("dashboard") && currentDate > expirationDate) {
      if (tokenExpiresAt) {
        toast.error("Token expired");
      }
      router.push("/");
      router.refresh();
      Cookies.remove("jersfolioV2-token");
      Cookies.remove("expireTime");
      resetAllForm();
      resetAllGlobalStore();
      setIsAuthenticated(false);
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
