import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalStore } from "@/store/GlobalStore";
import { getDecryptedCookie } from "@/utils/encryptedCookies";
export default function useRoutes() {
  const pathname: any = usePathname();
  const router = useRouter();

  const { setIsAuthenticated, isAuthenticated } = useGlobalStore();
  useEffect(() => {
    const encryptedToken: any = getDecryptedCookie("token");
    setIsAuthenticated(!!encryptedToken);
  }, [pathname]);

  return {};
}
