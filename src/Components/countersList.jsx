import React, { useState } from 'react';
import Counter from './counter';

function CountersList() {
  const [counters, setCounter] = useState([
    { id: 0, value: 0, name: 'Ненужная вещь' },
    { id: 1, value: 4, name: 'Ложка' },
    { id: 2, value: 0, name: 'Вилка' },
    { id: 3, value: 0, name: 'Тарелка' },
    { id: 4, value: 0, name: 'Набор минималиста' },
  ]);

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounter(newCounters);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} id={count.id} value={count.value} name={count.name} onDelete={handleDelete} />
      ))}
    </>
  );
}

export default CountersList;
