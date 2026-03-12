import { useParams } from "react-router-dom"
import { designs } from "../data/designs"

export default function DesignDetails() {

    const { id } = useParams()

    const design = designs.find(d => d.id === Number(id))

    if (!design) {
        return <p>Design not found</p>
    }

    return (

        <div className="p-10">

            <h1
                className="text-3xl font-bold mb-6"
                style={{ color: "var(--primary)" }}
            >
                {design.title}

            </h1>
            <img
                src={design.image}
                alt={design.title}
                className={`w-full h-full object-cover transition-transform duration-700`}
            />

            <p className="max-w-2xl">
                {design.details}
            </p>

        </div>

    )

}