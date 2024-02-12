import { useState, useEffect } from "react";
import "./style.scss";
import logo from "../../assets/Logo.png";
import shuffle from "../../assets/shuffle.png";
import chevronBold from "../../assets/chevron-bold.png";
import dashboard from "../../assets/dashboard.png";
import payroll from "../../assets/payroll.png";
import salary from "../../assets/salary.png";
import employees from "../../assets/3-Friends.png";
import settings from "../../assets/Setting.png";
import profile from "../../assets/Profile.png";
import logout from "../../assets/logout-icon.png";
import chevronPrimary from "../../assets/chevron-2.png";

type Props = {};

const Sidebar = (props: Props) => {
    return (
        // <aside className="sidebar__wrapper">
        <section className="sidebar__wrapper">
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="switch__module">
                <div className="switch__container">
                    <div className="switch__button">
                        <img src={shuffle} alt="" />
                    </div>

                    <div>
                        <p className="switch__module__text">Switch Module</p>
                        <p className="payroll__text">Payroll Management</p>
                    </div>
                </div>
                <div>
                    <img src={chevronBold} alt="" />
                </div>
            </div>

            <div className="sidebar__links">
                <div className="link">
                    <div className="image">
                        <img src={dashboard} alt="" />
                    </div>
                    <p>Dashboard</p>
                </div>

                <div className="link justify">
                    <div className="flex">
                        <div className="image">
                            <img src={payroll} alt="" />
                        </div>
                        <p>Payroll Activities</p>
                    </div>

                    <div>
                        <img src={chevronPrimary} alt="" />
                    </div>
                </div>

                <div className="link">
                    <div className="image">
                        <img src={salary} alt="" />
                    </div>
                    <p>Salary Structure</p>
                </div>

                <div>
                    <div className="link">
                        <div className="image">
                            <img src={settings} alt="" />
                        </div>

                        <p>Element Setup</p>
                    </div>

                    <div className="sub__elements">
                        <p>Elements</p>
                        <p>Balances</p>
                    </div>
                </div>

                <div className="link">
                    <div className="image">
                        <img src={employees} alt="" />
                    </div>
                    <p>Employees</p>
                </div>

                <div className="horizontal"></div>

                <div className="link justify">
                    <div className="flex">
                        <div className="image">
                            <img src={settings} alt="" />
                        </div>
                        <p>Payroll Settings</p>
                    </div>

                    <div>
                        <img src={chevronPrimary} alt="" />
                    </div>
                </div>

                <div className="link">
                    <div className="image">
                        <img src={profile} alt="" />
                    </div>
                    <p>My Account</p>
                </div>

                <div className="link">
                    <div className="image">
                        <img src={logout} alt="" />
                    </div>
                    <p>Logout</p>
                </div>
            </div>
        </section>
        // </aside>
    );
};

export default Sidebar;
