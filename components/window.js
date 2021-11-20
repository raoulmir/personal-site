export const Window = {
    inject: ['files'],
    data() {
        return {
            content: null
        }
    },
    props: ['fileName','contentType'],
    mounted() {
        let camelize = this.fileName.replace(/-./g, x=>x[1].toUpperCase())
        this.content = this.files[camelize].content
    },
    template: `<div v-html="content"></div>`
}