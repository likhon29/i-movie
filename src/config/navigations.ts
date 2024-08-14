import { Navigation } from '@/types'
import {
    BanknotesIcon as BanknotesIconOutline,
    CheckBadgeIcon as CheckBadgeIconOutline,
    CogIcon as CogIconOutline,
    Squares2X2Icon as Squares2X2IconOutline,
    TrophyIcon as TrophyIconOutline,
    UsersIcon as UsersIconOutline,
    InboxArrowDownIcon as InboxArrowDownIconOutline,
    Cog6ToothIcon as Cog6ToothIconOutline,
    ArrowLeftEndOnRectangleIcon as ArrowLeftEndOnRectangleOutline,
    FilmIcon as FilmIconOutline,
    ReceiptRefundIcon as ReceiptRefundIconOutline,
    StarIcon as StarIconOutline,
    SquaresPlusIcon as SquaresPlusIconOutline,
    HomeIcon as HomeIconOutline,
    BugAntIcon as BugAntIconOutline,
} from '@heroicons/react/24/outline'
import {
    BanknotesIcon as BanknotesIconSolid,
    CheckBadgeIcon as CheckBadgeIconSolid,
    CogIcon as CogIconSolid,
    Squares2X2Icon as Squares2X2IconSolid,
    TrophyIcon as TrophyIconSolid,
    UsersIcon as UsersIconSolid,
    InboxArrowDownIcon as InboxArrowDownIconSolid,
    Cog6ToothIcon as Cog6ToothIconSolid,
    ArrowLeftEndOnRectangleIcon as ArrowLeftEndOnRectangleSolid,
    FilmIcon as FilmIconSolid,
    ReceiptRefundIcon as ReceiptRefundIconSolid,
    StarIcon as StarIconSolid,
    SquaresPlusIcon as SquaresPlusIconSolid,
    HomeIcon as HomeIconSolid,
    BugAntIcon as BugAntIconSolid,
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


export const subscriberNavigations: NavigationsProps = {
    menu: [
        {
            name: 'Home',
            href: '/home',
            inactiveIcon: HomeIconOutline,
            activeIcon: HomeIconSolid,
        },
        {
            name: 'Community',
            href: '/community',
            inactiveIcon: UsersIconOutline,
            activeIcon: UsersIconSolid,
        },
        {
            name: 'Discover',
            href: '/discover',
            inactiveIcon: SquaresPlusIconOutline,
            activeIcon: SquaresPlusIconSolid,
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
            inactiveIcon: ReceiptRefundIconOutline,
            activeIcon: ReceiptRefundIconSolid,
        },
        {
            name: 'Top Rated',
            href: '/top-rated',
            inactiveIcon: StarIconOutline,
            activeIcon: StarIconSolid,
        },
        {
            name: 'Downloaded',
            href: '/downloaded',
            inactiveIcon: InboxArrowDownIconOutline,
            activeIcon: InboxArrowDownIconSolid,
        },

    ],
    category: [
        {
            name: 'TV-Show',
            href: '/tv-show',
            inactiveIcon: BanknotesIconOutline,
            activeIcon: BanknotesIconSolid,
        },
        {
            name: 'Movie',
            href: '/movie',
            inactiveIcon: FilmIconOutline,
            activeIcon: FilmIconSolid,
        },
        {
            name: 'Anime',
            href: '/anime',
            inactiveIcon: BugAntIconOutline,
            activeIcon: BugAntIconSolid,
        },
    ],
    general: [
        {
            name: 'Settings',
            href: '/settings',
            inactiveIcon: Cog6ToothIconOutline,
            activeIcon: Cog6ToothIconSolid,
        },
        {
            name: 'Logout',
            href: '/logout',
            inactiveIcon: ArrowLeftEndOnRectangleOutline,
            activeIcon: ArrowLeftEndOnRectangleSolid,
        },

    ],
};

export const adminNavigations: NavigationsProps = {

};



