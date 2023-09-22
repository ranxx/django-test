import { Card, Button, Modal } from "antd";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./index.scss";
const PayInfo = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const hideModal = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="pay-info">
        <Card bodyStyle={{ padding: "0px 0px 0  0px" }}>
          <div className="pay-wrap">
            <h1 className="title">查看预订详情</h1>
            <div className="pay-inner">
              <div>
                <img
                  src="https://cache.marriott.com/content/dam/marriott-renditions/WASJW/wasjw-guestroom-1807-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=780:*"
                  alt="华盛顿特区 JW 万豪酒店"
                />
              </div>
              <div className="inner-right">
                <div className="m">
                  <div className="">
                    <h2 className="bed-number">1 张特大床, 客房</h2>
                    <span className="bed-detail">客房详情</span>
                    <h3 className="">登记入住： 2023 年 9 月 21 日 (周四)</h3>
                    <h3 className="">退房： 2023 年 9 月 22 日 (周五)</h3>
                    <h3 className="">客房： 1</h3>
                    <h3 className="">每房人数： 1 </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment">
            <span> 699.00 USD /每晚</span>
            <span> + 140.48 USD 税项及费用</span>
            <span> 839.48 USD 小计</span>
            <Button
              type="primary"
              size="large"
              style={{ backgroundColor: "#444054", textAlign: "center" }}
              onClick={() => {
                showModal();
              }}
            >
              结账
            </Button>
          </div>
        </Card>
      </div>
      <Modal
        title="Modal"
        open={open}
        onOk={hideModal}
        onCancel={hideModal}
        okText="确认"
        cancelText="取消"
      >
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
        <p>Bla bla ...</p>
      </Modal>
    </>
  );
};

export default PayInfo;
