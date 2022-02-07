let options = [
    {
        sections: [
            {
                name: "Tweaks",
                index: "0",
                pages: [
                    {
                        name: "Databases",
                        id: "MenuTweaksDatabases",
                        icon: "icons/database.png",
                        sectionIndex: "0",
                        pageIndex: "0",
                        subSections: [
                            {
                                name: "All Views",
                                icon: "../icons/database.png",
                                options: [
                                    {
                                        label: "Inline Controls Always Visible",
                                        sublabel: "Makes the database controls toolbar always visible.",
                                        type: "toggle",
                                        class: "--nst_tweak-db-controls-visible",
                                    },
                                    {
                                        label: "Cleaner Database Controls",
                                        sublabel: "Button-ifies the database controls.",
                                        type: "toggle",
                                        class: "--nst_tweak-db-controls-buttons",
                                    },
                                ],
                            },
                            {
                                name: "Table Views",
                                icon: "../icons/table.png",
                                options: [
                                    {
                                        label: "Centered Cell Header Labels",
                                        sublabel: "Centers the header text and icons in header cells.",
                                        type: "toggle",
                                        class: "--nst_tweak-centered-header-labels",
                                    },
                                ],
                            },
                            {
                                name: "List Views",
                                icon: "../icons/list.png",
                                options: [
                                    {
                                        label: "Rounded Checkboxes",
                                        sublabel:
                                            "Rounds the checkboxes in the list view.",
                                        type: "toggle",
                                        class: "--nst_tweak-rounded-list-checkboxes",
                                    },
                                ],
                            },
                            {
                                name: "Board Views",
                                icon: "../icons/board.png",
                                options: [
                                    {
                                        label: "Simple Cards",
                                        sublabel: "Makes board cards flat and simple.",
                                        type: "toggle",
                                        class: "--nst_tweak-board-simple-cards",
                                    },
                                ],
                            },
                            {
                                name: "Gallery Views",
                                icon: "../icons/gallery.png",
                                options: [
                                    {
                                        label: "Simple Cards",
                                        sublabel: "Makes gallery cards flat and simple.",
                                        type: "toggle",
                                        class: "--nst_tweak-gallery-simple-cards",
                                    },
                                ],
                            },
                            {
                                name: "Calendar Views",
                                icon: "../icons/calendar.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Timeline Views",
                                icon: "../icons/timeline.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "Pages & Blocks",
                        id: "MenuTweaksPagesBlocks",
                        icon: "icons/page.png",
                        sectionIndex: "0",
                        pageIndex: "1",
                        subSections: [
                            {
                                name: "Block Pages",
                                icon: "../icons/page.png",
                                options: [
                                    {
                                        label: "Floating Page Covers",
                                        sublabel: "Makes page covers inset and raised in appearance.",
                                        type: "toggle",
                                        class: "--nst_tweak-page-covers-inset",
                                    },
                                ],
                            },
                            {
                                name: "Database Pages",
                                icon: "../icons/page.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Blocks",
                                icon: "../icons/block.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "Text & Font",
                        id: "MenuTweaksTextFont",
                        icon: "icons/text.png",
                        sectionIndex: "0",
                        pageIndex: "2",
                        subSections: [
                            {
                                name: "Headers",
                                icon: "../icons/header.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Containers",
                                icon: "../icons/container.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Regular Text",
                                icon: "../icons/text.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "Sidebar",
                        id: "MenuTweaksSidebar",
                        icon: "icons/sidebar.png",
                        sectionIndex: "0",
                        pageIndex: "3",
                        subSections: [
                            {
                                name: "Layout",
                                icon: "../icons/layout.png",
                                options: [
                                    {
                                        label: "Comfy Sidebar",
                                        sublabel:
                                            "Increase the size and spacing of sidebar entries.",
                                        type: "toggle",
                                        class: "--nst_tweak-comfy-sidebar",
                                    },
                                ],
                            },
                            {
                                name: "Pages",
                                icon: "../icons/page.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Options",
                                icon: "../icons/setting.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Theming",
                index: "1",
                pages: [
                    {
                        name: "Coming Soon",
                        id: "MenuThemingComingSoon",
                        icon: "icons/theme.png",
                        sectionIndex: "1",
                        pageIndex: "0",
                        subSections: [
                            {
                                name: "Layout",
                                icon: "../icons/layout.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                        ],                    
                    },
                ],
            },
            {
                name: "Hiders",
                index: "2",
                pages: [
                    {
                        name: "Databases",
                        id: "MenuHidersDatabases",
                        icon: "icons/database.png",
                        sectionIndex: "2",
                        pageIndex: "0",
                        subSections: [
                            {
                                name: "All Views",
                                icon: "../icons/database.png",
                                options: [
                                    {
                                        label: "Hide View Type Icons",
                                        sublabel:
                                            "Hides the icon indicators for type of voew in the views list.",
                                        type: "toggle",
                                        class: "--nst_hider-view-type-icon",
                                    },
                                    {
                                        label: "Hide Link Arrows",
                                        sublabel:
                                            "Hides the arrow in the title of linked databases.",
                                        type: "toggle",
                                        class: "--nst_hider-link-arrow",
                                    },
                                ],
                            },
                            {
                                name: "Table Views",
                                icon: "../icons/table.png",
                                options: [
                                    {
                                        label: "Hide Header Row Icons",
                                        sublabel:
                                            "Hides the file type icons in the table header.",
                                        type: "toggle",
                                        class: "--nst_hider-header-icon",
                                    },
                                ],
                            },
                            {
                                name: "List Views",
                                icon: "../icons/list.png",
                                options: [
                                    {
                                        label: "Hide Page Icon",
                                        sublabel:
                                            "Hides the page icon in the list view.",
                                        type: "toggle",
                                        class: "--nst_hider-list-page-icon",
                                    },
                                    {
                                        label: "Hide Page Underlines",
                                        sublabel:
                                            "Hides the underline from pages in the list.",
                                        type: "toggle",
                                        class: "--nst_hider-page-underline",
                                    },
                                ],
                            },
                            {
                                name: "Board Views",
                                icon: "../icons/board.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Gallery Views",
                                icon: "../icons/gallery.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Calendar Views",
                                icon: "../icons/calendar.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Timeline Views",
                                icon: "../icons/timeline.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "Pages & Blocks",
                        id: "MenuHidersPagesBlocks",
                        icon: "icons/pages.png",
                        sectionIndex: "2",
                        pageIndex: "1",
                        subSections: [
                            {
                                name: "Block Pages",
                                icon: "../icons/page.png",
                                options: [
                                    {
                                        label: "Hide Page Headers",
                                        sublabel: "Hides icon, title, and cover giving more space.",
                                        type: "toggle",
                                        class: "--nst_hider-page-header",
                                    },
                                ],
                            },
                            {
                                name: "Database Pages",
                                icon: "../icons/page.png",
                                options: [
                                    {
                                        label: "Hide Database Page Headers",
                                        sublabel: "Hides icon, title, and cover giving more space.",
                                        type: "toggle",
                                        class: "--nst_hider-database-header",
                                    },
                                ],
                            },
                            {
                                name: "Blocks",
                                icon: "../icons/block.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "Text & Font",
                        id: "MenuHidersTextFont",
                        icon: "icons/text.png",
                        sectionIndex: "2",
                        pageIndex: "2",
                        subSections: [
                            {
                                name: "Headers",
                                icon: "../icons/header.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Containers",
                                icon: "../icons/container.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Regular Text",
                                icon: "../icons/text.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "Sidebar",
                        id: "MenuHidersSidebar",
                        icon: "icons/sidebar.png",
                        sectionIndex: "2",
                        pageIndex: "3",
                        subSections: [
                            {
                                name: "Layout",
                                icon: "../icons/layout.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Pages",
                                icon: "../icons/page.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                            {
                                name: "Options",
                                icon: "../icons/setting.png",
                                options: [
                                    {
                                        label: "Hide Templates Option",
                                        sublabel:
                                            "Hides the templates option in the sidebar.",
                                        type: "toggle",
                                        class: "--nst_hider-templates-option",
                                    },
                                    {
                                        label: "Hide Import Option",
                                        sublabel:
                                            "Hides the import option in the sidebar.",
                                        type: "toggle",
                                        class: "--nst_hider-import-option",
                                    },
                                    {
                                        label: "Hide New Page Button",
                                        sublabel:
                                            "Hides the new page button on the bottom the sidebar.",
                                        type: "toggle",
                                        class: "--nst_hider-new-page-button",
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                name: "Other",
                index: "3",
                pages: [
                    {
                        name: "Settings",
                        id: "MenuSettingsLocalTweaks",
                        icon: "icons/setting.png",
                        sectionIndex: "3",
                        pageIndex: "0",
                        subSections: [
                            {
                                name: "Layout",
                                icon: "../icons/layout.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        name: "About",
                        id: "MenuSettingsCompatibility",
                        icon: "icons/setting.png",
                        sectionIndex: "3",
                        pageIndex: "1",
                        subSections: [
                            {
                                name: "Layout",
                                icon: "../icons/layout.png",
                                options: [
                                    {
                                        label: "Coming Soon",
                                        sublabel: "Coming Soon",
                                        type: "toggle",
                                        class: "--coming-soon",
                                    },
                                ],
                            },
                        ],                    
                    },
                ],
            },
        ],
    },
];

export default options;
