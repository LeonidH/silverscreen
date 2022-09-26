import { FormControl, FormControlProps } from '@mui/material'
import React from 'react'

interface SCFormControlProps extends FormControlProps {}

export const SCFormControl = (props: SCFormControlProps) => (
  <FormControl {...props} />
)
