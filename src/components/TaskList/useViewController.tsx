import { getTasks, addTask, deleteTask } from "../../services/request.js";
import { useEffect, useMemo, useRef, useState } from "react";
import TaskCard from "../TaskCard";
import { ITask } from "../../interfaces/task.ts";

const useViewController = () => {
    const firstRun = useRef(true);
    const [task, setTasks] = useState<ITask[]>([]);
    const [isLoading, setLoading] = useState(false)

    const handleUpdate = () => {
        setLoading(true);
        getTasks().catch().then((data) => {
            setLoading(false);
            setTasks(data.data.todos)});
    };

    const getTaskData = (id) => {
        const tasks = new Map()
        task.forEach((item) => {
            tasks.set(item.id, item);
        });
        return tasks.get(id);
    };

    const dummyUpdate = (inTask) => {
        inTask = {
            ...inTask,
            id: task.length+1,
        };
        setTasks(task.concat(inTask));
    };

    const dummyEdit = (id, text) => {
        const temp = {
            ...task[id],
            todo: text,
        };
        //change this
        deleteTask(id).then(() => {
            handleDeletion(id);
        }).then(() => {
            addTask(temp).then(() => {
                dummyUpdate(temp);
            });
        });
    };

    const handleDeletion = (id) => {
        if (confirm("Are you sure you wish to delete this task?"))
        {
            deleteTask(id).then(() => {
                const filteredItem = task.filter((task) => task.id !== id);
                setTasks(filteredItem);
            });
        }
    }

    const details = useMemo(() => ({ getTaskData, handleDeletion }), [task])
    const taskIds = useMemo(() => task.map(({id}) => id), [task])
    const taskList = useMemo(() => taskIds.map((id) => <TaskCard id={id} />), [taskIds])

    useEffect(() => {
        if (firstRun.current) {
            handleUpdate();
            firstRun.current = false;
        }
    }, []);

    return {
        taskList,
        details,
        dummyUpdate,
        isLoading,
    };
};

export default useViewController;