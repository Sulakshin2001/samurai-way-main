
type RootType={
    postPage:PostPageType,
    namePage:namePageType,
    messagepage:messagepageType,
}
type PostPageType={
    post:Array<obj2>
}
type namePageType={
    name:Array<obj>
}
type obj={
    id:string,
    name:string
}
type obj2={
    id:string,
    post:string
}
type messagepageType={
    messages:Array<obj>
}
type storeRoot={
    _state:RootType,
    getState:()=>RootType,
    dispatch:(action:action)=>void
}
type AddTaskActionType={
    type:'ADD-POST',
    postMessage:string

}
type action=AddTaskActionType
export let store:storeRoot={
    _state:{
        postPage:{
            post:[
                {id:'1',post:'Hello'},
                {id:'2',post:'Its,Me'},
                {id:'3',post:'Mario'},
            ]
        },
        namePage:{
            name:[ {id: '1', name: 'Misha'},
                {id: '2', name: 'Masha'},
                {id: '3', name: 'Dasha'},
                {id: '4', name: 'Nasha'}]},
        messagepage:{
            messages: [{id: '1', name: 'Hello'},
                {id: '2', name: 'How are you'},
                {id: '3', name: 'Im fine'},
                {id: '4', name: 'its good'}]
        }},
    getState(){
        return this._state
    },
    dispatch(action:action) {
        if(action.type='ADD-POST'){
            let newPost={
                id:'5',
                post:action.postMessage
            }

            this._state.postPage.post.push(newPost)
            console.log(postMessage)
        }


    }




}
export const AddTaskAC=(postMessage:string):AddTaskActionType=>{
    return {type:'ADD-POST',postMessage:postMessage}
}