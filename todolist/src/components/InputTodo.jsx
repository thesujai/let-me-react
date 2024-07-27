import PropTypes from "prop-types";
const InputTodo = (props) => {
    const { onInputChange } = props;
    const handleInputChange = (e) => {
        onInputChange(e.target.value);
    }
    return (
        <>
            <div className="inputfield">
            <input className="todo-input"type="text" onChange={handleInputChange} placeholder="Write Todo"/>      
            </div>
           
        </>
    )
};
InputTodo.propTypes = {
    onInputChange: PropTypes.func.isRequired,
}

export default InputTodo;