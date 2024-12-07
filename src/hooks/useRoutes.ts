import React, { useEffect } from "react";
import { useFolioData } from "./useFolioData";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalStore } from "@/store/GlobalStore";

export default function useRoutes() {
  const { folioData } = useFolioData();
  const pathname: any = usePathname();
  const userName = pathname.split("/")[1];
  const router = useRouter();
  const { setIsLoading } = useGlobalStore();
  useEffect(() => {
    if (userName != folioData?.user_name && !pathname.includes("dashboard")) {
      router.push("/");
    }
  }, []);

  return {};
}
