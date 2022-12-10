<template>
 <div class="content ">
    <div class="title">
        <h1>Amigo Secreto</h1>
        <h3>Añade a los participantes para el sorteo del amigo secreto</h3>  
    </div>
    <div class="formulario">
        <label>
            Nombre:
            <input v-model="newUser.name" type="text"  placeholder="Juan Perez"/>
        </label>
        <label>
            Email o numero de telefono:
            <input v-model="newUser.datos" type="datos"  placeholder="Email o numero de telefono"/>
        </label>
        <!-- <button @click="emitButton" type="submit">Agregar usuario</button> -->
        <Button color="White" text="Agregar" @click="emitButton"></Button>
        <Button  v-if="isShown" color="Green" text="Sortear" @click="emitButton"></Button>
    </div>
    <div v-if="isShown" class="users">    
        <h1>Agregados</h1>
        <div v-for="user in data" :key="user.id" class="user" >
            <p>{{user.name}}</p>
            <p style="margin-left:2rem">{{user.datos}}</p>
            <Button class="Red" @click="deleteUser" text="Eliminar"></Button>
        </div>
    </div>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import {useParticipantes} from '@/stores/participantes'
import Button from "@/components/Button/index.vue";

const newUser = ref({
    name: '',
    datos: ''
})

const isShown = ref(false)

const useStore = useParticipantes();
const data = useStore.datos
const emitButton = () => {
    //TODO: validar que no este vacio
    if(newUser.value.name && newUser.value.datos){   
        useStore.addUser(newUser.value)
        resetObject()
        shown()
    }
    else {
        alert("No puedes dejar el campo vacio")
    }
}
const shown = () => {
    if(useStore.datos.length > 0){
        isShown.value = true
    }
    else{
        isShown.value = false
    }
}
const deleteUser = () => {
    useStore.deleteUser()
    shown()
}
const resetObject = () => {
    newUser.value = {
        name: '',
        datos: ''
    }
}
</script>
<style>
.content {
    display: flex;
    align-items: center;
    flex-direction: column;
}
input{
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
}
.user{
    display: flex;
    align-items: center;
}
.users{
    margin: 5rem;
}
.title h1{
    font-size: 2.5rem;
}
.title{
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 4rem;
}
</style>