import React from 'react';
import Terminal from 'terminal-in-react';
function BottomPanel(props) {
  return (
    <Terminal
      hideTopBar={true}
      allowTabs={false}
      promptSymbol={'$'}
      prompt={'lime'}
      color={'lime'}
      backgroundColor={'black'}
      startState={'maximised'}
    />
  );
}

export default BottomPanel;
