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
				<ListItemText
					disableTypography
					primary={
						<Typography variant="h6">{contact.name}</Typography>
					}
					secondary={
						<>
							<Typography variant="body2" color="text.secondary">
								{contact.phone}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{contact.email}
							</Typography>
						</>
					}
				/>
			</ListItem>
			<Divider />
		</>
	);
};

export default Contact;
