import React from 'react';

import { Formik } from 'formik';
import * as yup from 'yup';
import {
  SCArrowCircleRightIcon,
  SCButton,
  SCStack,
  SCTextField
} from '../../../components';

export interface PasswordRecoveryFormProps {
  onSubmitHandler: (values: PasswordRecoveryFormValues) => void;
}

export interface PasswordRecoveryFormValues {
  surename: string;
  name: string;
  birthday: Date;
  email: string;
  password: string;
  passwordConfirmation: string;
  consent: boolean;
}

export const passwordRecoveryFormSchema = yup.object().shape({
  password: yup
    .string()
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .required('Обязательно заполните это поле'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Введенный пароль не совпадает')
});

export const PasswordRecoveryForm = ({
  onSubmitHandler
}: PasswordRecoveryFormProps) => {
  return (
    <div>
      <Formik
        initialValues={{
          password: '',
          passwordConfirmation: ''
        }}
        validationSchema={passwordRecoveryFormSchema}
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
                  id='password'
                  name='password'
                  label='Придумайте пароль'
                  type='password'
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                  variant='filled'
                />
                <SCTextField
                  id='passwordConfirmation'
                  name='passwordConfirmation'
                  label='Повторите пароль'
                  type='password'
                  value={formik.values.passwordConfirmation}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.passwordConfirmation &&
                    Boolean(formik.errors.passwordConfirmation)
                  }
                  helperText={
                    formik.touched.passwordConfirmation &&
                    formik.errors.passwordConfirmation
                  }
                  variant='filled'
                />
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
