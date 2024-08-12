import React from "react";
import Navigations from "./navigations";

interface SidebarProps {
  navigation: "admin" | "participant";
}

const Sidebar = ({ navigation }: Readonly<SidebarProps>) => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-background px-6">
      <h2>Logo</h2>
      <Navigations navigation={navigation} />
    </div>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
