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