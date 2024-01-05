import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metric from "../shared/Metric";
import { formatAndDivideNumber, getTimeStamp } from "@/lib/utils";
interface QuestionProps {
  _id: string;
  title: string;
  tags: {
    _id: string;
    name: string;
  }[];
  author: {
    _id: string;
    name: string;
    picture: string;
  };
  upVotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}
const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upVotes,
  views,
  answers,
  createdAt,
}: QuestionProps) => {
  return (
    <div className="card-wrapper p-9 sm:p-11 rounded-[10px]">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <span className="subtle-regular text-dark400_light700 line-clamp-1 flex sm:hidden">
          {getTimeStamp(createdAt)}
        </span>
        <Link href={`/question/${_id}`}>
          <h3 className="sm:h3-semibold base-semi-bold text-dark200_light900 line-clamp-1 flex-1">
            {title}
          </h3>
        </Link>
      </div>
      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags?.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>
      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metric
          imgUrl={author?.picture}
          alt="user"
          value={author?.name}
          title={`- asked ${getTimeStamp(createdAt)}`}
          href={`{/profile/${author?._id}}`}
          textStyles="body-medium text-dark400_light800"
          isAuthor
        />
        <Metric
          imgUrl="/assets/icons/like.svg"
          alt="upVotes"
          value={formatAndDivideNumber(upVotes)}
          title="Votes"
          textStyles="small-medium text-dark400_light800"
          href={""}
        />
        <Metric
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatAndDivideNumber(answers.length)}
          title="Answers"
          textStyles="small-medium text-dark400_light800"
          href={""}
        />
        <Metric
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatAndDivideNumber(views)}
          title="Views"
          textStyles="small-medium text-dark400_light800"
          href={""}
        />
      </div>
    </div>
  );
};

export default QuestionCard;
