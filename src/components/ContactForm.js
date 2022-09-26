// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card

import { useState } from "react";

import { Card, TextField, Button } from "@mui/material";

// https://mui.com/material-ui/react-card/#basic-card

const initialValue = {
	name: "",
	phone: "",
	email: "",
	photo: "",
};

const ContactForm = ({ addNewContact }) => {
	// Form berisi name, phone, email, dan photo url
	// Buatlah state newContact berupa objek sesuai dengan data yang ada
	const [newContact, setNewContact] = useState(initialValue);

	const onChangeHandler = event => {
		const { id, value } = event.target;
		setNewContact(prev => {
			if (prev.value === value) return;

			return { ...prev, [id]: value };
		});
	};

	const onSubmitHandler = event => {
		event.preventDefault();
		addNewContact(newContact);
		setNewContact(initialValue);
	};

	return (
		<Card
			component="form"
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-evenly",
				flex: 1,
				maxWidth: 350,
				maxHeight: 350,
				px: 4,
			}}
		>
			<TextField
				id="name"
				label="Name"
				onChange={onChangeHandler}
				value={newContact.name}
				required
			/>
			<TextField
				id="phone"
				label="Phone"
				onChange={onChangeHandler}
				value={newContact.phone}
				required
			/>
			<TextField
				id="email"
				label="email"
				onChange={onChangeHandler}
				value={newContact.email}
				required
			/>
			<TextField
				id="photo"
				label="Photo URL"
				onChange={onChangeHandler}
				value={newContact.photo}
				required
			/>
			<Button variant="text" color="success" onClick={onSubmitHandler}>
				Add New
			</Button>
		</Card>
	);
};

export default ContactForm;
