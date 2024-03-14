export const OffcanvasData = [
    {
        id: 1,
        title: 'Home',
        link: '/',
        cName: 'has-children',
        submenu: [
            {
                id: 'home-01',
                link: '/',
                text: 'Home 1',
                cName: '',
            },
        ],
    },
    {
        id: 2,
        title: 'Shop',
        cName: 'has-children',
        submenu: [
            {
                id: 'home-01',
                link: '/products/3-columns',
                text: 'Home 1',
                cName: '',
            },
            {
                id: 'product-pages',
                link: '#',
                text: 'Product Pages',
                cName: 'sub-children',
                levelTwo: [
                    {
                        id: '3-columns',
                        link: '/products/3-columns',
                        text: 'Product 3 Columns',
                    },
                    {
                        id: '4-columns',
                        link: '/products/4-columns',
                        text: 'Product 4 Columns',
                    },
                    {
                        id: '5-columns',
                        link: '/products/5-columns',
                        text: 'Product 5 Columns',
                    },
                    {
                        id: '6-columns',
                        link: '/products/6-columns',
                        text: 'Product 6 Columns',
                    },
                    {
                        id: 'categories',
                        link: '/products/categories',
                        text: 'Product Categories',
                    },
                    {
                        id: 'carousel',
                        link: '/products/carousel',
                        text: 'Product Carousel',
                    },
                    {
                        id: 'left-sidebar',
                        link: '/products/left-sidebar',
                        text: 'Product Left Sidebar',
                    },
                    {
                        id: 'right-sidebar',
                        link: '/products/right-sidebar',
                        text: 'Product Right Sidebar',
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        title: 'Pages',
        cName: 'has-children',
        submenu: [
            {
                id: 'other-01',
                link: '/about',
                text: 'About Us',
                cName: '',
            },
            {
                id: 'other-02',
                link: '/contact',
                text: 'Contact',
                cName: '',
            },
            {
                id: 'other-03',
                link: '/faq',
                text: 'FAQ Page',
                cName: '',
            },
            {
                id: 'other-04',
                link: '/coming-soon',
                text: 'Coming Soon',
                cName: '',
            },
        ],
    },
    {
        id: 4,
        title: 'Blog',
        cName: 'has-children',
        submenu: [
            {
                id: 'blog-default',
                link: '/blogs/default',
                text: 'Blog 1',
                cName: '',
            },
        ],
    },
];
