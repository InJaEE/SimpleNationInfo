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
  created(){
    getAllNations()
      .then(res => {
        this.$store.state.nationList = res.data;
        this.nationsList = res.data;
      })
      .catch(err => {
        console.error(err);
      });
  },
};
</script>