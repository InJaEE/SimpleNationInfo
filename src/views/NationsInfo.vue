<template>
  <div>
      <div>
        <p>
          <img :src="`https://www.countryflags.io/${getNation.alpha2Code}/shiny/64.png`" :alt="getNation.name">
        </p>
        <table class="tableStyle">
          <tbody>
            <!--{{getNation}}-->
            <tr>
              <th>Name</th>
              <th>{{getNation.name}}</th>
            </tr>
            <tr>
              <th>Capital</th>
              <th>{{getNation.capital}}</th>
            </tr>
            <tr>
              <th>Region</th>
              <th>{{getNation.region}}</th>
            </tr>
            <tr>
              <th>NativeName</th>
              <th>{{getNation.nativeName}}</th>
            </tr>
            <tr>
              <th>Languages</th>
              <th>
                <li v-for="item in getNation.languages" :key="item.nId">
                  {{item.nativeName}}
                </li>
              </th>
            </tr>


          </tbody>
        </table>

      </div>

    <i class="fas fa-arrow-left fa-2x btn" @click="backToList"></i>
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
    const nationCode = this.$route.params.code;
    this.$store.dispatch('FETCH_NATION', nationCode);
  },
};
</script>

<style scoped>
.tableStyle {
  width: 350px;
  margin: auto;
  border: 1px ridge;
  font-family: inherit;
}
th {
  width: 100px;
  padding: 10px 10px 10px;
  border: 1px solid black;
}
li {
  list-style: none;
  margin: 10px;
}
.btn {
  padding: 50px 10px 10px;
}
</style>