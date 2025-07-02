'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { getSlugInLocale } from '@/lib/slugMap';
import { menuItems } from '@/components/menuItems'; // importa il tuo array menuItems

export default function LanguageSwitch({ onLanguageChange, isOpen }) {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const { i18n } = useTranslation();

    const locales = [
        { code: 'it', name: 'Italiano' },
        { code: 'en', name: 'English' },
    ];

    const currentLang = params.locale || i18n.language || 'it';

    useEffect(() => {
        if (i18n.language !== currentLang) {
            i18n.changeLanguage(currentLang);
        }
    }, [currentLang, i18n]);

    const changeLanguage = (newLocale) => {
        const currentPathSegments = pathname.split('/').filter(segment => segment !== '');
        const localeIndex = currentPathSegments.indexOf(currentLang);

        let newPathSegments;
        if (localeIndex !== -1) {
            newPathSegments = [...currentPathSegments];
            newPathSegments[localeIndex] = newLocale;

            // Cerca lo slug corrente nei menuItems
            if (newPathSegments.length > localeIndex + 1) {
                const currentSlug = newPathSegments[localeIndex + 1];

                // Trova la voce di menu corrispondente allo slug corrente e lingua corrente
                const menuItem = menuItems.find(item => item.slug[currentLang] === '/' + currentSlug);

                // Se esiste, prendi lo slug nella nuova lingua
                if (menuItem && menuItem.slug[newLocale]) {
                    newPathSegments[localeIndex + 1] = menuItem.slug[newLocale].replace(/^\//, '');
                }
            }
        } else {
            newPathSegments = [newLocale, ...currentPathSegments];
        }

        const newPath = '/' + newPathSegments.join('/');

        router.push(newPath);
        i18n.changeLanguage(newLocale);
        if (onLanguageChange) onLanguageChange();
    };

    return (
        <div className="flex">
            <ul className="flex items-center space-x-0">
                {
                    locales.map((localeItem, idx) => (
                        <li key={localeItem.code} className="flex items-center">
                            <button
                                className={`
                                text-base flex items-center justify-center w-12 h-12 uppercase
                                ${localeItem.code === currentLang
                                        ? `${isOpen ? 'text-blue' : 'text-white'} underline cursor-default`
                                        : `${isOpen ? 'text-blue' : 'text-white'} hover:scale-110 transition duration-200`}
                            `}
                                onClick={() => changeLanguage(localeItem.code)}
                                disabled={localeItem.code === currentLang}
                                aria-current={localeItem.code === currentLang ? 'page' : undefined}
                            >
                                {localeItem.code}
                            </button>
                            {idx < locales.length - 1 && (
                                <span className="mx-1 text-gray-400 select-none">|</span>
                            )}
                        </li>
                    ))
                }
            </ul >
        </div >
    );
}