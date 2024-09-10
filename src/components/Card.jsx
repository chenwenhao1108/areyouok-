import React, { useContext, useState } from "react";
import { IndexContext } from "../App";

export default function Card({ question, answers = [], right, len }) {
  const { index, setIndex, setScore } = useContext(IndexContext);
  const [retarded, setRetarded] = useState(false);

  return retarded ? (
    <>
      <h1>🎊Congrats! You are retarded🎊</h1>
      <button
        className="retest"
        onClick={() => {
          setRetarded(false);
          setIndex(0);
          setScore(0);
        }}
      >
        Retest
      </button>
    </>
  ) : (
    <div className="card">
      <h2>{question}</h2>
      <div className="choices">
        {answers.map((answer, index) => {
          if (index === right) {
            return (
              <div
                key={index}
                onClick={() => {
                  setIndex((preI) => preI + 1);
                  setScore((preScore) => preScore + 1);
                }}
              >
                {answer}
              </div>
            );
          } else {
            return (
              <div key={index} onClick={() => setRetarded(true)}>
                {answer}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
