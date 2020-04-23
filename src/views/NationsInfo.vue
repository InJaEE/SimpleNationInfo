<template>
  <div>
      <div>
        <p>
          <img :src="`https://www.countryflags.io/${getNation.alpha2Code}/shiny/64.png`" alt="getNation.name">
        </p>
        <p>
          Name: {{getNation.name}}
        </p>
        <p>
          Capital: {{getNation.capital}}
        </p>
        <p>
          Region: {{getNation.region}}
        </p>
        <p>
          Native name: {{getNation.nativeName}}
        </p>
        <div>
          Languages: 
          <li v-for="item in getNation.languages" :key="item.nId">
            {{item.nativeName}}
          </li>
        </div>
      </div>

    <i class="fas fa-arrow-left fa-2x fa-spin btn" @click="backToList"></i>
  </div>
</template>

<script>
export default {
  methods: {
    backToList(){
      this.$router.go(-1);
    },
  },
  computed: {
    getNation(){
      return this.$store.state.nation;
    },
  },
  created(){
    console.log(this.$route.params);
    
    const nationCode = this.$route.params.code;
    this.$store.dispatch('FETCH_NATION', nationCode);
  },
};
</script>

<style scoped>
.btn {
  padding: 50px 10px 10px;
};
</style>