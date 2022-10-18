import { createRef, useLayoutEffect, useState } from 'react';
import { Button, Tooltip } from 'react-daisyui';

const positions = ['top', 'bottom', 'left', 'right'] as const;

function App() {
  const [classes, setClasses] = useState<string | undefined>('');

  const [position, setPosition] = useState<typeof positions[number]>('top');

  const tooltipRef = createRef<HTMLDivElement>();
  useLayoutEffect(() => {
    setClasses(tooltipRef?.current?.classList?.toString());
  }, [tooltipRef]);

  const onClick = () => {
    setPosition((currentPosition) => {
      return positions[positions.indexOf(currentPosition) + 1] || positions[0];
    });
  };

  return (
    <div className="h-60 w-96 px-12 py-4 bg-white">
      <div className="w-full flex p-8">
        <Tooltip
          className="mx-auto"
          ref={tooltipRef}
          open
          color="accent"
          position={position}
          message={`position: "${position}"`}
        >
          <Button color="primary" onClick={onClick}>
            Test Button
          </Button>
        </Tooltip>
      </div>
      <div className="text-black w-full text-center">
        Tooltip div Classes:
        <br />
        {classes}
      </div>
    </div>
  );
}

export default App;
