//create pinia stores
import { defineStore } from 'pinia'

export const useParticipantes = defineStore('participantes',{
    state: () => ({
      datos:[]
}),
    actions:{
        addUser(value: any){   
            this.datos.push(value);
        },      
        deleteUser(value: any){
            this.datos.pop(value);
        },
        updateUser(value: any){
        }
    }
});