"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { adminNavigations, participantNavigations } from "@/config/navigations";

import { cn } from "@/utils";
import { BeakerIcon } from "@heroicons/react/24/outline";

interface SiteNavigationProps {
  navigation: "admin" | "participant";
}

const Navigations = ({ navigation }: Readonly<SiteNavigationProps>) => {
  const pathname = usePathname();
  const navigations =
    navigation === "admin" ? adminNavigations : participantNavigations;

  return (
    <div className="">
      <p>Menu</p>
      {navigations?.menu?.map((nav) => {
        const isCurrent = pathname.includes(nav.href);
        const Icon = isCurrent ? nav.activeIcon : nav.inactiveIcon;
        return (
          <Link
            key={nav.href}
            href={nav.href}
            className={`d-flex flex-row justify-content-between align-items-center text-start w-full ${
              isCurrent ? "text-danger" : ""
            }`}
          >
            <BeakerIcon className=" text-blue-500" />
            <span>{nav.name}</span>
          </Link>
        );
      })}

      <p>Category</p>
      {navigations?.category?.map((nav) => (
        <Link key={nav.href} href={nav.href}></Link>
      ))}

      <p>Menu</p>
    </div>
  );
};

Navigations.displayName = "Navigations";

export default Navigations;
