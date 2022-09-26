import { useState } from "react";

import "./App.css";

// Component
import Header from "./components/Header";
import Contact from "./components/Contact";
import ContactForm from "./components/ContactForm";

import { Box, List } from "@mui/material";

// Uncomment untuk memuat daftar kontak
import contactsJSON from "./data/contacts.json";

const App = () => {
	// Masukkan Header dan lakukan map untuk Contact ke dalam div App
	// untuk membuat daftar kontak bisa menggunakan MUI list
	// https://mui.com/material-ui/react-list/#folder-list

	// Masukkan contacts yang sudah didapat dalam JSON sebagai initial state
	// Buatlah handler untuk menambahkan kontak baru yang akan dikirim ke ContactForm
	const [contacts, setContacts] = useState(contactsJSON);

	const addNewContact = newContact => {
		setContacts([...contacts, newContact]);
	};

	return (
		<div className="App">
			<Header />
			<Box
				sx={{
					display: "flex",
					alignItem: "center",
					justifyContent: "space-between",
					mx: 10,
					my: 2,
					maxWidth: "100%",
				}}
			>
				<ContactForm addNewContact={addNewContact} />
				<List
					sx={{
						bgcolor: "#DBF6F0",
						flex: 1,
						maxWidth: 600,
					}}
				>
					{contacts.map((contact, index) => (
						<Contact contact={contact} key={index} />
					))}
				</List>
			</Box>
		</div>
	);
};

export default App;
