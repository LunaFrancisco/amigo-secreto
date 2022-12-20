<template>
    <div>
        <h1>Crear Amigo Secreto</h1>
        <h3>Ingresa los datos para crear el amigo secreto</h3>
        <pre>{{data}}</pre>
        <pre>{{contest}}</pre>
        <form action="" onsubmit="">
            <label>
                Titulo del Amigo Secreto: 
                <input type="text" v-model="contest.title" placeholder="Navidad">
            </label>
            <label>
                Agregue una descripción: 
                <input type="text" v-model="contest.description" placeholder="Amigo Secreto Navidad">
            </label>
            <label>Precio maximo de regalo: 
                <input type="text" v-model="contest.maxPrice" placeholder="$10.000">
            </label>
            <label>Fecha de termino: 
                <input type="date" v-model="contest.endDate" placeholder="15-12-2023">
            </label>
            <Participantes/>
        </form>
        <Button color="Yellow" @click="createContest" text="Crear Amigo Secreto"></button>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import Button from "@/components/Button/index.vue";
import { useContestStore } from '@/stores/contest'
import Participantes from "@/components/addParticipant/index.vue";
import { useParticipantes } from '@/stores/participantes'
const useStore = useContestStore()
const useParticipantesStore = useParticipantes();
const participantes = useParticipantesStore.datos;


const contest = ref({
    title: '',
    description: '',
    maxPrice: 0,
    endDate: '',
})

const createContestObject = () =>{
    const contestObject = {
        name: contest.value.title,
        maxPrice: contest.value.maxPrice,
        endDate: contest.value.endDate,
        description: contest.value.description,
        participants: participantes
    }
    return contestObject;
}

const createContest = () => {
    if(participantes && contest ){
        useStore.createContest(createContestObject())
    }
    else
    {
        alert("Error al crear concurso, rellena todos los campos")
    }
}
</script>

<style>

</style>