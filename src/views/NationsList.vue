<template>
  <div class="nationList">
      <div v-for="nations in nationsList" :key="nations.alpha2Code">
        <div class="nationItem">
          <router-link :to="`info/${nations.alpha3Code}`">
            <p class="nationImg">
              <img :src="`https://www.countryflags.io/${nations.alpha2Code}/shiny/64.png`" :alt="nations.name">
            </p>
            {{ nations.name }}
          </router-link>
        </div>
      </div>
  </div>
</template>

<script>
import { getAllNations } from '../api';
export default {
  data(){
    return{
      nationsList: [],
    }
  },
  methods: {
  },
  created(){
    getAllNations()
      .then(res => {
        this.$store.state.nationList = res.data; // 추후 store쪽으로 수정 필요한 코드
        this.nationsList = res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },
};
</script>

<style scoped>
.nationList {
  width: 1010px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row; 
}
.nationItem {
  width:200px;
  margin: 0px 15px 30px;
}
.nationImg {
  margin-bottom: 0px;
}
a {
  text-decoration: none;
  color: #646464;
}
</style>