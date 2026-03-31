export type NavItem =
    | {
        id: string;
        label: string;
        type: 'link';
        href: string;
    }
    | {
        id: string;
        label: string;
        type: 'popover';
        items: NavPopoverItem[];
    }

export type NavPopoverItem = {
    id: string;
    label: string;
    description: string;
    href: string;
};