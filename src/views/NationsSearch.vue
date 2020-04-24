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
export default {
    computed: {
        nationsList(){
            return this.$store.getters.getSearchNationList;
        }
    }
};
</script>

<style scoped>
</style>