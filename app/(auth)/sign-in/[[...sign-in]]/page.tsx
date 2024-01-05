import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="relative  mx-auto">
      <div className=" w-[35px] xs:h-[148px] h-[158px] xs:rotate-0 rotate-90 xs:left-0 left-[23.5%] xs:rounded-l-[10px]  rounded-r-[12px] bg-light-900 z-50 xs:top-[10%] top-[83%] shadow-light-100 absolute"></div>
      <SignIn />
    </div>
  );
}
