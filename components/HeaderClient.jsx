'use client';

import { usePathname, useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import ToggleMenu from './ToggleMenu';
import { useState } from 'react';
import i18n from '@/lib/i18n';
import LanguageSwitch from './LanguageSwitcher';



const locales = [
    { code: 'it', name: 'Italiano' },
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'Français' },
];

export default function HeaderClient({ menuItems }) {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();

    const reverse = pathname === '/reverse';
    const [isMenuOpen, setIsMenuOpen] = useState(false);


    const currentLang = params.locale || 'it';

    const headerColor = ` ${reverse ? 'bg-green' : ''}`;

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
        <header className={headerColor}>
            <div className="flex container justify-between items-center px-8 py-2">
                <div className="z-40 " style={{ width: "100px" }}>
                    <Link href={`/${currentLang}`}>
                        <Image
                            src="/LogoAlp.png"
                            alt="PPM.Alpco SA Logo"
                            width={82}    // 100 * 0.823 ≈ 82
                            height={100}
                            style={{ width: "100%", height: "auto" }}
                            priority
                        />
                    </Link>
                </div>
                <div className="hidden md:block">
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
                                            className={`uppercase hover:underline ${reverse ? 'text-white' : ''}`}
                                        >
                                            {item.testo[currentLang]}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <LanguageSwitch />
                    </nav>
                </div>
                <div className="md:hidden">
                    <ToggleMenu nav={menuItems} reverse={reverse} onToggle={handleToggleMenu} />
                </div>
            </div>
        </header>
    );
}