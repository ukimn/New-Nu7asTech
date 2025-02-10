import { MdVerified } from "react-icons/md";
import { SkillsCardsProps } from "../types/app";



export const SkillsCards = ({ name }: SkillsCardsProps) => {
    return (
        <>
            <div className="p-2 flex items-center justify-center">
                <span><MdVerified/></span><p className="text-lg ml-3">{name}</p>
            </div>
        </>
    )
};
