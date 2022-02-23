"use strict";

var _options;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var options = (_options = {
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
    } // !SUBSECTION

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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
    } // !SUBSECTION

  },
  // !SECTION
  // SECTION - Text and Font
  Text_and_Font: {
    // SUBSECTION - Headers
    Headers: {
      id: 'TextFontHeaders',
      icon: '../icons/header.png',
      subSections: {
        // GROUP - Layout
        Layout: {
          icon: '../icons/layout.png',
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
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
          options: []
        },
        // GROUP - Style
        Style: {
          icon: '../icons/theme.png',
          options: []
        },
        // GROUP - Hiders
        Hiders: {
          icon: '../icons/eye.png',
          options: []
        }
      }
    } // !SUBSECTION

  }
}, _defineProperty(_options, "Text_and_Font", {
  // SUBSECTION - Pages
  Pages: {
    id: 'SidebarPages',
    icon: '../icons/pages.png',
    subSections: {
      // GROUP - Layout
      Layout: {
        icon: '../icons/layout.png',
        options: []
      },
      // GROUP - Style
      Style: {
        icon: '../icons/theme.png',
        options: []
      },
      // GROUP - Hiders
      Hiders: {
        icon: '../icons/eye.png',
        options: []
      }
    }
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
        options: []
      },
      // GROUP - Style
      Style: {
        icon: '../icons/theme.png',
        options: []
      },
      // GROUP - Hiders
      Hiders: {
        icon: '../icons/eye.png',
        options: []
      }
    }
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
        options: []
      },
      // GROUP - Style
      Style: {
        icon: '../icons/theme.png',
        options: []
      },
      // GROUP - Hiders
      Hiders: {
        icon: '../icons/eye.png',
        options: []
      }
    }
  } // !SUBSECTION

}), _defineProperty(_options, "Theming", {
  // SUBSECTION - Color Themes
  Color_Themes: {
    id: 'ThemeColors',
    icon: '../icons/theme.png',
    subSections: {
      // GROUP - Dark Mode
      Dark_Themes: {
        icon: '../icons/layout.png',
        options: []
      },
      // GROUP - Style
      Light_Themes: {
        icon: '../icons/theme.png',
        options: []
      }
    }
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
        options: []
      },
      // GROUP - Style
      Style: {
        icon: '../icons/theme.png',
        options: []
      }
    }
  } // !SUBSECTION

}), _defineProperty(_options, "Options_and_About", {
  // SUBSECTION - Settings
  Settings: {
    id: 'OptionsSettings',
    icon: '../icons/setting.png',
    subSections: {
      // GROUP - Dark Mode
      Dark_Themes: {
        icon: '../icons/layout.png',
        options: []
      },
      // GROUP - Style
      Light_Themes: {
        icon: '../icons/theme.png',
        options: []
      }
    }
  },
  // !SUBSECTION
  // SUBSECTION - About
  About: {
    id: 'OptionsAbout',
    icon: '../icons/warn.png',
    subSections: {
      // GROUP - Layout
      Layout: {
        icon: '../icons/layout.png',
        options: []
      },
      // GROUP - Style
      Style: {
        icon: '../icons/theme.png',
        options: []
      }
    }
  } // !SUBSECTION

}), _options);