import { ChartPieIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

let iconClass =
  "h-6 w-6 flex-shrink-0 text-gray-500 transition duration-75 group-hover:text-gray-900";

const sideNavigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <HomeIcon className={iconClass} />,
  },
  {
    name: "Herosection Rates",
    href: "/herosection-rates",
    icon: <ChartPieIcon className={iconClass} />,
  },
  {
    name: "Write Article",
    href: "/admin/add-blog",
    icon: <ChartPieIcon className={iconClass} />,
  },
];

interface SidebarProps {
  showSideBar?: any;
}

export const Sidebar: React.FC<SidebarProps> = ({ showSideBar }) => {
  const [activePage, setActivePage] = useState("");

  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    setActivePage(pathname);
  }, [pathname]);

  return (
    <aside
      id="sidebar"
      className={`${
        !showSideBar && "w-[0px]"
      } transition-width fixed top-0 left-0 z-20 flex h-full w-64 flex-shrink-0 flex-col pt-16 duration-75`}
    >
      <div className="relative flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white pt-0">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex-1 space-y-1 divide-y divide-gray-200 bg-white px-3">
            <ul className="space-y-2">
              {sideNavigation.map((item) => (
                <li
                  key={item.name}
                  onClick={() => {
                    router.push(item.href);
                    setActivePage(item.href);
                  }}
                  className={`flex cursor-pointer items-center rounded-lg p-2 text-base font-normal text-gray-900 hover:bg-gray-100 ${
                    activePage === item.href &&
                    "flex cursor-pointer items-center rounded-lg bg-gray-100 p-2 text-base font-normal text-gray-900 "
                  }`}
                >
                  {item.icon}
                  <span
                    className="ml-3 flex-1 whitespace-nowrap"
                    data-testid="sidebar-item-content"
                  >
                    {item.name}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
};
