app.component("product-details", {
    props: {
        details: {
            type: list,
            required:Boolean
        }
    },

    template:
    `<div class="product-info">
        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>
    </div>`,
    
})