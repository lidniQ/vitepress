<template>
  <div class="sidebar">
    <scroll>
    <div class="label">
      <ul>
        <li v-for="(article, index) in articles" :key="index" class="li-title">
          <div @click="toggleDropdown(index)" class="sidebar-item">
            {{ article.title }}
            &nbsp;
            <span v-if="article.expanded">
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.0001 7.29388L6.96491 1.60306L1.07057 7.5" stroke="#9DA9B0" stroke-width="1.5"/>
              </svg>
            </span>
            <span v-else>
              <svg width="14" height="9" viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.999871 1.70612L7.03509 7.39694L12.9294 1.5" stroke="#9DA9B0" stroke-width="1.5"/>
              </svg>
            </span>
          </div>
          <ul v-if="article.expanded">
            <li v-for="(items, index) in article.items" :key="index" class="li-sub-items">
              <a :href="'#' + items" class="sub-item-link">{{ items }}</a>
            </li>
          </ul>
        </li>
      </ul>
      </div>
    </scroll>
  </div>
</template>

<script>
import scroll from './scroll.vue';

export default {
  data() {
    return {
      articles: [
        { title: 'Тест', expanded: false, items: ['тести 1', 'авыавы 2'] },
        { title: '3 штуки', expanded: false, items: ['1 штучка', '2 штучка', '3 штучка'] },
      ],
    };
  },
  methods: {
    toggleDropdown(index) {
      this.articles[index].expanded = !this.articles[index].expanded;
    },
  },
  components: {
    scroll,
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
    color: red; 
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
