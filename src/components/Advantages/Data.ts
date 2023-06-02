
interface IData {
    id: number,
    img: any,
    title: string,
    text: string
}

const Data: IData[] = [
    {
        id: 1,
        img: "advantages/vecFilm.svg",
        title: "Адерс застройки",
        text: "Нусратулло Махсум дом 75"
    },
    {
        id: 2,
        img: "advantages/vecFilm.svg",
        title: "Архитектура",
        text: "Состоит из 5 блоков и 18-23 этажей"
    },
    {
        id: 3,
        img: "advantages/vecFilm.svg",
        title: "Инфраструктура",
        text: "Школы, дет. сады рядом и ТЦ"
    },
    {
        id: 4,
        img: "advantages/vecFilm.svg",
        title: "Безопасноть",
        text: "Охраняемая территория"
    },    
]

export default Data