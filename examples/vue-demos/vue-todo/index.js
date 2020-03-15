Vue.component('todo-item',{
    props: ['todo'],  //something need to bind it
    template: "<li>ID:{{todo.id}},TEXT: {{todo.text}}</li>"
})
var app = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue",
        seen: true,
        aMsg: 'Page Loaded '+new Date().toLocaleDateString(),
        todos: [
            {id: 1,text:"t1"},
            {id:2,text:"t2"},
            {id:3,text:"t3"},

        ]
    },
    methods: {
        reverseMessage: function(){
            //this is the Vue VM instance
            this.message = this.message.split('').reverse().join('')
        }
    }
})