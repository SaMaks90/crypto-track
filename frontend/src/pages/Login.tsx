import { JSX } from "react";
import { Formik } from "formik";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ILogin } from "../types/user";
import { RootState, AppDispatch } from "../stores/store";
import { signIn } from "../stores/middlewares/authThunk";
import {
  FormLoginStyled,
  FieldStyled,
  MessageStyled,
  LabelStyled,
  ButtonStyled,
} from "../styles/form";
import { validateEmail } from "../utils/validationHelper";

const initialLoginValues: ILogin = {
  email: "",
  password: "",
};

const Login = (): JSX.Element => {
  const dispatch = useDispatch<AppDispatch>();
  const { authToken } = useSelector((state: RootState) => state.auth);

  if (authToken) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <Formik
      initialValues={initialLoginValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        dispatch(signIn(values));
        setSubmitting(false);
        resetForm({ values: initialLoginValues });
      }}
    >
      {({ errors, touched }) => (
        <FormLoginStyled>
          <LabelStyled>
            <FieldStyled
              validate={validateEmail}
              type={"email"}
              name={"email"}
              placeholder={"Email"}
            />
            {errors.email && touched.email ? (
              <MessageStyled>{errors.email}</MessageStyled>
            ) : null}
          </LabelStyled>
          <LabelStyled>
            <FieldStyled
              type={"password"}
              name={"password"}
              placeholder={"Password"}
            />
            {errors.password && touched.password ? (
              <MessageStyled>{errors.password}</MessageStyled>
            ) : null}
          </LabelStyled>
          <ButtonStyled type={"submit"}>Login</ButtonStyled>
        </FormLoginStyled>
      )}
    </Formik>
  );
};

export default Login;
