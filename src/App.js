import React from 'react';
import Hello from './Hello';
import Wrapper from './Wrapper';

function App() {
	return (
		<Wrapper>
			<Hello name="react" color="red" isSpecial/>
			<Hello color="blue"/>
		</Wrapper>
	);
}

export default App;
