
var app = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue",
        seen: true,
        aMsg: 'Page Loaded '+new Date().toLocaleDateString(),
        todos: [
            {text:"t1"},
            {text:"t2"},
            {text:"t3"},

        ]
    },
    methods: {
        reverseMessage: function(){
            //this is the Vue VM instance
            this.message = this.message.split('').reverse().join('')
        }
    }
})