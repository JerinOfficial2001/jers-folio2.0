import React, { useEffect, useState } from "react";
import { WebsiteProjectDatas } from "../constants/Json";
import { usePathname } from "next/navigation";

export default function useProjects() {
  const [webProjectDatas, setWebProjectDatas] = useState([]);
  const [projectData, setprojectData] = useState<any>(null);
  const pathname = usePathname();
  const projectId = pathname.split("/")[2];
  useEffect(() => {
    setWebProjectDatas(WebsiteProjectDatas);
    if (projectId) {
      const projectData = WebsiteProjectDatas.find(
        (elem: any) => elem?._id == projectId
      );
      setprojectData(projectData);
    }
  }, []);

  return { webProjectDatas, projectData };
}
