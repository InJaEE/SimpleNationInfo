<template>
  <div>
      <div v-if="nationsList.length !== 0 " class="nationList">
        <div v-for="item in nationsList" :key="item.alpha2Code">
            <div class="nationItem">
                <router-link :to="`/info/${item.alpha3Code}`">
                    <p class="nationImg">
                        <img :src="`https://www.countryflags.io/${item.alpha2Code}/shiny/64.png`" alt="nations.name">
                    </p>
                    {{item.name}}
                </router-link>
            </div>
        </div>
      </div>
      <div v-else>
          No Data
      </div>
  </div>
</template>

<script>
import { getAllNations } from '../api';
export default {
    computed: {
        nationsList(){
            return this.$store.getters.getSearchNationList;
        }
    },
    created(){
        if(this.nationsList.length === 0){
            const param = this.$route.params.input;

            getAllNations()
              .then(res => {
                const input = param.toLowerCase();
                
                const searchNation = res.data.filter(value => {
                    return value.name.toLowerCase().includes(input)
                });
                this.$store.state.searchNationList = searchNation;
              })
              .catch(err => {
                console.error(err);
              });

        };
    }
};
</script>

<style scoped>
</style>