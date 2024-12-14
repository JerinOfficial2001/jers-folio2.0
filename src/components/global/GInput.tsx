import { styled } from "@mui/system";
import {
  TextField,
  InputAdornment,
  FormHelperText,
  Box,
  IconButton,
  Stack,
} from "@mui/material";
import { useRef, useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { flexStyle } from "@/styles/commonStyles";
import GButton from "./GButton";
import { MdAdd } from "react-icons/md";
import { useGlobalStore } from "@/store/GlobalStore";

type Props = {
  fullWidth?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  color?: string;
  background?: string;
  secondarybackground?: string;
  fontSize?: string;
  fontWeight?: string;
  margin?: string;
  radius?: string;
  type?: string;
  id?: any;
  label?: string;
  labelShrink?: boolean;
  variant?: string | "upload" | "resume";
  disabled?: boolean;
  value?: any;
  placeholder?: string;
  maxLength?: string;
  error?: any;
  helperText?: any;
  dataTest?: string;
  startIcon?: any;
  endIcon?: any;
  onChangeHandler?: any;
  register?: any;
  pattern?: any;
  patternError?: any;
  required?: boolean;
  border?: any;
  disableUnderline?: boolean;
  defaultValue?: any;
  startAdornment?: any;
  endAdornment?: any;
  borderColor?: string;
  size?: string;
  disabledColor?: string;
  onClick?: any;
  errorHandler?: any;
  onKeyDown?: any;
  onKeyUp?: any;
  name?: string;
  smallInput?: boolean;
  sx?: any;
  multiline?: any;
  rows?: any;
  fileHandler?: any;
  toggleType?: string;
};
export default function GInput(props: Props) {
  const {
    fullWidth,
    toggleType,
    width,
    height,
    padding,
    color,
    background,
    secondarybackground,
    fontSize,
    fontWeight,
    margin,
    radius,
    type,
    id,
    label,
    labelShrink,
    variant,
    disabled,
    value,
    placeholder,
    maxLength,
    error,
    helperText,
    dataTest,
    startIcon,
    endIcon,
    onChangeHandler,
    register,
    pattern,
    patternError,
    required,
    border,
    disableUnderline,
    defaultValue,
    startAdornment,
    endAdornment,
    borderColor,
    size,
    disabledColor,
    onClick,
    errorHandler,
    onKeyDown,
    onKeyUp,
    name,
    smallInput,
    sx,
    rows,
    multiline,
    fileHandler,
  } = props;

  function removeUnderscoreAndCapitalize(name: string) {
    // Check if the string contains an underscore
    if (name.includes("_")) {
      // Split the string into an array of words using underscores as separators
      const words = name.split("_");

      // Capitalize the first letter of each word
      const capitalizedWords = words.map(
        (word) => word.charAt(0).toUpperCase() + word.slice(1)
      );

      // Join the words back together to form the final string
      const result = capitalizedWords.join(" ");

      return result;
    } else {
      // If no underscore is present, capitalize the first letter of the entire string
      return name.charAt(0).toUpperCase() + name.slice(1);
    }
  }
  const [isHide, setisHide] = useState(true);
  const eyeIcon = () => {
    return (
      <IconButton
        onClick={() => {
          setisHide(!isHide);
        }}
        size="small"
        sx={{
          color: "#F3F3F380",
        }}
      >
        {isHide ? (
          <VisibilityOff sx={{ fontSize: "18px" }} />
        ) : (
          <Visibility sx={{ fontSize: "18px" }} />
        )}
      </IconButton>
    );
  };
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setfile] = useState<any>(null);
  const { setProfileData, profileData } = useGlobalStore();

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      if (variant == "resume") {
        const file = files[0];
        if (file && file.type === "application/pdf") {
          // Generate an object URL for the PDF file
          const fileUploaded = files[0];
          const reader = new FileReader();
          const file_name = fileUploaded?.name;
          reader.readAsDataURL(fileUploaded);
          let fileObjectResult = null;
          reader.onload = function () {
            fileObjectResult = {
              url: reader.result,
              name: file_name,
            };
            setProfileData({
              key: "resumes",
              value: [fileObjectResult, ...profileData.resumes], // Store the PDF URL
            });
          };
        } else {
          alert("Please select a valid PDF file.");
        }
      } else {
        setfile(files[0]);
      }
    }
  };
  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleClearFile = () => {
    setfile(null);
  };

  return (
    <Box
      sx={{
        width: "100%",
        ...flexStyle(),
      }}
    >
      {!variant && (
        <TextField
          multiline={multiline}
          rows={rows}
          name={name}
          fullWidth={fullWidth}
          size={size || "small"}
          type={type == "password" ? (isHide ? "password" : "text") : type}
          id={id}
          label={label}
          onClick={onClick}
          onKeyDown={onKeyDown}
          onKeyUp={onKeyUp}
          InputLabelProps={{
            shrink: labelShrink,
            style: {
              fontFamily: "Sora-regular",
              color: color ? color : "var(--primary)",
              fontSize: fontSize || "0.7rem",
              fontWeight: fontWeight,
            },
          }}
          sx={{
            ...sx,
            "&.MuiFormControl-root": {
              height: "auto",
            },
            "& input:-webkit-autofill": {
              // boxShadow: "none !important",
              WebkitBoxShadow: "0 0 0 30px var(--secondaryBg) inset !important",
              WebkitTextFillColor: color || "white",
              borderRadius: "unset !important",
              caretColor: color || "white",
            },
            "& .MuiInputBase-root": {
              paddingRight: type == "password" ? "3px" : "auto",
              paddingLeft: smallInput ? 0 : "auto",
              padding: padding,
              height: multiline ? "auto" : height || "50px",
              boxShadow: "0 0 0 1.3px var(--borderSecondary)",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "none",
            },
            "& .MuiInputBase-input": {
              fontFamily: "Sora-medium !important",
            },
            "& .MuiInputBase-input::placeholder": {
              fontFamily: "Sora-light",
            },
            margin: margin,
            width: "100%",
            height: multiline ? "auto" : height || "50px",
            borderColor: "var(--borderSecondary)",
            borderRadius: "7px",
            "&.MuiFormHelperText-root": {
              fontSize: "10px",
            },
            "& .MuiInputBase-input.Mui-disabled": {
              WebkitTextFillColor: disabledColor,
            },
            "& .Mui-focused": {
              boxShadow: "0 0 0 1.3px var(--primary)",
            },
          }}
          variant={variant}
          disabled={disabled}
          value={value}
          defaultValue={defaultValue}
          placeholder={placeholder}
          error={error}
          onInput={() => error && errorHandler && props?.errorHandler("")}
          helperText={
            helperText && (
              <FormHelperText
                sx={{
                  fontSize: "10px",
                  margin: "0px",
                  fontFamily: "Sora-regular",
                  color: "#d32f2f",
                }}
              >
                {helperText}
              </FormHelperText>
            )
          }
          data-test={dataTest}
          onChange={onChangeHandler}
          {...(register &&
            register(
              id,

              {
                onChange: (e: any) => {
                  onChangeHandler(e);
                },
                required: required
                  ? removeUnderscoreAndCapitalize(id) + " is required."
                  : "",
                pattern: {
                  value: pattern,
                  message: patternError,
                },
              }
            ))}
          InputProps={{
            style: {
              background: "var(--secondaryBg)",
              color: color ? color : "white",
              fontFamily: "Sora-regular",
              fontSize: fontSize || "0.7rem",
              fontWeight: fontWeight ? fontWeight : 500,
              borderRadius: radius || "7px", // Set border radius to 0
            },
            disableunderline: disableUnderline,

            startAdornment: startAdornment ? (
              startAdornment
            ) : (
              <InputAdornment position="start">{startIcon}</InputAdornment>
            ),
            endAdornment: endAdornment ? (
              endAdornment
            ) : (
              <InputAdornment position="end">
                {type == "password" ? eyeIcon() : endIcon}
              </InputAdornment>
            ),
          }}
          inputProps={{
            minLength: 0,
            maxLength: maxLength, // Set maximum length
          }}
          // startAdornment={startAdornment}
          // endAdornment={endAdornment}
        />
      )}
      {variant == "upload" && (
        <Stack
          sx={{
            width: "100%",
            justifyContent: "center",
            gap: 2,
            alignItems: "center",
          }}
          direction={"row"}
        >
          <Box
            sx={{ height: "60px", width: "60px", borderRadius: "50%" }}
            component={"img"}
            src={file ? URL.createObjectURL(file) : "/svgs/user.svg"}
          />
          <GButton
            onClickHandler={handleButtonClick}
            lable="Upload"
            variant="outlined"
            size={"small"}
          />
        </Stack>
      )}
      {variant == "resume" && (
        // <Box
        //   sx={{ height: "60px", width: "60px", borderRadius: "50%" }}
        //   component={"img"}
        //   src={file ? URL.createObjectURL(file) : "/svgs/user.svg"}
        // />
        <Box
          onClick={handleButtonClick}
          sx={{
            width: "100%",
            height: "250px",
            background: "var(--cardBg)",
            borderRadius: "5px",
            "&:hover": {
              background: "var(--cardhoverBg)",
            },
            transition: ".3s",
            cursor: "pointer",
            ...flexStyle(),
          }}
        >
          <MdAdd
            style={{
              height: "28px",
              width: "28px",
            }}
          />
        </Box>
      )}

      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </Box>
  );
}
