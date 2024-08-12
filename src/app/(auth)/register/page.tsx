import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "Register",
  description: "",
};

interface RegisterProps {}

const RegisterPage = ({}: Readonly<RegisterProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="Register" />
    </Fragment>
  );
};

RegisterPage.displayName = "RegisterPage";

export default RegisterPage;
