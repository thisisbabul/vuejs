var app = Vue.createApp({
    data() {
        return {
            student: {
                name: "Babul Miah",
                email: "babul@gmail.com",
                githubLink: "https://www.github.com/babul145"
            },
            email: '<p>Email: babul@gmail.com</p>',
            counter: 0,
            name: ""
        };
    },

    methods: {
        increase(amount) {
            this.counter += amount;
        },
        decrease(amount, evt) {
            this.counter -= amount;
            console.log(evt);
        },
        handleKeyup(evt) {
            this.name = evt.target.value 
        },
        handleSubmit(event) {
            // event.preventDefault();
            console.log(event);
        },
        cardClick() {
            console.log("card clicked");
        },
        viewClick(event) {
            // event.stopPropagation();
            console.log("view clicked");
        }
    }
});

app.mount("#app");