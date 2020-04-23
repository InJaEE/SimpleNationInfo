<template>
  <div>
      <div v-if="nationsList.length !== 0 " class="nationList">
        <div v-for="item in nationsList" :key="item.alpha2Code">
            <div class="nationItem">
                <router-link :to="`/info/${item.alpha3Code}`" replace>
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
    data(){
        return{
            nationsList: [],
        };
    },
    created(){
        getAllNations()
            .then(res => {
                const inputData = this.$route.params.input.toLowerCase();
                console.log("@", res.data);
                console.log("$router: ", this.$router);
                
                
                const searchNation = res.data.filter((value) => {
                    return value.name.toLowerCase().includes(inputData)
                });
                this.nationsList = searchNation;
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
</style>