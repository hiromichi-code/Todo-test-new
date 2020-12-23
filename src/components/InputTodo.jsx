import React from "react";
// Reactをインポート

export const InputTodo = (props) => {
  // インプットエリアのコンポーネントを作成
  const { todoText, onChange, onClick, disabled } = props;
  // propsをオブジェクトで受け取る
  return (
    <div className="input-area">
      {/* インプットエリアの内容 */}
      <input
        disabled={disabled}
        // ある条件下で使えなくする処理が適用される部分の指定
        placeholder="Todoを入力"
        // 初期にインプットに表示する文字
        value={todoText}
        // 入力した内容
        onChange={onChange}
        // 内容が変化した時に実行する
      />
      <button disabled={disabled} onClick={onClick}>
        {/* ある条件下で使えなくする処理が適用される部分の指定＋クリックされた時に実行 */}
        Todoを追加
      </button>
    </div>
  );
};
