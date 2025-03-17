import PageHead from "@/components/commons/PageHead";
import React, { ReactNode, useState } from "react";
import DashboardLayoutSidebar from "./DashboardLayoutSidebar";
import { SIDEBAR_ADMIN, SIDEBAR_MEMBER } from "./DashboardLayout.constants";
import { Navbar, NavbarMenuToggle } from "@heroui/react";

type PropTypes = {
  children: ReactNode;
  title: string;
  type?: string;
};

const DashboardLayout = (props: PropTypes) => {
  const { children, title, type = "admin" } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <PageHead title={title} />
      <div className="flex">
        <DashboardLayoutSidebar
          sidebarItems={type === "admin" ? SIDEBAR_ADMIN : SIDEBAR_MEMBER}
          isOpen={open}
        />

        <div className="w-full">
          <Navbar
            isBlurred={false}
            classNames={{ wrapper: "p-0" }}
            className=""
          >
            <div className="flex w-full items-center justify-between px-5">
              <h1>{title}</h1>
              <NavbarMenuToggle
                aria-label={open ? "Close Menu" : "Open Menu"}
              />
            </div>
          </Navbar>
          {children}
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
