<template>
  <v-app>
  <navigation-bar></navigation-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
  import NavigationBar from "./components/navigation/navigationBar";
  export default {
  name: 'App',
  components: {NavigationBar},
  data: () => ({

  }),
};
</script>
