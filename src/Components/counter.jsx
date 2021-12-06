import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const url = 'https://picsum.photos/200';
  const formatCounter = () => {
    return counter === 0 ? 'empty' : counter;
  };

  const getBageClasses = () => {
    let classes = 'm-2 badge ';
    classes += counter === 0 ? 'bg-warning' : 'bg-primary';
    return classes;
  };

  const handleIncrement = () => {
    setCounter((prevState) => prevState + 1);
    console.log(counter);
  };
  const handleDecrement = () => {
    setCounter((prevState) => prevState - 1);
    console.log(counter);
  };

  return (
    <>
      <img src={url} alt="images" />
      <button className="btn btn-primary btn-sm m-2" onClick={handleIncrement}>
        +
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleDecrement}>
        -
      </button>
      <span className={getBageClasses()}>{formatCounter()}</span>
    </>
  );
};

export default Counter;
