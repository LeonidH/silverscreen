import { FormGroup, FormGroupProps } from "@mui/material";
import React from "react";

interface SCFormGroupProps extends FormGroupProps {}

export const SCFormGroup = (props: SCFormGroupProps) => <FormGroup {...props} />
