"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import RenderTag from "./RenderTag";

const RightSidebar = () => {
  const TopQuestions = [
    {
      _id: "1",
      title:
        "Would it be appropriate to point out an error in another paper during a referee report?",
    },
    {
      _id: "2",
      title: "How can an airconditioning machine exist?",
    },
    {
      _id: "3",
      title: "Interrogated every time crossing UK Border as citizen",
    },
    {
      _id: "4",
      title: "Low digit addition generator",
    },
    {
      _id: "5",
      title: "What is an example of 3 numbers that do not make up a vector?",
    },
    {
      _id: "6",
      title: "What is an example of 3 numbers that do not make up a vector?",
    },
    {
      _id: "7",
      title: "What is an example of 3 numbers that do not make up a vector?",
    },
  ];
  const popularTags = [
    {
      _id: "1",
      name: "javascript",
      totalQuestions: 4,
    },
    {
      _id: "2",
      name: "html",
      totalQuestions: 2,
    },
    {
      _id: "3",
      name: "Next.js",
      totalQuestions: 3,
    },
    {
      _id: "4",
      name: "Python",
      totalQuestions: 5,
    },
    { _id: "5", name: "redux", totalQuestions: 10 },
  ];
  return (
    <section className="background-light900_dark200 custom-scrollbar light-border sticky right-0 top-0 flex h-screen flex-col overflow-y-auto border-l p-6 pt-36  shadow-light-300 dark:shadow-none max-xl:hidden w-[350px]">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px] overflow-y-auto no-scrollbar h-[300px] ">
          {TopQuestions?.map((question) => (
            <Link
              href={`/questions/${question._id}`}
              key={question._id}
              className="flex cursor-pointer items-center justify-between gap-7 "
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="chevron-right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags?.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
