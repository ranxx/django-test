import "./index.scss";
import logo from "../../styles/img/biglogo.png";

import Icon from "../Icon";
import { oderList, navList } from "./data";
const Header = () => {
  return (
    <>
      <header className="header clearfix">
        <div className="nav-wrapper">
          <nav className="nav">
            <div className="nav-item">
              <div className="item-wrapper wrapper">
                <div className="nav-left">
                  <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="nav-right">
                  <ul className="nav-list">
                    {navList.map((item, index) => {
                      return (
                        <li className="ml-25  list-item" key={item.name}>
                          {item.icon ? (
                            <Icon Icon={item.icon}></Icon>
                          ) : (
                            <img src={item.img} alt="logo" />
                          )}
                          <span className="ml-3">{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>{" "}
                  <ul className="nav-order ml-25">
                    {oderList.map((item, index) => {
                      return (
                        <li className="  order-item" key={item.name}>
                          <span className="ml-3">{item.name}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
