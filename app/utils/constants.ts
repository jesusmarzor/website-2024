import { ContactOption } from "@/app/utils/interfaces"
import linkedin from "@/app/assets/icons/linkedin.svg";
import github from "@/app/assets/icons/github.svg";
import instagram from "@/app/assets/icons/instagram.svg";
import email from "@/app/assets/icons/email.svg";

export const textLogo = {
    name: "Jesus",
    lastName: "marzor"
}
export const authorName = "Jesús Martín"

export const minDaysNewLabel = 3;
export const maxNumCardsInHomeSections = 3;

export const contactOptions: Array<ContactOption> = [
    {
        url: "https://linkedin.com/in/jesusmarzor",
        img: linkedin.src,
        name: "Linkedin",
        description: "jesusmarzor"
    },
    {
        url: "https://github.com/jesusmarzor",
        img: github.src,
        name: "Github",
        description: "jesusmarzor"
    },
    {
        url: "https://instagram.com/jesusmarzor",
        img: instagram.src,
        name: "Instagram",
        description: "@jesusmarzor"
    },
    {
        url: "mailto:contacto@jesusmarzor.pro",
        img: email.src,
        name: "Correo",
        description: "contacto@jesusmarzor.pro"
    }
]