import Delete from "./Delete";
import PropTypes from 'prop-types';
const TodoCard = (props) => {
    const { content, deleteTodo, index } = props;
    const handleDelete = () => {
        deleteTodo(index);
    }
    return (
        <>
            <div className="card">
                <h3 className="todo-content">{index+1}.) {content}</h3>
                <div className="delete">
                    <Delete onClick={handleDelete}/>
                </div>
            </div>
        </>
    )
};

TodoCard.propTypes = {
    content: PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}

export default TodoCard;