<template>
  <div class="container mx-auto">
    <nav class="navbar">
      <div class="logo-container">
        <div class="logo"><img src="sample_logo.png" alt=""></div>
        <div class="name">Trplanex</div>
      </div>
      <ul class="nav-links">
        <li class="nav-item is-active">
          <a href="#" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Contact</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Pricing</a>
        </li>
      </ul>
    </nav>
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
