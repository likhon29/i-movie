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



export const participantNavigations: Navigation[] = [
    {
        name: 'Events',
        href: '/events',
        inactiveIcon: TrophyIconOutline,
        activeIcon: TrophyIconSolid,
    },
    {
        name: 'Verfication Center',
        href: '/verification-center',
        inactiveIcon: CheckBadgeIconOutline,
        activeIcon: CheckBadgeIconSolid,
    },
    {
        name: 'Settings',
        href: '/settings',
        inactiveIcon: CogIconOutline,
        activeIcon: CogIconSolid,
    },
]

export const adminNavigations: Navigation[] = [
    {
        name: 'Dashboard',
        href: '/dashboard',
        inactiveIcon: Squares2X2IconOutline,
        activeIcon: Squares2X2IconSolid,
    },
    {
        name: 'Events',
        href: '/events',
        inactiveIcon: TrophyIconOutline,
        activeIcon: TrophyIconSolid,
    },
    {
        name: 'Payments',
        href: '/payments',
        inactiveIcon: BanknotesIconOutline,
        activeIcon: BanknotesIconSolid,
    },
    {
        name: 'Users',
        href: '/users',
        inactiveIcon: UsersIconOutline,
        activeIcon: UsersIconSolid,
    },
    {
        name: 'Settings',
        href: '/settings',
        inactiveIcon: CogIconOutline,
        activeIcon: CogIconSolid,
    },
]