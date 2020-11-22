import React, { useState } from 'react';

function InputSample() {
  const [inputs, setInputs] = useState({
    name: '',
    nickname: ''
  })

  const { name, nickname } = inputs

  const onChange = (e) => {
    const { value, name } = e.target
    setInputs({
      ...inputs,
      [name]: value
    })
  }

  const onReset = () => {
    setInputs({
      name: '',
      nickname: ''
    })
  }

  return (
    <div>
      <input onChange={onChange} value={name} name="name" placeholder="이름" />
      <input onChange={onChange} value={nickname} name="nickname" placeholder="별명" />
      <button onClick={onReset}>초기화</button>
      <div>
        <b>값: {name} {nickname}</b>
      </div>
    </div>
  );
}

export default InputSample;
