import Link from 'next/link';

export default function GenericButton({ bgColor, textColor, text, url, target }) {
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
        <Link href={url} passHref>
            <div
                className={buttonClasses}
                {...(target ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
                {text}
            </div>
        </Link>
    );
}