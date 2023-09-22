import React from "react";
import { Routes, Route } from "react-router-dom";
// BrowserRouter,
// Link,
// Route,
import FormComponent from "./Form";
import HotelList from "../HotelList";
import HotelDetail from "../HotelDetail/index";
import PayInfo from "../PayInfo/index";
import "./index.scss";

function Home() {
  return (
    <>
      <main className="main ">
        <div className="wrapper">
          <div className="main-search">
            <div className="title">
              <h1>查找酒店</h1>
            </div>
            <div className="book-hotel">
              <h3>酒店</h3>
              <div className="book-box">
                <FormComponent />
              </div>
            </div>
          </div>
          <div className="hotel-list-title">探索与筹划</div>
          <h2>酒店目录</h2>
        </div>
      </main>
      <div className="hotel-list">
        <div className="wrapper">
          {/* 酒店列表 */}
          <Routes>
            <Route path="/" element={<HotelList />} />
            <Route path="/detail" element={<HotelDetail />} />
            <Route path="/pay" element={<PayInfo />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Home;
