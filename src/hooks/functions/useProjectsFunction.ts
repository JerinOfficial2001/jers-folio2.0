import { getProjectById } from "@/services/project";
import { useQuery } from "@tanstack/react-query";

export default function useProjectsFunction({
  project_id,
}: {
  project_id?: string;
}) {
  //*API CALLS
  const {
    data: projectData,
    isFetching: projectLoading,
    error: projectError,
    refetch: projectRefetch,
  } = useQuery({
    queryKey: ["project"],
    queryFn: () => getProjectById(project_id),
    enabled: !!project_id,
  });

  return {
    projectData,
    projectLoading,
    projectError,
    projectRefetch,
  };
}
