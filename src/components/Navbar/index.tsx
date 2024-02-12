import chevronBold from "../../assets/chevron-bold.png";
import home from "../../assets/home.png";
import search from "../../assets/search.png";
import notification from "../../assets/notification.png";
import avatar from "../../assets/avatar.png";
import "./style.scss";
import Search from "../Search";

type Props = {};

const Navbar = (props: Props) => {
    return (
        <nav className="navbar__wrapper">
            <section className="left">
                <section className="change__org__wrapper">
                    <div className="change__org__container">
                        <div>
                            <img src={home} alt="" />
                        </div>

                        <div>
                            <p className="change__org__text">
                                Change Organization
                            </p>
                            <p className="papersoft__text">PaperSoft Limited</p>
                        </div>
                    </div>

                    <div>
                        <img src={chevronBold} alt="" />
                    </div>
                </section>

                <section className="searchbox">
                    <Search />
                </section>
            </section>

            <section className="profile__container">
                <div>
                    <img src={notification} alt="" />
                </div>

                <div className="avatar__container">
                    <div>
                        <img src={avatar} alt="" />
                    </div>

                    <div className="name__container">
                        <p>Henry Okoro</p>
                        <p>Payroll Manager</p>
                    </div>
                </div>
            </section>
        </nav>
    );
};

export default Navbar;
