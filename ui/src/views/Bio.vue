<template>
  <div class="about">
    <Bio/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Bio from "@/components/Bio.vue"; // @ is an alias to /src

@Component({
  components: {
    Bio
  }
})
export default class BioView extends Vue {}
</script>
