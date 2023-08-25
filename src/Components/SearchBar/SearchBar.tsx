import classes from './SearchBar.module.css'

import magGlass from "../../assets/MagnifyingGlass.svg";

const SearchBar = () => {
    return (
        <form className={classes.searchForm}>
          <img src={magGlass} />
          <input
            type="text"
            placeholder="Pesquisar no UOLkut"
            className={classes.searchInput}
          />
        </form>
    );
}

export default SearchBar;