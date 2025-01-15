import { useGlobalStore } from "@/store/GlobalStore";
import { Grid2, Stack } from "@mui/material";
import React, { useEffect } from "react";
import GUploadImages from "../GUploadImages";
import GInput from "../GInput";
import GButton from "../GButton";
import { flexStyle } from "@/styles/commonStyles";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createProject,
  getProjectById,
  updateProjectById,
} from "@/services/project";
import { useFormDatatore } from "@/store/FormDataStore";
import { PrimaryTypography } from "@/components/CustomTypography";
import toast from "react-hot-toast";
import useErrorHandler from "@/hooks/useErrorHandler";

type Props = {};

export default function WebApp({}: Props) {
  //*HOOKS
  const { popUpVariant, id, handleClosePopUp } = useGlobalStore();
  const { setWorkFormData, workFormData } = useFormDatatore();
  const { errorMsgs, handleErrors } = useErrorHandler();

  const queryClient = useQueryClient();
  //*API CALLS
  const {
    data: Project,
    isLoading: projectLoading,
    error: projectError,
  } = useQuery({
    queryKey: ["project"],
    queryFn: () => getProjectById(id),
    enabled: !!id,
  });
  const { mutate: AddProject, isPending: adding } = useMutation({
    mutationKey: ["addProject"],
    mutationFn: (data: any) => createProject(data),
    onSuccess: (data) => {
      handleClosePopUp();
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success(data.message);
    },
    onError: (res: any) => {
      handleErrors(res);
    },
  });
  const { mutate: UpdateProject, isPending: updating } = useMutation({
    mutationKey: ["updateProject"],
    mutationFn: (data: any) => updateProjectById(data?.payload, data?.id),
    onSuccess: (data) => {
      handleClosePopUp();
      queryClient.invalidateQueries({ queryKey: ["projects"] });
      toast.success(data.message);
    },
    onError: (res: any) => {
      handleErrors(res);
    },
  });

  //*FUNCTIONS
  const handleOnchange = (e: any) => {
    const { name, value } = e.target;
    setWorkFormData(name, value);
  };
  const handleSubmit = () => {
    const formData = new FormData();
    let tempDatas: any = { ...workFormData };
    delete tempDatas.images;
    delete tempDatas.imageIds;
    if (workFormData.images.length > 0) {
      workFormData.images.forEach((image: any) => {
        if (image instanceof File) {
          formData.append("images", image);
        }
      });
    }
    if (workFormData.imageIds.length > 0) {
      workFormData.imageIds.forEach((image: any) => {
        formData.append("imageIds[]", image);
      });
    }
    Object.keys(tempDatas).forEach((elem: any) => {
      formData.append(elem, tempDatas[elem]);
    });
    if (Project && id) {
      UpdateProject({ id, payload: formData });
    } else {
      AddProject(formData);
    }
  };

  //*USEEFFECTS
  useEffect(() => {
    if (Project && id) {
      const formKeys = Object.keys(workFormData);
      Object.keys(Project).forEach((elem: any) => {
        if (formKeys.includes(elem)) setWorkFormData(elem, Project[elem]);
      });
    }
  }, [Project, id]);

  const projectFields = [
    {
      label: "Icon",
      name: "icon",
      isErr: errorMsgs?.icon,
      errMsg: errorMsgs?.icon,
      type: "image",
      width: "full",
      isVisible: true,
    },
    {
      label: "Images",
      name: "images",
      isErr: errorMsgs?.images,
      errMsg: errorMsgs?.images,
      type: "images",
      width: "full",
      isVisible: true,
    },
    {
      label: "Project Name",
      name: "title",
      value: workFormData.title,
      onChange: handleOnchange,
      isErr: errorMsgs?.title,
      errMsg: errorMsgs?.title,
      type: "text",
      width: "full",
      isVisible: true,
    },
    {
      label: "Description",
      name: "description",
      value: workFormData.description,
      onChange: handleOnchange,
      isErr: errorMsgs?.description,
      errMsg: errorMsgs?.description,
      type: "text",
      width: "full",
      isVisible: true,
    },
    {
      label: "About",
      name: "about",
      value: workFormData.about,
      onChange: handleOnchange,
      isErr: errorMsgs?.about,
      errMsg: errorMsgs?.about,
      type: "bigText",
      width: "full",
      isVisible: true,
    },
    {
      label: "Link",
      name: "link",
      value: workFormData.link,
      onChange: handleOnchange,
      isErr: errorMsgs?.link,
      errMsg: errorMsgs?.link,
      type: "text",
      width: "full",
      isVisible: true,
    },
    // {
    //   label: "Apk",
    //   name: "apk",
    //   value: "",
    //   onChange: "",
    //   isErr: false,
    //   errMsg: "Please fill out this field.",
    //   type: "text",
    //   width: "full",
    //   isVisible: "application",
    // },
  ];

  return (
    <Stack
      sx={{
        background: "var(--background)",
        padding: 2,
        gap: 2,
        borderRadius: "10px",
        alignItems: "center",
        width: "600px",
        position: "relative",
        height: "80vh",
        overflowY: "auto",
      }}
    >
      {/* <GToggleButton
            handleChange={handleOnchange}
            alignment={popUpVariant}
            buttons={["Website", "Application"]}
            customStyle={{
              width: "180px",
              position: "sticky",
              top: 0,
              zIndex: 1,
            }}
          /> */}
      <PrimaryTypography
        variant="primary"
        name={`${id && Project ? "UPDATE" : "ADD"} ${
          popUpVariant == "website" ? "WEBSITE" : "APPLICATION"
        }`}
      />
      <Grid2 container sx={{ width: "100%" }} columnGap={1} rowGap={2}>
        {projectFields.map((elem: any, index: number) => {
          if (elem.isVisible == popUpVariant || elem.isVisible == true) {
            if (elem.type == "images" || elem.type == "image") {
              return (
                <Grid2
                  key={index}
                  size={{
                    lg: elem.width == "full" ? 12 : 5.7,
                    sm: 12,
                    xs: 12,
                  }}
                >
                  <GUploadImages type={elem.type} toggleType={popUpVariant} />
                </Grid2>
              );
            } else if (elem.type == "bigText") {
              return (
                <Grid2
                  key={index}
                  size={{
                    lg: elem.width == "full" ? 12 : 5.7,
                    sm: 12,
                    xs: 12,
                  }}
                >
                  <GInput
                    label={elem.label}
                    placeholder={elem.label}
                    type={"text"}
                    multiline={true}
                    rows={10}
                    name={elem.name}
                    value={elem.value}
                    onChangeHandler={elem.onChange}
                    error={elem.isErr}
                    helperText={elem.errMsg}
                  />
                </Grid2>
              );
            } else {
              return (
                <Grid2
                  key={index}
                  size={{
                    lg: elem.width == "full" ? 12 : 5.7,
                    sm: 12,
                    xs: 12,
                  }}
                >
                  <GInput
                    label={elem.label}
                    name={elem.name}
                    value={elem.value}
                    onChangeHandler={elem.onChange}
                    placeholder={elem.label}
                    type={elem.type}
                    error={elem.isErr}
                    helperText={elem.errMsg}
                  />
                </Grid2>
              );
            }
          }
        })}
        <Grid2
          size={{
            lg: 12,
            sm: 12,
            xs: 12,
          }}
          sx={{ ...flexStyle() }}
        >
          <GButton
            lable="Submit"
            onClickHandler={handleSubmit}
            loading={updating || adding}
          />
        </Grid2>
      </Grid2>
    </Stack>
  );
}
