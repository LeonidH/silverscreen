import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

type SCTextFieldProps = TextFieldProps & {
};

export const SCTextField = (props: SCTextFieldProps) => <TextField {...props} />
