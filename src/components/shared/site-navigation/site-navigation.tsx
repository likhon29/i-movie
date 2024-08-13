import React, { Fragment } from "react";
import Sidebar from "./sidebar";
import MobileNavbar from "./mobile-navabar";

interface SiteNavigationProps {
  navigation: "admin" | "participant";
}

const SiteNavigation = ({ navigation }: Readonly<SiteNavigationProps>) => {
  return (
    <div className=" " style={{ paddingLeft: 0, paddingRight: 0 }}>
      {" "}
      <Sidebar navigation={navigation} />
      <div className="position-sticky top-0 zindex-40 d-lg-none">
        <MobileNavbar navigation="admin" />
      </div>
    </div>
  );
};

SiteNavigation.displayName = "SiteNavigation";

export default SiteNavigation;
