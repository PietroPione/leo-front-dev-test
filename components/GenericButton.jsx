import Link from 'next/link';
import { useParams } from 'next/navigation';

export default function GenericButton({ bgColor, textColor, text, url, target }) {
    const params = useParams();
    const locale = params?.locale || 'it';

    // Se l'url è "/" o vuoto, aggiungi il locale davanti
    const localePath = url === '/' || url === '' ? `/${locale}` : url.startsWith('/') ? `/${locale}${url}` : url;

    const defaultBgColor = 'bg-blue';
    const defaultTextColor = 'text-white';

    const buttonClasses = `
    ${bgColor || defaultBgColor}
    ${textColor || defaultTextColor}
    px-6 py-4 rounded-lg font-semibold
    hover:opacity-90 transition-opacity duration-300
    inline-block text-center
  `;

    return (
        <Link href={localePath} passHref>
            <div
                className={buttonClasses}
                {...(target ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {text}
            </div>
        </Link>
    );
}