<template >
        <a class="Button " :class="color" @onclick="emmitButton">{{text}}</a>
</template>
<script setup> 
import {ref} from 'vue';

const props = defineProps({
    text: {
        type: String,
        default: 'Agregar'
    },
    color: {
        type: String,
        default: 'Red'
    }
})

const emmitButton = () => {
    define.emit('click')
}
</script>
<style scoped>
    
a {
  color: black;
  text-decoration: none;
  cursor: grab;
}

.Button {
  position: relative;
  top: 0px;
  padding: 10px 15px;
  border: solid #1a1a1a 3px;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0px 10px 0px #1a1a1a;
}

.Button:hover {
  top: 2px;
  box-shadow: 0px 8px 0px #1a1a1a;
}
.Button:active {
  transition: 100ms ease;
  top: 8px;
  box-shadow: 0px 2px 0px #1a1a1a;
}

.White {
  background: #fff;
}
.White:hover {
  background: #eee;
}
.White:active {
  background: #ddd;
}
.Yellow {
  background: #ffc300;
}
.Yellow:hover {
  background: #efb300;
}
.Yellow:active {
  background: #dfa300;
}
.Red {
    background: #d22b2b;
    color: white;
}
.Red:hover {
  background: #c21b2b;
  color: white;
}
.Red:active {
  background: #b20b2b;
  color: white;
}.Green {
    background: #86b049;
}
.Green:hover {
    background: #86b049;
}
.Green:active {
    background: #86b049;
}

::selection {
  color: Black;
  background: #00000000;
}
::-moz-selection {
  color: Black;
  background: #00000000;
}
</style>