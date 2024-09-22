import { SectionLayout } from "@/app/layouts/Section"
import { TimeLineLayout } from "@/app/layouts/TimeLine"

const Experience = () => {
    return (
        <SectionLayout
          title="Experiencia"
        >
          <TimeLineLayout
            title="iOS app developer"
            subtitle="Sept 2022 - Actualidad | Deloitte, Madrid"
          >
            <section className="flex flex-col justify-center items-start gap-1 ml-4">
              <h2 className="text-md font-bold text-main mt-3">
                Mid software developer
              </h2>
              <p className="font-semibold text-xs">
                Sept 2024 - Actualidad
              </p>
              <ul className="ml-8">
                <li className="list-disc">
                  Lorem Ipsum es simplemente el texto de relleno de las imprentas.
                </li>
                <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
              </ul>
            </section>
            <section className="flex flex-col justify-center items-start gap-1 ml-4">
              <h2 className="text-md font-bold text-main mt-[.8rem]">
                Junior software developer
              </h2>
              <p className="font-semibold text-xs">
                Sept 2022 - Ag 2024
              </p>
              <ul className="ml-8">
                <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
              </ul>
            </section>
          </TimeLineLayout>
          <TimeLineLayout
            title="Fontend web developer"
            subtitle="Feb 2022 - Ag 2022 | Secrets-On, Madrid"
          >
            <ul className="ml-8">
              <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
              <li className="list-disc">
              Lorem Ipsum es simplemente el texto de relleno de las imprentas.:
                <ul className="ml-8">
                  <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                  <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                  <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
                </ul>
              </li>
              <li className="list-disc">Lorem Ipsum es simplemente el texto de relleno de las imprentas.</li>
            </ul>
          </TimeLineLayout>
        </SectionLayout>
    )
}

export default Experience