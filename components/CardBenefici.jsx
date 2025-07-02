export default function CardBenefici({ icon, testo, className = "" }) {
    const IconComponent = icon ? require(`./${icon}.js`).default : null;

    return (
        <div className={`inline-flex items-center bg-[var(--blue-leo)]/40 rounded-2xl pl-2 py-2 pr-8 w-auto max-w-full ${className}`}>
            <div className="flex-shrink-0 w-10 h-10 flex items-center justify-center mr-4 bg-[#F4F5F5] rounded-xl">
                {IconComponent && <IconComponent className="w-8 h-8" />}
            </div>
            <div className="text-sm text-white whitespace-pre-line">{testo}</div>
        </div>
    );
}