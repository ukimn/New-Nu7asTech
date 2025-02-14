import { RouterTypes } from "../types/app"


export const PricingCards = [
  {
    BasicCard: {
      heading: "Basic Plan",
      features: [
        "The website in three weeks",
        "FrontEnd Websites",
        "Using the latest technologies",
        "One month site support",
      ],
      price: 5.99,
    },
  },
  {
    ProCard: {
      heading: "Pro Plan",
      features: [
        "The website in two weeks",
        "FrontEnd Websites",
        "Using the latest technologies",
        "3 months site support",
      ],
      price: 9.99,
    },
  },
  {
    PremiumCard: {
      heading: "Premium Plan",
      features: [
        "The website in one week",
        "FrontEnd Websites",
        "Using the latest technologies",
        "6 months site support",
      ],
      price: 19.99,
    },
  },
];

export const FrontEndskills = [
  { id: 1, name: "HTML" },
  { id: 2, name: "CSS" },
  { id: 3, name: "JavaScript" },
  { id: 4, name: "Git & GitHub" },
  { id: 5, name: "React" },
  { id: 6, name: "Next.js" },
  { id: 7, name: "Tailwind CSS" },
  { id: 8, name: "Bootstrap" },
  { id: 9, name: "Framer Motion" },
  { id: 10, name: "TypesScript" },
];

export const DesignSkills = [
  { id: 1, name: "Figma" },
  { id: 2, name: "Illustrator" },
  { id: 3, name: "Blender" },
  { id: 5, name: "Filmora" },
];

export const HomeSkillsList = [
  { number: 2, children: "Years of Experience" },
  { number: 8, children: "Projects Completed" },
  { number: 11, children: "Technologies Mastered" }
];




export const routers: RouterTypes[] = [
    {id: 1, title: "Home", ref:"/"},
    {id: 2, title: "About", ref:"/About"},
    {id: 3, title: "Pricing", ref:"/Pricing"},
    {id: 4, title: "Contact", ref:"/Contact"},
]