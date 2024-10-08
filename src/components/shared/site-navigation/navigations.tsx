"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { adminNavigations, subscriberNavigations } from "@/config/navigations";

import NavigationItem from "./navigation-item";

interface SiteNavigationProps {
  navigation: "admin" | "subscriber";
}

const Navigations = ({ navigation }: Readonly<SiteNavigationProps>) => {
  const pathname = usePathname();
  const navigations =
    navigation === "admin" ? adminNavigations : subscriberNavigations;

  return (
    <div className="ps-5 ">
      <div className="pt-2">
        <p>Menu</p>
        {navigations?.menu?.map((nav) => (
          <NavigationItem key={nav.href} nav={nav} />
        ))}
      </div>
      <div className="pt-2">
        <p>Library</p>
        {navigations?.library?.map((nav) => (
          <NavigationItem key={nav.href} nav={nav} />
        ))}
      </div>

      <div className="pt-2">
        <p>Category</p>
        {navigations?.category?.map((nav) => (
          <NavigationItem key={nav.href} nav={nav} />
        ))}
      </div>

      <div className="pt-2">
        <p>General</p>
        {navigations?.general?.map((nav) => (
          <NavigationItem key={nav.href} nav={nav} />
        ))}
      </div>
    </div>
  );
};

Navigations.displayName = "Navigations";

export default Navigations;
