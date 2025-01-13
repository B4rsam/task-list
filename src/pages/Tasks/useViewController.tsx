import { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { TaskCard } from "@/components";
import { ITask, ITaskResponse } from "@/interfaces/task.ts";
// @ts-ignore
import { addTask, deleteTask, editTask, getTasks } from "@/services/request";
import { IDataResponse } from "@/interfaces/shared.interfaces.ts";
import { AxiosResponse } from "axios";

const useViewController = () => {
    const firstRun = useRef(true);
    const [task, setTasks] = useState<ITask[]>([]);
    const [isLoading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState<boolean>(false);
    const handleModal = () => {
        setShowModal(!showModal);
    };

    const handleUpdate = () => {
        getTasks().then((res: AxiosResponse<IDataResponse<ITaskResponse>>) => {
            setTasks(res.data.data?.data ?? []);
            setLoading(false);
        });
    };

    const getTaskData = (id: number) => {
        const tasks = new Map();
        task.forEach((item) => {
            tasks.set(item.id, item);
        });
        return tasks.get(id);
    };

    const handleAdd = (inTask: Partial<ITask>) => {
        addTask(inTask).then((response: AxiosResponse<IDataResponse<ITask>>) => {
            setTasks((prev) => [...prev, response.data.data as ITask]);
        });
    };

    const handleEdit = (id: number, data: Partial<ITask>) => {
        editTask(id, data).then((response: AxiosResponse<IDataResponse<ITask>>) => {
            setTasks(
                task
                    .filter(({ id }) => id !== response.data.data?.id)
                    .concat(response.data.data as ITask)
            );
        });
    };

    const handleDeletion = (tid: number) => {
        deleteTask(tid).then(() => {
            setTasks(task.filter(({ id }) => id !== tid));
        });
    };

    const details = useMemo(() => ({ getTaskData, handleDeletion, handleEdit }), [task]);
    const taskIds = useMemo(() => task.map((item) => item.id), [task]);
    const taskList = useMemo(() => {
        const list = {
            high: [] as ReactNode[],
            normal: [] as ReactNode[],
            low: [] as ReactNode[],
        };
        task.forEach(({ id, priority }) => {
            switch (priority) {
                case 1:
                    list.high.push(<TaskCard id={id} />);
                    break;
                case 2:
                    list.low.push(<TaskCard id={id} />);
                    break;
                case 0:
                default:
                    list.normal.push(<TaskCard id={id} />);
                    break;
            }
        });
        return list;
    }, [taskIds]);

    useEffect(() => {
        if (firstRun.current) {
            handleUpdate();
            firstRun.current = false;
        }
    }, []);

    return {
        taskList,
        details,
        handleAdd,
        isLoading,
        handleEdit,
        showModal,
        handleModal,
    };
};

export default useViewController;
