import { Grid2, Stack } from "@mui/material";
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
import { TeritaryTypography } from "../CustomTypography";
type Props = { options: any };
type FormDatas = {
  type: keyof linkKey | "";
  url: string;
};
export default function GCrudSelectInput({ options }: Props) {
  const { profileData, setProfileData } = useGlobalStore();
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
  }: {
    formDatas: FormDatas;
    handleFormData: any;
  }) => {
    return (
      <Grid2
        container
        sx={{
          width: "100%",
          ...flexStyle("", 1),
        }}
      >
        <Grid2 size={{ md: 2.8 }}>
          <GSelect
            iconPosition={formDatas.type && "start"}
            icon={formDatas.type ? links[formDatas.type].icon : null}
            value={formDatas.type}
            name={"type"}
            onChange={(value: any, e: any) => {
              handleFormData(name, value);
            }}
            options={customizedOptions}
            fullWidth={true}
          />
        </Grid2>
        <Grid2 size={{ md: 7.76 }}>
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
    handleFormData: "",
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

  return (
    <Grid2 container columnGap={1} rowGap={1}>
      <Grid2 size={{ md: 12 }}>
        <TeritaryTypography name={"Links"} size="sm" />
      </Grid2>
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
          <Grid2 size={{ md: 7.76 }}>
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
          <Grid2 size={{ md: 0.9 }} sx={{ ...flexStyle() }}>
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
                formDatas={elem.formDatas}
                handleFormData={elem.handleFormData}
                key={index}
              />
            );
          })}
        </Grid2>
      )}
    </Grid2>
  );
}
