export const Navigation = {
    data() {
        return {
            options: [
                { label: "About me", link: "/about-me" },
                { label: "Contact", link: "/contact" },
                { label: "Linkedin", link: "https://www.linkedin.com/in/raoul-m-87a038b1/", external: true },
                { label: "Github", link: "https://github.com/raoulmir", external: true }
            ]
        }
    },
    emits: ['set-route'],
    template: `
        <a class="home" @click="passRoute('/')">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 -0.5 15 15" shape-rendering="crispEdges">
            <metadata>Made with Pixels to Svg https://codepen.io/shshaw/pen/XbxvNj</metadata>
            <path stroke="#000000" d="M7 0h1M6 1h3M5 2h5M4 3h7M3 4h9M2 5h11M1 6h13M0 7h15M1 8h13M1 9h13M1 10h5M9 10h5M1 11h5M9 11h5M1 12h5M9 12h5M1 13h5M9 13h5M1 14h5M9 14h5" />
            </svg>
        </a>
        <div v-for="option in options">
            <div v-if="option.external">
                <a :href="option.link">
                    {{ option.label }}
                </a>
            </div>
            <div v-else>
                <a @click="passRoute(option.link)">
                    {{ option.label }}
                </a>
            </div>
        </div>
        `,
    methods: {
        passRoute(link) {
            this.$emit('set-route', link)
        }
    },
}