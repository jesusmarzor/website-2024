import { contactOptions } from "@/app/utils/constants";
import { CustomLinkType } from "@/app/utils/enums";
import Card from "@/app/components/Card";

const Contact = () => {
    return (
        <section className="my-8 flex flex-col justify-center items-start gap-4">
        <h2 className="mb-4 text-xl font-semibold">Contacto</h2>
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
      </section>
    )
}

export default Contact