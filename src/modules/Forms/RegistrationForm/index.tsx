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

export interface RegistrationFormProps {
  onSubmitHandler: (values: RegistrationFormValues) => void;
}

export interface RegistrationFormValues {
  surename: string;
  name: string;
  birthday: Date;
  email: string;
  password: string;
  passwordConfirmation: string;
  consent: boolean;
}

export const registrationFormSchema = yup.object().shape({
  surename: yup
    .string()
    .matches(
      /^\S*/,
      'Введите фамилию одним словом или через дефис. Не использовать цифры или специальные символы'
    )
    .required('Обязательно заполните это поле'),
  name: yup
    .string()
    .matches(
      /^\S*/,
      'Введите фамилию одним словом или через дефис. Не использовать цифры или специальные символы'
    )
    .required('Обязательно заполните это поле'),
  birthday: yup.date().required('Обязательно заполните это поле'),
  email: yup
    .string()
    .email('Введите корректный e-mail')
    .max(255)
    .required('Обязательно заполните это поле'),
  password: yup
    .string()
    .min(6, 'Пароль должен содержать не менее 6 символов')
    .required('Обязательно заполните это поле'),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Введенный пароль не совпадает'),
  consent: yup
    .bool()
    .test(
      'consent',
      'Ознакомтесь и примите соглашение и документы, чтобы продолжить',
      (value: boolean) => {
        return value === true;
      }
    )
    .required('Ознакомтесь и примите соглашение и документы, чтобы продолжить')
});

export const RegistrationForm = ({
  onSubmitHandler
}: RegistrationFormProps) => {
  return (
    <div>
      <Formik
        initialValues={{
          surename: '',
          name: '',
          birthday: '1990-01-01',
          email: '',
          password: '',
          passwordConfirmation: ''
        }}
        validationSchema={registrationFormSchema}
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
                  id='surename'
                  name='surename'
                  label='Фамилия'
                  value={formik.values.surename}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.surename && Boolean(formik.errors.surename)
                  }
                  helperText={formik.touched.surename && formik.errors.surename}
                  variant='filled'
                />
                <SCTextField
                  id='name'
                  name='name'
                  label='Имя'
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                  variant='filled'
                />
                <SCTextField
                  id='birthday'
                  name='birthday'
                  label='Дата рождения'
                  type='date'
                  value={formik.values.birthday}
                  onChange={formik.handleChange}
                  error={
                    formik.touched.birthday && Boolean(formik.errors.birthday)
                  }
                  helperText={formik.touched.birthday && formik.errors.birthday}
                  variant='filled'
                />
                <SCTextField
                  id='email'
                  name='email'
                  label='Email'
                  type='email'
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  variant='filled'
                />
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
                <SCStack direction='row'>
                  <Field
                    name='consent'
                    render={({ field }: FieldProps) => (
                      <input
                        id='consent'
                        {...field}
                        type='checkbox'
                        checked={field.value}
                      />
                    )}
                  />
                  <p>
                    <span>Я соглашаюсь с&nbsp;</span>
                    <Link href='#'>
                      политикой в отношении персональных данных
                    </Link>
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
