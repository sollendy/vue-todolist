const {createApp} = Vue;
createApp({

    data() {
        return {
            agenda: [
                {
                    text: "andare dal dottore",
                    done: false
                },

                {
                    text: "fare una ricarica telefonica",
                    done: false
                },

                {
                    text: "scrivere il resto delle commissioni tramite il bottone",
                    done: false
                },
                
            ],

            index: 0,
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