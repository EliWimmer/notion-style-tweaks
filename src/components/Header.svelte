<script>
export let version;
export let content;
const contactInfo = [{
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
    <h1 class="title">
        {content}
    </h1>
    <span class="version">{version}</span>
    <div class="contact-info">
        {#each contactInfo as contact}
        <a href={contact.link} target="_blank">
            <img src={contact.icon} alt={contact.name} />
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
    background: linear-gradient(20deg,
            #eb476f 0%,
            #49a2f0 50%,
            #49a2f0 100%);
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
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.4);
    padding: 4px;
    filter: brightness(1);
    transition: 200ms ease-in-out;
}

a:hover {
    text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.4);
    filter: brightness(2.2);
}

h1 {
    font-size: 16px;
    font-weight: 700;
    text-transform: uppercase;
    background: linear-gradient(20deg,
            #eb476f 0%,
            #49a2f0 50%,
            #49a2f0 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 10px 0px;
    padding: 0px 0px 0px 20px;
}

.version {
    font-size: 12px;
    font-weight: 600;
    color: #586268;
    padding: 0px 4px;
    transition: 200ms ease-in-out;
    padding-top: 5px;
}
</style>
