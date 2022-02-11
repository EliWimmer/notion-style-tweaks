<script>
    import browser from "webextension-polyfill";
    export let version;
    export let content;

    let darkMode;
    let settings = {};
    
    $: {
        if (darkMode) {
            modeApply("light-mode", "dark-mode");
        } else {
            modeApply("dark-mode", "light-mode");
        }
    }

    chrome.storage.local.get('settings', (data) => {
        Object.assign(settings, data.settings);
        darkMode = settings.darkMode;
    })

    function modeToggle() {
        darkMode ? darkMode = false : darkMode = true;
        settings.darkMode = darkMode;
        chrome.storage.sync.set({settings});
    }

    function modeApply(remove, add) {
        document.body.classList.remove(remove);
        document.body.classList.add(add);
    }

    const contactInfo = [
        {
            name: "Buy me a coffee",
            link: "https://www.buymeacoffee.com/eliwimmer",
            icon: "../icons/coffee.png",
        },
        {
            name: "Github",
            link: "https://github.com/EliWimmer/notion-style-tweaks",
            icon: "../icons/github.png",
        },
        {
            name: "Twitter",
            link: "https://twitter.com/eliwimm",
            icon: "../icons/twitter.png",
        },
        {
            name: "Website",
            link: "https://eliwimmer.com",
            icon: "../icons/website.png",
        },
    ];
</script>

<main>
    <div class="box-top-border" />
    <div class="title-container">
        <div class="dark-mode-toggle" on:click={e => modeToggle()}>
            {#if darkMode == true}
                <img src="icons/light.png" alt="Light Mode" />
            {:else}
                <img src="icons/dark.png" alt="Dark Mode" />
            {/if}
        </div>
        <h1 class="title">
            {content}
        </h1>
        <span class="version">{version}</span>
        <div class="contact-info">
            {#each contactInfo as contact}
                <a href={contact.link} target="_blank">
                    {#if contact.name === "Buy me a coffee"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <g clip-path="url(#clip0_11_18)">
                                <path
                                    fill="#3F515B"
                                    d="M11.375 5.833h-.292V5.25a1.75 1.75 0 00-1.75-1.75h-7a1.75 1.75 0 00-1.75 1.75v5.833A2.92 2.92 0 003.5 14h4.667a2.922 2.922 0 002.858-2.333 2.1 2.1 0 002.392-2.042v-1.75a2.042 2.042 0 00-2.042-2.042zm.875 3.792a.946.946 0 01-1.167.875V7a.945.945 0 011.167.875v1.75zm-7-7.875V.583a.583.583 0 011.167 0V1.75a.583.583 0 01-1.167 0zm2.333 0V.583a.583.583 0 011.167 0V1.75a.583.583 0 01-1.167 0zm-4.666 0V.583a.583.583 0 011.166 0V1.75a.583.583 0 01-1.166 0z"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_18">
                                    <path fill="#fff" d="M0 0h14v14H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    {:else if contact.name === "Github"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                fill="#3F515B"
                                d="M7 0C3.135 0 0 3.213 0 7.177c0 3.171 2.006 5.862 4.787 6.81.35.067.478-.155.478-.345 0-.17-.006-.736-.01-1.336-1.947.434-2.358-.847-2.358-.847-.318-.83-.777-1.05-.777-1.05-.635-.445.048-.436.048-.436.703.05 1.073.74 1.073.74.625 1.097 1.638.78 2.037.596.063-.464.244-.78.445-.96-1.555-.181-3.19-.797-3.19-3.547 0-.783.274-1.423.722-1.926-.073-.18-.313-.91.067-1.9 0 0 .588-.192 1.926.736A6.55 6.55 0 017 3.471a6.568 6.568 0 011.754.241c1.336-.928 1.923-.735 1.923-.735.38.988.141 1.718.068 1.899.45.503.72 1.143.72 1.926 0 2.757-1.637 3.364-3.196 3.542.252.222.475.66.475 1.329 0 .96-.008 1.733-.008 1.97 0 .19.126.414.481.344 2.78-.95 4.783-3.64 4.783-6.81C14 3.213 10.866 0 7 0z"
                            />
                            <path
                                fill="#3F515B"
                                d="M2.622 10.224c-.016.036-.07.046-.12.022-.051-.023-.08-.072-.063-.108.015-.037.07-.047.12-.022.051.023.08.072.063.108zm.344.315c-.033.032-.099.017-.143-.033-.046-.05-.054-.117-.02-.15.034-.03.097-.016.143.034.046.05.055.117.02.15zm.236.403c-.043.03-.113.002-.156-.062s-.043-.14 0-.17c.044-.032.113-.004.157.06.043.064.043.14 0 .172zm.4.467c-.039.043-.12.032-.18-.027-.061-.058-.078-.14-.04-.184.039-.043.121-.031.181.027.061.058.08.141.039.184zm.516.158c-.017.056-.096.081-.175.057-.079-.024-.13-.09-.115-.147.017-.056.096-.083.176-.058.079.025.13.09.114.148zm.588.066c.002.06-.066.109-.149.11-.084.002-.151-.046-.152-.104 0-.06.066-.109.15-.11.083-.002.15.046.15.104zm.577-.022c.01.057-.048.117-.13.132-.082.016-.157-.02-.167-.077-.01-.06.048-.119.13-.134.082-.015.156.02.167.079z"
                            />
                        </svg>
                    {:else if contact.name === "Twitter"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <path
                                fill="#3F515B"
                                d="M4.403 13c5.283 0 8.172-4.616 8.172-8.62 0-.13-.002-.261-.008-.39A6.028 6.028 0 0014 2.42a5.497 5.497 0 01-1.65.477 3.017 3.017 0 001.264-1.675 5.583 5.583 0 01-1.824.735A2.802 2.802 0 009.693 1C8.107 1 6.821 2.357 6.821 4.029c0 .238.025.469.074.69-2.387-.126-4.504-1.331-5.92-3.164-.256.462-.39.987-.39 1.522 0 1.051.507 1.979 1.279 2.522a2.74 2.74 0 01-1.301-.38v.04c0 1.467.99 2.692 2.304 2.97a2.736 2.736 0 01-1.298.051c.366 1.204 1.426 2.08 2.684 2.104A5.576 5.576 0 010 11.64a7.827 7.827 0 004.403 1.36"
                            />
                        </svg>
                    {:else if contact.name === "Website"}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14"
                            height="14"
                            fill="none"
                            viewBox="0 0 14 14"
                        >
                            <g clip-path="url(#clip0_11_20)">
                                <path
                                    fill="#3F515B"
                                    d="M7 0a7 7 0 107 7 7.007 7.007 0 00-7-7zm5.044 4.083h-1.879A11.479 11.479 0 008.52 1.374a5.851 5.851 0 013.524 2.71zM9.625 7a5.957 5.957 0 01-.278 1.75H4.653A5.956 5.956 0 014.375 7a5.956 5.956 0 01.278-1.75h4.694c.18.566.273 1.156.278 1.75zM5.12 9.917h3.76A11.44 11.44 0 017 12.593a11.415 11.415 0 01-1.88-2.676zm0-5.834A11.442 11.442 0 017 1.407a11.416 11.416 0 011.88 2.676H5.12zm.363-2.709a11.478 11.478 0 00-1.648 2.71h-1.88a5.851 5.851 0 013.528-2.71zM1.436 5.25h2.006A7.01 7.01 0 003.208 7a7.01 7.01 0 00.234 1.75H1.436a5.829 5.829 0 010-3.5zm.52 4.667h1.879c.421.975.976 1.886 1.648 2.709a5.852 5.852 0 01-3.527-2.71zm6.564 2.709a11.48 11.48 0 001.645-2.71h1.88a5.852 5.852 0 01-3.525 2.71zm4.044-3.876h-2.006c.152-.571.23-1.16.234-1.75a7.005 7.005 0 00-.234-1.75h2.005a5.83 5.83 0 010 3.5h.001z"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0_11_20">
                                    <path fill="#fff" d="M0 0h14v14H0z" />
                                </clipPath>
                            </defs>
                        </svg>
                    {/if}
                    {contact.name}
                </a>
            {/each}
        </div>
    </div>
</main>

<style>
    main {
        background: var(--bg-tertiary);
        width: 100%;
        border-bottom: var(--border) 1px solid;
        z-index: 1500;
    }

    .box-top-border {
        height: 4px;
        width: 100%;
        background: linear-gradient(
            20deg,
            #eb476f 0%,
            #49a2f0 50%,
            #49a2f0 100%
        );
    }

    .title-container {
        display: flex;
        align-items: center;
    }

    .contact-info {
        height: 16px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 0px 20px 0px 16px;
        margin-left: auto;
        column-gap: 10px;
    }

    a {
        display: flex;
        flex-direction: row;
        column-gap: 4px;
        align-items: center;
        color: var(--text-dark);
        text-decoration: none;
        font-size: 14px;
        font-weight: 600;
        text-shadow: var(--text-shadow-top);
        padding: 4px;
        transition: 200ms ease-in-out;
    }

    a svg,
    a svg path {
        fill: var(--text-dark);
        transition: 200ms ease-in-out;
    }

    a:hover {
        text-shadow: var(--text-shadow-bottom);
        color: var(--text-light);
    }

    a:hover svg,
    a:hover svg path {
        fill: var(--text-light) !important;
    }

    h1 {
        font-size: 16px;
        font-weight: 700;
        text-transform: uppercase;
        background: linear-gradient(
            20deg,
            #eb476f 0%,
            #49a2f0 50%,
            #49a2f0 100%
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: 10px 0px;
        padding: 0px 0px 0px 10px;
    }

    .version {
        font-size: 12px;
        font-weight: 600;
        color: var(--text-dark-alt);
        padding: 0px 4px;
        transition: 200ms ease-in-out;
        padding-top: 5px;
    }

    .dark-mode-toggle {
        padding: 4px 0px 0px 12px;
        cursor: pointer;
        transition: 200ms ease-in-out;
    }
    .dark-mode-toggle:hover {
        filter: brightness(1.3);
    }
</style>
