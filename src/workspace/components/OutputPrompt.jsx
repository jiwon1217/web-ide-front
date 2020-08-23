import React, { useEffect, Fragment } from 'react';

function OutputPrompt({ data }) {
  const bashIcon = '$ ';

  useEffect(() => {
    const logDiv = document.getElementById('logDiv');
    logDiv.scrollTop = logDiv.scrollHeight;
  }, [data]);
  return (
    <div
      style={{
        maxHeight: '80%',
        overflowY: 'auto',
        wordBreak: 'break-all',
      }}
      id="logDiv"
    >
      {data.split('\n').map((line, index) => {
        if (index === 0) return null;
        return (
          <Fragment key={index}>
            <span style={{ color: 'lime', display: 'block' }}>
              {bashIcon + line}
            </span>
          </Fragment>
        );
      })}
    </div>
  );
}

export default OutputPrompt;
