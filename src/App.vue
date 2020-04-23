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
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
