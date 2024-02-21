import { type ReactNode } from "react";

export interface MenuItemProps {
  href: `/${string}` | `http${string}`;
  children: ReactNode;
}
export type MainMenuItemProps = MenuItemProps & { submenu?: MenuItemProps[] };
