import React from "react";
import UpcomingPage from "../upcoming";

interface MobileNavbarProps {
  navigation: "admin" | "subscriber";
}

const MobileNavbar = ({ navigation }: Readonly<MobileNavbarProps>) => {
  return <UpcomingPage title="MobileNavbar" />;
};

MobileNavbar.displayName = "MobileNavbar";

export default MobileNavbar;
