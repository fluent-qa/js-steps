
var app = new Vue({
    el: '#app',
    data: {
        message: "this is message",
        todos: []
    },
    computed: {
        reverseMessage: function(){
            //this is the Vue VM instance
            return this.message.split('').reverse().join('')
        }
    },
    beforeCreated: function(){
        console.log("this is before created")
    },
    created: function(){
        console.log('data is '+this.todos);
    },
    beforeMount: function(){
        console.log("this is before mount")
    },
    mounted: function(){
        console.log(this.el)
        console.log("this is mounted ...")
    },
    beforeUpdate: function(){
        console.log("this is before update")
    },
    updated: function(){
        console.log("this is updated")
    },
    beforeDestroy: function(){
        console.log("this is before destroy event")
    },
    destroyed: function(){
        console.log("this is destroyed")
    }
})

app.$watch('todos',function(newValue,oldValue){
    console.log("new value:"+newValue);
    console.log("old value:"+oldValue);
})