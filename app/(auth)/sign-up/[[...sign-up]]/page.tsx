import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative  mx-auto">
      <div className=" w-[38px] xs:h-[148px] h-[158px] xs:rotate-0 rotate-90 xs:left-[-2px] left-[23.5%] xs:rounded-l-[10px]  rounded-r-[12px] bg-light-900 z-50 xs:top-[8.5%] top-[85%] shadow-light-100 absolute"></div>
      <SignUp />
    </div>
  );
}
