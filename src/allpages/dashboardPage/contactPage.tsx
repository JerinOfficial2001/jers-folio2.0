"use client";
import {
  PrimaryTypography,
  SecondaryTypography,
} from "@/components/CustomTypography";
import Card from "@/components/dashboard/Card";
import NoDataFound from "@/components/dashboard/NoDataFound";
import GButton from "@/components/global/GButton";
import GInput from "@/components/global/GInput";
import GlobalCard from "@/components/global/GlobalCard";
import AboutCard from "@/components/portfolioComponents/AboutCard";
import useContactsFunction from "@/hooks/functions/useContactsFunction";
import { useFormDatatore } from "@/store/FormDataStore";
import { flexStyle } from "@/styles/commonStyles";
import { Grid2, Stack } from "@mui/material";
import React, { useEffect } from "react";
import { IoIosSave } from "react-icons/io";
import { MdAdd } from "react-icons/md";

type Props = {};

export default function ContactPage({}: Props) {
  const {
    Contact,
    contactLoading,
    contactError,
    contactRefetch,
    AddContact,
    addingContact,
    updatingContact,
    UpdateContact,
  } = useContactsFunction();
  const {
    setContactFormData,
    setContactFormDatas,
    contactFormData,
    resetForm,
  } = useFormDatatore();
  const handleOnchange = (e: any) => {
    const { name, value } = e.target;
    setContactFormData(name, value);
  };
  useEffect(() => {
    if (Contact) {
      setContactFormDatas({
        phone: Contact.phone.length > 9 ? Contact.phone : "",
        address: Contact.address,
        email: Contact.email,
      });
    }
  }, [Contact]);

  const fields = [
    {
      content: [
        {
          label: "Phone",
          name: "phone",
          onChange: handleOnchange,
          value: contactFormData.phone,
          type: "number",
        },
        {
          label: "Email",
          name: "email",
          onChange: handleOnchange,
          value: contactFormData.email,
          type: "email",
        },
      ],
    },
    {
      label: "Address",
      name: "address",
      onChange: handleOnchange,
      value: contactFormData.address,
      type: "text",
      content: [],
      size: "big",
    },
  ];
  const handleSaveContact = () => {
    const formData = {
      ...contactFormData,
      phone: contactFormData.phone ? contactFormData.phone : "-",
    };
    if (!Contact) {
      AddContact(formData);
    } else {
      UpdateContact({ payload: formData, id: Contact._id });
    }
  };

  return (
    <Stack
      sx={{
        height: "100%",
        width: "100%",
        position: "relative",
        alignItems: "center",
        gap: 5,
      }}
    >
      <Grid2 container sx={{ width: "100%" }} columnGap={1} rowGap={1}>
        <Grid2
          size={{
            md: 12,
          }}
          sx={{ ...flexStyle("", "", "", "space-between") }}
        >
          <PrimaryTypography name={"Contact Details"} />
          <GButton
            onClickHandler={handleSaveContact}
            lable="Save"
            startIcon={<IoIosSave />}
          />
        </Grid2>
        {fields.map((elem: any, index: number) => {
          if (elem.content.length > 0) {
            return (
              <Grid2
                key={index}
                size={{
                  md: 5.9,
                }}
                direction={"column"}
                sx={{ ...flexStyle("column", 1) }}
              >
                {elem.content.map((subElem: any, subIndex: number) => {
                  return (
                    <GInput
                      key={subIndex}
                      name={subElem.name}
                      placeholder={subElem.label}
                      type={subElem.type}
                      value={subElem.value}
                      onChangeHandler={subElem.onChange}
                    />
                  );
                })}
              </Grid2>
            );
          } else {
            return (
              <Grid2
                size={{
                  md: 5.9,
                }}
                key={index}
              >
                <GInput
                  name={elem.name}
                  placeholder={elem.label}
                  type={elem.type}
                  multiline={true}
                  rows={6}
                  value={elem.value}
                  onChangeHandler={elem.onChange}
                />
              </Grid2>
            );
          }
        })}
        <Grid2
          size={{
            md: 12,
          }}
          sx={{ ...flexStyle("", "", "", "flex-start") }}
        >
          <SecondaryTypography name={"Notifications"} />
        </Grid2>
        {[1, 2, 3].map((elem: any, index: number) => {
          return (
            <Grid2
              size={{
                md: 5.9,
              }}
              key={index}
            >
              <Card btnDirection="row" size="sm">
                <AboutCard
                  year={"Jerin T"}
                  title={"jerinoffiacial@gmail.com"}
                  place={"Phone : 9384912517"}
                  message={`
                Message : Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam quasi mollitia recusandae optio beatae, consequuntur possimus corporis tempore! Sit eius tenetur quidem recusandae alias voluptate laudantium excepturi similique debitis repellat?
                    `}
                  sx={{ marginTop: 4 }}
                />
              </Card>
            </Grid2>
          );
        })}
      </Grid2>

      <NoDataFound />
    </Stack>
  );
}
