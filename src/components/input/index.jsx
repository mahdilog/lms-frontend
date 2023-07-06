import {
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import React from "react";

const Inputs = ({
  variant,
  disabled,
  label,
  name,
  onChange,
  type,
  fullWidth,
  ...rest
}) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  if (variant === "outlined") {
    return (
      <TextField
        label={label}
        variant="outlined"
        name={name}
        onChange={onChange}
        disabled={disabled}
        type={type}
        {...rest}
        fullWidth={fullWidth}
      />
    );
  } else if (variant === "filled") {
    return (
      <TextField
        label={label}
        variant="standard"
        name={name}
        onChange={onChange}
        disabled={disabled}
        type={type}
        fullWidth={fullWidth}
        {...rest}
      />
    );
  } else {
    if (type === "password") {
      return (
        <FormControl variant="filled" sx={{ width: "100%" }}>
          <InputLabel sx={{ color: "#fff" }}>{label}</InputLabel>
          <FilledInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword} edge="end">
                  {showPassword ? (
                    <i className="lms-eye" />
                  ) : (
                    <i className="lms-eye-blocked" />
                  )}
                </IconButton>
              </InputAdornment>
            }
            name={name}
            label="Password"
            onChange={onChange}
            fullWidth={fullWidth}
          />
        </FormControl>
      );
    } else {
      return (
        <FormControl variant="filled" sx={{ width: "100%" }}>
          <InputLabel sx={{ color: "#fff" }}>{label}</InputLabel>
          <FilledInput
            label={label}
            name={name}
            onChange={onChange}
            disabled={disabled}
            type={type}
            fullWidth={fullWidth}
          />
        </FormControl>
      );
    }
  }
};

export default Inputs;
