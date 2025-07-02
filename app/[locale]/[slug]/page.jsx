import { menuItems } from '@/components/menuItems';

export default function MenuPage({ params }) {
    const { locale, slug } = params;
    // Trova la voce di menu corrispondente allo slug e alla lingua
    const menuItem = menuItems.find(item => {
        const cleanSlug = (item.slug[locale] || '/').replace(/^\//, '');
        return cleanSlug === slug;
    });

    // Se non trovata, fallback
    const title = menuItem ? menuItem.testo[locale] : slug;

    return (
        <div className="container py-24 flex justify-center items-center min-h-[60vh]">
            <h1 className="text-4xl font-bold text-blue">{title}</h1>
        </div>
    );
}