<template>
  <div id="app">
    
    <h2>Nav Bar</h2>
    <div id="nav">
      <router-link to="/">Hjem</router-link> |
      <router-link to="/HelloWorld">Hei verden</router-link> |
      <router-link to="/Contact">Kontakt</router-link> |
      <router-link to="/Været">Været</router-link> 
    </div>
    <b-container>
      <router-view />
    </b-container>
  
  </div>
</template>

<style>
  .spacing {
    margin-right: 10px;
  }
</style>