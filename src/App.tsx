import { useEffect, useState } from "react";
import "./App.scss";
import Modal from "./components/Modal/Modal";
import SearchBar from "./components/SearchBar/SearchBar";
import UserCard from "./components/UserCard/UserCard";

export type User = {
    name: string;
    phone: string;
    email: string;
    address: string;
    position_name: string;
    department: string;
    hire_date: string;
};

const App = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [curSearch, setCurSearch] = useState<string>("");
    const [chosenUser, setChosenUser] = useState<User | null>(null);
    const [users, setUsers] = useState<User[]>([]);

    const modalHandler = (e: React.MouseEvent<HTMLDivElement>, user: User | undefined) => {
        e.stopPropagation();
        if (user) setChosenUser(user);
        setIsModalOpen((prev) => !prev);
    };

    useEffect(() => {
        fetch("http://127.0.0.1:3000" + (curSearch ? `?term=${curSearch}` : ""))
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, [curSearch]);

    return (
        <div className="App">
            <div className="wrapper">
                <SearchBar setSearch={setCurSearch} />
                <div className="cards">
                    {users.map((user: User) => (
                        <UserCard modalHandler={modalHandler} user={user} key={user.name} />
                    ))}
                </div>
            </div>
            <Modal isOpen={isModalOpen} user={chosenUser} closingHandler={modalHandler} />
        </div>
    );
};

export default App;
