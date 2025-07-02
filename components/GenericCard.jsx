import dynamic from 'next/dynamic';
import Image from 'next/image';
import GenericButton from './GenericButton';

export default function GenericCard({
    bg_color,
    text_color,
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


    const cardTextColor = text_color;

    return (
        <div
            className="rounded-3xl flex flex-row items-stretch max-w-[90vw] lg:max-w-[45vw] lg:min-h-[60vh]"
            style={{ backgroundColor: bg_color }}
        >
            {/* Lato sinistro */}
            <div className="w-1/2 flex flex-col items-start justify-between py-4 md:py-0 pr-2 md:pr-6 pl-4 md:pl-10">
                {FormaComponent && <FormaComponent className="w-28 lg:w-40 xl:w-60 mb-6" />}
                <div className={`flex flex-col space-y-2 w-full pb-10 pl-4 ${cardTextColor}`}>
                    <div className="text-xl md:text-3xl font-bold leading-[110%]">
                        {risultato}
                    </div>
                    <GenericButton
                        url={link_tasto}
                        text={testo_tasto}
                    />
                </div>
            </div>
            {/* Lato destro */}
            <div className={`w-1/2 flex flex-col justify-between items-start pl-4 md:pl-6 ${cardTextColor}`}>
                <div className="space-y-2 w-full pt-10 max-w-[50%]">
                    <div className="text-lg uppercase">
                        {animale}
                    </div>
                    <div className="text-xl md:text-3xl font-bold leading-[110%]">
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