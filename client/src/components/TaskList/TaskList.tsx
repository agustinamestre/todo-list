import * as React from "react";
import TaskModel from "../../TaskModel";
import Task from "../Task/Task";

export default function TaskList (props: {taskArray: TaskModel[]}) {
    const tasksArray = props.taskArray.map((elem: TaskModel) => <Task key={elem.id} task={elem}/>)

    return(
        <div>
            {tasksArray}
        </div>
    )
}

/*

const props = {
    persons: Person[]
}

<PersonListComponent persons={myPersonList}/>

export const PersonListComponent = (props:{persons: Person[]}) => {}


<PersonComponent name={}/>
 
export const PersonComponent  = (props: {name: string, lastName: string, age?: number}) => {}
*/