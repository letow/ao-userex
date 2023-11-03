import s from "./UserCard.module.scss";
import { ReactComponent as Mail } from "./../../assets/mail.svg";
import { ReactComponent as Phone } from "./../../assets/phone.svg";
import { FC } from "react";
import { User } from "../../App";

interface UserCardProps {
    user: User;
    modalHandler: (e: React.MouseEvent<HTMLDivElement>, user: User) => void;
}

const UserCard: FC<UserCardProps> = ({ user, modalHandler }) => {
    return (
        <div className={s.UserCard} onClick={(e) => modalHandler(e, user)}>
            <h1>{user.name}</h1>
            <ul className={s.info}>
                <li className={s.info__item}>
                    <Phone />
                    <span>{user.phone}</span>
                </li>
                <li className={s.info__item}>
                    <Mail />
                    <span>{user.email}</span>
                </li>
            </ul>
        </div>
    );
};

export default UserCard;
