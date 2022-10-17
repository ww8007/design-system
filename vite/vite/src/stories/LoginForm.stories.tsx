// LoginForm.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { within, userEvent } from '@storybook/testing-library';

import { expect } from '@storybook/jest';

import { LoginForm } from './LoginForm';

export default {
	/* 👇 The title prop is optional.
	 * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
	 * to learn how to generate automatic titles
	 */
	title: 'Form',
	component: LoginForm
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
	<LoginForm {...args} />
);

export const EmptyForm = Template.bind({});

export const FilledForm = Template.bind({});
FilledForm.play = async ({ canvasElement }) => {
	// Starts querying the component from its root element
	const canvas = within(canvasElement);

	// 👇 Simulate interactions with the component
	await userEvent.type(canvas.getByTestId('email'), 'email@provider.com', {
		delay: 100
	});

	await userEvent.type(canvas.getByTestId('password'), 'a-random-password', {
		delay: 100
	});

	// See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
	userEvent.click(canvas.getByRole('button'));

	const email = canvas.getByTestId('email');
	const password = canvas.getByTestId('password');

	expect(email.textContent).toBe('');
	expect(password.textContent).toBe('');
};
