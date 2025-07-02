import CardBenefici from "./CardBenefici";

export default function Lorem({ data }) {
    return (
        <section
            className="contain absolute bottom-0 right-0 h-[50vh] w-[50vw]"
            style={{
                backgroundImage: data.backgroundLorem ? `url('/${data.backgroundLorem}')` : undefined,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left",
                backgroundSize: "contain",
            }}
        >
            {/* lorem1: in alto a sinistra */}
            <CardBenefici
                icon={data.beneficioLorem1?.icona}
                testo={data.beneficioLorem1?.testo}
                className="absolute top-4 left-[15%]"
            />
            {/* lorem2: in alto a destra */}
            <CardBenefici
                icon={data.beneficioLorem2?.icona}
                testo={data.beneficioLorem2?.testo}
                className="absolute top-4 right-[10%]"
            />
            {/* lorem3: centrato */}
            <CardBenefici
                icon={data.beneficioLorem3?.icona}
                testo={data.beneficioLorem3?.testo}
                className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
            {/* lorem4: in basso a sinistra */}
            <CardBenefici
                icon={data.beneficioLorem4?.icona}
                testo={data.beneficioLorem4?.testo}
                className="absolute bottom-[45%] left-0"
            />
            {/* lorem5: in basso a destra */}
            <CardBenefici
                icon={data.beneficioLorem5?.icona}
                testo={data.beneficioLorem5?.testo}
                className="absolute bottom-[47%] right-[5%]"
            />
        </section>
    );
}