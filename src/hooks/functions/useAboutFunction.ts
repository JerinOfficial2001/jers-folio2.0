import { createEducation, getEducations } from "@/services/education";
import {
  createExperience,
  getExperienceById,
  getExperiences,
} from "@/services/experience";
import { useGlobalStore } from "@/store/GlobalStore";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

export default function useAboutFunction(type?: string) {
  const queryClient = useQueryClient();
  const { handleClosePopUp } = useGlobalStore();

  //*API CALLS
  const {
    data: Experiences,
    isLoading: experiencesLoading,
    error: experiencesError,
    refetch: experiencesRefetch,
  } = useQuery({
    queryKey: ["experiences"],
    queryFn: () => getExperiences(),
    enabled: type == "Experience",
  });

  const { mutate: AddExperience, isPending: creatingExperience } = useMutation({
    mutationKey: ["createExperience"],
    mutationFn: (data: any) => createExperience(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["experiences"] });
      toast.success(data.message);
      handleClosePopUp();
    },
  });

  const {
    data: Educations,
    isLoading: educationsLoading,
    error: educationsError,
    refetch: educationsRefetch,
  } = useQuery({
    queryKey: ["educations"],
    queryFn: () => getEducations(),
    enabled: type == "Education",
  });
  const { mutate: AddEducation, isPending: creatingEducation } = useMutation({
    mutationKey: ["createEducation"],
    mutationFn: (data: any) => createEducation(data),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["educations"] });
      toast.success(data.message);
      handleClosePopUp();
    },
  });
  return {
    Experiences,
    experiencesLoading,
    experiencesError,
    experiencesRefetch,
    Educations,
    educationsLoading,
    educationsError,
    educationsRefetch,
    AddExperience,
    creatingExperience,
    AddEducation,
    creatingEducation,
  };
}
