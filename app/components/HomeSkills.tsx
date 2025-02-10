import { HomeSkillsProps } from "../types/app";

const HomeSkills = ({ number, children }: HomeSkillsProps) => {
  return (
    <p className="flex items-center justify-center px-10 w-[200px] h-[100px]">
      <span className="text-5xl mx-4 text-white font-semibold">{number}</span>
      <span className="text-2xl opacity-50">{children}</span>
    </p>
  );
};

export default HomeSkills;
