<template>
  <div id="app">
    <b-container>
      <b-row align-h="center">
        <b-jumbotron id="navJumbo">
        <b-col>
          <b-row align-h="center">
            <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/bio">Bio</router-link>
            </div>
          </b-row>
        </b-col>
        </b-jumbotron>
      </b-row>
      <b-row align-h="center">
        <b-col>
          <router-view/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<style lang="scss">
#navJumbo {
  padding: 0rem;
  margin-bottom: 20px;
  margin-top: 20px;
}
body {
  background-image: url("assets/no.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 20px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
