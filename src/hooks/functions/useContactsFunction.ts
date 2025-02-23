import { queryClient } from "@/layouts/Provider";
import {
  createContact,
  getContact,
  updateContactById,
} from "@/services/contact";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useContactsFunction() {
  //*API CALLS
  const {
    data: Contact,
    isFetching: contactLoading,
    error: contactError,
    refetch: contactRefetch,
  } = useQuery({
    queryKey: ["contacts"],
    queryFn: () => getContact(),
  });

  const { mutate: AddContact, isPending: addingContact } = useMutation({
    mutationKey: ["addContact"],
    mutationFn: (data: any) => createContact(data),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });
  const { mutate: UpdateContact, isPending: updatingContact } = useMutation({
    mutationKey: ["updateContact"],
    mutationFn: (data: any) => updateContactById(data.payload, data.id),
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({ queryKey: ["contacts"] });
    },
  });

  return {
    Contact,
    contactLoading,
    contactError,
    contactRefetch,
    AddContact,
    addingContact,
    UpdateContact,
    updatingContact,
  };
}
