import GenericButton from "./GenericButton";
import Image from "next/image";

export default function Hero({ data }) {
    return (
        <section className="flex justify-between w-full py-20">
            <div className="flex-1 pl-[5vw] flex justify-center flex-col gap-4 md:gap-y-20">
                <h1 className="text-9xl font-bold text-blue">{data.hero_title}</h1>
                <div className="md:space-y-10 max-w-[50%]">

                    <h2 className="text-5xl font-semibold text-blue">{data.hero_subtitle}</h2>
                    <p className="text-lg text-gray-700">{data.hero_copy}</p>
                    <GenericButton url={data.hero_button.link} text={data.hero_button.text} />
                </div>
            </div>

            <div className="flex-1 flex items-center justify-end">
                <Image
                    src="/immagineHero.png"
                    alt="Hero"
                    width={1200}
                    height={1200}
                    className="object-cover"
                    priority
                />
            </div>
        </section>
    );
}