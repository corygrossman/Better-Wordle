<template>
<nav>
    <div class="navbar">
        <div class="logo">
            <h2>wordle</h2>
        </div>
        <div class="bool">
            <ToggleButton id="lightMode" :defaultState="true" />
        </div>
    </div>
</nav>
</template>

<script>
import ToggleButton from './ToggleButton.vue';

export default {
    components: {
        ToggleButton
    },

    data() {
    return {
      active: false
    }
  },
  methods: {
    triggerEvent(value) {
      this.active = value;
    }
  }
}
</script>

<style>
.navbar{
    background: #222222;
    color:#f8f8f8;
}
.navbar h2{
    font-style: italic;
    padding: 24px 24px;
}
.toggle_container {
    margin: 0px auto;
    background: #efefef;
    padding: 10px 0;
    border-radius: 30px;
    transition: all .25s;
}
.toggle_container.active {
    background: #e9ffef;
}
.bool{
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    right: 24px;
    height: 100%;
}
.logo{
    display: flex;
    align-items: center;
}
nav{
    display: flex;
    flex-direction: row;
    position: relative;
}
</style>