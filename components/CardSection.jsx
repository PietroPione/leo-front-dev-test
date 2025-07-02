import GenericCard from './GenericCard';

export default function CardSection({ data }) {
    return (
        <section className="grid md:grid-cols-2 gap-10 md:gap-40 container">
            {data.cards && data.cards.map((card, idx) => (
                <GenericCard
                    key={idx}
                    bg_color={card.bg_color}
                    animale={card.animale}
                    nome_prodotto={card.nome_prodotto}
                    risultato={card.risultato}
                    testo_tasto={card.testo_tasto}
                    link_tasto={card.link_tasto}
                    nome_forma={card.nome_forma}
                    nome_immagine={card.nome_immagine}
                    text_color={card.text_color}
                />
            ))}
        </section>
    );
}