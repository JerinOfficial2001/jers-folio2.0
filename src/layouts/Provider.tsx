"use client";
import React from "react";
import CommonLayout from "./PorfolioLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = { children: any };

const queryClient = new QueryClient();

export default function Providers({ children }: Props) {
  return (
    <QueryClientProvider client={queryClient}>
      <CommonLayout>{children}</CommonLayout>
    </QueryClientProvider>
  );
}
