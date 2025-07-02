'use client';

import { usePathname, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import ToggleMenu from './ToggleMenu';
import { useState } from 'react';
import i18n from '@/lib/i18n';
import LanguageSwitch from './LanguageSwitcher';
import Logo from './Logo';



const locales = [
    { code: 'it', name: 'Italiano' },
    { code: 'en', name: 'English' },
];

export default function HeaderClient({ menuItems }) {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();

    const reverse = pathname === '/reverse';
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const currentLang = params.locale || 'it';


    const handleToggleMenu = (isOpen) => {
        setIsMenuOpen(isOpen);
    };

    const changeLanguage = (newLocaleCode) => {
        if (newLocaleCode === currentLang) return;

        i18n.changeLanguage(newLocaleCode);

        const segments = pathname.split('/');

        if (locales.some(l => l.code === segments[1])) {
            segments[1] = newLocaleCode;
        } else {
            segments.splice(1, 0, newLocaleCode);
        }

        const newPath = segments.join('/') || '/';

        router.push(newPath);
    };

    return (
        <header className='p-4 relative'>
            <div className="flex container bg-blue rounded-3xl justify-between items-center text-white px-6 lg:px-12 py-2">
                <div className="z-40 ">
                    <div className="h-12 md:h-16">
                        <Link href={`/${currentLang}`}>
                            <Logo color="white" />
                        </Link>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <nav className='flex flex-row items-center space-x-4 md:space-x-8'>
                        <ul className="flex space-x-4 md:space-x-8">
                            {menuItems.map((item) => {
                                const slugForLang = item.slug[currentLang] || '/';
                                let cleanSlug = slugForLang.replace(/^\//, '');
                                const itemHref = cleanSlug ? `/${currentLang}/${cleanSlug}` : `/${currentLang}`;

                                return (
                                    <li key={slugForLang}>
                                        <Link
                                            href={itemHref}
                                            className="hover:underline text-white text-base"
                                        >
                                            {item.testo[currentLang]}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
                <LanguageSwitch />
                <div className="lg:hidden">
                    <ToggleMenu nav={menuItems} onToggle={handleToggleMenu} />
                </div>
            </div>
        </header>
    );
}