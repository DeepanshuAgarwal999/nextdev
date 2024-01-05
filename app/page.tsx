"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  useEffect(() => {
    redirect("/home");
  }, []);
  return <div>page</div>;
};

export default page;
