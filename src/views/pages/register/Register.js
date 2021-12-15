import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  CButton,
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CContainer,
  CRow,
} from "@coreui/react";
import http from "../../../utils/httpService";
import FormInput from "src/reusable/formInput";
import Button from "src/reusable/common/Button";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required("Fistname is required"),
  lastname: Yup.string().required("Lastname is required"),
  username: Yup.string().required("Username is required"),
  email: Yup.string().email().required("Email is required"),
  password: Yup.string().required("Password is required")
});

const Register = () => {
  const signup = async (credentials) => {
    try {
      const { data } = await http.publicFetch.post("owner/signup",
        credentials
      );
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol style={{ background: "purple" }} md="3" lg="3">
            <CCard className="mx-2 mt-5">
              <CCardBody className="p-4 m-4 rounded-3">Logo</CCardBody>
            </CCard>
          </CCol>
          <CCol md="8" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CButton style={{ background: "purple", color: "white" }}>
                  Login
                </CButton>
                <Formik
                  initialValues={{
                    firstname: "",
                    lastname: "",
                    email: "",
                    username: "",
                    password: "",
                  }}
                  onSubmit={(values) => signup(values)}
                  validationSchema={SignupSchema}
                >
                  <Form>
                    <h1>Register</h1>
                    <p className="text-muted">Create your account</p>
                    <FormInput
                      name="firstname"
                      type="text"
                      placeholder="Firstname"
                      autoComplete="firstname"
                    />
                    <FormInput
                      name="lastname"
                      type="text"
                      placeholder="Lastname"
                      autoComplete="lastname"
                    />
                    <FormInput
                      name="username"
                      type="text"
                      placeholder="Username"
                      autoComplete="username"
                    />
                    <FormInput
                      name="email"
                      type="text"
                      placeholder="Email"
                      autoComplete="email"
                    />
                    <FormInput
                      name="password"
                      type="password"
                      placeholder="Password"
                      autoComplete="password"
                    />

                    <Button type="submit" color="yahoo" text="Create Account" />
                  </Form>
                </Formik>
              </CCardBody>
              <CCardFooter className="p-4">
                <CRow>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-facebook mb-1" block>
                      <span>facebook</span>
                    </CButton>
                  </CCol>
                  <CCol xs="12" sm="6">
                    <CButton className="btn-danger mb-1" block>
                      <span>Gmail</span>
                    </CButton>
                  </CCol>
                </CRow>
              </CCardFooter>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default Register;
