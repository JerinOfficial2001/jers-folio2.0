import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { PortfolioDatas } from "../constants/Json";

export function useFolioData() {
  const pathname = usePathname();
  const userName = pathname.split("/")[1];

  const [folioData, setfolioData] = useState<any>(null);
  useEffect(() => {
    const result = PortfolioDatas.find((elem) => elem.user_name == userName);
    if (result) {
      setfolioData(result);
    }
  }, [userName]);
  return { folioData };
}
