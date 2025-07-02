"use client"
import i18n from '@/lib/i18n';
import Link from 'next/link';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { menuItems } from './menuItems';
import LogoInstagram from './LogoInstagram';
import homepageIt from '@/locales/homepage.json';


const locales = [
    { code: 'it', name: 'Italiano' },
    { code: 'en', name: 'English' },
];

export default function Footer() {
    const pathname = usePathname();
    const router = useRouter();
    const params = useParams();


    const currentLang = params.locale || 'it';

    // Prendi i link dal json (adatta se usi i18n o props)
    const footerLinks = homepageIt.homepage.footer.link;

    return (
        <footer className='p-4 relative bg-white'>
            <div className="flex container bg-blue rounded-3xl justify-center items-center text-white px-16 py-12">
                <div className="z-40 ">

                </div>
                <div>
                    <nav className='flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 space-x-4 md:space-x-8'>
                        <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 space-x-4 md:space-x-8">
                            {menuItems.map((item) => {
                                const slugForLang = item.slug[currentLang] || '/';
                                let cleanSlug = slugForLang.replace(/^\//, '');
                                const itemHref = cleanSlug ? `/${currentLang}/${cleanSlug}` : `/${currentLang}`;

                                return (
                                    <li key={slugForLang}>
                                        <Link
                                            href={itemHref}
                                            className="underline hover:no-underline text-white text-base"
                                        >
                                            {item.testo[currentLang]}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <a href="/" target="_blank">
                            <LogoInstagram className="w-12 h-12 hover:scale-110 transform duration-200" />
                        </a>
                    </nav>
                    <div className='space-y-6 '>

                        <div>
                            <ul className="flex space-x-4 mt-4 md:justify-center">
                                {footerLinks.map((link, idx) => (
                                    <li key={idx}>
                                        <Link
                                            href={link.link}
                                            className="underline hover:no-underline text-white text-sm"
                                        >
                                            {link.testo}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='flex justify-center space-x-2 text-sm'>
                            <span>{homepageIt.homepage.footer.copyright}</span>
                            <span> - </span>
                            <span>{homepageIt.homepage.footer.piva}</span>
                        </div>
                    </div>
                    <div>
                    </div>

                </div>

            </div>
        </footer>
    );
}