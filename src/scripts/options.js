let options = [
    {
        sections: [
            {
                // SECTION - Tweaks
                name: "Tweaks",
                index: "0",
                pages: [
                    // SUBSECTION - Databases
                    {
                        name: "Databases",
                        id: "MenuTweaksDatabases",
                        icon: "icons/database.png",
                        sectionIndex: "0",
                        pageIndex: "0",
                        subSections: [
                            // GROUP - All Views
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
                            // GROUP - Table Views
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
                                    {
                                        label: "Center All Cells",
                                        sublabel: "Centers all cells in tables.",
                                        type: "toggle",
                                        class: "--nst_tweak-centered-cells",
                                    },
                                    {
                                        label: "Rounded Checkboxes",
                                        sublabel: "Rounds and centers checkboxes in table cells.",
                                        type: "toggle",
                                        class: "--nst_tweak-rounded-table-checkboxes",
                                    },
                                    {
                                        label: "Header Cell Row Background",
                                        sublabel: "Adds a subtle background to the header cell rows.",
                                        type: "toggle",
                                        class: "--nst_tweak-header-cell-row-background",
                                    },
                                    
                                ],
                            },
                            // GROUP - List Views
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
                            // GROUP - Board Views
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
                            // GROUP - Gallery Views
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
                            // GROUP - Calendar Views
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
                            // GROUP - Timeline Views
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
                    // !SUBSECTION
                    // SUBSECTION - Pages & Blocks
                    {
                        name: "Pages & Blocks",
                        id: "MenuTweaksPagesBlocks",
                        icon: "icons/page.png",
                        sectionIndex: "0",
                        pageIndex: "1",
                        subSections: [
                            // GROUP - Block Pages
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
                            // GROUP - Database Pages
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
                            // GROUP - Blocks
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
                    // !SUBSECTION
                    // SUBSECTION - Text & Font
                    {
                        name: "Text & Font",
                        id: "MenuTweaksTextFont",
                        icon: "icons/text.png",
                        sectionIndex: "0",
                        pageIndex: "2",
                        subSections: [
                            // GROUP - Headers
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
                            // GROUP - Containers
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
                            // GROUP - Regular Text
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
                    // !SUBSECTION
                    // SUBSECTION - Sidebar
                    {
                        name: "Sidebar",
                        id: "MenuTweaksSidebar",
                        icon: "icons/sidebar.png",
                        sectionIndex: "0",
                        pageIndex: "3",
                        subSections: [
                            // GROUP - Layout
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
                            // GROUP - Pages
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
                            // GROUP - Options
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
                // !SUBSECTION
                ],
            },
            // !SECTION
            // SECTION - Theming
            {
                name: "Theming",
                index: "1",
                pages: [
                    // SUBSECTION - Colors
                    {
                        name: "Colors",
                        id: "MenuThemingColors",
                        icon: "icons/theme.png",
                        sectionIndex: "1",
                        pageIndex: "0",
                        subSections: [
                            {
                                name: "Warn",
                                icon: "../icons/warning.png",
                                options: [
                                    {
                                        label: "These settings do not currently work.",
                                        sublabel: "They will be available in an upcoming update.",
                                    }
                                ]
                            },
                            // GROUP - User Colors
                            {
                                name: "User Colors",
                                icon: "../icons/layout.png",
                                options: [
                                    {
                                        label: "Gray",
                                        sublabel: "Color for user set gray elements.",
                                        type: "multicolor",
                                        class: "--nst_theme-gray-user-color",
                                        selector: ['71,76,80'],
                                    },
                                    {
                                        label: "Brown",
                                        sublabel: "Color for user set brown elements.",
                                        type: "multicolor",
                                        class: "--nst_theme-brown-user-color",
                                        selector: ['92,71,61'],
                                    },
                                    {
                                        label: "Yellow",
                                        sublabel: "Color for user set yellow elements.",
                                        type: "multicolor",
                                        class: "--nst_theme-yellow-user-color",
                                        selector: ['146,118,63'],
                                    },
                                    {
                                        label: "Orange",
                                        sublabel: "Color for user set orange elements.",
                                        type: "multicolor",
                                        class: "--nst_theme-orange-user-color",
                                        selector: ['136,84,44'],
                                    },
                                    {
                                        label: "Red",
                                        sublabel: "Color for user set red elements.",
                                        type: "multicolor",
                                        class: "--nst_theme-red-user-color",
                                        selector: ['122,54,59'],
                                    },
                                    {
                                        label: "Blue",
                                        sublabel: "Color for user set blue elements.",
                                        type: "multicolor",
                                        class: "--nst_theme-blue-user-color",
                                        selector: ['42,78,107'],
                                    },
                                    {
                                        label: "Green",
                                        sublabel: "Color for user set green elements.",
                                        type: "multicolor",
                                        class: "--nst_theme-green-user-color",
                                        selector: ['50,82,65','46,68,58','113,178,131',''],
                                    },
                                    {
                                        label: "Pink",
                                        sublabel: "Color for user set pink elements.",
                                        type: "multicolor",
                                        class: "--nst_theme-pink-user-color",
                                        selector: ['106,59,99'],
                                    },
                                    {
                                        label: "Purple",
                                        sublabel: "Color for user set purple elements.",
                                        type: "multicolor",
                                        class: "--nst_theme-purple-user-color",
                                        selector: ['83,68,116'],
                                    },
                                ],
                            },
                        ],                    
                    },
                    // !SUBSECTION
                ],
            },
            // !SECTION
            // SECTION - Hiders
            {
                name: "Hiders",
                index: "2",
                pages: [
                    // SUBSECTION - Databases
                    {
                        name: "Databases",
                        id: "MenuHidersDatabases",
                        icon: "icons/database.png",
                        sectionIndex: "2",
                        pageIndex: "0",
                        subSections: [
                            // GROUP - All Pages
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
                            // GROUP - Table Views
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
                                    {
                                        label: "Hide Column Borders",
                                        sublabel:
                                            "Hides borders between columns in tables.",
                                        type: "toggle",
                                        class: "--nst_hider-column-border",
                                    },
                                    {
                                        label: "Hide Row Borders",
                                        sublabel:
                                            "Hides borders between rows in tables.",
                                        type: "toggle",
                                        class: "--nst_hider-row-border",
                                    },
                                    {
                                        label: "Hide Header Row Border",
                                        sublabel:
                                            "Hides borders on header row.",
                                        type: "toggle",
                                        class: "--nst_hider-header-row-border",
                                    },
                                    {
                                        label: "Hide Calculation Row",
                                        sublabel:
                                            "Hides the calculation row in tables.",
                                        type: "toggle",
                                        class: "--nst_hider-calculation-row",
                                    },
                                ],
                            },
                            // GROUP - List Views
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
                            // GROUP - Board Views
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
                            // GROUP - Gallery Views
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
                            // GROUP - Calendar Views
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
                            // GROUP - Timeline Views
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
                    // !SUBSECTION
                    // SUBSECTION - Pages & Blocks
                    {
                        name: "Pages & Blocks",
                        id: "MenuHidersPagesBlocks",
                        icon: "icons/pages.png",
                        sectionIndex: "2",
                        pageIndex: "1",
                        subSections: [
                            // GROUP - Block Pages
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
                            // GROUP - Database Pages
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
                            // GROUP - Blocks
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
                    // !SUBSECTION
                    // SUBSECTION - Text & Font
                    {
                        name: "Text & Font",
                        id: "MenuHidersTextFont",
                        icon: "icons/text.png",
                        sectionIndex: "2",
                        pageIndex: "2",
                        subSections: [
                            // GROUP - Headers
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
                            // GROUP - Containers
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
                            // GROUP - Regular Text
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
                    // !SUBSECTION
                    // SUBSECTION - Sidebar
                    {
                        name: "Sidebar",
                        id: "MenuHidersSidebar",
                        icon: "icons/sidebar.png",
                        sectionIndex: "2",
                        pageIndex: "3",
                        subSections: [
                            // GROUP - Layout
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
                            // GROUP - Pages
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
                            // GROUP - Options
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
                    // !SUBSECTION
                ],
            },
            // !SECTION
            // SECTION - Other
            {
                name: "Other",
                index: "3",
                pages: [
                    // SUBSECTION - Settings
                    {
                        name: "Settings",
                        id: "MenuSettingsLocalTweaks",
                        icon: "icons/setting.png",
                        sectionIndex: "3",
                        pageIndex: "0",
                        subSections: [
                            // GROUP - Layout
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
                    // !SUBSECTION
                    // SUBSECTION - About
                    {
                        name: "About",
                        id: "MenuSettingsCompatibility",
                        icon: "icons/setting.png",
                        sectionIndex: "3",
                        pageIndex: "1",
                        subSections: [
                            // GROUP - Layout
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
                    // !SUBSECTION
                ],
            },
        ],
    },
];

export default options;
