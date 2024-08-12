import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";

interface AuthLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Authentication",
    template: `%s - Authentication`,
  },
  description: "",
};
const AuthLayout = async ({ children }: Readonly<AuthLayoutProps>) => {
  //   const user = {
  //     role: "user",
  //   };

  const user: any = null;
  if (user) {
    const userRole = user?.role;
    const redirectPath = userRole === "admin" ? "/dashboard" : "/";
    redirect(redirectPath);
  }

  return <div className="mx-auto">{children}</div>;
};

AuthLayout.displayName = "AuthLayout";

export default AuthLayout;
