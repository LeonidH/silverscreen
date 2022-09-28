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

export interface RegistrationFormProps {
  submitButton?: SCButtonProps;
  onSubmitHandler: (values: RegistrationFormValues) => void;
}

export interface RegistrationFormValues {
  surename: string;
  name: string;
  birthday: Date;
  email: string;
  password: string;
  passwordConfirmation: string;
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
  agree: yup
    .bool()
    .oneOf(
      [true],
      'Ознакомтесь и примите соглашение и документы, чтобы продолжить'
    )
});

export const ReceivingCodeViaSmsForm = ({
  submitButton,
  onSubmitHandler
}: RegistrationFormProps) => {
  return (
    <div>
      <Formik
        initialValues={{
          phone: ''
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
                <SCButton
                  type='submit'
                  children='Далее'
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
