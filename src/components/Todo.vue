<template>
   <div class="todo">
      <div v-if="todo" class="card">
         <div class="card-header">{{todo.completed}}</div>
         <div class="card-body">
            <h5>{{todo.description}}</h5>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "todo",
      props: [],
      data() {
         return {}
      },
      computed: {},
      methods: {
         //will need to write methods for put and delete here
         postTodo() { },
         deleteTodo() { }

      },
      components: {}
   }
</script>