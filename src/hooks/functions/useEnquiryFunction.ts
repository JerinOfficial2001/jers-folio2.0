import { queryClient } from "@/layouts/Provider";
import { getEnquiry, postEnquiry, updateEnquiryById } from "@/services/enquiry";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useErrorHandler from "../useErrorHandler";

export default function useEnquiryFunction(setformDatas?: any) {
  const { errorMsgs, handleErrors } = useErrorHandler();
  //*API CALLS
  const {
    data: Enquiry,
    isFetching: enquiryLoading,
    error: enquiryError,
    refetch: enquiryRefetch,
  } = useQuery({
    queryKey: ["enquirys"],
    queryFn: () => getEnquiry(),
    enabled: false,
  });

  const { mutate: SendEnquiry, isPending: sendingEnquiry } = useMutation({
    mutationKey: ["postEnquiry"],
    mutationFn: (data: any) => postEnquiry(data),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["enquirys"] });
      setformDatas({
        email: "",
        phone: "",
        message: "",
        request: "",
        first_name: "",
        last_name: "",
      });
    },
    onError: (res: any) => {
      handleErrors(res);
    },
  });
  const { mutate: UpdateEnquiry, isPending: updatingEnquiry } = useMutation({
    mutationKey: ["updateEnquiry"],
    mutationFn: (data: any) => updateEnquiryById(data.payload, data.id),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["enquirys"] });
    },
  });

  return {
    Enquiry,
    enquiryLoading,
    enquiryError,
    enquiryRefetch,
    SendEnquiry,
    sendingEnquiry,
    UpdateEnquiry,
    updatingEnquiry,
    errorMsgs,
  };
}
