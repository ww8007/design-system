import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';
import { useState } from 'react';
import colors from '../constants/colors';

interface Props {}

const LoginForm = ({}: Props) => {
	const [loginInfo, setLoginInfo] = useState({
		email: '',
		password: ''
	});
	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setLoginInfo({
			...loginInfo,
			[name]: value
		});
	};

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoginInfo({
			email: '',
			password: ''
		});
		console.log(loginInfo);
	};

	return (
		<>
			<Form onSubmit={onSubmit}>
				<Input
					onChange={onChange}
					title="email"
					name="email"
					value={loginInfo.email}
					type={'email'}
					data-testid="email"
				/>
				<Input
					onChange={onChange}
					title="password"
					name="password"
					value={loginInfo.password}
					type={'password'}
					data-testid="password"
				/>
				<Button type="submit">로그인</Button>
			</Form>
		</>
	);
};

export { LoginForm };

const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Input = styled.input`
	border: 1px solid black;
	padding: 1rem;

	border-radius: 0.7rem;
	width: 50%;
	justify-self: center;
	margin: 1rem 0;
	box-sizing: border-box;
`;

const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 50%;
	margin-top: 1rem;
	padding: 1rem;
	height: 3rem;
	border: 0 solid transparent;
	border-radius: 0.5rem;
	background-color: ${colors.blue300};
	color: ${colors.thirdColor};
	font-size: 1rem;

	white-space: nowrap;
	user-select: none;
	-webkit-font-smoothing: antialiased;
	transition: color 0.1s ease-in-out, background-color 0.1s ease-in-out;
	&:focus {
		outline: none;
	}
	&:disabled {
		opacity: 0.26;
		cursor: not-allowed;
	}
	&:active {
		background-color: ${colors.blue500};
		color: ${colors.white};
	}
`;
