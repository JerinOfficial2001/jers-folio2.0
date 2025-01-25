import { queryClient } from "@/layouts/Provider";
import { getEducations } from "@/services/education";
import { getExperiences } from "@/services/experience";
import {
  getActivePortfolio,
  getPortfolioBuilds,
  getPortfolioByUserName,
  publishPortfolio,
} from "@/services/portfolio";
import { getProjectsByType } from "@/services/project";
import { getSkills } from "@/services/skills";
import { getUser } from "@/services/user";
import { useGlobalStore } from "@/store/GlobalStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function usePortfolioFunction({
  portFolios,
  single,
  builds,
}: {
  portFolios?: boolean;
  single?: boolean;
  builds?: boolean;
}) {
  //*API CALLS

  const {
    mutate: handlePublish,
    isPending: publishLoading,
    error: publishError,
  } = useMutation({
    mutationKey: ["publish"],
    mutationFn: (data: any) => publishPortfolio(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["portfolioBuilds"] });
    },
  });
  const {
    data: portfolios,
    isLoading: portfoliosLoading,
    error: portfoliosError,
  } = useQuery({
    queryKey: ["portfolios"],
    queryFn: getActivePortfolio,
    enabled: !!portFolios,
  });
  const {
    data: portfolioBuilds,
    isLoading: portfolioBuildsLoading,
    error: portfolioBuildsError,
  } = useQuery({
    queryKey: ["portfolioBuilds"],
    queryFn: getPortfolioBuilds,
    enabled: !!builds,
  });
  const {
    data: portfolio,
    isLoading: portfolioLoading,
    error: portfolioError,
  } = useQuery({
    queryKey: ["portfolio"],
    queryFn: (userName) => {
      getPortfolioByUserName(userName);
    },
    enabled: !!single,
  });

  return {
    handlePublish,
    publishLoading,
    publishError,
    portfolios,
    portfoliosLoading,
    portfoliosError,
    portfolio,
    portfolioLoading,
    portfolioError,
    portfolioBuildsError,
    portfolioBuildsLoading,
    portfolioBuilds,
  };
}
