"use client";

import { MenuItem, type MenuItemProps } from "@mui/material";
import _ from "lodash";
import Link from "next/link";
import { type ReactNode } from "react";

interface SubMenuItemProps {
  href: `/${string}` | `http${string}`;
  children: ReactNode;
}

export default function SubMenuItem({ href, children }: SubMenuItemProps) {
  return (
    <MenuItem
      component={(props: MenuItemProps) => (
        <li {..._.omit(props, "children")}>
          <Link href={href}>{props.children}</Link>
        </li>
      )}
    >
      {children}
    </MenuItem>
  );
}
