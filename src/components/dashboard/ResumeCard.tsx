"use client";
import { flexStyle } from "@/styles/commonStyles";
import { Box, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { TeritaryTypography } from "../CustomTypography";
import { IoClose } from "react-icons/io5";
import { Document, Page, pdfjs } from "react-pdf"; // Import react-pdf components
import "react-pdf/dist/esm/Page/AnnotationLayer.css"; // Add annotation layer styles
import "react-pdf/dist/esm/Page/TextLayer.css";
import { useGlobalStore } from "@/store/GlobalStore";
import { useFormDatatore } from "@/store/FormDataStore";

type Props = {
  name: string;
  pdfUrl: string; // Add the pdfUrl prop to pass the file path or URL
  index: number;
  id?: any;
};

export default function ResumeCard({ name, pdfUrl, index, id }: Props) {
  const [isHover, setisHover] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [numPages, setNumPages] = useState(0);
  const { profileData, setProfileData } = useFormDatatore();

  // Function to handle the onLoad success event for the document
  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }
  const handleRemove = () => {
    const tempPdfs = profileData.resumes.filter(
      (elem: any, resumeIndex: number) => resumeIndex != index
    );
    setProfileData({ key: "resumes", value: tempPdfs });
    if (id) {
      setProfileData({
        key: "resumeIds",
        value: [...profileData.resumeIds, id],
      });
    }
  };
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";
  }, []);
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
  return (
    <Box
      onMouseEnter={() => setisHover(true)}
      onMouseLeave={() => setisHover(false)}
      sx={{
        width: "100%",
        height: "250px",
        background: "var(--cardBg)",
        borderRadius: "5px",
        transition: ".3s",
        cursor: "pointer",
        ...flexStyle("", "", "flex-start"),
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* PDF viewer */}

      <Document
        file={id ? `${API_BASE_URL}/user/proxy-resume?url=${encodeURIComponent(pdfUrl)}` : pdfUrl}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={console.error}
      >
        <Page pageNumber={pageNumber} width={200} />
      </Document>
      <IconButton
        onClick={handleRemove}
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          background: "var(--secondary)",
          borderRadius: "5px 0 5px 50%",
          "&:hover": {
            background: "var(--cardhoverBg)",
          },
          color: "var(--text)",
          transition: ".3s",
          opacity: isHover ? 1 : 0,
          transform: `translateX(${isHover ? 0 : "10px"})`,
          zIndex: 2,
        }}
      >
        <IoClose />
      </IconButton>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          padding: 1,
          background: "var(--secondary)",
          width: "100%",
          opacity: isHover ? 1 : 0,
          transition: ".3s",
          transform: `translateY(${isHover ? 0 : "10px"})`,
        }}
      >
        <TeritaryTypography name={name} size="xs" />
      </Box>
    </Box>
  );
}
