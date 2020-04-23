<template>
  <div>
    <nations-header></nations-header>
    <nations-input></nations-input>
    <router-view></router-view>
    <nations-footer></nations-footer>
    <github-link></github-link>
  </div>
</template>

<script>
import NationsHeader from './components/NationsHeader.vue';
import NationsInput from './components/NationsInput.vue';
import NationsFooter from './components/NationsFooter.vue';
import GithubLink from './components/GithubLink.vue';

export default {
  name: 'App',
  components: {
    NationsHeader, NationsInput, NationsFooter, GithubLink,
  }
};
</script>

<style>
body {
  text-align: center;
}
</style>
