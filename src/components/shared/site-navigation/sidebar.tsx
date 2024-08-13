import React from "react";
import Navigations from "./navigations";

interface SidebarProps {
  navigation: "admin" | "participant";
}

const Sidebar = ({ navigation }: Readonly<SidebarProps>) => {
  return (
    <div className="pt-3 border-end vh-100">
      <h2 className=" mx-5 text-muted ">iMovie</h2>
      <Navigations navigation={navigation} />
    </div>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
