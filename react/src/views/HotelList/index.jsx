import "./index.scss";
import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
const HotelList = () => {
  const navigate = useNavigate();
  const handleDetail = () => {
    console.log("handleCode");
    navigate("/detail");
  };
  return (
    <ul className="hotel-main">
      <li className="hotel-show">
        <Card bodyStyle={{ padding: "0px 0px 0  0px" }}>
          <div className="show-content">
            <div className="hotel-left">
              <div>
                <img
                  src="https://cache.marriott.com/content/dam/marriott-renditions/WASJW/wasjw-guestroom-0120-hor-feat.jpg?resize=375:150&output-quality=70"
                  alt="华盛顿特区 JW 万豪酒店"
                />
              </div>
              <div className="desc">
                <div className="hotel-title">华盛顿特区／市中心万枫酒店</div>
                <div className="hotel-en">JW Marriott Washington, DC</div>
                <div className="hotel-location">
                  500 H Street NW 华盛顿州, 哥伦比亚特区 20001
                </div>
                <div className="hotel-far">
                  <div>
                    <span className="hotel-far-label">0.5 公里 </span>
                    <span>距目的地</span>
                  </div>
                  <div className="built-in">
                    华盛顿特区中心地带豪华酒店，内设健身中心。距众多纪念馆和博物馆仅数步之遥。
                  </div>
                </div>
                {/* <div>
                  Newly renovated Downtown, DC, hotel with free Wi-Fi and
                  breakfast near White House and
                </div> */}
              </div>
            </div>
            <div className="hotel-right">
              {/* <div>我是图标</div> */}
              {/* <div>我是为何选择</div> */}
            </div>
          </div>
          <div className="pay">
            {/* <span>591 USD 每晚平均 起</span> */}
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: "#444054" }}
              htmlType="submit"
              onClick={() => handleDetail()}
            >
              立即预定
            </Button>
          </div>
        </Card>
      </li>
    </ul>
  );
};
export default HotelList;
