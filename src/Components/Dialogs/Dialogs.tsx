import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./DialogMessage/Message";
type DialogsProps={
    ArrayName:Array<obj>
    ArrayMessage:Array<obj>
}
type obj={
    id:string,
    name:string
}
export const Dialogs = (props:DialogsProps) =>{

    return(
        <div className={s.Dialogs}>

            <DialogItem ArrayName={props.ArrayName}/>
            <Message ArrayName={props.ArrayMessage}/>

        </div>
    )
}