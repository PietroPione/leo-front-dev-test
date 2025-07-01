'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LanguageSwitch from './LanguageSwitcher';

export default function ToggleMenu({ nav = [], reverse, onToggle }) {
    const [isOpen, setIsOpen] = useState(false);
    const overlayRef = useRef(null);
    const buttonRef = useRef(null);
    const clickAreaRef = useRef(null);

    const pathname = usePathname();
    const locale = pathname.split('/')[1] || 'it';

    useEffect(() => {
        const handleOutsideEvent = (e) => {
            if (
                overlayRef.current &&
                !overlayRef.current.contains(e.target) &&
                clickAreaRef.current &&
                !clickAreaRef.current.contains(e.target)
            ) {
                setIsOpen(false);
            }
        };

        const handleTouchMove = () => { };

        const handleTouchEnd = (e) => {
            if (isOpen) {
                handleOutsideEvent(e);
            }
        };

        if (isOpen) {
            document.addEventListener('pointerdown', handleOutsideEvent);
            document.addEventListener('touchmove', handleTouchMove);
            document.addEventListener('touchend', handleTouchEnd);
            document.body.classList.add('overflow-hidden');
            onToggle(true);
        } else {
            document.removeEventListener('pointerdown', handleOutsideEvent);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            document.body.classList.remove('overflow-hidden');
            onToggle(false);
        }

        return () => {
            document.removeEventListener('pointerdown', handleOutsideEvent);
            document.removeEventListener('touchmove', handleTouchMove);
            document.removeEventListener('touchend', handleTouchEnd);
            document.body.classList.remove('overflow-hidden');
            onToggle(false);
        };
    }, [isOpen, onToggle]);

    const barColor = reverse ? 'text-white' : 'text-current';

    return (
        <>
            <div
                ref={clickAreaRef}
                className="absolute top-0 right-0 w-32 h-32 z-50 flex justify-center items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <button
                    ref={buttonRef}
                    className="focus:outline-none w-24 h-24"
                    aria-label="Toggle Menu"
                    aria-expanded={isOpen}
                >
                    <div className="w-24 h-24 flex flex-col justify-center items-center gap-1">
                        <span
                            className={`block w-6 h-1 rounded transition-all duration-300 ${isOpen ? 'bg-current translate-y-2 rotate-45 z-50' : `bg-current ${barColor}`}`}
                        ></span>
                        <span
                            className={`block w-6 h-1 rounded transition-opacity duration-300 ${isOpen ? 'opacity-0' : `bg-current opacity-80 ${barColor}`}`}
                        ></span>
                        <span
                            className={`block w-6 h-1 rounded transition-all duration-300 ${isOpen ? 'bg-current -rotate-45 -translate-y-2 z-50' : `bg-current ${barColor}`}`}
                        ></span>
                    </div>
                </button>
            </div>

            <div
                ref={overlayRef}
                className={`fixed inset-0 z-30 bg-white  flex flex-col transition-all duration-500 p-8 ${isOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'}`}
            >
                <ul className="space-y-6 text-center flex-grow flex flex-col justify-center">
                    {nav.map((item) => {
                        const slugForLang = item.slug[locale] || '/';
                        let cleanSlug = slugForLang.replace(/^\//, '');
                        const itemHref = cleanSlug ? `/${locale}/${cleanSlug}` : `/${locale}`;
                        return (
                            <li key={slugForLang} className="uppercase text-2xl ">
                                <Link
                                    href={itemHref}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:underline"
                                >
                                    {item.testo[locale]}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className='flex justify-center'>

                    <LanguageSwitch onLanguageChange={() => setIsOpen(false)} />
                </div>
            </div>
        </>
    );
}