<template>
  <div>
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header";
export default {
  components: {
    Header
  }
};
</script>

<style>
body {
  background-color: #ECEFF1;
}
</style>
