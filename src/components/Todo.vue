<template>
   <div class="todo">
      <div v-if="todoData" class="card">
         <div class="card-header bg-dark">{{todoData.completed}}</div>
         <div class="card-body bg-warning">

            <h5>{{todoData.description}}</h5>
            <div class="row">
               <div>
                  <form @click="putTodo">
                     <button type="submit" class="btn btn-success">Edit</button>
                  </form>
               </div>
               <div>
                  <form @click="deleteTodo">

                     <button type="button" class="btn btn-danger">delete</button>
                  </form>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
   export default {
      name: "todo",
      props: ['todoData'],
      data() {
         return {}
      },
      computed: {},
      methods: {
         //will need to write methods for put and delete here
         putTodo() {
            this.todoData.completed = !this.todoData.completed
            this.$store.dispatch('putTodo', this.todoData)
         },
         deleteTodo() {
            this.$store.dispatch('deleteTodo', this.todoData._id)
         },

      },
      components: {}
   }
</script>
<style>
   .card-header {
      color: antiquewhite
   }
</style>