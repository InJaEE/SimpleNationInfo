<template>
  <div>
    <div class="topBtn">
      <a href="#">
        <i class="fas fa-arrow-circle-up fa-3x"></i>
      </a>
    </div>
    <div class="git">
      <a href="https://github.com/InJaEE/SimpleNationInfo" target="_blank" title="Github Link">
        <i class="fab fa-github fa-5x gitBtn"></i>
      </a>
    </div>
  </div> 
</template>

<script>
export default {
};
</script>

<style scoped>
.git {
  position: fixed;
  bottom: 50px;
  right: 20px;
}
a {
  color: black;
}
.topBtn {
  position: fixed;
  bottom: 150px;
  right: 35px;
}
</style>