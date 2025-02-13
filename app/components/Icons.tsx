import { IconsProps } from "../types/app"

const Icons = ({icons, ref}: IconsProps) => {
    return(
        <div className="rounded-full border-primary border-[1px] duration-300 hover:bg-[#48b081] transition-colors p-2 mx-3 cursor-pointer flex items-center" onClick={() => window.open(ref, "_blank")}>
            {icons}
        </div>
    )
}

export default Icons