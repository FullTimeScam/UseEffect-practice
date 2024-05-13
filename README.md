### `useEffect` Hook 사용 예시

1. **디펜던시가 없는 경우**

   - 페이지 내의 무엇이 변해도 계속 실행됩니다.

   ```javascript
   useEffect(() => {
     console.log(`count: ${count}`);
     console.log(`count: ${count2}`);
   });
   ```

2. **디펜던시가 비어 있는 경우 ([])**

   - 컴포넌트가 마운트될 때 한 번만 실행됩니다. = 페이지 새로고침될 때 딱 한 번만 실행됨
     ```javascript
     useEffect(() => {
       console.log(`count: ${count}`);
       console.log(`count: ${count2}`);
     }, []);
     ```

3. **특정 디펜던시가 있는 경우**

   - 지정된 디펜던시가 업데이트될 때마다 실행됩니다.
     ```javascript
     useEffect(() => {
       console.log(`count1: ${count}`);
     }, [count]);
     useEffect(() => {
       console.log(`count2: ${count2}`);
     }, [count2]);
     ```
