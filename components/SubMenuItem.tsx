"use client";

import { type MenuItemProps } from "@/types";
import {
  MenuItem,
  type MenuItemProps as MUIMenuItemProps,
} from "@mui/material";
import _ from "lodash";
import Link from "next/link";

export default function SubMenuItem({ href, children }: MenuItemProps) {
  return (
    <MenuItem
      component={(props: MUIMenuItemProps) => (
        <li {..._.omit(props, "children")}>
          <Link href={href}>{props.children}</Link>
        </li>
      )}
    >
      {children}
    </MenuItem>
  );
}
