import {
  CiBookmark,
  CiGrid2V,
  CiGrid41,
  CiSettings,
  CiShoppingTag,
  CiViewList,
  CiWallet,
} from "react-icons/ci";

const SIDEBAR_MEMBER = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/member",
    icon: <CiGrid41 />,
  },
  {
    key: "settings",
    label: "Settings",
    href: "/member/settings",
    icon: <CiSettings />,
  },
  {
    key: "transactions",
    label: "Transactions",
    href: "/member/transactions",
    icon: <CiWallet />,
  },
];

const SIDEBAR_ADMIN = [
  {
    key: "dashboard",
    label: "Dashboard",
    href: "/admin",
    icon: <CiGrid41 />,
  },
  {
    key: "events",
    label: "Events",
    href: "/admin/events",
    icon: <CiViewList />,
  },
  {
    key: "categories",
    label: "Categories",
    href: "/admin/categories",
    icon: <CiShoppingTag />,
  },
  {
    key: "banners",
    label: "Banners",
    href: "/admin/banners",
    icon: <CiBookmark />,
  },
];

export { SIDEBAR_ADMIN, SIDEBAR_MEMBER };
