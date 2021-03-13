<template>
  <div class="container mx-auto">
    <h1>Heading 1</h1>
    <h2>Heading 2</h2>
    <h3>Heading 3</h3>
    <h4>Heading 4</h4>
    <h5>Heading 5</h5>
    <h6>Heading 6</h6>
    <p>Paragraph</p>
    <a href="#">Links</a><br />
    <small>Small</small>
    <ul>
      <li>List item 1</li>
      <li>List item 2</li>
      <li>List item 3</li>
    </ul>
    <button class="btn">Login</button>
    <button class="btn btn-secondary">Cancel</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./styles/app.css";

export default defineComponent({
  name: "App",
  components: {}
});
</script>
