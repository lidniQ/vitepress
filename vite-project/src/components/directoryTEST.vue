<template>
  <div>
    <h1>{{ selectedHeader || 'Выбрать заголовок' }}</h1>
    <button @click="selectHeader('Параграф')">Параграф</button>
    <button @click="selectHeader('Заголовок 1')">Заголовок 1</button>
    <button @click="selectHeader('Заголовок 2')">Заголовок 2</button>
    <button @click="selectHeader('Заголовок 3')">Заголовок 3</button>
    <button @click="selectHeader('Заголовок 4')">Заголовок 4</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedHeader: null
    };
  },
  methods: {
    selectHeader(header) {
      this.selectedHeader = header;
    }
  }
};
</script>
