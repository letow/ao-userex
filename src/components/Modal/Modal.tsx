import { FC } from "react";
import s from "./Modal.module.scss";
import { User } from "../../App";

interface ModalProps {
    isOpen: boolean;
    user?: User | null;
    closingHandler: (e: React.MouseEvent<HTMLDivElement>, user?: User) => void;
}

const Modal: FC<ModalProps> = ({ isOpen, user, closingHandler }) => {
    return (
        <>
            {isOpen && (
                <div className={s.Modal} onClick={closingHandler}>
                    <div className={s.wrapper} onClick={(e) => e.stopPropagation()}>
                        <h1>{user?.name}</h1>
                        <ul className={s.info}>
                            <li className={`${s.info__item} ${s.info__item__title}`}>Телефон:</li>
                            <li className={s.info__item}>{user?.phone}</li>
                            <li className={`${s.info__item} ${s.info__item__title}`}>Почта:</li>
                            <li className={s.info__item}>{user?.email}</li>
                            <li className={`${s.info__item} ${s.info__item__title}`}>
                                Дата приема:
                            </li>
                            <li className={s.info__item}>{user?.hire_date}</li>
                            <li className={`${s.info__item} ${s.info__item__title}`}>Должность:</li>
                            <li className={s.info__item}>{user?.position_name}</li>
                            <li className={`${s.info__item} ${s.info__item__title}`}>
                                Подразделение:
                            </li>
                            <li className={s.info__item}>{user?.department}</li>
                            <li className={`${s.additional}`}>
                                <div className={`${s.info__item} ${s.info__item__title}`}>
                                    Дополнительная информация:
                                </div>
                                <div className={s.info__item}>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing et. Velt
                                    voluptatibus aiquam excepturi est ipsum soluta deserunt, tempore
                                    blanditiis voluptate ad quisquam harum reiciendis perspiciatis?
                                    Dolorum id quidem facere autem accusamus.
                                </div>
                            </li>
                        </ul>
                        <span className={s.cross} onClick={closingHandler} />
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
