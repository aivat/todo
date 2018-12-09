<template>
  <div id="app">
    <header class="header">
      <h3>Todos</h3>
      <input autofocus autocomplete="off" placeholder="Добавьте новый элемент" @keyup.enter="addTodo">    
    </header>
    <main>
      <ul>
        <TodoItem v-for="(todo, index) in filteredTodos" :key="index" :todo="todo"/> 
      </ul>
      <button @click="done = !done">{{ done ? 'Посмотреть новые' : 'Посмотреть исполненные' }}</button>  
    </main>
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem.vue'

export default {
  components: {
    TodoItem
  },
  data () {
    return {
      done: false
    }
  },
  computed: {
    filteredTodos () {
      return this.$store.getters.filteredTodos(this.done)
    }
  },
  methods: {
    addTodo (e) {
      const text = e.target.value
      if (text.trim()) {
        this.$store.dispatch('addTodo', text)
      }
      e.target.value = ''
    }
  }
}
</script>

<style>
ul {
  margin: 30px 0;
  padding: 0;
}
</style>
