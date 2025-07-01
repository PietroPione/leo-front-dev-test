import HeaderClient from './HeaderClient';
import { menuItems } from './menuItems';

export default function HeaderServer({ reverse }) {
    return <HeaderClient menuItems={menuItems} reverse={reverse} />;
}