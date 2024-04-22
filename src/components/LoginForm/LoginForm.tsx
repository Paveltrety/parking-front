import { Controller, FormProvider, useForm } from "react-hook-form";
import { Input } from "../ui/Input";
import styles from "./LoginForm.module.scss";
import { useValidationSchema } from "./useValidationSchema";

import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { LOCAL_STORAGE_KEY } from "../../constants/auth";
import { useEffect, useState } from "react";

export interface IForm {
  login: string;
  password: string;
}

const DEFAULT_VALUES = {
  login: "",
  password: "",
};

export const LoginForm = () => {
  const navigate = useNavigate();

  const [authError, setAuthError] = useState<string | null>(null);

  const schema = useValidationSchema();

  const form = useForm<IForm>({
    defaultValues: DEFAULT_VALUES,
    reValidateMode: "onChange",
    resolver: yupResolver(schema),
  });

  const { watch } = form;

  const loginValue = watch("login");
  const passwordValue = watch("password");

  const onSubmit = ({ login, password }: IForm) => {
    if (login === "admin" && password === "admin") {
      localStorage.setItem(LOCAL_STORAGE_KEY, "random_key");
      navigate("/parking-front");
    } else {
      setAuthError("Вы ввели неверный логин или пароль");
    }
  };

  useEffect(() => {
    if (authError) {
      setAuthError(null);
    }
  }, [loginValue, passwordValue]);

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={styles.root}>
        <Controller
          control={form.control}
          name="login"
          render={({
            field: { onChange, value, ref },
            formState: { errors },
          }) => (
            <Input
              value={value}
              onChange={onChange}
              ref={ref}
              name="login"
              label={"Логин"}
              errorMessage={errors.login?.message}
            />
          )}
        />
        <Controller
          control={form.control}
          name="password"
          render={({
            field: { onChange, value, ref },
            formState: { errors },
          }) => (
            <Input
              value={value}
              onChange={onChange}
              ref={ref}
              name="password"
              label={"Пароль"}
              errorMessage={errors.password?.message}
            />
          )}
        />
        <div className={styles.buttonWrapper}>
          <button type="submit">Submit</button>
          {authError && <span className={styles.authError}>{authError}</span>}
        </div>
      </form>
    </FormProvider>
  );
};
