import CardBenefici from "./CardBenefici";
import Image from "next/image";

export default function Lorem({ data }) {
    return (
        <section
            className="contain min-h-[300px] h-auto w-full md:w-[50vw] relative md:absolute md:bottom-0 md:right-0 md:h-[50vh]"
            style={{
                backgroundImage: data.backgroundLorem ? `url('/${data.backgroundLorem}')` : undefined,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left",
                backgroundSize: "contain",
            }}
        >
            {/* Mostra l'immagine solo su mobile */}
            {data.backgroundLorem && (
                <div className="block md:hidden w-full mb-10">
                    <Image
                        src={`/${data.backgroundLorem}`}
                        alt="Background mobile"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            )}
            {/* lorem1: in alto a sinistra */}
            <CardBenefici
                icon={data.beneficioLorem1?.icona}
                testo={data.beneficioLorem1?.testo}
                className="lg:absolute lg:top-4 lg:left-[15%] mb-4 md:mb-0"
            />
            {/* lorem2: in alto a destra */}
            <CardBenefici
                icon={data.beneficioLorem2?.icona}
                testo={data.beneficioLorem2?.testo}
                className="lg:absolute lg:top-4 lg:right-[10%] mb-4 md:mb-0"
            />
            {/* lorem3: centrato */}
            <CardBenefici
                icon={data.beneficioLorem3?.icona}
                testo={data.beneficioLorem3?.testo}
                className="lg:absolute lg:top-[30%] lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 mb-4 md:mb-0"
            />
            {/* lorem4: in basso a sinistra */}
            <CardBenefici
                icon={data.beneficioLorem4?.icona}
                testo={data.beneficioLorem4?.testo}
                className="lg:absolute lg:bottom-[45%] lg:left-0 mb-4 md:mb-0"
            />
            {/* lorem5: in basso a destra */}
            <CardBenefici
                icon={data.beneficioLorem5?.icona}
                testo={data.beneficioLorem5?.testo}
                className="lg:absolute lg:bottom-[47%] lg:right-[5%]"
            />
        </section>
    );
}