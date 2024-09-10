import { createContext, useState } from "react";
import Header from "./components/Header";
import Card from "./components/Card";

export const IndexContext = createContext();

function App() {
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const questions = [
    {
      question: "1 + 1 = ",
      answer: [1, 2, 3],
      right: 1,
    },
    {
      question: "医生问你喝酒吗，你应该回答：",
      answer: ["现在吗？你在哪呢", "我朋友都挺能喝的", "陈述自己的饮酒史"],
      right: 2,
    },
    {
      question: "你问网友这电影叫什么名字，网友回复说你的名字，你会想：",
      answer: ["这么巧", "网友骗人", "电影名叫“你的名字”"],
      right: 2,
    },
    {
      question:
        "刚加微信时别人自我介绍说：你好我是数学王子秦老师，你可以回复：",
      answer: ["秦老师你好", "王老师你好"],
      right: 1,
    },
    {
      question: "对象说今天要和爸比吃饭，她的意思是：",
      answer: ["她要和她爸比赛吃饭", "她要和她爸一起吃饭", "叫我去帮忙"],
      right: 1,
    },
    {
      question: "在图书馆开枪是件很没礼貌的事情",
      answer: ["对", "错"],
      right: 0,
    },
    {
      question: "对象身上有股奶香味，你觉得原因是：",
      answer: ["他有个一岁半的孩子"],
      right: 0,
    },
    {
      question: "俄罗斯入侵乌克兰是正确的：",
      answer: ["对", "错"],
      right: 0,
    },
  ];

  return (
    <>
      <Header />
      <main>
        <IndexContext.Provider value={{ index, setIndex, setScore }}>
          {index === questions.length ? (
            <>
              <h1>🎊You Are Not Retarded🎊</h1>
              <button
                className="retest"
                onClick={() => {
                  setIndex(0);
                  setScore(0);
                }}
              >
                Retest
              </button>
            </>
          ) : (
            <Card
              question={questions[index].question}
              answers={questions[index].answer}
              right={questions[index].right}
              len={questions.length}
            />
          )}
        </IndexContext.Provider>
        <br></br>
        <h2>Your score: {score}</h2>
      </main>
    </>
  );
}

export default App;
