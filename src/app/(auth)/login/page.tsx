import React, { Fragment } from "react";
import { Metadata } from "next";
import Link from "next/link";
import UpcomingPage from "@/components/shared/upcoming";

export const metadata: Metadata = {
  title: "Login",
  description: "",
};

interface LoginPageProps {}

const LoginPage = ({}: Readonly<LoginPageProps>) => {
  return (
    <Fragment>
      <UpcomingPage title="Login" />
    </Fragment>
  );
};

export default LoginPage;
