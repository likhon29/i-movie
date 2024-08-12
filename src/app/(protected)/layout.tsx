import React from "react";
import { Metadata } from "next";
import { redirect } from "next/navigation";

interface ProtectedLayoutProps {
  subscriber: React.ReactNode;
  admin: React.ReactNode;
}

export const metadata: Metadata = {
  title: {
    default: "Dashboard",
    template: "%s | Dashboard",
  },
  description: "",
};

const ProtectedLayout = async ({
  admin,
  subscriber,
}: Readonly<ProtectedLayoutProps>) => {
  //   const user: any = null;
  const user = {
    role: "subscriber",
  };
  if (!user) redirect("/login");

  const userRole = user.role;

  return userRole === "admin" ? admin : subscriber;
};

ProtectedLayout.displayName = "ProtectedLayout";

export default ProtectedLayout;
