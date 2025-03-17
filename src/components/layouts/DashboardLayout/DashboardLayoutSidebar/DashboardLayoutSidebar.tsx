import { cn } from "@/utils/cn";
import { Button, Listbox, ListboxItem } from "@heroui/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";
import { BiArrowFromRight, BiLogOut } from "react-icons/bi";
import { FaAngleRight } from "react-icons/fa6";

interface SidebarItems {
  key: string;
  label: string;
  href: string;
  icon: JSX.Element;
}

interface PropTypes {
  sidebarItems: SidebarItems[];
  isOpen: boolean;
}

const DashboardLayoutSidebar = (props: PropTypes) => {
  const { isOpen, sidebarItems } = props;
  const router = useRouter();

  return (
    <div className="flex h-screen min-w-60 flex-col border-r-1 bg-white">
      <div>
        <div className="border-b-1 border-[#e6eff1] bg-white p-5 text-center">
          GoVent
        </div>
        <Listbox
          items={sidebarItems}
          variant="solid"
          color="secondary"
          aria-label="Dashboard Menu"
          className="p-3"
        >
          {(item) => (
            <ListboxItem
              key={item.key}
              textValue={item.label}
              startContent={item.icon}
              endContent={<FaAngleRight size={16} />}
              aria-labelledby={item.label}
              aria-describedby={item.label}
              className={cn(
                "mb-2 rounded-md px-3 py-2 text-2xl text-[#61748F]",
                {
                  "bg-[#735DFF] text-white": router.pathname.startsWith(
                    item.href,
                  ),
                },
              )}
            >
              <p className="text-small">{item.label}</p>
            </ListboxItem>
          )}
        </Listbox>
        <Listbox
          variant="solid"
          color="danger"
          aria-label="Logout"
          className="p-3"
        >
          <ListboxItem
            textValue="Logout"
            startContent={<BiLogOut />}
            aria-labelledby="Logout"
            aria-describedby="Logout"
            className={cn("mb-2 rounded-md px-3 py-2 text-2xl text-danger-500")}
            onPress={() => signOut()}
          >
            <p className="text-small">Logout</p>
          </ListboxItem>
        </Listbox>
      </div>
    </div>
  );
};

export default DashboardLayoutSidebar;
