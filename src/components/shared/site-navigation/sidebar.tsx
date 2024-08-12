import React from "react";
import Navigations from "./navigations";

interface SidebarProps {
  navigation: "admin" | "participant";
}

const Sidebar = ({ navigation }: Readonly<SidebarProps>) => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-border bg-background pt-3 px-5">
      <h2 className="px-2">iMovie</h2>
      <Navigations navigation={navigation} />
    </div>
  );
};

Sidebar.displayName = "Sidebar";

export default Sidebar;
