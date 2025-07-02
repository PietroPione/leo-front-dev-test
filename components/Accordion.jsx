import { useState } from "react";
import GenericButton from "./GenericButton";
import Image from "next/image";
import AccordionCard from "./AccordionCard";

export default function Accordion({ data }) {
    const [openIdx, setOpenIdx] = useState(null);

    return (
        // Wrapper con bg e padding-top per lasciare spazio sopra
        <div className="relative bg-[#E0EEFF] pt-32">
            <section className="flex justify-between  rounded-t-2xl bg-white relative z-10">
                <div className="flex-1 pl-[5vw] flex justify-end flex-col gap-4 md:gap-y-7 py-16">
                    <h1 className="text-5xl leading-[120%] font-bold text-blue">{data.accordion.title}</h1>
                    <p className="text-lg text-gray-700">{data.accordion.copy}</p>
                    <div className="space-y-4 mt-8 ">
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

                <div className="flex-1 flex items-center justify-end relative">
                    <Image
                        src="/fotoAccordion.png"
                        alt="Photo of happy dogs"
                        width={700}
                        height={700}
                        className="object-contain max-h-[90vh] xl:max-h-[75vh] 2xl:max-h-[65vh] absolute -top-32 right-0 z-20"
                        priority
                    />
                </div>
            </section>
        </div>
    );
}