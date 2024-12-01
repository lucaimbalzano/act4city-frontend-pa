import Home from "@/components/Dashboard/HomeDashboard";
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLaout";
import React from "react";

export const metadata: Metadata = {
  title:
    "Act4city - PA",
  description: "Bridging Citizens and Public Administration with AI Assistant",
};

export default function HomeDashboard() {
  return (
    <>
      <DefaultLayout>
        <Home />
      </DefaultLayout>
    </>
  );
}
