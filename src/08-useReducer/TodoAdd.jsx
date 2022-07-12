import { useRef } from "react";
import { useForm } from "../hooks/useForm";

export const TodoAdd = ({ onNewTodo }) => {
	const { description, onInputChange, onResetForm } = useForm({
		description: "",
	});

	const onFormSubmit = (event) => {
		event.preventDefault();
		if (description.length <= 1) return;

		onNewTodo({
			id: new Date().getTime(),
			description,
			done: false,
		});
		onResetForm();
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type="text"
				placeholder="What do you have to do?"
				className="form-control"
				name="description"
				value={description}
				onChange={onInputChange}
			/>
			<button type="submit" className="btn btn-outline-primary mt-1">
				Add
			</button>
		</form>
	);
};
