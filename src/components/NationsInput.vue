<template>
  <div class="input">
      <input type="text" v-model="inputData" @keyup.enter="searchNation" ref="input" placeholder="Input Nation">
      <i class="fas fa-search searchBtn" @click="searchNation"></i>
  </div>
</template>

<script>
import { getAllNations } from '../api';
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
        getAllNations()
              .then(res => {
                const input = this.inputData.toLowerCase();
                
                const searchNation = res.data.filter(value => {
                    return value.name.toLowerCase().includes(input)
                });
                this.$store.state.searchNationList = searchNation;
              })
              .catch(err => {
                console.error(err);
              });

        this.$router.replace(`/search/${this.inputData}`)
          .catch(err => {
            if(err.name != "NavigationDuplicated" ){
              throw error;
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