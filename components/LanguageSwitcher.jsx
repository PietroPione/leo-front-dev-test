'use client';

import { useRouter, usePathname, useParams } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import { getSlugInLocale } from '@/lib/slugMap';

export default function LanguageSwitch({ onLanguageChange }) {
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


            if (newPathSegments.length > localeIndex + 1) {
                const currentSlug = newPathSegments[localeIndex + 1];
                const translatedSlug = getSlugInLocale(currentSlug, currentLang, newLocale);
                newPathSegments[localeIndex + 1] = translatedSlug;
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
        <div className="flex space-x-2">
            <ul className="flex space-x-2">
                {locales.map((localeItem) => (
                    <li key={localeItem.code}>
                        <button
                            className={`
                                text-lg border rounded-lg flex items-center justify-center w-12 h-12 uppercase
                                ${localeItem.code === currentLang ? 'bg-blue text-white cursor-default' : 'active:bg-blue hover:text-gray-800'}
                            `}
                            onClick={() => changeLanguage(localeItem.code)}
                            disabled={localeItem.code === currentLang}
                            aria-current={localeItem.code === currentLang ? 'page' : undefined}
                        >
                            {localeItem.code}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}