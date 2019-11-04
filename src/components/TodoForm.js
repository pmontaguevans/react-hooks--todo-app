import React, {useState} from 'react';

const TodoForm = ({addTask}) => {
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(title);
        setTitle('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Add task:</label>
            <input type="text" value={title} required onChange={(e) => setTitle(e.target.value) }/>
            <input type="submit" value="Add task" />
        </form>
    )
}

export default TodoForm;