<template>
  <div>
    <nations-header></nations-header>
    <nations-input></nations-input>
    <router-view></router-view>
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
</style>
