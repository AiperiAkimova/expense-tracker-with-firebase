import ExpenseForm from './ExpenseForm';
import classes from './NewExpense.module.css';

const NewExpense = (props) => {
  const AddData = (data) => {
    const objectWithId = {
      ...data,
      id: Math.random().toString(),
    };

    props.onAddDataToArray(objectWithId)
  };

  return (
    <div className={classes["new-expense"]}>
      <ExpenseForm onAddData={AddData} />
    </div>
  );
};
export default NewExpense;