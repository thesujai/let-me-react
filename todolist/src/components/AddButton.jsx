import PropTypes from 'prop-types';

const AddButton = (props) => {
  const { handleAdd } = props;

  const handleClicked = () => {
    handleAdd();
  };

  return (
    <>
      <button className="add-button" onClick={handleClicked}>Add</button>
    </>
  );
};

AddButton.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};

export default AddButton;