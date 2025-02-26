import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['fr', 'en', 'eus'],

    defaultLocale: 'fr',
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);