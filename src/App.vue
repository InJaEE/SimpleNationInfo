<template>
  <div>
    <nations-header></nations-header>
    <nations-input></nations-input>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <nations-footer></nations-footer>
    <nations-button></nations-button>
  </div>
</template>

<script>
import NationsHeader from './components/NationsHeader.vue';
import NationsInput from './components/NationsInput.vue';
import NationsFooter from './components/NationsFooter.vue';
import NationsButton from './components/NationsButton.vue';

export default {
  name: 'App',
  components: {
    NationsHeader, NationsInput, NationsFooter, NationsButton,
  }
};
</script>

<style>
body {
  text-align: center;
}
.nationList {
  display: flex;
  width: 50%;
  margin: 0 auto;
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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
