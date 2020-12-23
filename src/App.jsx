import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { Incomplete } from "./components/Incomplete";
import { Complete } from "./components/Complete";
// ReactとHooksをインポートする
// CSSをインポート
// InputTodoコンポーネントをインポート
// Incompleteコンポーネントをインポート
// Completeコンポーネントをインポート

export const App = () => {
  const [todoText, setTodoText] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  const onChangeValue = (e) => setTodoText(e.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };
  // Appコンポーネントを定義
  // ReactHooksを利用してTodo-inputの状態を管理。初期値を設定
  // ReactHooksを利用してTodo未完了の状態を管理。初期値を設定
  // ReactHooksを利用してTodo完了の状態を管理。初期値を設定
  // inputに入力したTodoの値を取得して定数にonChangeValueに入れる
  // 追加ボタン処理
  // Todoが空白では追加出来ないという処理
  // 未完了Todoエリアの全てのTodoの後に新しいTodoを入れる
  // 未完了Todoエリアの状態更新
  // 初期値を空白に更新
  const onClickIncompleteDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  // 未完了エリアでのDeleteボタン処理
  // 未完了Todoエリアの全てのTodoを取得して定数newTodosに格納
  // 指定したインデックスのTodoを１つ取得して削除
  // 削除しおわった未完了Todoエリアの状態を更新
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  // 完了エリアでのcompleteボタン処理。
  // 未完了Todoエリアの全てのTodoを取得して定数newIncompleteTodosに格納
  // 指定したインデックスのTodoを１つ取得して削除
  // 　現在の完了Todoエリアの最後に、未完了エリアで完了（削除）されたTodoを入れる処理を定数newCompleteTodosに格納
  // 完了エリアの状態を更新
  // 未完了エリアの状態を更新
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  // 完了エリアにあるbackボタンの処理
  // 完了エリアのTodoを全て取得して定数newCompleteTodosに格納
  // 指定したインデックスのTodoを１つ取得して削除
  // 未完了エリアのTodoの最後に完了エリアからbackされたTodoを入れる処理を定数newIncompleteTodosに格納
  // 完了エリアの状態更新
  // 未完了エリアの状態更新
  const onClickCompleteDelete = (index) => {
    const newTodos = [...completeTodos];
    newTodos.splice(index, 1);
    setCompleteTodos(newTodos);
  };
  // 完了エリアでの削除ボタンの処理
  // 完了エリアのTodoを全て取得して定数newTodosに格納
  // 完了エリアのTodo全ての中から指定したTodoを1個削除
  // 完了エリアの状態更新
  return (
    <div className="main">
      {/* メイン部分の枠 */}
      <InputTodo
        todoText={todoText}
        onChange={onChangeValue}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />
      {/* InputTodo（入力）コンポーネント部分。3つ(Todo名・入力する値・追加ボタンの処理)のpropsを渡す。Todoが5個に達した段階で入力できないように設定 */}
      {incompleteTodos.length >= 5 && (
        <p style={{ color: "red", padding: "0", margin: "0" }}>
          入力できる上限に達しました！
        </p>
      )}
      {/* 5個のTodo表示を限界として、案内文を赤で表示する処理 */}
      <div className="todo-area">
        <Incomplete
          todos={incompleteTodos}
          onClickComplete={onClickComplete}
          onClickIncompleteDelete={onClickIncompleteDelete}
        />
        {/* Incomplete（未完了）コンポーネント部分。3つ(Todo名・完了ボタンの処理・削除ボタンの処理)のpropsを渡す */}
        <Complete
          todos={completeTodos}
          onClickBack={onClickBack}
          onClickCompleteDelete={onClickCompleteDelete}
        />
        {/* Complete（完了）コンポーネント部分。3つ(Todo名・戻すボタンの処理・削除ボタンの処理)のpropsを渡す。 */}
      </div>
    </div>
  );
};
