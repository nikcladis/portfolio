"use client";

import { Wrench } from "lucide-react";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="font-bold text-xl">nikcladis.dev</span>
    </Link>
  );
}
