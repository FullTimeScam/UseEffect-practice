import { useEffect, useState } from "react";

const Box = () => {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);

  // useEffect의 디펜던시가 없다면 : 페이지 내의 무엇이 변해도 계속 실행됨
  // useEffect(() => {
  //   console.log(`count: ${count}`);
  //   console.log(`count: ${count2}`);
  // });

  // useEffect의 디펜던시가 비어있다면 [] : 한 번만 실행됨
  // useEffect(() => {
  //   console.log(`count: ${count}`);
  //   console.log(`count: ${count2}`);
  // }, []);

  // useEffect의 디펜던시가 있다면 [조건] : [조건]이 업데이트될 때마다 실행됨
  // useEffect(() => {
  //   console.log(`count1: ${count}`);
  // }, [count]);
  // useEffect(() => {
  //   console.log(`count2: ${count2}`);
  // }, [count2]);

  useEffect(() => {
    console.log(`count1: ${count}`);
  }, [count]);
  useEffect(() => {
    console.log(`count2: ${count2}`);
  }, [count2]);
  return (
    <div className="bg-blue-300 w-96 h-96 flex justify-center items-center gap-2">
      <div>Count : {count}</div>
      <button onClick={() => setcount(count + 1)}>+</button>
      <div>Count : {count2}</div>
      <button onClick={() => setcount2(count2 + 1)}>+</button>
    </div>
  );
};

export default Box;
