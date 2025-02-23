import { queryClient } from "@/layouts/Provider";
import { createSkill, deleteSkillById, getSkills } from "@/services/skills";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useSkillFunction() {
  //*API CALLS
  const {
    data: Skills,
    isFetching: skillsLoading,
    error: skillsError,
    refetch: skillsRefetch,
  } = useQuery({
    queryKey: ["skills"],
    queryFn: () => getSkills(),
  });

  const { mutate: AddSkill, isPending: addingSkill } = useMutation({
    mutationKey: ["addSkill"],
    mutationFn: (data: any) => createSkill(data),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["skills"] });
    },
  });
  const { mutate: DeleteSkill, isPending: deletingSkill } = useMutation({
    mutationKey: ["deleteSkill"],
    mutationFn: (data: any) => deleteSkillById(data),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["skills"] });
    },
  });

  return {
    Skills,
    skillsLoading,
    skillsError,
    skillsRefetch,
    AddSkill,
    addingSkill,
    DeleteSkill,
    deletingSkill,
  };
}
