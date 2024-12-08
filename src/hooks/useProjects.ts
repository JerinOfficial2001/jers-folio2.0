import React, { useEffect, useState } from "react";
import { WebsiteProjectDatas } from "../constants/Json";
import { usePathname } from "next/navigation";

export default function useProjects(username?: string) {
  const [webProjectDatas, setWebProjectDatas] = useState([]);
  const [appProjects, setappProjects] = useState([]);
  const [projectData, setprojectData] = useState<any>(null);
  const pathname: any = usePathname();
  const projectId = pathname.split("/")[2];
  useEffect(() => {
    const web = WebsiteProjectDatas.filter(
      (elem: any) => elem.projectType == "website"
    );
    setWebProjectDatas(web);
    const app = WebsiteProjectDatas.filter(
      (elem: any) => elem.projectType == "application"
    );
    setappProjects(app);
    if (projectId) {
      const projectData = WebsiteProjectDatas.find(
        (elem: any) => elem?._id == projectId
      );
      setprojectData(projectData);
    }
  }, []);

  return { webProjectDatas, projectData, appProjects };
}
