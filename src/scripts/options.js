let options = {
  // SECTION - Databases
  Databases: {
    // SUBSECTION - All
    All: {
      id: 'DatabasesAll',
      icon: '../icons/database.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [
            {
              label: 'Inline Controls Always Visible',
              sublabel: 'Makes the database controls toolbar always visible.',
              type: 'toggle',
              class: '--nst_tweak-db-controls-visible',
            },
          ],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [
            {
              label: 'Cleaner Database Controls',
              sublabel: 'Button-ifies the database controls.',
              type: 'toggle',
              class: '--nst_tweak-db-controls-buttons',
            },
            {
              label: 'Bigger Grouped Select Headings',
              sublabel:
                'Makes the group headings bigger when grouped by a select property.',
              type: 'toggle',
              class: '--nst_tweak-db-group-select-headings',
            },
          ],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [
            {
              label: 'Hide View Type Icons',
              sublabel:
                'Hides the icon indicators for type of voew in the views list.',
              type: 'toggle',
              class: '--nst_hider-view-type-icon',
            },
            {
              label: 'Hide Link Arrows',
              sublabel: 'Hides the arrow in the title of linked databases.',
              type: 'toggle',
              class: '--nst_hider-link-arrow',
            },
            {
              label: 'Hide Toolbar',
              sublabel: 'Hides the toolbar above databases.',
              type: 'toggle',
              class: '--nst_hider-table-toolbar',
            },
          ],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Tables
    Tables: {
      id: 'DatabasesTables',
      icon: '../icons/table.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [
            {
              label: 'Centered Header Cell Labels',
              sublabel: 'Centers the header text and icons in header cells.',
              type: 'toggle',
              class: '--nst_tweak-centered-header-labels',
            },
            {
              label: 'Center All Cells',
              sublabel: 'Centers all cells in tables.',
              type: 'toggle',
              class: '--nst_tweak-centered-cells',
            },
          ],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [
            {
              label: 'Rounded Checkboxes',
              sublabel: 'Rounds and centers checkboxes in table cells.',
              type: 'toggle',
              class: '--nst_tweak-rounded-table-checkboxes',
            },
            {
              label: 'Header Cell Row Background',
              sublabel: 'Adds a subtle background to the header cell rows.',
              type: 'toggle',
              class: '--nst_tweak-header-cell-row-background',
            },
          ],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [
            {
              label: 'Hide Header Row Icons',
              sublabel: 'Hides the file type icons in the table header.',
              type: 'toggle',
              class: '--nst_hider-header-icon',
            },
            {
              label: 'Hide Page Icons',
              sublabel: 'Hides page icons in table rows.',
              type: 'toggle',
              class: '--nst_hider-table-page-icon',
            },
            {
              label: 'Hide Column Borders',
              sublabel: 'Hides borders between columns in tables.',
              type: 'toggle',
              class: '--nst_hider-column-border',
            },
            {
              label: 'Hide Row Borders',
              sublabel: 'Hides borders between rows in tables.',
              type: 'toggle',
              class: '--nst_hider-row-border',
            },
            {
              label: 'Hide Calculation Row',
              sublabel: 'Hides the calculation row in tables.',
              type: 'toggle',
              class: '--nst_hider-calculation-row',
            },
            {
              label: 'Hide New Page Row',
              sublabel: 'Hides the New + row at the bottom of tables.',
              type: 'toggle',
              class: '--nst_hider-new-page-row',
            },
          ],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Lists
    Lists: {
      id: 'DatabasesLists',
      icon: '../icons/list.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [
            {
              label: 'Last Props First',
              sublabel:
                'Move x number of properties to in front of the page name. Use with page icon hider for best results.',
              type: 'slider',
              sliderOptions: {
                min: 0,
                max: 3,
              },
              class: '--nst_tweak-last-props-first',
            },
          ],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [
            {
              label: 'Rounded Checkboxes',
              sublabel: 'Rounds the checkboxes in the list view.',
              type: 'toggle',
              class: '--nst_tweak-rounded-list-checkboxes',
            },
          ],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [
            {
              label: 'Hide Page Icon',
              sublabel: 'Hides the page icon in the list view.',
              type: 'toggle',
              class: '--nst_hider-list-page-icon',
            },
            {
              label: 'Hide Page Underlines',
              sublabel: 'Hides the underline from pages in the list.',
              type: 'toggle',
              class: '--nst_hider-page-underline',
            },
          ],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Galleries
    Galleries: {
      id: 'DatabasesGalleries',
      icon: '../icons/gallery.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [
            {
              label: 'Covers on Bottom',
              sublabel: 'Make cover content appear below title and properties.',
              type: 'toggle',
              class: '--nst_tweak-gallery-covers-on-bottom',
            },
            {
              label: 'Large Rollup Images',
              sublabel: 'Makes images rolled up from a file property larger.',
              type: 'toggle',
              class: '--nst_tweak-gallery-large-rollup-images',
            },
          ],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [
            {
              label: 'Comfy Cards',
              sublabel: 'Makes gallery cards flatter and more spacious.',
              type: 'toggle',
              class: '--nst_tweak-gallery-comfy-cards',
            },
          ],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [
            {
              label: 'Hide New Button',
              sublabel: 'Hides the new button',
              type: 'toggle',
              class: '--nst_hider-hide-new-page-button-gallery',
            },
          ],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Boards
    Boards: {
      id: 'DatabasesBoards',
      icon: '../icons/board.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [
            {
              label: 'Comfy Cards',
              sublabel: 'Makes board cards flatter and more spacious.',
              type: 'toggle',
              class: '--nst_tweak-board-comfy-cards',
            },
          ],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [
            {
              label: 'Hide Hidden Group Column',
              sublabel: 'Hides the column that shows minimized/hidden groups.',
              type: 'toggle',
              class: '--nst_hider-hide-hidden-groups',
            },
          ],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Calendars
    Calendars: {
      id: 'DatabasesCalendars',
      icon: '../icons/calendar.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Timelines
    Timelines: {
      id: 'DatabasesTimelines',
      icon: '../icons/timeline.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [],
        },
      },
    },
    // !SUBSECTION
  },
  // !SECTION

  // SECTION - Pages and Blocks
  Pages_and_Blocks: {
    // SUBSECTION - All Pages
    All_Pages: {
      id: 'PagesBlocksAll',
      icon: '../icons/pages.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [
            {
              label: 'Floating Page Covers',
              sublabel: 'Makes page covers inset and raised in appearance.',
              type: 'toggle',
              class: '--nst_tweak-page-covers-inset',
            },
            {
              label: 'Floating Toolbar',
              sublabel:
                'Makes the breadcrumb and page options toolbar float over page. Does not currently work well with page header hiders',
              type: 'toggle',
              class: '--nst_tweak-page-covers-toolbar-over',
            },
          ],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Database Pages
    Database_Pages: {
      id: 'PagesBlocksDatabase',
      icon: '../icons/pages.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [
            {
              label: 'Smaller Database Page Titles',
              sublabel:
                'Makes the page titles and icons on database pages smaller.',
              type: 'toggle',
              class: '--nst_tweak-smaller-db-page-titles',
            },
          ],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [
            {
              label: 'Hide Database Page Headers',
              sublabel: 'Hides icon, title, and cover giving more space.',
              type: 'toggle',
              class: '--nst_hider-database-header',
            },
          ],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Block Pages
    Block_Pages: {
      id: 'PagesBlocksBlock',
      icon: '../icons/pages.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [
            {
              label: 'Smaller Page Titles',
              sublabel: 'Makes the title and icon inline and smaller.',
              type: 'toggle',
              class: '--nst_tweak-smaller-block-page-titles',
            },
          ],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [
            {
              label: 'Hide Page Headers',
              sublabel: 'Hides icon, title, and cover giving more space.',
              type: 'toggle',
              class: '--nst_hider-page-header',
            },
          ],
        },
      },
    },
    // !SUBSECTION
  },
  // !SECTION

  // imported fonts
  // Cinzel, Dancing Script, EB Garamond, Fira Code, Inconsolata, Inter, JetBrains Mono, Josefin Sans, Josefin Slab, Lora, Maven Pro, Montserrat, Mulish, Nunito, Open Sans, Oswald, Overpass Mono, Petrona, Playfair Display, Quicksand, Raleway, Roboto Mono, Roboto Slab, Rubik, Source Code Pro, Work Sans

  // SECTION - Text and Font
  Text_and_Font: {
    // SUBSECTION - Fonts
    Fonts: {
      id: 'TextFontFonts',
      icon: '../icons/font.png',
      subSections: {
        // GROUP - Layout
        Fonts: {
          icon: '../icons/font.png',
          options: [
            {
              label: 'Main Font',
              sublabel: 'Changes the font used for most elements.',
              type: 'select',
              class: 'mainFont',
              options: [
                {
                  label: 'Default',
                  value: '--default',
                },
                {
                  label: 'Cinzel',
                  value: '--nst_main_font-cinzel',
                  group: 'Serif',
                },
                {
                  label: 'Dancing Script',
                  value: '--nst_main_font-dancing-script',
                  group: 'Script',
                },
                {
                  label: 'EB Garamond',
                  value: '--nst_main_font-eb-garamond',
                  group: 'Serif',
                },
                {
                  label: 'Fira Code',
                  value: '--nst_main_font-fira-code',
                  group: 'Monospace',
                },
                {
                  label: 'Inconsolata',
                  value: '--nst_main_font-inconsolata',
                  group: 'Monospace',
                },
                {
                  label: 'Inter',
                  value: '--nst_main_font-inter',
                  group: 'Sans-Serif',
                },
                {
                  label: 'JetBrains Mono',
                  value: '--nst_main_font-jetbrains-mono',
                  group: 'Monospace',
                },
                {
                  label: 'Josefin Sans',
                  value: '--nst_main_font-josefin-sans',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Josefin Slab',
                  value: '--nst_main_font-josefin-slab',
                  group: 'Serif',
                },
                {
                  label: 'Lora',
                  value: '--nst_main_font-lora',
                  group: 'Serif',
                },
                {
                  label: 'Maven Pro',
                  value: '--nst_main_font-maven-pro',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Montserrat',
                  value: '--nst_main_font-montserrat',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Mulish',
                  value: '--nst_main_font-mulish',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Nunito',
                  value: '--nst_main_font-nunito',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Open Sans',
                  value: '--nst_main_font-open-sans',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Oswald',
                  value: '--nst_main_font-oswald',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Overpass Mono',
                  value: '--nst_main_font-overpass-mono',
                  group: 'Monospace',
                },
                {
                  label: 'Petrona',
                  value: '--nst_main_font-petrona',
                  group: 'Serif',
                },
                {
                  label: 'Playfair Display',
                  value: '--nst_main_font-playfair-display',
                  group: 'Serif',
                },
                {
                  label: 'Quicksand',
                  value: '--nst_main_font-quicksand',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Raleway',
                  value: '--nst_main_font-raleway',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Roboto Mono',
                  value: '--nst_main_font-roboto-mono',
                  group: 'Monospace',
                },
                {
                  label: 'Roboto Slab',
                  value: '--nst_main_font-roboto-slab',
                  group: 'Serif',
                },
                {
                  label: 'Rubik',
                  value: '--nst_main_font-rubik',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Source Code Pro',
                  value: '--nst_main_font-source-code-pro',
                  group: 'Monospace',
                },
                {
                  label: 'Work Sans',
                  value: '--nst_main_font-work-sans',
                  group: 'Sans-Serif',
                },
              ],
            },
            {
              label: 'Header Font',
              sublabel: 'Changes the font used for headers.',
              type: 'select',
              class: 'headerFont',
              options: [
                {
                  label: 'Default',
                  value: '--default',
                },
                {
                  label: 'Cinzel',
                  value: '--nst_header_font-cinzel',
                  group: 'Serif',
                },
                {
                  label: 'Dancing Script',
                  value: '--nst_header_font-dancing-script',
                  group: 'Script',
                },
                {
                  label: 'EB Garamond',
                  value: '--nst_header_font-eb-garamond',
                  group: 'Serif',
                },
                {
                  label: 'Fira Code',
                  value: '--nst_header_font-fira-code',
                  group: 'Monospace',
                },
                {
                  label: 'Inconsolata',
                  value: '--nst_header_font-inconsolata',
                  group: 'Monospace',
                },
                {
                  label: 'Inter',
                  value: '--nst_header_font-inter',
                  group: 'Sans-Serif',
                },
                {
                  label: 'JetBrains Mono',
                  value: '--nst_header_font-jetbrains-mono',
                  group: 'Monospace',
                },
                {
                  label: 'Josefin Sans',
                  value: '--nst_header_font-josefin-sans',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Josefin Slab',
                  value: '--nst_header_font-josefin-slab',
                  group: 'Serif',
                },
                {
                  label: 'Lora',
                  value: '--nst_header_font-lora',
                  group: 'Serif',
                },
                {
                  label: 'Maven Pro',
                  value: '--nst_header_font-maven-pro',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Montserrat',
                  value: '--nst_header_font-montserrat',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Mulish',
                  value: '--nst_header_font-mulish',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Nunito',
                  value: '--nst_header_font-nunito',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Open Sans',
                  value: '--nst_header_font-open-sans',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Oswald',
                  value: '--nst_header_font-oswald',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Overpass Mono',
                  value: '--nst_header_font-overpass-mono',
                  group: 'Monospace',
                },
                {
                  label: 'Petrona',
                  value: '--nst_header_font-petrona',
                  group: 'Serif',
                },
                {
                  label: 'Playfair Display',
                  value: '--nst_header_font-playfair-display',
                  group: 'Serif',
                },
                {
                  label: 'Quicksand',
                  value: '--nst_header_font-quicksand',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Raleway',
                  value: '--nst_header_font-raleway',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Roboto Mono',
                  value: '--nst_header_font-roboto-mono',
                  group: 'Monospace',
                },
                {
                  label: 'Roboto Slab',
                  value: '--nst_header_font-roboto-slab',
                  group: 'Serif',
                },
                {
                  label: 'Rubik',
                  value: '--nst_header_font-rubik',
                  group: 'Sans-Serif',
                },
                {
                  label: 'Source Code Pro',
                  value: '--nst_header_font-source-code-pro',
                  group: 'Monospace',
                },
                {
                  label: 'Work Sans',
                  value: '--nst_header_font-work-sans',
                  group: 'Sans-Serif',
                },
              ],
            },
            {
              label: 'Mono Font',
              sublabel: 'Changes the font used for monospaced text.',
              type: 'select',
              class: 'monoFont',
              options: [
                {
                  label: 'Default',
                  value: '--default',
                },
                {
                  label: 'Fira Code',
                  value: '--nst_mono_font-fira-code',
                },
                {
                  label: 'Inconsolata',
                  value: '--nst_mono_font-inconsolata',
                },
                {
                  label: 'JetBrains Mono',
                  value: '--nst_mono_font-jetbrains-mono',
                },
                {
                  label: 'Overpass Mono',
                  value: '--nst_mono_font-overpass-mono',
                },
                {
                  label: 'Roboto Mono',
                  value: '--nst_mono_font-roboto-mono',
                },
                {
                  label: 'Source Code Pro',
                  value: '--nst_mono_font-source-code-pro',
                },
              ],
            },
          ],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Headers
    Headers: {
      id: 'TextFontHeaders',
      icon: '../icons/header.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [
            {
              label: 'Comfy Header Blocks',
              sublabel:
                'Headers with backgrounds are given padding and rounded corners.',
              type: 'toggle',
              class: '--nst_tweak-comfy-header-blocks',
            },
          ],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Containers
    Containers: {
      id: 'TextFontContainers',
      icon: '../icons/container.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [
            {
              label: 'Page Blocks as Buttons',
              sublabel: 'Turns page blocks and page link blocks into buttons.',
              type: 'toggle',

              class: '--nst_tweak-page-blocks-as-buttons',
            },
            {
              label: ' Colored Rounded To-Do Block',
              sublabel: 'Makes to-do blocks colored with rounded boxes.',
              type: 'toggle',

              class: '--nst_tweak-colored-rounded-todo-block',
            },
          ],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Regular Text
    Regular_Text: {
      id: 'TextFontRegular',
      icon: '../icons/text.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [
            {
              label: 'Comfy Highlights',
              sublabel: 'Makes highlights have padding and rounded corners.',
              type: 'toggle',
              class: '--nst_tweak-comfy-highlights',
            },
          ],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [],
        },
      },
    },
    // !SUBSECTION
  },
  // !SECTION

  // SECTION - Sidebar
  Sidebar: {
    // SUBSECTION - Pages
    Pages: {
      id: 'SidebarPages',
      icon: '../icons/pages.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [
            {
              label: 'Sidebar spacing',
              sublabel: 'Coming soon...',
              type: 'slider',
              sliderOptions: {
                min: 20,
                max: 64,
              },
              class: '--nst_tweak-sidebar-spacing',
            },
          ],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Options
    Options: {
      id: 'SidebarOptions',
      icon: '../icons/setting.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [
            {
              label: 'Settings as icons on bottom',
              sublabel:
                'Makes the search, updates, and settings options icon buttons and moves them to the bottom of the sidebar.',
              type: 'toggle',
              class: '--nst_tweak-settings-as-icons-on-bottom',
            },
          ],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [
            {
              label: 'Floating Sidebar',
              sublabel: 'Makes the sidebar always appear floating',
              type: 'toggle',
              class: '--nst_tweak-floating-sidebar',
            },
          ],
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: [
            {
              label: 'Hide Templates Option',
              sublabel: 'Hides the templates option in the sidebar.',
              type: 'toggle',
              class: '--nst_hider-templates-option',
            },
            {
              label: 'Hide Import Option',
              sublabel: 'Hides the import option in the sidebar.',
              type: 'toggle',
              class: '--nst_hider-import-option',
            },
            {
              label: 'Hide New Page Button',
              sublabel: 'Hides the new page button on the bottom the sidebar.',
              type: 'toggle',
              class: '--nst_hider-new-page-button',
            },
          ],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Behavior
    Behavior: {
      id: 'SidebarBehavior',
      icon: '../icons/layout.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [
            {
              label: 'Prevent hover reveal',
              sublabel:
                'Prevents the sidebar auto-revealing when hovering near edge of screen.',
              type: 'toggle',
              class: '--nst_tweak-prevent-sidebar-hover-reveal',
            },
          ],
        },
      },
    },
    // !SUBSECTION
  },
  // !SECTION

  // SECTION - Theming
  Theming: {
    // SUBSECTION - Color Themes
    Color_Themes: {
      id: 'ThemeColors',
      icon: '../icons/theme.png',
      subSections: {
        // GROUP - Dark Mode
        Dark_Themes: {
          icon: '../icons/dark.png',
          options: [
            {
              label: 'Default',
              sublabel: 'The default colors of Notion',
              type: 'theme',
              class: '--nst_theme-notion-default',
              image: '../images/themeDark-default.png',
            },
            {
              label: 'Notion Style Tweaks',
              sublabel:
                'The color pallette of Notion Style Tweaks by Eli Wimmer (me)',
              type: 'theme',
              class: '--nst_theme-nst',
              image: '../images/themeDark-nst.png',
            },
            {
              label: 'Nord',
              sublabel:
                'The immensely popular Nord pallette by Arctic Ice Studio & Sven Greb',
              type: 'theme',
              class: '--nst_theme-nord',
              image: '../images/themeDark-nord.png',
            },
            {
              label: 'MacOS',
              sublabel: 'The default colors of macOS Monterey',
              type: 'theme',
              class: '--nst_theme-macos',
              image: '../images/themeDark-macos.png',
            },
            {
              label: 'Gruvbox',
              sublabel: 'A warm and vintage theme by Pavel Pertsev',
              type: 'theme',
              class: '--nst_theme-gruvbox',
              image: '../images/themeDark-gruvbox.png',
            },
            {
              label: 'Gruvbox Deep',
              sublabel: 'A darker deeper version of Gruvbox',
              type: 'theme',
              class: '--nst_theme-gruvbox-deep',
              image: '../images/themeDark-gruvbox-deep.png',
            },
            {
              label: 'Dracula',
              sublabel: 'The dark and purple Dracula theme by Zeno Rocha',
              type: 'theme',
              class: '--nst_theme-dracula',
              image: '../images/themeDark-dracula.png',
            },
          ],
        },
        // GROUP - Style
        Light_Themes: {
          icon: '../icons/light.png',
          options: [],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - Style Themes
    Style_Themes: {
      id: 'ThemeStyles',
      icon: '../icons/theme.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [],
        },
      },
    },
    // !SUBSECTION
  },
  // !SECTION

  // SECTION - Options and About
  Options_and_About: {
    // SUBSECTION - Settings
    Settings: {
      id: 'OptionsSettings',
      icon: '../icons/setting.png',
      subSections: {
        // GROUP - Dark Mode
        Dark_Themes: {
          icon: '../icons/dark.png',
          options: [],
        },
        // GROUP - Style
        Light_Themes: {
          icon: '../icons/light.png',
          options: [],
        },
      },
    },
    // !SUBSECTION

    // SUBSECTION - About
    About: {
      id: 'OptionsAbout',
      icon: '../icons/info.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: [],
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: [],
        },
      },
    },
    // !SUBSECTION
  },
  // !SECTION
}

export default options
