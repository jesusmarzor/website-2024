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
            </section>
            <section className="flex flex-col justify-center items-start gap-1 ml-4">
              <h2 className="text-md font-bold text-main mt-[.8rem]">
                Junior software developer
              </h2>
              <p className="font-semibold text-xs">
                Sept 2022 - Ag 2024
              </p>
              <ul className="ml-8">
                <li className="list-disc">Desarrollo en UIKit y Swift UI con arquitectura VIPER.</li>
                <li className="list-disc">Test unitarios con XCTest.</li>
                <li className="list-disc">Estimación y reparto de tareas con metodología SCRUM.</li>
                <li className="list-disc">Mantenimiento de aplicaciones en producción.</li>
              </ul>
            </section>
          </TimeLineLayout>
          <TimeLineLayout
            title="Fontend web developer"
            subtitle="Feb 2022 - Ag 2022 | Secrets-On, Madrid"
          >
            <ul className="ml-8">
              <li className="list-disc">Desarrollo de una plataforma online con React.</li>
              <li className="list-disc">
                Recomendaciones que aporté:
                <ul className="ml-8">
                  <li className="list-disc">Trabajar con una metodología ágil.</li>
                  <li className="list-disc">Usar SASS junto a Suit CSS.</li>
                  <li className="list-disc">Una estructura de carpetas más sostenible.</li>
                </ul>
              </li>
              <li className="list-disc">Desarrollo de una página web en Wordpress.</li>
            </ul>
          </TimeLineLayout>
        </SectionLayout>
    )
}

export default Experience