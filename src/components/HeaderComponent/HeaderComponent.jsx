import { useState } from "react";
import "./HeaderComponent.css";

const HeaderComponent = () => {
  const [show, setShow] = useState({
    features: false,
    company: false,
  });
  const [showCompleteMenu, setShowCompleteMenu] = useState(false);

  const handleShow = (linkName) => {
    setShow((prevState) => ({
      ...prevState,
      [linkName]: !prevState[linkName],
    }));
  };

  const handleShowCompleteMenu = () => {
    setShowCompleteMenu(!showCompleteMenu);
  };

  return (
    <>
      <nav className="nav__general__container">
        <a href="#">snap</a>
        <button type="button" role="open-menu" onClick={handleShowCompleteMenu}>
          <img src="/images/icon-menu.svg" alt="Open menu" />
        </button>

        <div
          className={`menu__backdrop__container ${
            showCompleteMenu && "active"
          }`}
        >
          <div
            className={`menu__general__container ${
              showCompleteMenu && "active"
            }`}
          >
            <button
              type="button"
              role="button"
              aria-label="close menu"
              onClick={handleShowCompleteMenu}
            >
              <img src="/images/icon-close-menu.svg" alt="" />
            </button>
            <div className="menu__item">
              <a href="#" onClick={() => handleShow("features")}>
                Features
                <span>
                  {show.features ? (
                    <img src="/images/icon-arrow-down.svg" alt="" />
                  ) : (
                    <img src="/images/icon-arrow-up.svg" alt="" />
                  )}
                </span>
              </a>
              <div className={`menu__ul ${show.features && "visible"}`}>
                <ul>
                  <li>
                    <div>
                      <img src="/images/icon-todo.svg" alt="" />
                    </div>
                    <span> Todo List</span>
                  </li>

                  <li>
                    <div>
                      <img src="/images/icon-calendar.svg" alt="" />
                    </div>
                    <span>Calendar</span>
                  </li>

                  <li>
                    <div>
                      <img src="/images/icon-reminders.svg" alt="" />
                    </div>
                    <span>Reminders</span>
                  </li>

                  <li>
                    <div>
                      <img src="/images/icon-planning.svg" alt="" />
                    </div>
                    <span>Planning</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu__item">
              <a href="#" onClick={() => handleShow("company")}>
                Company
                <span>
                  {show.company ? (
                    <img src="/images/icon-arrow-down.svg" alt="" />
                  ) : (
                    <img src="/images/icon-arrow-up.svg" alt="" />
                  )}
                </span>
              </a>
              <div
                className={`menu__ul ${show.company && "visible"}`}
                style={{ height: show.company && "120px" }}
              >
                <ul>
                  <li>History</li>

                  <li>Our Team</li>

                  <li>Blog</li>
                </ul>
              </div>
            </div>
            <a href="#">Careers</a>
            <a href="#">About</a>
            <div className="menu__buttons">
              <button type="button" role="button" className="login__button">
                Login
              </button>
              <button type="button" role="button" className="register__button">
                Register
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default HeaderComponent;
