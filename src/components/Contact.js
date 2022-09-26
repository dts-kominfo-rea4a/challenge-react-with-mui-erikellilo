// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
import {
	Typography,
	ListItem,
	Divider,
	ListItemAvatar,
	Avatar,
	ListItemText,
	Box,
} from "@mui/material";

const Contact = ({ contact }) => {
	// Contact berisi foto, nama, telepon, dan email
	if (!contact) return <Typography variant="h6">Loading</Typography>;
	return (
		<>
			<ListItem align-items="flex-start">
				<ListItemAvatar sx={{ mr: 2 }}>
					<Avatar
						src={contact.photo}
						alt={contact.email}
						sx={{ width: 56, height: 56 }}
					/>
				</ListItemAvatar>
				<Box>
					<ListItemText primary={contact.name} />
					<ListItemText secondary={contact.phone} />
					<ListItemText secondary={contact.email} />
				</Box>
			</ListItem>
			<Divider />
		</>
	);
};

export default Contact;
