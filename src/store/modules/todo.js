const STORAGE_KEY = 'todos'

const state = {
    todos: JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
}
const getters = {
    filteredTodos: state => completed => {
        return state.todos.filter((todo) => {return todo.done === completed})
    }
}
const actions = {
    addTodo ({ commit }, text) {
        commit('ADD_TODO', {
          text,
          done: false
        })
    },
    removeTodo ({ commit }, todo) {
        commit('REMOVE_TODO', todo)
    },
    toggleTodo ({ commit }, todo) {
        commit('EDIT_TODO', { todo, done: !todo.done })
    },
}

const mutations = {
    ADD_TODO (state, todo) {
        state.todos.push(todo)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    },
    REMOVE_TODO (state, todo) {
        state.todos.splice(state.todos.indexOf(todo), 1)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    },
    EDIT_TODO (state, { todo, text = todo.text, done = todo.done }) {
        todo.text = text
        todo.done = done
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.todos))
    }
}

export default {
    state,
    getters,
    actions,
    mutations
  }