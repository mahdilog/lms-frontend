import { LoadingButton } from "@mui/lab";
import { Button } from "@mui/material";
import React from "react";

const Buttons = ({
  variant,
  label,
  icon,
  loading,
  fullWidth,
  disabled,
  type,
}) => {
  if (variant === "normal") {
    return (
      <LoadingButton
        variant={"contained"}
        loading={loading}
        fullWidth={fullWidth}
        disabled={disabled}
        type={type}
      >
        <div className="flex flex-nowrap items-center justify-between gap-1">
          <span>{label}</span>
          <i className={icon} />
        </div>
      </LoadingButton>
    );
  } else if (variant === "outlined") {
    return (
      <Button variant="outlined" type={type}>
        <span>{label}</span>
        <i className={icon} />
      </Button>
    );
  } else {
    return (
      <Button variant="text" type={type}>
        <span>{label}</span>
        <i className={icon} />
      </Button>
    );
  }
};

export default Buttons;
