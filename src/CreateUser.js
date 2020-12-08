import React from "react";
import "./Button.scss";

const CreateUser = ({ username, email, onChange, onCreate }) => {
  return (
    <div>
      <input
        name="username"
        placeholder="계정명"
        onChange={onChange}
        value={username}
      />
      <input
        name="email"
        placeholder="이메일"
        onChange={onChange}
        value={email}
      />
      <button className="Button" onClick={onCreate}>
        등록
      </button>
    </div>
  );
};

export default React.memo(CreateUser);
