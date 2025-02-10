import { IconsProps } from "../types/app"

const Icons = ({icons}: IconsProps) => {
    return(
        <div className="rounded-full border-[#55c996] border-[1px] duration-300 hover:bg-[#55c996] transition-colors p-2 mx-3 cursor-pointer flex items-center">
            {icons}
        </div>
    )
}

export default Icons