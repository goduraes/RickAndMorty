<template>
  <div class="page">
    <h1>{{this.$route.name}}</h1>
    <Characters v-if="this.$route.name === 'Characters'"/>
    <Episodes v-if="this.$route.name === 'Episodes'"/>
    <Locations v-if="this.$route.name === 'Locations'"/>
  </div>
</template>

<script>
import Characters from '../components/Characters.vue';
import Episodes from '../components/Episodes.vue';
import Locations from '../components/Locations.vue';

export default {
  name: 'Page',
  components: { Characters, Episodes, Locations },
};
</script>

<style>
.page {
  padding: 10px 10%;
}
</style>
