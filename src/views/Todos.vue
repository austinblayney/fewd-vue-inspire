<template>
    <div class="todos container-fluid">
        <!-- your todo form could go here -->

        <router-link :to="{name: 'dashboard'}">Return to Dashboard</router-link>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <!-- could utilize a v-for and don't forget to pass a prop -->
    </div>
</template>

<script>
    export default {
        name: "todos",
        props: [],
        data() {
            return {
            }
        },
        computed: {
            //What property in the state will you care to observe here?
        },
        methods: {
            //will most likely write method for add a todo here
        },
        components: {}
    }
</script>