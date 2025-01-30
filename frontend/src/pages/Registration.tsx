import { Formik } from "formik";
import { useDispatch } from "react-redux";
import { IRegistration } from "../types/user";
import {
  ButtonStyled,
  FieldStyled,
  FormRegistrationStyled,
  LabelStyled,
  MessageStyled,
} from "../styles/form";
import { validateEmail } from "../utils/validationHelper";
import { AppDispatch } from "../stores/store";

const initialRegistrationValues: IRegistration = {
  lastname: "",
  surname: "",
  password: "",
  email: "",
  country: "",
  phoneNumber: "",
  repeatPassword: "",
};

const Registration = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Formik
      initialValues={initialRegistrationValues}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        console.log(values);
        setSubmitting(false);
        resetForm({ values: initialRegistrationValues });
      }}
    >
      {({ errors, touched }) => (
        <FormRegistrationStyled>
          <LabelStyled>
            <FieldStyled
              type={"text"}
              name={"lastname"}
              placeholder={"Lastname"}
            />
            {errors.lastname && touched.lastname ? (
              <MessageStyled>{errors.lastname}</MessageStyled>
            ) : null}
          </LabelStyled>
          <LabelStyled>
            <FieldStyled
              type={"text"}
              name={"surname"}
              placeholder={"Surname"}
            />
            {errors.surname && touched.surname ? (
              <MessageStyled>{errors.surname}</MessageStyled>
            ) : null}
          </LabelStyled>
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
              type={"text"}
              name={"country"}
              placeholder={"Country"}
            />
            {errors.country && touched.country ? (
              <MessageStyled>{errors.country}</MessageStyled>
            ) : null}
          </LabelStyled>
          <LabelStyled>
            <FieldStyled
              type={"text"}
              name={"phoneNumber"}
              placeholder={"Phone Number"}
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <MessageStyled>{errors.phoneNumber}</MessageStyled>
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
          <LabelStyled>
            <FieldStyled
              type={"password"}
              name={"repeatPassword"}
              placeholder={"Repeat password"}
            />
            {errors.repeatPassword && touched.repeatPassword ? (
              <MessageStyled>{errors.repeatPassword}</MessageStyled>
            ) : null}
          </LabelStyled>
          <ButtonStyled type={"submit"}>Registration</ButtonStyled>
        </FormRegistrationStyled>
      )}
    </Formik>
  );
};
export default Registration;
