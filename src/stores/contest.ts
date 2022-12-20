import { defineStore } from 'pinia'
import {createContestApi} from '@/api/file'

export const useContestStore = defineStore('contest', {
    state: () => ({
        contest:{}
  }),
  actions:{   
        createContest(value:any ){   
            this.contest = value;
            if (this.contest){
                console.log("create contest",  this.contest);
                createContestApi(this.contest);
            }
            else{
                alert("No se pudo crear el concurso")
            }

      }
  }
  
}
)
