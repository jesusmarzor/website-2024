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
            </section>
            <section className="flex flex-col justify-center items-start gap-1 ml-4">
              <h2 className="font-bold text-main mt-[.8rem]">
                {t("home.experience.secondJob.firstCategory.name")}
              </h2>
              <p className="font-semibold text-sm">
                {t("home.experience.secondJob.firstCategory.time")}
              </p>
              <ul className="ml-8 mt-2">
                <li className="list-disc">{t("home.experience.secondJob.firstCategory.tasks.task1")}</li>
                <li className="list-disc">{t("home.experience.secondJob.firstCategory.tasks.task2")}</li>
                <li className="list-disc">{t("home.experience.secondJob.firstCategory.tasks.task3")}</li>
                <li className="list-disc">{t("home.experience.secondJob.firstCategory.tasks.task4")}</li>
              </ul>
            </section>
          </TimeLineLayout>
          <TimeLineLayout
            title={t("home.experience.firstJob.name")}
            subtitle={t("home.experience.firstJob.time")}
          >
            <ul className="ml-8 mt-2">
              <li className="list-disc">{t("home.experience.firstJob.tasks.task1")}</li>
              <li className="list-disc">
                {t("home.experience.firstJob.tasks.task2.name")}
                <ul className="ml-8">
                  <li className="list-disc">{t("home.experience.firstJob.tasks.task2.subtask1")}</li>
                  <li className="list-disc">{t("home.experience.firstJob.tasks.task2.subtask2")}</li>
                  <li className="list-disc">{t("home.experience.firstJob.tasks.task2.subtask3")}</li>
                </ul>
              </li>
              <li className="list-disc">{t("home.experience.firstJob.tasks.task3")}</li>
            </ul>
          </TimeLineLayout>
        </SectionLayout>
    )
}

export default Experience