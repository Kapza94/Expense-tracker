import { useState } from "react";
import ExpenseList from "./Components/ExpenseList";
import ExpenseFilter from "./Components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 10, category: "Utilities" },
    { id: 2, description: "aa6a", amount: 10, category: "Utilities" },
    { id: 3, description: "121", amount: 10, category: "Utilities" },
    { id: 4, description: "323", amount: 10, category: "Utilities" },
  ]);

  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <div>
      <div className="mb-3">
        <ExpenseFilter onSelectCategory={(category) => setSelectedCategory(category)} />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpenseList>
    </div>
  );
}

export default App;
