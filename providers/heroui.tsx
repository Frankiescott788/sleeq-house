"use client"

import React, {ReactElement} from "react";
import {HeroUIProvider} from "@heroui/system";
import {ToastProvider} from "@heroui/toast";

export default function HeroUI({children}: { children: React.ReactNode }): ReactElement {
  return (
    <HeroUIProvider>
      <ToastProvider />
      {children}
    </HeroUIProvider>
  )
}