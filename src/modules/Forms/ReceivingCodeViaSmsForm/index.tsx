import React from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';
import {
  SCArrowCircleRightIcon,
  SCButton,
  SCButtonProps,
  SCStack,
  SCTextField,
  SCTextFieldProps
} from '../../../components';

export interface ReceivingCodeViaSmsFormProps {
  phoneTextField?: SCTextFieldProps;
  submitButton?: SCButtonProps;
  onSubmitHandler: (values: ReceivingCodeViaSmsFormValues) => void;
}

export interface ReceivingCodeViaSmsFormValues {
  phone: string;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const fromReceivingCodeViaSmsSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneRegExp, 'Введите номер телефона в формате 375xxxxxxxxx')
});

export const ReceivingCodeViaSmsForm = ({
  phoneTextField,
  submitButton,
  onSubmitHandler
}: ReceivingCodeViaSmsFormProps) => {
  return (
    <div>
      <Formik
        initialValues={{
          phone: ''
        }}
        validationSchema={fromReceivingCodeViaSmsSchema}
        onSubmit={(values: any, actions: any) => {
          actions.setSubmitting(false);
          onSubmitHandler(values);
        }}
      >
        {(formik) => {
          return (
            <form onSubmit={formik.handleSubmit}>
              <SCStack spacing={2} width='500px'>
                <SCTextField
                  id='phone'
                  name='phone'
                  label='Номер телефона'
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  error={formik.touched.phone && Boolean(formik.errors.phone)}
                  helperText={formik.touched.phone && formik.errors.phone}
                  variant='filled'
                  {...phoneTextField}
                />
                <SCButton
                  type='submit'
                  children='Получить код по SMS'
                  variant='contained'
                  color='primary'
                  endIcon={<SCArrowCircleRightIcon />}
                  {...submitButton}
                />
              </SCStack>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
