import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/newExpenses/NewExpense";
import React, { useEffect } from "react";
import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [expenses, setExpenses] = useState([]);
  useEffect(()=>{
    fetchExpenseHandler()
  },[])
  const [error, setError] = useState(null);

  const fetchExpenseHandler = async () => {
    try {
      setError(null);
      const response = await fetch(
        "https://expenses-c4a72-default-rtdb.firebaseio.com/expenses.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong", response.status);
      }
      const data = await response.json();

      const expenseDate = [];

      for (const key in data) {
        expenseDate.push({
          id: key,
          title: data[key].title,
          amount: data[key].amount,
          date: new Date(data[key].date),
        });
      }

      setExpenses(expenseDate);
    } catch (error) {
      setError(error.message);
    }
  };

  const notify = () => {
    toast.promise(
      fetchExpenseHandler,
      {
        pending: "Fetching...",
        success: "Loaded",
        error: "error",
      },
      { autoClose: 1000, theme: "dark" }
    );
  };

  let content = <p>No Expenses found! Click the button at the top ⬆️</p>;

  if (expenses.length > 0) {
    content = <Expenses expenses={expenses} error={error} />;
  }
  return (
    <div className="content">
      <ToastContainer />
      <NewExpense />
      <button className="btn" onClick={notify}>Show Expenses</button>
      {content}
    </div>
  );
}

export default App;
