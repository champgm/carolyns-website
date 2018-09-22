<template>
  <div>
    <b-container>
      <b-col>
        <b-row>
          <b-col align="end">
            <img alt="Profile Picture" src="../assets/smallface.jpg">
          </b-col>
          <b-col align="start">
            <b-row>{{content.home.name}}</b-row>
            <b-row>{{content.home.description}}</b-row>
            <b-row>{{content.home.phone}}</b-row>
            <b-row>{{content.home.email}}</b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Content from "@/assets/Content";

@Component
export default class Home extends Vue {
  content = Content;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
