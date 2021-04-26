import React from 'react'
export const splitText = (string) => {
  return string ? string.split(" ") : false;
};

export const printSpans = (array, delay) => {
  let index = 5;
  return array.map((word, i) => {
    return (
      <React.Fragment key={[word, i]}>
        <span
          className="word-container"
          style={{ "--i": `${index++ / 35 + (delay ? delay : 0)}s` }}
        >
          <span className="word">{word}</span>
        </span>
        {` `}
      </React.Fragment>
    );
  });
};
