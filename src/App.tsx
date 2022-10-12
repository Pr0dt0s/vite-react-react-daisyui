import { createRef, useLayoutEffect, useState } from 'react';
import { Button, Tooltip } from 'react-daisyui';

function App() {
  const [classes, setClasses] = useState<string | undefined>('');
  const tooltipRef = createRef<HTMLDivElement>();

  useLayoutEffect(() => {
    setClasses(tooltipRef?.current?.classList?.toString());
  }, [tooltipRef]);

  return (
    <div className="h-96 w-96 bg-white flex justify-center items-center">
      <Tooltip
        ref={tooltipRef}
        open
        color="accent"
        position="left"
        message='position: "left"'
      >
        <Button color="primary">Test Button</Button>
        <div className="text-black">
          Tooltip div Classes:
          <br />
          {classes}
        </div>
      </Tooltip>
    </div>
  );
}

export default App;
