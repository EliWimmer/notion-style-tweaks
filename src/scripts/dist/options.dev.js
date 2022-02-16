"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var options = {
  // SECTION - Tweaks
  Tweaks: {
    pages: {
      // SUBSECTION - Databases
      Databases: {
        id: 'MenuTweaksDatabases',
        icon: 'icons/database.png',
        subSections: {
          All: {
            icon: '../icons/database.png',
            options: [// GROUP - All Views
            {
              label: 'Inline Controls Always Visible',
              sublabel: 'Makes the database controls toolbar always visible.',
              type: 'toggle',
              "class": '--nst_tweak-db-controls-visible'
            }, {
              label: 'Cleaner Database Controls',
              sublabel: 'Button-ifies the database controls.',
              type: 'toggle',
              "class": '--nst_tweak-db-controls-buttons'
            }, {
              label: 'Slider Test - Sidebar spacing',
              sublabel: 'Testing slider input',
              type: 'slider',
              sliderOptions: {
                min: 20,
                max: 64
              },
              "class": '--nst_tweak-slide'
            }]
          },
          Table: {
            icon: '../icons/table.png',
            options: [// GROUP - Table Views
            {
              label: 'Centered Header Cell Labels',
              sublabel: 'Centers the header text and icons in header cells.',
              type: 'toggle',
              "class": '--nst_tweak-centered-header-labels'
            }, {
              label: 'Center All Cells',
              sublabel: 'Centers all cells in tables.',
              type: 'toggle',
              "class": '--nst_tweak-centered-cells'
            }, {
              label: 'Rounded Checkboxes',
              sublabel: 'Rounds and centers checkboxes in table cells.',
              type: 'toggle',
              "class": '--nst_tweak-rounded-table-checkboxes'
            }, {
              label: 'Header Cell Row Background',
              sublabel: 'Adds a subtle background to the header cell rows.',
              type: 'toggle',
              "class": '--nst_tweak-header-cell-row-background'
            }]
          },
          List: {
            icon: '../icons/list.png',
            options: [// GROUP - List Views
            {
              label: 'Rounded Checkboxes',
              sublabel: 'Rounds the checkboxes in the list view.',
              type: 'toggle',
              "class": '--nst_tweak-rounded-list-checkboxes'
            }]
          },
          Board: {
            icon: '../icons/board.png',
            options: [// GROUP - Board Views
            {
              label: 'Simple Cards',
              sublabel: 'Makes board cards flat and simple.',
              type: 'toggle',
              "class": '--nst_tweak-board-simple-cards'
            }]
          },
          Gallery: {
            icon: '../icons/gallery.png',
            options: [// GROUP - Gallery Views
            {
              label: 'Simple Cards',
              sublabel: 'Makes gallery cards flat and simple.',
              type: 'toggle',
              "class": '--nst_tweak-gallery-simple-cards'
            }, {
              label: 'Covers on Bottom',
              sublabel: 'Make cover content appear below title and properties.',
              type: 'toggle',
              "class": '--nst_tweak-gallery-covers-on-bottom'
            }, {
              label: 'Large Rollup Images',
              sublabel: 'Makes images rolled up from a file property larger.',
              type: 'toggle',
              "class": '--nst_tweak-gallery-large-rollup-images'
            }]
          },
          Calendar: {
            icon: '../icons/calendar.png',
            options: [// GROUP - Calendar Views
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          Timeline: {
            icon: '../icons/timeline.png',
            options: [// GROUP - Timeline Views
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          }
        }
      },
      // !SUBSECTION
      // SUBSECTION - Pages & Blocks
      Pages_and_Blocks: {
        id: 'MenuTweaksPagesBlocks',
        icon: 'icons/page.png',
        subSections: {
          Block_Pages: {
            icon: '../icons/page.png',
            options: [// GROUP - Block Pages
            {
              label: 'Floating Page Covers',
              sublabel: 'Makes page covers inset and raised in appearance.',
              type: 'toggle',
              "class": '--nst_tweak-page-covers-inset'
            }]
          },
          Database_Pages: {
            icon: '../icons/page.png',
            options: [// GROUP - Database Pages
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          // GROUP - Blocks
          Blocks: {
            icon: '../icons/block.png',
            options: [{
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          }
        }
      },
      // !SUBSECTION
      // SUBSECTION - Text & Font
      Text: {
        id: 'MenuTweaksTextFont',
        icon: 'icons/text.png',
        subSections: {
          Headers: {
            icon: '../icons/header.png',
            options: [// GROUP - Headers
            {
              label: 'Smaller Database Page Titles',
              sublabel: 'Makes the page titles and icons on database pages smaller.',
              type: 'toggle',
              "class": '--nst_tweak-smaller-db-page-titles'
            }]
          },
          Containers: {
            icon: '../icons/container.png',
            options: [// GROUP - Containers
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          Regular_Text: {
            icon: '../icons/text.png',
            options: [// GROUP - Regular Text
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          }
        }
      },
      Sidebar: {
        id: 'MenuTweaksSidebar',
        icon: 'icons/sidebar.png',
        subSections: {
          Layout: {
            icon: '../icons/layout.png',
            options: [// GROUP - Layout
            {
              label: 'Comfy Sidebar',
              sublabel: 'Increase the size and spacing of sidebar entries.',
              type: 'toggle',
              "class": '--nst_tweak-comfy-sidebar'
            }, {
              label: 'Prevent hover reveal',
              sublabel: 'Prevents the sidebar auto-revealing when hovering near edge of screen.',
              type: 'toggle',
              "class": '--nst_tweak-prevent-sidebar-hover-reveal'
            }]
          },
          Pages: {
            icon: '../icons/page.png',
            options: [// GROUP - Pages
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          Options: {
            icon: '../icons/setting.png',
            options: [// GROUP - Options
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          }
        } // !SUBSECTION

      }
    }
  },
  // !SECTION
  // SECTION - Hiders
  Hiders: {
    pages: {
      // SUBSECTION - Databases
      Databases: {
        id: 'MenuHidersDatabases',
        icon: 'icons/database.png',
        subSections: {
          All: {
            icon: '../icons/database.png',
            options: [// GROUP - All Pages
            {
              label: 'Hide View Type Icons',
              sublabel: 'Hides the icon indicators for type of voew in the views list.',
              type: 'toggle',
              "class": '--nst_hider-view-type-icon'
            }, {
              label: 'Hide Link Arrows',
              sublabel: 'Hides the arrow in the title of linked databases.',
              type: 'toggle',
              "class": '--nst_hider-link-arrow'
            }]
          },
          Table: {
            icon: '../icons/table.png',
            options: [// GROUP - Table Views
            {
              label: 'Hide Header Row Icons',
              sublabel: 'Hides the file type icons in the table header.',
              type: 'toggle',
              "class": '--nst_hider-header-icon'
            }, {
              label: 'Hide Column Borders',
              sublabel: 'Hides borders between columns in tables.',
              type: 'toggle',
              "class": '--nst_hider-column-border'
            }, {
              label: 'Hide Row Borders',
              sublabel: 'Hides borders between rows in tables.',
              type: 'toggle',
              "class": '--nst_hider-row-border'
            }, {
              label: 'Hide Header Row Border',
              sublabel: 'Hides borders on header row.',
              type: 'toggle',
              "class": '--nst_hider-header-row-border'
            }, {
              label: 'Hide Calculation Row',
              sublabel: 'Hides the calculation row in tables.',
              type: 'toggle',
              "class": '--nst_hider-calculation-row'
            }]
          },
          List: {
            icon: '../icons/list.png',
            options: [// GROUP - List Views
            {
              label: 'Hide Page Icon',
              sublabel: 'Hides the page icon in the list view.',
              type: 'toggle',
              "class": '--nst_hider-list-page-icon'
            }, {
              label: 'Hide Page Underlines',
              sublabel: 'Hides the underline from pages in the list.',
              type: 'toggle',
              "class": '--nst_hider-page-underline'
            }]
          },
          Board: {
            icon: '../icons/board.png',
            options: [// GROUP - Board Views
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          Gallery: {
            icon: '../icons/gallery.png',
            options: [// GROUP - Gallery Views
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          Calendar: {
            icon: '../icons/calendar.png',
            options: [// GROUP - Calendar Views
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          Timeline: {
            icon: '../icons/timeline.png',
            options: [// GROUP - Timeline Views
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          }
        }
      },
      // !SUBSECTION
      // SUBSECTION - Pages & Blocks
      Pages_and_Blocks: {
        id: 'MenuHidersPagesBlocks',
        icon: 'icons/pages.png',
        subSections: {
          Block_Pages: {
            icon: '../icons/page.png',
            options: [// GROUP - Block Pages
            {
              label: 'Hide Page Headers',
              sublabel: 'Hides icon, title, and cover giving more space.',
              type: 'toggle',
              "class": '--nst_hider-page-header'
            }]
          },
          Database_Pages: {
            icon: '../icons/page.png',
            options: [// GROUP - Database Pages
            {
              label: 'Hide Database Page Headers',
              sublabel: 'Hides icon, title, and cover giving more space.',
              type: 'toggle',
              "class": '--nst_hider-database-header'
            }]
          },
          Blocks: {
            icon: '../icons/block.png',
            options: [// GROUP - Blocks
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          }
        }
      },
      // !SUBSECTION
      // SUBSECTION - Text & Font
      Text_and_Font: {
        id: 'MenuHidersTextFont',
        icon: 'icons/text.png',
        subSections: {
          Headers: {
            icon: '../icons/header.png',
            options: [// GROUP - Headers
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          Containers: {
            icon: '../icons/container.png',
            options: [// GROUP - Containers
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          Regular_Text: {
            icon: '../icons/text.png',
            options: [// GROUP - Regular Text
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          }
        }
      },
      // !SUBSECTION
      // SUBSECTION - Sidebar
      Sidebar: {
        id: 'MenuHidersSidebar',
        icon: 'icons/sidebar.png',
        subSections: {
          Layout: {
            icon: '../icons/layout.png',
            options: [// GROUP - Layout
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          Pages: {
            icon: '../icons/page.png',
            options: [// GROUP - Pages
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          },
          Options: {
            icon: '../icons/setting.png',
            options: [// GROUP - Options
            {
              label: 'Hide Templates Option',
              sublabel: 'Hides the templates option in the sidebar.',
              type: 'toggle',
              "class": '--nst_hider-templates-option'
            }, {
              label: 'Hide Import Option',
              sublabel: 'Hides the import option in the sidebar.',
              type: 'toggle',
              "class": '--nst_hider-import-option'
            }, {
              label: 'Hide New Page Button',
              sublabel: 'Hides the new page button on the bottom the sidebar.',
              type: 'toggle',
              "class": '--nst_hider-new-page-button'
            }]
          }
        } // !SUBSECTION

      }
    }
  },
  // !SECTION
  // SECTION - Theming
  Theming: {
    index: '1',
    pages: {
      // SUBSECTION - Color Themes
      Color_Themes: {
        id: 'MenuThemingColorThemes',
        icon: 'icons/theme.png',
        subSections: {
          Default: {
            icon: '../icons/layout.png',
            options: [// GROUP - Themes
            {
              label: 'Default',
              sublabel: 'Color for user set gray elements.',
              type: 'theme',
              "class": '--nst_theme-notion-default',
              selector: ['-']
            }]
          },
          Notion_Style_Tweaks: {
            icon: '../icons/layout.png',
            options: [{
              label: 'Notion Style Tweaks',
              sublabel: 'Color for user set gray elements.',
              type: 'theme',
              "class": '--nst_theme-nst',
              selector: ['-']
            }]
          }
        }
      },
      // !SUBSECTION
      // SUBSECTION - Style Themes
      Style_Themes: {
        id: 'MenuThemingStyleThemes',
        icon: 'icons/theme.png',
        subSections: {
          Default: {
            icon: '../icons/layout.png',
            options: [// GROUP - Themes
            {
              label: 'Default',
              sublabel: 'Color for user set gray elements.',
              type: 'theme',
              "class": '--nst_theme-notion-default',
              selector: ['-']
            }]
          },
          Notion_Style_Tweaks: {
            icon: '../icons/layout.png',
            options: [{
              label: 'Notion Style Tweaks',
              sublabel: 'Color for user set gray elements.',
              type: 'theme',
              "class": '--nst_theme-nst',
              selector: ['-']
            }]
          }
        }
      },
      // !SUBSECTION
      // SUBSECTION - Colors
      Colors: {
        id: 'MenuThemingColors',
        icon: 'icons/theme.png',
        subSections: {
          Info: {
            icon: '../icons/warn.png',
            options: [{
              label: 'These settings do not currently work.',
              sublabel: 'They will be available in an upcoming update.',
              type: 'info'
            }]
          },
          User_Colors: {
            icon: '../icons/layout.png',
            options: [// GROUP - User Colors
            {
              label: 'Gray',
              sublabel: 'Color for user set gray elements.',
              type: 'multicolor',
              "class": '--nst_theme-gray-user-color',
              selector: ['71,76,80']
            }, {
              label: 'Brown',
              sublabel: 'Color for user set brown elements.',
              type: 'multicolor',
              "class": '--nst_theme-brown-user-color',
              selector: ['92,71,61']
            }, {
              label: 'Yellow',
              sublabel: 'Color for user set yellow elements.',
              type: 'multicolor',
              "class": '--nst_theme-yellow-user-color',
              selector: ['146,118,63']
            }, {
              label: 'Orange',
              sublabel: 'Color for user set orange elements.',
              type: 'multicolor',
              "class": '--nst_theme-orange-user-color',
              selector: ['136,84,44']
            }, {
              label: 'Red',
              sublabel: 'Color for user set red elements.',
              type: 'multicolor',
              "class": '--nst_theme-red-user-color',
              selector: ['122,54,59']
            }, {
              label: 'Blue',
              sublabel: 'Color for user set blue elements.',
              type: 'multicolor',
              "class": '--nst_theme-blue-user-color',
              selector: ['42,78,107']
            }, {
              label: 'Green',
              sublabel: 'Color for user set green elements.',
              type: 'multicolor',
              "class": '--nst_theme-green-user-color',
              selector: ['50,82,65', '46,68,58', '113,178,131', '']
            }, {
              label: 'Pink',
              sublabel: 'Color for user set pink elements.',
              type: 'multicolor',
              "class": '--nst_theme-pink-user-color',
              selector: ['106,59,99']
            }, {
              label: 'Purple',
              sublabel: 'Color for user set purple elements.',
              type: 'multicolor',
              "class": '--nst_theme-purple-user-color',
              selector: ['83,68,116']
            }]
          }
        } // !SUBSECTION

      }
    }
  },
  // !SECTION
  // SECTION - Other
  Other: {
    pages: {
      // SUBSECTION - Settings
      Settings: {
        id: 'MenuSettingsLocalTweaks',
        icon: 'icons/setting.png',
        subSections: {
          Layout: {
            icon: '../icons/layout.png',
            options: [// GROUP - Layout
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          }
        }
      },
      // !SUBSECTION
      // SUBSECTION - About
      About: {
        id: 'MenuSettingsCompatibility',
        icon: 'icons/setting.png',
        subSections: {
          Layout: {
            icon: '../icons/layout.png',
            options: [// GROUP - Layout
            {
              label: 'Coming Soon',
              sublabel: 'Coming Soon',
              type: 'toggle',
              "class": '--coming-soon'
            }]
          }
        }
      } // !SUBSECTION

    }
  }
}; // !SECTION

var _default = options;
exports["default"] = _default;