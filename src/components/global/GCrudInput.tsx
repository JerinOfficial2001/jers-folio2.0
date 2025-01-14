import { Box, Grid2 } from "@mui/material";
import React, { useState } from "react";
import GSelect from "./GSelect";
import GInput from "./GInput";
import { linkKey } from "@/types/interfaces";
import { links } from "@/constants/Json";
import GIconButton from "./GIconButton";
import { IoAddCircle } from "react-icons/io5";
import { flexStyle } from "@/styles/commonStyles";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { useGlobalStore } from "@/store/GlobalStore";
import ResumeCard from "../dashboard/ResumeCard";
import { TeritaryTypography } from "../CustomTypography";
import { useFormDatatore } from "@/store/FormDataStore";

type Props = {
  options: any;
  varient?: "resume";
  label: string;
};
type FormDatas = {
  type: keyof linkKey | "";
  url: string;
};
export default function GCrudInput({ options, varient, label }: Props) {
  const { profileData, setProfileData } = useFormDatatore();
  const [formDatas, setformDatas] = useState<FormDatas>({
    type: "",
    url: "",
  });
  const handleFormData = (name: string, value: any) => {
    setformDatas((prev: any) => ({ ...prev, [name]: value }));
  };
  const customizedOptions = options.map((elem: any) => ({
    ...elem,
    disabled: profileData.links
      .map((link: any) => link.type)
      .includes(elem.value),
  }));
  const InputField = ({
    formDatas,
    handleFormData,
    index,
  }: {
    formDatas: FormDatas;
    handleFormData: any;
    index: number;
  }) => {
    return (
      <Grid2
        container
        sx={{
          width: "100%",
          ...flexStyle("", 1),
        }}
      >
        <Grid2 size={{ md: 3 }}>
          <GSelect
            iconPosition={formDatas.type && "start"}
            icon={formDatas.type ? links[formDatas.type].icon : null}
            value={formDatas.type}
            name={"type"}
            onChange={(value: any, e: any) => {
              handleFormData(index, value, "type");
            }}
            options={customizedOptions}
            fullWidth={true}
          />
        </Grid2>
        <Grid2 size={{ md: 7 }}>
          <GInput
            name={"url"}
            placeholder={"-- paste or type the url --"}
            type={"text"}
            onChangeHandler={(e: any) => {
              const { name, value } = e.target;
              handleFormData(index, value, name);
            }}
            disabled={!formDatas.type}
            value={formDatas.url}
          />
        </Grid2>
        <Grid2 size={{ md: 1 }} sx={{ ...flexStyle() }}>
          <GIconButton
            title={"Remove"}
            onClickHandler={() => handleRemove(formDatas.type)}
            icon={<IoRemoveCircleSharp />}
          />
        </Grid2>
      </Grid2>
    );
  };
  const addedLinks = profileData.links.map((elem: any) => ({
    formDatas: elem,
    handleFormData: (index: number, value: any, name: any) => {
      const tempData: any = [...profileData?.links];
      if (name == "type") {
        tempData[index].type = value;
      } else {
        tempData[index].url = value;
      }
      setProfileData({
        key: "links",
        value: tempData,
      });
    },
  }));

  const handleAdd = () => {
    if (formDatas.url && formDatas.type) {
      setProfileData({
        key: "links",
        value: [formDatas, ...profileData?.links],
      });
      setformDatas({ url: "", type: "" });
    }
  };
  const handleRemove = (type: string) => {
    const filteredLinks = profileData.links.filter(
      (elem: any) => elem.type != type
    );
    setProfileData({ key: "links", value: filteredLinks });
  };
  const emptyArrCount =
    profileData?.resumes?.length == 0
      ? [1, 2, 3]
      : profileData?.resumes?.length == 1
      ? [1, 2]
      : profileData?.resumes?.length == 2
      ? [1]
      : [];

  return (
    <Grid2
      container
      sx={[
        varient == "resume" ? {} : { ...flexStyle("", 1) },
        { width: "100%" },
      ]}
      rowGap={1}
      columnGap={1}
    >
      <Grid2 size={{ md: 12 }}>
        <TeritaryTypography name={label} size="sm" />
      </Grid2>
      {varient == "resume" ? (
        <>
          {profileData.resumes.map((elem: any, index: number) => {
            return (
              <Grid2 key={index} size={{ md: 2.9 }}>
                <ResumeCard
                  index={index}
                  name={elem?.name}
                  pdfUrl={elem.url}
                  id={elem?.public_id}
                />
              </Grid2>
            );
          })}
          <Grid2
            size={{ md: 2.9 }}
            sx={{
              color: "var(--text)",
            }}
          >
            <GInput variant="resume" />
          </Grid2>
          {emptyArrCount.map((elem: any, index: number) => {
            return (
              <Grid2
                size={{ md: 2.9 }}
                key={index}
                sx={{
                  color: "var(--text)",
                }}
              >
                <Box
                  sx={{
                    width: "100%",
                    height: "250px",
                    borderRadius: "5px",
                    border: "2px dashed var(--disabled)",
                    ...flexStyle(),
                  }}
                >
                  <TeritaryTypography
                    name={"Resume"}
                    sx={{ color: "var(--disabled)" }}
                  />
                </Box>
              </Grid2>
            );
          })}
        </>
      ) : (
        <>
          {customizedOptions.some((elem: any) => elem.disabled == false) && (
            <>
              <Grid2 size={{ md: 3 }}>
                <GSelect
                  iconPosition={formDatas.type && "start"}
                  icon={formDatas.type ? links[formDatas.type].icon : null}
                  value={formDatas.type}
                  name={"type"}
                  onChange={(value: any, e: any) => {
                    handleFormData("type", value);
                  }}
                  options={customizedOptions}
                  fullWidth={true}
                />
              </Grid2>
              <Grid2 size={{ md: 7 }}>
                <GInput
                  name={"url"}
                  placeholder={"-- paste or type the url --"}
                  type={"text"}
                  onChangeHandler={(e: any) => {
                    const { name, value } = e.target;
                    handleFormData(name, value);
                  }}
                  disabled={!formDatas.type}
                  value={formDatas.url}
                />
              </Grid2>
              <Grid2 size={{ md: 1 }} sx={{ ...flexStyle() }}>
                <GIconButton
                  title={"Add"}
                  onClickHandler={handleAdd}
                  icon={<IoAddCircle />}
                />
              </Grid2>
            </>
          )}
          {addedLinks.length > 0 && (
            <Grid2
              size={{ md: 12 }}
              sx={{
                ...flexStyle("column", 1),
                borderRadius: "10px",
                background: "var(--cardBg)",
                padding: "10px 0",
              }}
            >
              {addedLinks.map((elem: any, index: number) => {
                return (
                  <InputField
                    index={index}
                    formDatas={elem.formDatas}
                    handleFormData={elem.handleFormData}
                    key={index}
                  />
                );
              })}
            </Grid2>
          )}
        </>
      )}
    </Grid2>
  );
}
