//create pinia stores
import { defineStore } from 'pinia'


export const useParticipantes = defineStore('participantes',{
    state: () => ({
      datos:[]
}),
actions:{
    
    addUser(value:any ){   
        //@ts-ignore
        this.datos.push(value);

    },      
    deleteUser(value:any){
        //@ts-ignore
        this.datos.pop(value);
    },
}
});
