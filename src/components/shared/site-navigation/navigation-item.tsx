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
    <div
      className={`d-flex px-1 align-items-center justify-content-between  ${
        isCurrent ? " border-end border-danger fw-bold border-3" : "text-muted"
      }`}
      style={{
        margin: "15px 0",
        cursor: "pointer",
        color: isCurrent ? "#e71d61" : "#000",
      }}
    >
      <div className="d-flex flex-lg-row justify-content-between align-items-center ">
        <RxDashboard className="shrink-0" />
        <Link
          key={nav.href}
          href={nav.href}
          className={`text-decoration-none ps-3 `}
        >
          <span className={`${isCurrent ? "text-danger  " : "text-muted"}`}>
            {nav.name}
          </span>
        </Link>
      </div>

      {/* <div className="bg-danger h-25 w-1">.</div> */}
    </div>
  );
};

export default NavigationItem;
