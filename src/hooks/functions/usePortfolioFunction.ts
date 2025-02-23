import { queryClient } from "@/layouts/Provider";
import {
  getActivePortfolio,
  getPortfolioBuilds,
  getPortfolioByUserName,
  publishPortfolio,
} from "@/services/portfolio";
import { useMutation, useQuery } from "@tanstack/react-query";

export default function usePortfolioFunction({
  portFolios,
  single,
  builds,
}: {
  portFolios?: boolean;
  single?: string;
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
    isFetching: portfoliosLoading,
    error: portfoliosError,
  } = useQuery({
    queryKey: ["portfolios"],
    queryFn: getActivePortfolio,
    enabled: !!portFolios,
  });
  const {
    data: portfolioBuilds,
    isFetching: portfolioBuildsLoading,
    error: portfolioBuildsError,
  } = useQuery({
    queryKey: ["portfolioBuilds"],
    queryFn: getPortfolioBuilds,
    enabled: !!builds,
  });

  const {
    data: portfolio,
    isFetching: portfolioLoading,
    error: portfolioError,
  } = useQuery({
    queryKey: ["portfolio"],
    queryFn: () => getPortfolioByUserName(single),
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
