import { errorHandler } from "@/utils/errorHandler";
import React, { useState } from "react";
import toast from "react-hot-toast";

type Props = {};

export default function useErrorHandler() {
  const [errorMsgs, seterrorMsgs] = useState<any>(null);
  const handleErrMsgs = (name: string, value: string) => {
    seterrorMsgs((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleErrors = (res: any) => {
    seterrorMsgs(null);
    const result = errorHandler(res);
    if (!result?.field && !result?.fields) {
      toast.error(result.error);
    } else if (result?.field) {
      handleErrMsgs(result.field, result.error);
    } else if (result?.fields.length > 0) {
      result.fields.map((elem: any) => {
        handleErrMsgs(elem, elem + " is required");
      });
    }
  };
  return { errorMsgs, handleErrors };
}
