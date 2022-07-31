import {NavLink} from "react-router-dom";

type DialogsProps={
    ArrayName:Array<obj>
}
type obj={
    id:string,
    name:string
}
export const DialogItem = (props:DialogsProps) =>{

    return(


            <div>

                {props.ArrayName.map(el=><div><NavLink to={'dialogs/'+el.id}>{el.name}</NavLink></div>)}

            </div>



    )
}