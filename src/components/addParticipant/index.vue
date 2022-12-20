<template>
 <div class="content ">
    <div class="title">
        <h1>Amigo Secreto</h1>
        <h3>Añade a los participantes para el sorteo del amigo secreto</h3>  
    </div>
    <div class="formulario">
        <label>
            Nombre:
            <input v-model="newUser.name" type="text"  placeholder="Jhon Doe"/>
        </label>
        <label>
            Email:
            <input v-model="newUser.email" type="email"  placeholder="correo@mail.com"/>
        </label>
        <Button color="White" text="Agregar" @click="emitButton"></Button>
        <Button  v-if="isShown" color="Green" text="Sortear" @click="sortear"></Button>
    </div>
    <div v-if="isShown" class="users">    
        <h1>Agregados</h1>
        <div class="users-content">
            <div v-for="user in data" :key="user.id" class="user" >
                <p>{{user.name}}</p>
                <p style="margin-left:2rem">{{user.email}}</p>
                <Button class="Red" @click="deleteUser" text="Eliminar"></Button>
            </div>
        </div>
    </div>
    </div>
</template>
<script setup>

import { ref } from 'vue'
import {useParticipantes} from '@/stores/participantes'
import Button from "@/components/Button/index.vue";
import emailjs from 'emailjs-com';

const newUser = ref({
    name: '',
    email: '',
    secretFriend: '',
    clues:[]
})

const isShown = ref(false)

const useStore = useParticipantes();
const data = useStore.datos;

const emitButton = () => {
    if(newUser.value.name && newUser.value.email){   
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
        email: '',
        secretFriend: '',
        clues:[]
    }
}

const sortear = () => {
    let personas = data
    personas.sort(function() {
    return 0.5 - Math.random();
  });

  let parejas = [];
  for (let i = 0; i < personas.length; i++) {
    let persona = personas[i];
    let asignado = personas[(i + 1) % personas.length];
    persona.secretFriend = asignado.name;
    parejas.push([persona, asignado]);
}
     // enviarEmail(parejas);
}

const enviarEmail = (parejas) => {
    parejas.map((duo)=>{
        try{
            const templateParams = {
                    name: duo[0].name,
                    message: duo[1].name,
                    email: duo[0].email,
                };
                console.log(templateParams)
            emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_YOUR_TEMPLATE_ID, templateParams,import.meta.env.VITE_PUBLIC_KEY)
                .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                }, (err) => {
                console.log('FAILED...', err);
                });
        }
        catch(err)
        {
            console.log(err)
        }
        
    })
    alert("Se ha notificado a los participantes");
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
    text-align: center;
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
.users-content{
    display: flex;
    align-items: center;
    flex-direction: column;
    max-height: 600px;
}
</style>