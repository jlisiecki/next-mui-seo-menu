"use client";

import Menu from "@mui/icons-material/Menu";
import Link from "next/link";
import { useState, type ComponentProps } from "react";

export default function MobileMenu(props: ComponentProps<"div">) {
  const [open, setOpen] = useState(false);
  return (
    <div {...props}>
      <button onClick={() => setOpen((open) => !open)}>
        <Menu />
      </button>
      {open && (
        <menu>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">About</Link>
          </li>
          <li>
            <Link href="#">Contact</Link>
          </li>
        </menu>
      )}
    </div>
  );
}
