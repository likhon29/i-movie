import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { RxDashboard } from "react-icons/rx";

const NavigationItem = ({
  nav,
}: {
  nav: {
    name: string;
    href: string;
    activeIcon: React.ElementType;
    inactiveIcon: React.ElementType;
  };
}) => {
  const pathname = usePathname();
  const isCurrent = pathname.includes(nav.href);
  const Icon = isCurrent ? nav.activeIcon : nav.inactiveIcon;
  return (
    <div className="d-flex align-items-center justify-content-between my-2">
      <div className="d-flex flex-lg-row justify-content-between align-items-center ">
        <RxDashboard className="shrink-0" />
        <Link
          key={nav.href}
          href={nav.href}
          className={`text-decoration-none ps-3 ${
            isCurrent ? "text-danger" : "text-muted"
          }`}
        >
          <span>{nav.name}</span>
        </Link>
      </div>

      <div className="bg-danger h-25 w-25"></div>
    </div>
  );
};

export default NavigationItem;
