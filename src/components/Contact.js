// Terima props lalu tampilkan dalam Contact component
// Contact component dapat berupa MUI ListItem
// https://mui.com/material-ui/react-list/#folder-list
import React from "react";

// Kalian bisa membuat CSS sendiri di src/components/Contact.css
// atau langsung tambahkan dengan sx={{}}
import {
	Typography,
	Divider,
	List,
	ListItem,
	ListItemAvatar,
	Avatar,
	ListItemText,
} from "@mui/material";

const Contact = ({ data }) => {
	// Contact berisi foto, nama, telepon, dan email
	return (
		<List
			sx={{
				bgcolor: "#DBF6F0",
				flex: 1,
				maxWidth: 600,
			}}
		>
			{data.map((item, index) => (
				<React.Fragment key={index}>
					<ListItem align-items="flex-start">
						<ListItemAvatar sx={{ mr: 2 }}>
							<Avatar
								src={item.photo}
								alt={item.email}
								sx={{ width: 56, height: 56 }}
							/>
						</ListItemAvatar>
						<ListItemText
							disableTypography
							primary={
								<Typography variant="h6">
									{item.name}
								</Typography>
							}
							secondary={
								<>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										{item.phone}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
									>
										{item.email}
									</Typography>
								</>
							}
						/>
					</ListItem>
					<Divider />
				</React.Fragment>
			))}
		</List>
	);
};

export default Contact;
