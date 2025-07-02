import CardBenefici from "./CardBenefici";

export default function Acqua({ data }) {
    return (
        <section
            className="contain absolute inset-0 h-[35vh] w-[35vw] relative"
            style={{
                backgroundImage: data.backgroundAcqua ? `url('/${data.backgroundAcqua}')` : undefined,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "top left",
                backgroundSize: "contain",
            }}
        >
            {/* Primo: centrato in alto */}
            <CardBenefici
                icon={data.beneficioAcqua1?.icona}
                testo={data.beneficioAcqua1?.testo}
                className="absolute top-0 left-1/2 -translate-x-1/2"
            />
            {/* Secondo: a sinistra, circa a 40% in verticale */}
            <CardBenefici
                icon={data.beneficioAcqua3?.icona}
                testo={data.beneficioAcqua3?.testo}
                className="absolute left-0 top-[33%] -translate-y-1/3"
            />
            {/* Terzo: a destra, circa a 60% in verticale */}
            <CardBenefici
                icon={data.beneficioAcqua2?.icona}
                testo={data.beneficioAcqua2?.testo}
                className="absolute right-0 top-[40%] -translate-y-1/2"
            />
        </section>
    );
}