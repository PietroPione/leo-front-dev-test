import dynamic from 'next/dynamic';
import Image from 'next/image';
import GenericButton from './GenericButton';

export default function GenericCard({
    bg_color,
    text_color, // es: "text-blue-500"
    animale,
    nome_prodotto,
    risultato,
    testo_tasto,
    link_tasto,
    nome_forma,
    nome_immagine
}) {
    const FormaComponent = nome_forma
        ? dynamic(() => import(`./${nome_forma}`), { ssr: false })
        : null;

    // Salva la classe colore in una variabile
    const cardTextColor = text_color;

    return (
        <div
            className="rounded-3xl flex flex-row items-stretch lg:max-w-[45vw] min-h-[60vh]"
            style={{ backgroundColor: bg_color }}
        >
            {/* Lato sinistro */}
            <div className="w-1/2 flex flex-col items-start justify-between pr-6 pl-10">
                {FormaComponent && <FormaComponent className="w-40 mb-6" />}
                <div className={`flex flex-col space-y-2 w-full pb-10 ${cardTextColor}`}>
                    <div className="text-3xl font-bold leading-[110%]">
                        {risultato}
                    </div>
                    <GenericButton
                        url={link_tasto}
                        text={testo_tasto}
                    />
                </div>
            </div>
            {/* Lato destro */}
            <div className={`w-1/2 flex flex-col justify-between items-start pl-6 ${cardTextColor}`}>
                <div className="space-y-2 w-full pt-10 max-w-[50%]">
                    <div className="text-lg uppercase">
                        {animale}
                    </div>
                    <div className="text-3xl font-bold leading-[110%]">
                        {nome_prodotto}
                    </div>
                </div>
                <Image
                    src={`/${nome_immagine}`}
                    alt={nome_prodotto}
                    width={400}
                    height={400}
                    className="object-contain mt-6"
                />
            </div>
        </div>
    );
}