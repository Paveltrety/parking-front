import * as yup from "yup";

import { IForm } from "./LoginForm";

export const useValidationSchema = (): yup.ObjectSchema<IForm> => {
  const schema = yup
    .object({
      login: yup.string().required(),
      password: yup.string().required(),
    })
    .required();

  return schema;
};
