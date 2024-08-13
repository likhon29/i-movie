import { Navigation } from '@/types'
import {
    BanknotesIcon as BanknotesIconOutline,
    CheckBadgeIcon as CheckBadgeIconOutline,
    CogIcon as CogIconOutline,
    Squares2X2Icon as Squares2X2IconOutline,
    TrophyIcon as TrophyIconOutline,
    UsersIcon as UsersIconOutline,
} from '@heroicons/react/24/outline'
import {
    BanknotesIcon as BanknotesIconSolid,
    CheckBadgeIcon as CheckBadgeIconSolid,
    CogIcon as CogIconSolid,
    Squares2X2Icon as Squares2X2IconSolid,
    TrophyIcon as TrophyIconSolid,
    UsersIcon as UsersIconSolid,
} from '@heroicons/react/24/solid'

// Define the type for the navigation item
interface NavigationItem {
    name: string;
    href: string;
    inactiveIcon: React.ComponentType; // or the appropriate type for the icon components
    activeIcon: React.ComponentType;   // or the appropriate type for the icon components
}

// Define the type for the entire navigation structure
export interface NavigationsProps {
    menu?: NavigationItem[];
    library?: NavigationItem[];
    category?: NavigationItem[];
    general?: NavigationItem[];
}


export const participantNavigations: NavigationsProps = {
    menu: [
        {
            name: 'Home',
            href: '/home',
            inactiveIcon: Squares2X2IconOutline,
            activeIcon: Squares2X2IconSolid,
        },
        {
            name: 'Community',
            href: '/community',
            inactiveIcon: BanknotesIconOutline,
            activeIcon: BanknotesIconSolid,
        },
        {
            name: 'Discover',
            href: '/discover',
            inactiveIcon: UsersIconOutline,
            activeIcon: UsersIconSolid,
        },
        {
            name: 'Awards',
            href: '/adwards',
            inactiveIcon: CogIconOutline,
            activeIcon: CogIconSolid,
        },
    ],
    library: [
        {
            name: 'Recent',
            href: '/recent',
            inactiveIcon: Squares2X2IconOutline,
            activeIcon: Squares2X2IconSolid,
        },
        {
            name: 'Top Rated',
            href: '/top-rated',
            inactiveIcon: BanknotesIconOutline,
            activeIcon: BanknotesIconSolid,
        },
        {
            name: 'Downloaded',
            href: '/downloaded',
            inactiveIcon: UsersIconOutline,
            activeIcon: UsersIconSolid,
        },

    ],
    category: [
        {
            name: 'TV-Show',
            href: '/tv-show',
            inactiveIcon: Squares2X2IconOutline,
            activeIcon: Squares2X2IconSolid,
        },
        {
            name: 'Movie',
            href: '/movie',
            inactiveIcon: BanknotesIconOutline,
            activeIcon: BanknotesIconSolid,
        },
        {
            name: 'Anime',
            href: '/anime',
            inactiveIcon: UsersIconOutline,
            activeIcon: UsersIconSolid,
        },
    ],
    general: [
        {
            name: 'Settings',
            href: '/settings',
            inactiveIcon: Squares2X2IconOutline,
            activeIcon: Squares2X2IconSolid,
        },
        {
            name: 'Logout',
            href: '/logout',
            inactiveIcon: BanknotesIconOutline,
            activeIcon: BanknotesIconSolid,
        },

    ],
};

export const adminNavigations: NavigationsProps = {

};



