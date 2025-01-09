import { Chat, Store } from "./store/Store";

export interface Room {
    roomId: string;
    chats: Chat[]
}

export  class inMemoryStore implements Store {
    private store: Map<string, Room>;
    constructor(){
        this.store = new Map<string,Room>()
    }
    initRoom(roomId:string){
        this.store.set(roomId,{
            roomId,
            chats:[]
        })
    }
    getChats(room: string,limit:number,offset:number){

    }
    addChat(room: string, limit:number,offset:number){

    }
   upvote(room:string, chatId:string){

   }
}