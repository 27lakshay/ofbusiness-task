import React from "react";
import "./header.css";

const Header = () => {
    return (
        <header className="header">
            <div className="title">
                <span className="title-icon">
                    <i className="fa-solid fa-book-bookmark"></i>
                </span>
                <h3 className="title-text">
                    <span className="title-owner">facebook</span>
                    <span className="title-separator">/</span>
                    <span className="title-repo">react</span>
                </h3>
                <span className="title-type text-tag muted">Public</span>
            </div>
            <div className="util-spacer"></div>
            <ul className="header-options">
                <li className="header-option">
                    <span>
                        <i className="fa-solid fa-bell"></i>Notifications
                    </span>
                </li>
                <li className="header-option">
                    <span>
                        <i className="fa-solid fa-star"></i>Star
                    </span>
                    <span className="count">175k</span>
                </li>
                <li className="header-option">
                    <span>
                        <i className="fa-solid fa-code-fork"></i>Fork
                    </span>
                    <span className="count">35.3k</span>
                </li>
            </ul>
        </header>
    );
};

export default Header;
