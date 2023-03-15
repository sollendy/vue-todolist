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
            const newTodo = {
                text: this.newLi,
                done: false
            }
            this.agenda.push(newTodo);
            this.newLi = "";
        }

    }


}).mount('#app')