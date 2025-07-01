import { useState } from "react";
import GenericButton from "./GenericButton";
import Image from "next/image";
import AccordionCard from "./AccordionCard";

export default function Accordion({ data }) {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        <section className="flex justify-between w-full py-20">
            <div className="flex-1 pl-[5vw] flex justify-center flex-col gap-4 md:gap-y-7 ">
                <h1 className="text-5xl leading-[120%] font-bold text-blue">{data.accordion.title}</h1>
                <p className="text-lg text-gray-700">{data.accordion.copy}</p>
                <div className="space-y-4 mt-8">
                    {data.accordion.faq.map((faq, idx) => (
                        <AccordionCard
                            key={idx}
                            title={faq.title}
                            description={faq.description}
                            open={openIdx === idx}
                            onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                        />
                    ))}
                </div>
                <GenericButton url={data.accordion?.tasto?.link_tasto} text={data.accordion?.tasto?.testo_tasto} />
            </div>

            <div className="flex-1 flex items-center justify-end">
                <Image
                    src="/fotoAccordion.png"
                    alt="Photo of happy dogs"
                    width={1200}
                    height={1200}
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    );
}