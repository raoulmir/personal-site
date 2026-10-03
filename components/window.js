export const Window = {
    inject: ['files'],
    data() {
        return {
            content: null
        }
    },
    props: ['fileName', 'contentType'],
    mounted() {
        let camelize = this.fileName.replace(/-./g, x => x[1].toUpperCase())
        const fileModule = this.files[camelize]
        this.content = fileModule ? fileModule.content : ''
        this.windowLabel = fileModule ? fileModule.fileName : ''
    },
    template: `
    <div :class="'window ' + contentType">
        <div class="title-bar">
            <div class="inner-content">
                <span class="label">{{ windowLabel }}</span>
            </div>
        </div>
        <div class="content" v-html="content"></div>
    </div>
    `
}
