"use client";

import { Menu } from "@mui/material";
import Link from "next/link";
import { useRef, useState, type ComponentProps } from "react";
import SubMenuItem from "./SubMenuItem";

export default function MenuItemWithSubmenu() {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLLIElement>(null);

  return (
    <li onMouseEnter={() => setOpen(true)} ref={anchorRef}>
      <Link
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        href="/"
      >
        Link w głównym menu
      </Link>
      <Menu
        open={true}
        style={{ display: open ? "block" : "none" }}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        slots={{
          root: (props: ComponentProps<"div">) => (
            <div onMouseLeave={() => setOpen(false)} {...props} />
          ),
        }}
      >
        <SubMenuItem href="/podstrona">Link w podmenu</SubMenuItem>
      </Menu>
    </li>
  );
}
