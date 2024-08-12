import React, { Fragment } from "react";
import Sidebar from "./sidebar";
import MobileNavbar from "./mobile-navabar";

interface SiteNavigationProps {
  navigation: "admin" | "participant";
}

const SiteNavigation = ({ navigation }: Readonly<SiteNavigationProps>) => {
  return (
    <div>
      <div className="d-none d-lg-flex position-fixed top-0 bottom-0 zindex-50 ">
        <Sidebar navigation={navigation} />
      </div>
      <div className="position-sticky top-0 zindex-40 d-lg-none">
        <MobileNavbar navigation="admin" />
      </div>
    </div>
  );
};

SiteNavigation.displayName = "SiteNavigation";

export default SiteNavigation;
