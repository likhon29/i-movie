"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { adminNavigations, participantNavigations } from "@/config/navigations";

import { cn } from "@/utils";
import { BeakerIcon } from "@heroicons/react/24/outline";
import NavigationItem from "./navigation-item";

interface SiteNavigationProps {
  navigation: "admin" | "participant";
}

const Navigations = ({ navigation }: Readonly<SiteNavigationProps>) => {
  const pathname = usePathname();
  const navigations =
    navigation === "admin" ? adminNavigations : participantNavigations;

  return (
    <div className="ps-5 mt-4">
      <div className="my-2">
        <p>Menu</p>
        {navigations?.menu?.map((nav) => (
          <NavigationItem key={nav.href} nav={nav} />
        ))}
      </div>
      <div className="my-2">
        <p>Library</p>
        {navigations?.library?.map((nav) => (
          <NavigationItem key={nav.href} nav={nav} />
        ))}
      </div>

      <div className="my-2">
        <p>Category</p>
        {navigations?.category?.map((nav) => (
          <NavigationItem key={nav.href} nav={nav} />
        ))}
      </div>

      <div className="my-2">
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
