app.component("product-details", {
    props: {
        details: {
            type: Array,
            required:Boolean
        }
    },

    template:
    `<ul>
        <li v-for="detail in details">{{ detail }}</li>
    </ul>`,
    
})