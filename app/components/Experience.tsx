import { SectionLayout } from "@/app/layouts/Section"
import { TimeLineLayout } from "@/app/layouts/TimeLine"
import { useTranslations } from "next-intl"

const Experience = () => {
    const t = useTranslations()
    return (
        <SectionLayout
          title={t("common.experience")}
        >
          <TimeLineLayout
            title={t("home.experience.secondJob.name")}
            subtitle={t("home.experience.secondJob.time")}
          >
            <section className="flex flex-col justify-center items-start gap-1 ml-4">
              <h2 className="font-bold text-main mt-3">
                {t("home.experience.secondJob.secondCategory.name")}
              </h2>
              <p className="font-semibold text-sm">
                {t("home.experience.secondJob.secondCategory.time")}
              </p>
              <p className="mt-2">
                {t("home.experience.secondJob.secondCategory.description")}
              </p>
            </section>
            <section className="flex flex-col justify-center items-start gap-1 ml-4">
              <h2 className="font-bold text-main mt-[.8rem]">
                {t("home.experience.secondJob.firstCategory.name")}
              </h2>
              <p className="font-semibold text-sm">
                {t("home.experience.secondJob.firstCategory.time")}
              </p>
              <p className="mt-2">
                {t("home.experience.secondJob.firstCategory.description")}
              </p>
            </section>
          </TimeLineLayout>
          <TimeLineLayout
            title={t("home.experience.firstJob.name")}
            subtitle={t("home.experience.firstJob.time")}
          >
            <p className="mt-2">
              {t("home.experience.firstJob.description")}
            </p>
          </TimeLineLayout>
        </SectionLayout>
    )
}

export default Experience