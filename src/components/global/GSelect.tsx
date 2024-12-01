import React, { useEffect, useRef, useState } from "react";
import {
  TextField,
  MenuItem,
  InputAdornment,
  Box,
  FormHelperText,
} from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
type Props = {
  fullWidth?: boolean;
  width?: any;
  height?: any;
  borderHeight?: any;
  size?: any;
  color?: any;
  fontSize?: any;
  fontWeight?: any;
  borderColor?: any;
  radius?: any;
  label?: any;
  labelShrink?: any;
  variant?: any;
  disabled?: boolean;
  options?: any;
  iconPosition?: any;
  icon?: any;
  value?: any;
  defaultValue?: any;
  border?: any;
  error?: any;
  helperText?: any;
  onChange?: any;
  name?: any;
  borderRadius?: any;
  background?: any;
  customStyle?: any;
  padding?: any;
  additionalMenuItemsStyle?: any;
  totalCount?: any;
  fetchData?: any;
  isMenuItemsLoading?: any;
  setisMenuItemsLoading?: any;
};
export default function GSelect(props: Props) {
  const {
    fullWidth,
    width,
    height,
    radius,
    size,
    color,
    fontSize,
    fontWeight,
    borderColor,
    label,
    variant,
    disabled,
    options,
    iconPosition,
    icon,
    value,
    defaultValue,
    border,
    error,
    helperText,
    onChange,
    name,
    borderRadius,
    background,
    customStyle,
    padding,
    additionalMenuItemsStyle,
    fetchData,
    totalCount,
    isMenuItemsLoading,
    setisMenuItemsLoading,
  } = props;
  const handleSelectChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const selectedValue = event.target.value;
    if (onChange) {
      onChange(selectedValue, event);
    }
  };
  const containerRef = useRef<any>();
  // const { handleScroll, offsetVal } = useScrollRef(containerRef);
  const [offsetVal, setoffsetVal] = useState(0);
  const selectMenuRef = useRef<any>();

  const handleScroll = () => {
    if (containerRef.current) {
      const bottom = containerRef.current.getBoundingClientRect().bottom;
      if (bottom <= window.innerHeight) {
        setoffsetVal((prev) => prev + 5);
      }
    }
  };

  useEffect(() => {
    if (offsetVal <= totalCount && !isMenuItemsLoading) {
      setisMenuItemsLoading(true);
      fetchData(offsetVal);
    }
  }, [offsetVal]);
  useEffect(() => {
    const observer = new MutationObserver((mutationsList, observer) => {
      if (selectMenuRef.current) {
        selectMenuRef.current.addEventListener("scroll", handleScroll);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      if (selectMenuRef.current) {
        selectMenuRef.current.removeEventListener("scroll", handleScroll);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <Box
      sx={{
        width: width,
      }}
    >
      <TextField
        // ref={selectMenuRef}
        name={name}
        fullWidth={fullWidth}
        size={size}
        select
        id={label}
        label={label}
        defaultValue={defaultValue}
        onChange={handleSelectChange}
        SelectProps={{
          IconComponent: () => null, // Remove the default dropdown icon
        }}
        sx={{
          width: width,
          background: "var(--secondaryBg)",
          "& .MuiInputBase-root": {
            // border: border || "1.5px solid #F3F3F340",
            height: height,
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
            boxShadow: "0 0 0 1.3px var(--borderSecondary)",
          },
          "& .MuiOutlinedInput-notchedOutline": {
            border: "none",
          },
          borderColor: "var(--borderSecondary)",
          borderRadius: borderRadius || "7px",
          "& .MuiOutlinedInput-notchedOutline:hover": {
            borderColor: "var(--borderSecondary)",
          },
          "& .MuiSelect-select.MuiSelect-select": {
            fontFamily: "Sora-medium",
            color: color ? color : "var(--primary)",
            fontSize: fontSize || "0.8rem",
            fontWeight: fontWeight,
            height: "100%",
            display: "flex",
            alignItems: "center",
            paddingLeft: "10px",
            padding: padding || "",
          },
          "& .MuiInputLabel-root": {
            fontFamily: "Sora-regular",
            color: color ? color : "var(--primary)",
            fontSize: fontSize || "0.8rem",
            fontWeight: fontWeight,
          },
          "& .MuiSvgIcon-root": {
            color: color ? color : "var(--primary)",
          },
          "& .MuiSelect-icon": {
            display: "none",
          },
          "& .Mui-focused": {
            boxShadow: "0 0 0 1.3px var(--primary)",
          },
          ...customStyle,
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <KeyboardArrowDownRounded
                style={{
                  fontSize: "20px",
                  fontFamily: "Sora-Regular ! important",
                  fill: "var(--primary)",
                }}
              />
            </InputAdornment>
          ),
          style: {
            fontFamily: "Sora-regular",
            color: color,
            fontSize: fontSize || "0.8rem",
            fontWeight: fontWeight,
            borderRadius: radius || "7px",
            cursor: "pointer",
          },
          startAdornment: iconPosition == "start" && (
            <InputAdornment
              style={{
                color: "var(--primary)",
                fontSize: "20px",
                marginRight: 0,
              }}
              position="start"
            >
              {icon}
            </InputAdornment>
          ),
        }}
        slotProps={{
          select: {
            MenuProps: {
              PaperProps: {
                sx: {
                  fontFamily: "Sora-Regular ! important",
                  backgroundColor: "var(--secondary)",
                  // "& .MuiMenuItem-root": {
                  //   // backgroundColor: "red",
                  //   "&:hover": {
                  //     backgroundColor: "yourItemHoverColor",
                  //   },
                  // },
                  color: "var(--text)",
                  ...additionalMenuItemsStyle,
                },
                ref: selectMenuRef,
              },
            },
          },
        }}
        disabled={disabled}
        value={value}
        error={error}
      >
        {options?.map((option: any) => (
          <MenuItem
            key={option.value}
            value={option.value}
            disabled={option?.disabled}
            sx={{
              cursor: option?.disabled ? "not-allowed" : "pointer",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      {helperText && (
        <FormHelperText
          sx={{ fontSize: "0.6rem", margin: "4px", color: "#d32f2f" }}
        >
          {helperText}
        </FormHelperText>
      )}
    </Box>
  );
}
