
type DialogsProps={
    ArrayName:Array<obj>
}
type obj={
    id:string,
    name:string
}
export const Message = (props:DialogsProps) =>{


    return(

            <div >
                {props.ArrayName.map(el=><div>{el.name}</div>)}
            </div>


    )
}