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
    template: `
    <div :class="'window ' + contentType">
        <div class="title-bar">
            <div class="inner-content">
                <span class="label">{{ fileName }}</span>
            </div>
        </div>
        <div class="content" v-html="content"></div>
    </div>`
}