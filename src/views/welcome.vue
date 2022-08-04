<template>
    <div class="main">
        <h1>Welcome back!</h1>
        <h3>Amount of Letters</h3>
        <div class="slider_values">
            <ul>
                <!-- trying to change the color of the text based off if the number is selected or not -->
                <li v-bind:class="{'wordNum':true, 'activeWordNum':(this.value === 3)}">3</li>
                <li v-bind:class="{'wordNum':true, 'activeWordNum':(this.value === 4)}">4</li>
                <li v-bind:class="{'wordNum':true, 'activeWordNum':(this.value === 5)}">5</li>
            </ul>
            </div>
        <div class="slider">
            <vue-slider
            v-model="value"
            :min="3"
            :max="5"
            :interval="1"
            :disabled="disabled"
            :tooltip="tooltip"
            :height="height"
            :tooltip-placement="tooltipPlacement"
            :tooltip-style="tooltipStyle"
            :dot-size="dotSize"
            :dot-style="dotStyle"
            :rail-style="railStyle"
            :process-style="processStyle"
            ></vue-slider>
        </div>
        <h3>Category</h3>
        <button @click="logValue">Start</button>
    </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/antd.css'

export default {
  components: {
    VueSlider,
  },

  data() {
    return {
      value: 3,
      disabled: false,
      tooltip: "none", // 'none' | 'always' | 'hover' | 'focus' | 'active'
      tooltipPlacement: "bottom", // 'top' | 'right' | 'bottom' | 'left'
      tooltipStyle: {
        color: "#97A0FA",
        backgroundColor: "#97A0FA",
        border: "2px solid #97A0FA",
      },
      height: 20,
      dotSize: 25,
      dotStyle: {
        backgroundColor: "#97A0FA",
        borderColor: "#f8f8f8",
      },
      railStyle: {
        border: "1px solid #97A0FA",
        backgroundColor: "#fff",
      },
      processStyle: {
        border: "2px solid #f8f8f8",
        backgroundColor: "#97A0FA",
      },
    };
  },
  methods:{
    logValue(){
        console.log(this.value);
    }
  }
}
</script>

<style>
.main{
    left: 0;
    padding: 5vh 0;
    position: fixed;
    background: #333333;
    width: 100%;
    height: 100%;
    align-content: center;
    align-items: center;
}
.main h1{
    padding: 4vh 0px;
    text-align: center;
    font-size: 5vh;
    color: #f8f8f8;
}
.main h3{
    padding: 10px 10px;
    text-align: center;
    font-size: 3vh;
    color: #f8f8f8;
}
.main button{
    padding: 10px 10px;
    color:#f8f8f8;
    background: #97A0FA;
    border-radius: 10px;
    text-align: center;
    font-size: 2vh;
    padding: 10px 30px;
    border: none;
    display: inline-block;
}
.slider{
    padding: 10px 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    max-width: 400px;
}


.slider_values ul{
    list-style: none;
}
/* .slider_values li{
    text-align: center;
    display: inline-block;
    padding: 1vh 6vw;
    color: #f8f8f8;
    font-size: 2vh;
} */

.wordNum{
    text-align: center;
    display: inline-block;
    padding: 1vh 6vw;
    color: #f8f8f8;
    font-size: 2vh;
}

.activeWordNum{
    text-align: center;
    display: inline-block;
    padding: 1vh 6vw;
    color: #97A0FA;
    font-size: 3vh;
}

</style>