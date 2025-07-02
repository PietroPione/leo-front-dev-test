import CardBenefici from "./CardBenefici";
import Image from "next/image";

export default function Acqua({ data }) {
    return (
        <section
            className="contain absolute inset-0 min-h-[300px] h-auto md:h-[35vh] w-full md:w-[35vw] relative"
            style={{
                backgroundImage: data.backgroundAcqua ? `url('/${data.backgroundAcqua}')` : undefined,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left",
                backgroundSize: "contain",
            }}
        >
            {/* Mostra l'immagine solo su mobile */}
            {data.backgroundAcqua && (
                <div className="block md:hidden w-full mb-10">
                    <Image
                        src={`/${data.backgroundAcqua}`}
                        alt="Background mobile"
                        width={600}
                        height={400}
                        className="w-full h-auto object-contain"
                        priority
                    />
                </div>
            )}
            {/* Primo: centrato in alto */}
            <CardBenefici
                icon={data.beneficioAcqua1?.icona}
                testo={data.beneficioAcqua1?.testo}
                className="md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 mb-4 md:mb-0"
            />
            {/* Secondo: a sinistra, circa a 40% in verticale */}
            <CardBenefici
                icon={data.beneficioAcqua3?.icona}
                testo={data.beneficioAcqua3?.testo}
                className="md:absolute md:left-0 md:top-[33%] md:-translate-y-1/3 mb-4 md:mb-0"
            />
            {/* Terzo: a destra, circa a 60% in verticale */}
            <CardBenefici
                icon={data.beneficioAcqua2?.icona}
                testo={data.beneficioAcqua2?.testo}
                className="md:absolute md:right-0 md:top-[40%] md:-translate-y-1/2 mb-4 md:mb-0"
            />
        </section>
    );
}