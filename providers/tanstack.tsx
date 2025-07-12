"use client"

import {ReactElement} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function TanstackProvider({ children } : { children: React.ReactNode }): ReactElement {
  return (
    <QueryClientProvider client={new QueryClient()}>
      {children}
    </QueryClientProvider>
  )
}