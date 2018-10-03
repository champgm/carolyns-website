<template>
  <div>
    <b-container>
      <b-jumbotron>
      <b-col>
        <b-row>
          <b-col>
            <img alt="Profile Picture" src="../assets/profile.jpg">
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            {{content.bio.name}}
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            {{content.bio.title}}
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            {{content.bio.bioText}}
          </b-col>
        </b-row>
      </b-col>
      </b-jumbotron>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Content from "@/assets/Content";

@Component
export default class Bio extends Vue {
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
