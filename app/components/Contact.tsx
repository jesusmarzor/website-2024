import { contactOptions } from "../utils/constants";
import Card from "./Card";

const Contact = () => {
    return (
        <section className="my-8 flex flex-col justify-center items-start gap-4">
        <h2 className="mb-4 text-xl font-semibold">Contacto</h2>
        {
            contactOptions.map( ({url, img, name, description}) => 
                <Card
                    key={name}
                    url={url}
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