import { useState } from 'react';

import Button from '../../components/Button';

const App = () => {
  const [count, inc] = useState(0);
  return (
    <div>
      Application: ${count}
      <br />
      <Button onClick={() => inc(count + 1)}>+1</Button>
    </div>
  );
};

export default App;
