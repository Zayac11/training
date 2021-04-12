// import "./styles.css";
import initialData from "./initial-data";
import {useEffect, useState, useRef} from "react";
import Column from "./Column";
import { DragDropContext } from "react-beautiful-dnd";

const tasks = [
    { id: 'task-1', content: 'Take out the garbage' },
    { id: 'task-2', content: 'Watch my favorite show' },
    { id: 'task-3', content: 'Charge my phone' },
    { id: 'task-4', content: 'Cook dinner' },
]

const initialState = {
    tasks: '',
    columns: {
    column: {
        id: 'column',
        title: 'To do',
        taskIds: []
    },
},
    columnOrder: ['column'],
}

export default function BeautifulDnd() {
    const [state, setState] = useState(initialState);
    const tasksItems = useRef(tasks);

    useEffect(() => {
        setState({
            tasks: Object.assign({}, tasks),
            columns: {
                column: {
                    id: 'column',
                    title: 'To do',
                    taskIds:
                        // ...state.columns.column.taskIds,
                        tasks.map((task) => {
                            return task.id
                        } )

                },
            },
            columnOrder: ['column'],
        })
    }, [])

    const onDragEnd = (result) => {
        // see example object in aux file.
        const { draggableId, source, destination } = result;

        // RETURN if dropped outside droppable (destination === null)
        if (!destination) return;

        // RETURN if dropped back in same position
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // Get relevant column and replace order.
        const col = state.columns[source.droppableId];
        const newTaskIds = [...col.taskIds];
        // Remove item from list
        newTaskIds.splice(source.index, 1);
        // Place it back in same list in new position.
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...col,
            taskIds: newTaskIds
        };

        const newState = {
            ...state,
            columns: {
                ...state.columns,
                [newColumn.id]: newColumn
            }
        };

        setState(newState);
    };

    const handleSubmit = () => {
       console.log(tasksItems)
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            {state.columnOrder.map((columnId) => {
                const column = state.columns[columnId];
                const tasks = column.taskIds.map((taskId, index) => {
                    // debugger
                    return Object.assign({}, Object.values(state.tasks).filter( task => task.id === taskId ))[0]
                });
                tasksItems.current = tasks
                return <Column handleSubmit={handleSubmit} key={column.id} column={column} tasks={tasks} />;
            })}
        </DragDropContext>
    );
}
