<template>
    <div class="todos container-fluid">
        <!-- your todo form could go here -->
        <div class="row">
            <div class="col-12 text-center">
                <h1>Post a Todo</h1>
                <router-link :to="{name: 'dashboard'}">Return to Dashboard</router-link>
            </div>
        </div>
        <div class="row">
            <div class="col-10 offset-1">
                <form @submit.prevent="addTodo">
                    <textarea required type="text" v-model="newTodo.description" placeholder="addTodo"></textarea>
                    <button type="submit" class="btn btn-primary ">Submit</button>

                </form>
            </div>
        </div>
        <div class="row">
            <todo-card v-for="todo in todos" :todoData="todo" />
        </div>
    </div>

</template>



<!-- could utilize a v-for and don't forget to pass a prop -->

<script>
    import TodoCard from '@/components/Todo.vue'
    export default {
        name: "todos",
        props: [],
        data() {
            return {
                newTodo: {
                    description: ''
                }
            }
        },
        computed: {
            todos() {
                return this.$store.state.todos
            }
        },
        //What property in the state will you care to observe here?
        methods: {
            addTodo() {
                this.$store.dispatch('postTodo', this.newTodo)

                //will most likely write method for add a todo here
            }
        },

        components: {
            TodoCard
        }
    }
</script>
<style>
    h1 {
        color: antiquewhite
    }
</style>