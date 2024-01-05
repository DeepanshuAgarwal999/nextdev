"use client";
import { HomePageFilters } from "@/constants/filters";
import React, { useState } from "react";
import { Button } from "../ui/button";

const HomeFilters = () => {
  const [active, setActive] = useState("");

  return (
    <div className="mt-10 flex-wrap gap-3 md:flex hidden ">
      {HomePageFilters.map((item) => (
        <Button
          key={item.value}
          onClick={() => setActive(item.value)}
          className={`body-medium rounded-lg px-6 py-3 capitalize shadow-none ${
            active === item.value
              ? "bg-primary-100 text-primary-500"
              : "dark:text-light-500 bg-light-800 text-light-500 hover:text-opacity-80  "
          }`}
        >
          {item.name}
        </Button>
      ))}
    </div>
  );
};

export default HomeFilters;
