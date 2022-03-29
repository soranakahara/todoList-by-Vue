const app = new Vue({
    el: "#app",
    data() {
        return{
            task: "",
            todoList: [],
            newId: 1,
        };
    },
    computed: {
        exist: function(){
            return this.todoList.length > 0;
        },
    },
    methods: {
        create: function(){
            const todoItem = {
                id: this.newId,
                text: this.task,
            }
            this.todoList.push(todoItem);
            this.newId += 1;
            this.task = "";
        },
        del: function(targetId){
            for(let i=0; i<this.todoList.length; i++){
                if(this.todoList[i].id === targetId){
                    this.todoList.splice(i, 1);
                }
            }
        },
    }
})