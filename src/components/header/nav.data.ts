import type { NavItem } from './nav.types';

export const navData: NavItem[] = [
    {
        id: 'home',
        label: 'Home',
        type: 'link',
        href: '/',

    },
    {
        id: 'shop',
        label: 'Shop',
        type: 'link',
        href: '/shop',

    },
    {
        id: 'about',
        label: 'About',
        type: 'link',
        href: '/about',

    },
    {
        id: 'categories',
        label: 'Categories',
        type: 'popover',
        items: [
            {
                id: 'tech',
                label: 'Tech',
                description: 'tech stuff description',
                href: '/shop'
            },
            {
                id: 'moda',
                label: 'Moda',
                description: 'moda stuff description',
                href: '/shop'
            },
            {
                id: 'gadgets',
                label: 'Gadgets',
                description: 'gadgets stuff description',
                href: '/shop'
            },
            {
                id: 'clothes',
                label: 'Clothes',
                description: 'clothes stuff description',
                href: '/shop'
            },
        ]

    },
    {
        id: 'jobs',
        label: 'Jobs',
        type: 'popover',
        items: [
            {
                id: 'logistics-and-distribution',
                label: 'Logistics & Distribution',
                description: 'Logistics & Distribution description',
                href: '/jobs'
            },
            {
                id: 'frontend-developer',
                label: 'Frontend Developer',
                description: 'Frontend Dev description',
                href: '/jobs'
            },
            {
                id: 'backend-developer',
                label: 'Backend Developer',
                description: 'Backend Dev description',
                href: '/jobs'
            },
            {
                id: 'hr',
                label: 'HR',
                description: 'HR description',
                href: '/jobs'
            },
        ]

    },
]