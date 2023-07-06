import * as yup from "yup";

export default () =>
  yup.object({
    password: yup.string().required("رمز عبور اجباریست!"),
    email: yup.string().required("نام کاربری اجباریست!"),
  });
