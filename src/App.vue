<template>
  <div id="app">
    <NavBar />
    <router-view />
    <FooterRaM />
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import FooterRaM from './components/Footer.vue';

export default {
  components: { NavBar, FooterRaM },
};
</script>
