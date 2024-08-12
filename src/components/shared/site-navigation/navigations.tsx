"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { adminNavigations, participantNavigations } from "@/config/navigations";

import { cn } from "@/utils";

interface SiteNavigationProps {
  navigation: "admin" | "participant";
}

const Navigations = ({ navigation }: Readonly<SiteNavigationProps>) => {
  const pathname = usePathname();
  const navigations =
    navigation === "admin" ? adminNavigations : participantNavigations;
  return (
    <div className="">
      {navigations.map((nav) => (
        <Link key={nav.href} href={nav.href}>
          <p
            className={cn(
              "block py-2 px-4 rounded-lg",
              pathname === nav.href
                ? "bg-primary text-white"
                : "hover:bg-primary-light"
            )}
          >
            {nav?.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

Navigations.displayName = "Navigations";

export default Navigations;
