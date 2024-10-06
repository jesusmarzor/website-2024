import { contactOptions } from "@/app/utils/constants";
import { CustomLinkType } from "@/app/utils/enums";
import Card from "@/app/components/Card";
import { SectionLayout } from "@/app/layouts/Section";
import { useTranslations } from "next-intl";

const Contact = () => {
    const t = useTranslations()
    return (
        <SectionLayout title={t("common.contact")}>
            <div className="flex flex-col justify-center items-center gap-4">
                {
                    contactOptions.map( ({url, img, name, description}) => 
                        <Card
                            key={name}
                            type={CustomLinkType.a}
                            href={url}
                            icon={img}
                            title={name}
                            subtitle={description}
                        />
                    )
                }
            </div>
      </SectionLayout>
    )
}

export default Contact