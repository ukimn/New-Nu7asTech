export interface PricingCardsProps{
    heading: string;
    features: string[];
    price: number;
}

export interface SkillsCardsProps{
    name: string;
}

export interface ListOfItemsType{
    id: number;
    name: string;
}

export interface Props{
    heading: string;
    listOfItems: ListOfItemsType[];
}

export interface IconsProps{
    icons: React.ReactElement<SVGElement>
}

export interface HomeSkillsProps {
    number: number;
    children: React.ReactNode;
}

export interface RouterTypes{
    id: number;
    title: string;
    ref: string;
}