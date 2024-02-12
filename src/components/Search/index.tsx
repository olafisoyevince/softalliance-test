import search from "../../assets/search.png";
import "./style.scss";

type Props = {};

const Search = (props: Props) => {
    return (
        <section className="search__container">
            <input
                type="text"
                className="searchfield"
                placeholder="Search for something..."
            />

            <div className="search__icon__wrapper">
                <img className="search__icon " src={search} alt="" />
            </div>
        </section>
    );
};

export default Search;
