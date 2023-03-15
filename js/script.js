const {createApp} = Vue;
createApp({

    data() {
        return {
            agenda: [
                {
                    text: "ciao",
                },
                
            ],

            index: 0,
            done: false,
            newLi: "",
        }
    },

    methods: {

        deleteLi(index) {
            this.agenda.splice(index, 1);
        },

        addLi(){
            this.agenda.push(this.newLi);
            this.newLi = "";
        }

    }


}).mount('#app')