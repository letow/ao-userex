import { FC } from "react";
import s from "./SearchBar.module.scss";
import { debounce } from "../../helpers/Debounce";
import { ReactComponent as SearchIcon } from "./../../assets/search.svg";

interface SearchBarProps {
    setSearch: (s: string) => void;
}

const SearchBar: FC<SearchBarProps> = ({ setSearch }) => {
    const changeSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value);

    const debounced = debounce(changeSearch, 1000);

    return (
        <div className={s.SearchBar}>
            <input type="search" onChange={debounced} />
            <div className={s.icon}>
                <SearchIcon />
            </div>
        </div>
    );
};

export default SearchBar;
