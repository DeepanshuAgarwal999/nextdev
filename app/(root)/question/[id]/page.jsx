import { getQuestionById } from "@/lib/actions/question.action";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const QuestionPage = async ({ params, searchParams }) => {
  const result = await getQuestionById({ questionId: params.id });
 
  return (
    <>
      <div className="flex-start w-full flex-col">
        <div>
          <Link href={`/profile/${result?.author[0].clerkId}`}>
            <Image
              src={result.author[0].picture}
              width={22}
              height={22}
              alt="profile"
            />
            <p className="paragraph-semibold text-dark300_light700 ">{result?.author[0].name}</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default QuestionPage;
