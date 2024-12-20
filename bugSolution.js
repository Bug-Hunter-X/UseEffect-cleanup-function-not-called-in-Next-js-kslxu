```javascript
import {useEffect, useState, useRef} from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const mounted = useRef(true);

  useEffect(() => {
    console.log('Component mounted');
    return () => {
      mounted.current = false;
      console.log('Component unmounted');
    };
  }, []);

  useEffect(() => {
    if (mounted.current) {
      // Do something here that may need cleanup when component unmounts
    }
    return () => {
       mounted.current = false; 
    }
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
export default MyComponent; 
```