import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { skillData } from "../constants/Json";
import { Skill } from "../types/interfaces";

export function useSkills(user_name?: string) {
  const pathname: any = usePathname();
  const userName = pathname.split("/")[1];
  const [skillsData, setskills] = useState<Skill[]>([]);

  useEffect(() => {
    let result = [];
    if (user_name) {
      result = skillData.filter((elem) => elem.user_name == user_name);
    } else {
      result = skillData.filter((elem) => elem.user_name == userName);
    }
    if (result) {
      setskills(result);
    }
  }, [userName]);
  return { skillsData };
}
