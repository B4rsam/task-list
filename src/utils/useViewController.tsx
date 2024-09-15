import {getTasks, deleteTask, editTask} from "../services/request.js";
import { useEffect, useMemo, useRef, useState } from "react";
import TaskCard from "../components/TaskCard";
import { ITask } from "../interfaces/task.ts";

const useViewController = () => {
    const firstRun = useRef(true);
    const [task, setTasks] = useState<ITask[]>([]);
    const [isLoading, setLoading] = useState(false);

    const handleUpdate = () => {
        setLoading(true);
        getTasks().then((data) => {
            setLoading(false);
            setTasks(data.data.todos)});
    };

    const getTaskData = (id) => {
        const tasks = new Map();
        task.forEach((item) => {
            tasks.set(item.id, item);
        });
        return tasks.get(id);
    };

    const dummyUpdate = (inTask) => {
        const newData = [
            ...task,
            {
                ...inTask,
                id: task.length + 1,
            },
        ];
        setTasks(newData);
    };

    const dummyEdit = (id, data) => {
        editTask(id, data.todo).then((response) => {
            const filteredItem = task.filter((item) => item.id !== response.data.id);
            setTasks([
                ...filteredItem,
                response.data,
            ]);
        })
    };

    const handleDeletion = (id, skip = false) => {
        if (skip) {
            deleteTask(id).then(() => {
                const filteredItem = task.filter((task) => task.id !== id);
                setTasks(filteredItem);
            });
        } else if (confirm("Are you sure you wish to delete this task?")) {
            deleteTask(id).then(() => {
                const filteredItem = task.filter((task) => task.id !== id);
                setTasks(filteredItem);
            });
        }
    };

    const details = useMemo(() => ({ getTaskData, handleDeletion, dummyEdit }), [task]);
    const taskIds = useMemo(() => task.map((item) => item.id), [task]);
    const taskList = useMemo(() => task.map(({ id }) => <TaskCard id={id} key={id} />), [taskIds]);

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
        dummyEdit,
    };
};

export default useViewController;
