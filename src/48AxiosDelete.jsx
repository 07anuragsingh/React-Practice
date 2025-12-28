import axios from "axios";

export default function DeleteUser({ id, onDelete }) {
    const baseURL = "http://localhost:3000/user";

    const handleDelete = async () => {
        const confirmDelete = window.confirm(
            "Sahi me Delete krna hai kya??"
        );
        if (!confirmDelete) return;

        try {
            await axios.delete(`${baseURL}/${id}`);
            onDelete(id);// update UI in parent
        } catch (error) {
            console.log(error);

        }
    }

    return (
        <button onClick={handleDelete} style={{ color: "red" }}>
            Delete
        </button>
    )
}