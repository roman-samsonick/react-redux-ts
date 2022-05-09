import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const TodoList: React.FC = () => {
    const pages = [1, 2, 3, 4, 5]
    const {todos, error, loading, limit, page} = useTypedSelector(state => state.todo)
    const {fetchTodos,setTodoPage} = useActions()

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if (loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <div>
            {todos.map(todo =>
                <h1 key={todo.id}>
                    {todo.id} -- {todo.title}
                </h1>)}
            {pages.map(p =>
                <span
                    key={p}
                    onClick={()=>setTodoPage(p)}
                    style={{border: p === page ? '2px solid green' : '1px solid grey', padding: '10px',margin:'10px'}}>
                    {p}
                </span>)}
        </div>
    );
};

export default TodoList;