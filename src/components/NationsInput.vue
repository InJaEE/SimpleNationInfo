<template>
  <div class="input">
      <input type="text" v-model="inputData" @keyup.enter="searchNation" ref="input" placeholder="Input Nation">
      <i class="fas fa-search searchBtn" @click="searchNation"></i>
  </div>
</template>

<script>
export default {
  data(){
    return{
      inputData: '',
    };
  },
  methods: {
      searchNation(){
        if(!this.inputData.trim()){
          alert('No data');
          return;
        }
        this.$store.dispatch('FETCH_SEARCH_NATION', this.inputData);
        this.$router.replace(`/search/${this.inputData}`)
          .catch(err => {
            if(err.name != "NavigationDuplicated" ){
              throw new Error;
            }
          });
        this.resetData();
    },
    resetData(){
      //this.inputData = '';
      this.$refs.input.focus();
    },
  },
};
</script>

<style>
.input {
  padding: 20px 10px 5px;
}
.searchBtn {
  padding: 5px 15px 5px;
}
input[type=text], select {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
</style>