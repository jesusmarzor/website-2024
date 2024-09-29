import { contactOptions } from "@/app/utils/constants";
import { CustomLinkType } from "@/app/utils/enums";
import Card from "@/app/components/Card";
import { SectionLayout } from "../layouts/Section";

const Contact = () => {
    return (
        <SectionLayout title="Contacto">
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