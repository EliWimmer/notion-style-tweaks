# Notion Style Tweaks (Beta)

A Chrome extension aiming to give granular control over the visual experience of Notion.
Written in Svelte.

### Installation

#### [Chrome Web Store](https://chrome.google.com/webstore/detail/notion-style-tweaks/fclmlifmfhekeohpojchhkmgpmkplkpo/related?hl=en-GB&authuser=0)

#### Manual
1. Download the ZIP in [releases](https://github.com/EliWimmer/notion-style-tweaks/releases)
2. Navigate to [chrome://extensions/](chrome://extensions/)
3. Toggle Developer Mode in the top-right.
4. Drag and drop the ZIP into Chrome to install

### Usage

-   Open from toolbar with Notion loaded
-   Tweak

### Notes

-   Tweaks only apply in real-time when done with Notion as the active tab, otherwise you will need to refresh Notion to see the changes
-   During beta your settings are subject to being reset on updates (or may experience general bugginess, which changing a setting once will generally resolve).

## Current Features

### Tweaks

#### Databases

-   All Views
    -   Inline controls always visible
    -   Cleaner database controls
-   Table Views
    -   Centered header cell labels
    -   Center all cells
    -   Rounded checkboxes
    -   Header cell backgrounds
-   List Views
    -   Rounded checkboxes
-   Board Views
    -   Simple Cards
-   Gallery Views
    -   Simple Cards

#### Pages & Blocks

-   Block Pages
    -   Floating page covers
    -   Prevemt sidebar hover reveal when collapsed

#### Sidebar

-   Layout
    -   Comfy sidebar spacing

### Hiders

-   All Views
    -   Hide view type icons
    -   Hide link arrows
-   Table Views
    -   Hide header row icons
    -   Hide column borders
    -   Hide row borders
    -   Hide header row borders
    -   Hide Calculation row
-   List Views
    -   Hide page icon
    -   Hide page underlines

#### Pages & Blocks

-   Block Pages
    -   Hide page headers
-   Database Pages
    -   Hide database page headers

#### Sidebar

-   Options
    -   Hide templates
    -   Hide import
    -   Hide new page button

### Known bugs

- Updating the extensions may cause toggles to not visually represent active settings until being toggled again.

### Roadmap

Major planned features include:

-   Locally scoped tweaks that apply to only specific databases or pages
-   An integrated sidebar for managing extension settings
-   A comprehensive visual overhaul to Notion (aka a theme with much deeper and systematic changes than has been done in Notion prior)
-   Many, MANY more tweaks.

If you find any bugs or have any suggestions feel free to open an issue on github.
