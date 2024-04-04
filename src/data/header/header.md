---
headerLogo:
    [
        {
            id: 'logo-01',
            darkLogo: '/images/logo/dark-logo.png',
            darkLogoAlt: 'Header Logo',
        },
    ]
socialTitle: ''
socialList:
    [
        {
            id: 01,
            socialIcon: 'FaInstagram',
            path: 'https://www.instagram.com/monetuk3/',
        },
        { id: 02, socialIcon: 'FaTwitter', path: 'https://twitter.com/MonetK88651' },
        { id: 03, socialIcon: 'FaYoutube', path: 'https://www.youtube.com/@MONETUK' },
    ]
homeBoxedMenu:
    [
        {
            id: 1,
            title: 'Home',
            path: '/',
            holderCName: 'header-submenu-holder group',
            submenuCName: 'header-submenu',
            headerSubmenu:
                [
                    {
                        id: 'home-default',
                        submenuTitle: 'Home V1 – Default',
                        submenuPath: '/',
                    },
                    {
                        id: 'home-boxed',
                        submenuTitle: 'Home V2 – Boxed',
                        submenuPath: '/home-boxed',
                    },
                    {
                        id: 'home-carousel',
                        submenuTitle: 'Home V3 – Carousel',
                        submenuPath: '/home-carousel',
                    },
                ],
        },
        {
            id: 2,
            title: 'Products',
            path: '/products/left-sidebar',
            holderCName: 'header-megamenu-holder group',
            megamenuCName: 'header-megamenu',
            headerMegamenu:
                [
                    {
                        id: 'group-one',
                        groupName: 'Group One',
                        groupItems:
                            [
                                {
                                    id: 'product-3-columns',
                                    megamenuTitle: 'Product 3 Columns',
                                    megamenuPath: '/products/3-columns',
                                },
                                {
                                    id: 'product-4-columns',
                                    megamenuTitle: 'Product 4 Columns',
                                    megamenuPath: '/products/4-columns',
                                },
                                {
                                    id: 'product-5-columns',
                                    megamenuTitle: 'Product 5 Columns',
                                    megamenuPath: '/products/5-columns',
                                },
                                {
                                    id: 'product-6-columns',
                                    megamenuTitle: 'Product 6 Columns',
                                    megamenuPath: '/products/6-columns',
                                },
                            ],
                    },
                    {
                        id: 'related-product',
                        groupName: 'Related Product',
                        groupItems:
                            [
                                {
                                    id: 'cart',
                                    megamenuTitle: 'Cart',
                                    megamenuPath: '/cart',
                                },
                                {
                                    id: 'checkout',
                                    megamenuTitle: 'Checkout',
                                    megamenuPath: '/checkout',
                                },
                                {
                                    id: 'wishlist',
                                    megamenuTitle: 'Wishlist',
                                    megamenuPath: '/wishlist',
                                },
                            ],
                    },
                    { id: 'empty-list', groupName: '', groupItems: [] },
                ],
        },
        {
            id: 3,
            title: 'Pages',
            path: '/',
            holderCName: 'header-submenu-holder group',
            submenuCName: 'header-submenu',
            headerSubmenu:
                [
                    {
                        id: 'about',
                        submenuTitle: 'About Us',
                        submenuPath: '/about',
                    },
                    {
                        id: 'contact',
                        submenuTitle: 'Contact',
                        submenuPath: '/contact',
                    },
                    {
                        id: 'faq',
                        submenuTitle: 'FAQ',
                        submenuPath: '/faq',
                    },
                    {
                        id: 'coming-soon',
                        submenuTitle: 'Coming Soon',
                        submenuPath: '/coming-soon',
                    },
                ],
        },
    ]
---
