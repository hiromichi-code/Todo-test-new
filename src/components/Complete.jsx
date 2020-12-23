import React from "react";
// Reactをインポート

export const Complete = (props) => {
  // コンプリートエリアのコンポーネントを作成
  const { todos, onClickBack, onClickCompleteDelete } = props;
  // propsをオブジェクトで受け取る
  return (
    <div className="complete-area">
      {/* completeエリアのクラス */}
      <p className="title">Complete Area</p>
      {/* コンプリートエリアと表示 */}
      <ul>
        {todos.map((todo, index) => {
          // コンプリートエリアの最後にListクラスの内容を生成。Todoは入力された内容。ボタンを2つ作る
          return (
            <div key={todo} className="list">
              <li>{todo}</li>
              <button onClick={() => onClickBack(index)}>back</button>
              <button onClick={() => onClickCompleteDelete(index)}>
                delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
