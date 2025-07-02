import { useState } from "react";
import GenericButton from "./GenericButton";
import Image from "next/image";
import AccordionCard from "./AccordionCard";

export default function Accordion({ data }) {
    const [openIdx, setOpenIdx] = useState(null);

    return (

        <div className="relative bg-[#E0EEFF] pt-32">
            <section className="flex flex-col md:flex-row justify-between rounded-t-2xl bg-white relative z-10 overflow-visible md:min-h-[350px]">
                <div className="flex-1 order-1 md:order-2 flex items-center min-h-[280px] justify-end relative">
                    <Image
                        src="/fotoAccordion.png"
                        alt="Photo of happy dogs"
                        width={700}
                        height={700}
                        className="object-contain absolute -top-20 right-0 z-20 max-h-[45vh] xl:max-h-[75vh] 2xl:max-h-[65vh]"
                        priority
                    />
                </div>
                <div className="flex-1 order-2 md:order-1 container md:pl-[5vw] flex justify-end flex-col gap-4 md:gap-y-7 py-16">
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
            </section>
        </div>
    );
}