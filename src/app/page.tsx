"use client";
import React from "react";
import { MultiSelectCombobox } from "@/components/multiselect";

type Framework = {
  value: string;
  label: string;
};

const Page = () => {
  const frameworks: Framework[] = [
    {
      value: "next.js",
      label: "Next.js",
    },
    {
      value: "sveltekit",
      label: "SvelteKit",
    },
    {
      value: "nuxt.js",
      label: "Nuxt.js",
    },
    {
      value: "remix",
      label: "Remix",
    },
    {
      value: "astro",
      label: "Astro",
    },
  ];

  return (
    <section className="bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 gap-5">
        <div className="text-center">
          <h4 className="text-2xl font-medium">Custom Multiselect</h4>
          <p className="text-sm">
            This custom multiselect is made with Next JS and Shadcn
          </p>
        </div>
        <div className="rounded-lg w-[420px] p-2">
          <MultiSelectCombobox
            options={frameworks}
            onChange={(e) => console.log(e)}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
