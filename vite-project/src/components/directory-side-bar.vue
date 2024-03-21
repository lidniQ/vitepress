<template>
    <div class="sidebar">
    <div class="label">
      <ul>
        <li v-for="(article, index) in articles" :key="index" class="li-title">
          <div @click="toggleDropdown(index)" class="sidebar-item">
            {{ article.title }}
            &nbsp;
            <span v-if="article.expanded">
              <i v-if="article.items" class="fa-solid fa-chevron-up"></i>
            </span>
            <span v-else>
              <i v-if="article.items" class="fa-solid fa-chevron-down"></i>
            </span>
          </div>
          <ul v-if="article.expanded" >
            <li v-for="(items, index) in article.items" :key="index" class="li-sub-items">
              <a :href="'#' + items" class="sub-item-link">{{ items }}</a>
            </li>
          </ul>
        </li>
      </ul>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      articles: [
        { title: 'Тест', expanded: false, items: ['тести 1', 'авыавы пппппппппппппппппппппп2'] },
        { title: '3 штуки', expanded: false, items: ['1 штучка', '2 штучка', '3 штучка'] },
        { title: 'Тест', expanded: false, items: ['тести 1', 'авыавы 2'] },
        { title: '3 штуки', expanded: false, items: ['1 штучка', '2 штучка', '3 штучка'] },
        { title: 'Тест', expanded: false, items: ['тести 1', 'авыавы 2'] },
        { title: '3 штуки', expanded: false, items: ['1 штучка', '2 штучка', '3 штучка'] },
        { title: 'Тест', expanded: false, items: ['тести 1', 'авыавы 2'] },
        { title: '3 штуки', expanded: false, items: ['1 штучка', '2 штучка', '3 штучка'] },
        { title: 'Тест', expanded: false, items: ['тести 1', 'авыавы 2'] },
        { title: '3 штуки', expanded: false, items: ['1 штучка', '2 штучка', '3 штучка'] },
        { title: 'Тест', expanded: false, items: ['тести 1', 'авыавы 2'] },
        { title: '3 штуки', expanded: false, items: ['1 штучка', '2 штучка', '3 штучка'] },
        { title: 'Тест', expanded: false, items: ['тести 1', 'авыавы 2'] },
        { title: '3 штуки', expanded: false, items: ['1 штучка', '2 штучка', '3 штучка'] },
        { title: '3 штуки',  },

      ],
    };
  },
  methods: {
    toggleDropdown(index) {
      this.articles[index].expanded = !this.articles[index].expanded;
    },
  },
  components: {
  }
};
</script>

<style>

.sidebar {
  margin: 30px;
  
}

.label {
  ul {
    list-style-type: none;
    .li-title{
    padding: 0 0 10px 0;
  }
  }
}

.sidebar-item {
  font-family: 'Montserrat';
  font-style: normal;
  font-size: 14px;
  line-height: 17px;
  display: flex;
  align-items: center;
  color: #333333; 
  cursor: pointer;
  ul {
    width: 174px;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 15px;
    display: flex;
    align-items: center;
    list-style-type: none;
  }
}
.sub-item-link{
      text-decoration: none;
      color: #707070;   
}

a:hover {
  color: #0C9C85; 
}    
.li-sub-items{
  padding:0;
}
</style>
