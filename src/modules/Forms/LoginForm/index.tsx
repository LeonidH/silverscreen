import React from 'react';

import { Field, FieldProps, Formik } from 'formik';
import * as yup from 'yup';
import {
  SCArrowCircleRightIcon,
  SCButton,
  SCStack,
  SCTextField
} from '../../../components';
import { FormHelperText, Link } from '@mui/material';

export interface LoginFormProps {
  onSubmitHandler: (values: LoginFormValues) => void;
}

export interface LoginFormValues {
  emailOrPhone: string;
  password: string;
  rememberMe: boolean;
}

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const LoginFormSchema = yup.object().shape({
  emailOrPhone: yup
    .string()
    .test(
      'emailOrPhone',
      'Введите ваш email или номер телефона в формате 375xxxxxxxxx',
      (value) => {
        return (
          yup.string().email().isValidSync(value) ||
          yup.string().matches(phoneRegExp).length(12).isValid(value)
        );
      }
    )
    .required('Обязательно заполните это поле'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .required('Обязательно заполните это поле')
});

export const LoginForm = ({ onSubmitHandler }: LoginFormProps) => {
  return (
    <div>
      <Formik
        initialValues={{
          emailOrPhone: '',
          password: '',
          rememberMe: false
        }}
        validationSchema={LoginFormSchema}
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
                  id='emailOrPhone'
                  name='emailOrPhone'
                  label='Email или номер телефона'
                  value={formik.values.emailOrPhone}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.emailOrPhone &&
                    Boolean(formik.errors.emailOrPhone)
                  }
                  helperText={
                    formik.touched.emailOrPhone && formik.errors.emailOrPhone
                  }
                  variant='filled'
                />
                <SCTextField
                  id='password'
                  name='password'
                  label='Пароль'
                  type='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  variant='filled'
                />
                <SCStack direction='row' justifyContent='stretch'>
                  <Field
                    name='rememberMe'
                    render={({ field }: FieldProps) => (
                      <input
                        id='rememberMe'
                        {...field}
                        type='checkbox'
                        checked={field.value}
                      />
                    )}
                  />
                  <p>
                    <Link href='#'>Забыли пароль?</Link>
                  </p>
                </SCStack>
                {!!formik.errors.consent && (
                  <FormHelperText children={formik.errors.consent} error />
                )}
                <SCButton
                  type='submit'
                  children='Далее'
                  variant='contained'
                  color='primary'
                  endIcon={<SCArrowCircleRightIcon />}
                />
              </SCStack>
            </form>
          );
        }}
      </Formik>
    </div>
  );
};
