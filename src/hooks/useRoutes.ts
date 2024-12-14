import React, { useEffect } from "react";
import { useFolioData } from "./useFolioData";
import { usePathname, useRouter } from "next/navigation";
import { useGlobalStore } from "@/store/GlobalStore";

export default function useRoutes() {
  // const { folioData } = useFolioData();
  // const pathname: any = usePathname();
  // const userName = pathname.split("/")[1];
  // const router = useRouter();
  // const { setIsLoading } = useGlobalStore();
  // console.log(userName, folioData);

  // useEffect(() => {
  //   if (pathname.includes(folioData?.user_name)) {
  //     return;
  //   } else if (!pathname.includes("dashboard")) {
  //     router.push("/");
  //   }
  // }, [pathname, folioData]);

  return {};
}
