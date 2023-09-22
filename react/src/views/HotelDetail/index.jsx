import { Card, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "./index.scss";
const HotelDetail = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="">
        <Card bodyStyle={{ padding: "0px 0px 0  0px" }}>
          <div className="detail-content">
            <div className="bed">1张特大大床，客房</div>
            <div className="detail-inner">
              <div>
                <img
                  src="https://cache.marriott.com/content/dam/marriott-renditions/WASJW/wasjw-guestroom-0120-hor-feat.jpg?resize=375:150&output-quality=70"
                  alt="华盛顿特区 JW 万豪酒店"
                />
              </div>
              <div className="desc">
                <div className="desc-item">
                  <div className="member">
                    <h2>会员放假</h2>
                    <span className="room-detail">放假详情</span>
                  </div>
                  <div>
                    <span className="price-detail">
                      685 <sub>USD/每晚</sub>
                    </span>
                    <Button
                      type="primary"
                      style={{ backgroundColor: "#444054" }}
                    >
                      选择
                    </Button>
                  </div>
                </div>
                <div className="desc-item">
                  <div className="member">
                    <h2>会员放假</h2>
                    <span className="room-detail">房价详情</span>
                  </div>
                  <div className="">
                    <span className="price-detail">
                      685 <sub>USD/每晚</sub>
                    </span>

                    <Button
                      type="primary"
                      style={{ backgroundColor: "#444054" }}
                      onClick={() => {
                        navigate("/pay");
                      }}
                    >
                      选择
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            {/* */}
          </div>
        </Card>
      </div>
    </>
  );
};

export default HotelDetail;
