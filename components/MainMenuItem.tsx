"use client";

import { type MainMenuItemProps } from "@/types";
import { Menu } from "@mui/material";
import Link from "next/link";
import { useRef, useState, type ComponentProps } from "react";
import SubMenuItem from "./SubMenuItem";

export default function MainMenuItem({
  href,
  children,
  submenu,
}: MainMenuItemProps) {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLLIElement>(null);

  return (
    <li
      aria-controls={open ? "basic-menu" : undefined}
      aria-haspopup={submenu ? "true" : undefined}
      aria-expanded={open ? "true" : undefined}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      ref={anchorRef}
    >
      <Link href={href}>{children}</Link>
      {submenu && (
        <Menu
          open={true}
          style={{ display: open ? "block" : "none" }}
          onClose={() => setOpen(false)}
          anchorEl={anchorRef.current}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          slots={{
            root: (props: ComponentProps<"div">) => <div {...props} />,
          }}
        >
          {submenu.map(({ href, children }, key) => (
            <SubMenuItem key={key} href={href}>
              {children}
            </SubMenuItem>
          ))}
        </Menu>
      )}
    </li>
  );
}
