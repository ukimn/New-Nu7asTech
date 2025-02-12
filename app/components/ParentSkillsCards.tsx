import { SkillsCards } from '../components/SkillsCards';
import { Props, ListOfItemsType } from '../types/app';

export const ParentSkillsCards = ({heading, listOfItems}: Props) => {

    return (
        <>
        <div className="px-9 pb-2 pt-4 bg-primary rounded-lg mb-4 duration-500 transition-colors hover:bg-transparent border border-primary h-[400px] mx-2">
          <h1 className="text-2xl text-white text-center">{heading}</h1>
          <div className="grid grid-rows-6 grid-cols-2 gap-4 mt-3">
            {listOfItems.map((skill: ListOfItemsType) => {
              return <SkillsCards key={skill.id} name={skill.name}/>
            })}
          </div>
        </div>
        </>
    )
}