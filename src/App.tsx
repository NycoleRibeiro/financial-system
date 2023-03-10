import { useState, useEffect } from 'react';
import * as C from './App.styles';

import { items, Item } from './data/items';
import { categories, Category } from './data/categories';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter';
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';
import { InputArea } from './components/InputArea';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList( filterListByMonth(list, currentMonth) );
  }, [list, currentMonth]);


  useEffect(() => {
    let incomeCount = 0
    let expenseCount = 0

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);

  }, [filteredList]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (newItem: Item) => {
    let newList = [...list];
    newList.push(newItem);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        {/* Informações */}
        <InfoArea 
          currentMonth={currentMonth} 
          onMonthChange={handleMonthChange} 
          income={income}
          expense={expense}
        />

        {/* Inserção */}
        <InputArea onAdd={handleAddItem} />

        {/* Tabela de itens */}
        <TableArea list={filteredList}/>
      </C.Body>
    </C.Container>
  )
}

export default App