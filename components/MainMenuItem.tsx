"use client";

import { type MainMenuItemProps } from "@/types";
import { PlayArrow } from "@mui/icons-material";
import { Menu, Paper } from "@mui/material";
import Link from "next/link";
import {
  forwardRef,
  useRef,
  useState,
  type ComponentProps,
  type Ref,
} from "react";
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
      <Link
        className="hover:bg-slate-50 rounded-md px-2 py-1 flex items-center justify-center gap-2 font-oxanium"
        href={href}
      >
        {children}
        {submenu && (
          <PlayArrow
            className="text-sky-400 rotate-90"
            style={{ fontSize: "12px" }}
          />
        )}
      </Link>
      {submenu && anchorRef.current && (
        <Menu
          open={open}
          //className={open ? "block" : "hidden"}
          onClose={() => setOpen(false)}
          anchorEl={anchorRef.current}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          slots={{
            root: (props: ComponentProps<"div">) => <div {...props} />,
            paper: forwardRef(
              (
                props: ComponentProps<typeof Paper>,
                ref: Ref<HTMLDivElement>,
              ) => (
                <div className="absolute pt-4">
                  <Paper ref={ref} {...props} className="border shadow-xl" />
                </div>
              ),
            ),
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
