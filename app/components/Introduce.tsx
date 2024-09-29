import Image from "next/image"
import profile from "@/app/assets/imgs/profile.webp";
import { contactOptions } from "@/app/utils/constants";

const Introduce = () => {
    return (
        <header className="flex justify-start items-center gap-4 mb-8">
          <picture className="flex justify-center items-center w-28 h-28 border-4 border-main rounded-full overflow-hidden">
            <Image
              className="w-24 h-24 rounded-full object-cover"
              src={profile}
              alt={"My profile image"}
            />
          </picture>
          <section className="flex flex-col justify-start items-start gap-1">
            <h2 className="text-2xl">Jesús Martín</h2>
            <p className=" text-main">@jesusmarzor</p>
            <ul className="flex justify-center items-center gap-8 mt-2">
              {
                contactOptions.map( ({url, img, name}) => (
                  <li key={name}>
                    <a href={url} target="_blank" rel="noreferrer">
                      <Image width={24} height={24} src={img} alt={`${name} icon`} />
                    </a>
                  </li>
                ))
              }
            </ul>
          </section>
        </header>
    )
}

export default Introduce