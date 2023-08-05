import { useState } from "react";

// eslint-disable-next-line react/prop-types
function FormAddFriend({ onAddFriend }) {
	const [name, setName] = useState("");
	const [image, setImage] = useState("https://i.pravatar.cc/48?u");
  const id = crypto.randomUUID();
  
	function handleSubmit(e) {
		e.preventDefault();
		if (!name) return;

		const friend = {
			image: `https://i.pravatar.cc/48?u=${id}`,
			name,
			id,
			balance: 0,
    };
    console.log(friend);
		onAddFriend(friend);
	}

	return (
		<form className="form-add-friend" onSubmit={handleSubmit}>
			<label htmlFor="name">👫 Friend Name</label>
			<input
				type="text"
				id="name"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<label htmlFor="img">🎴 Friend Image</label>
			<input
				type="text"
				id="img"
				value={image}
				onChange={(e) => setImage(e.target.value)}
			/>

			<button className="button">add</button>
		</form>
	);
}

export default FormAddFriend;
