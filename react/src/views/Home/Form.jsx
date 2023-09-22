import { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside";
import { Button, Form, DatePicker } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { hotelList } from "../../components/header/data";
import classNames from "classnames";
import "./font.scss";
const { RangePicker } = DatePicker;

const FormComponent = () => {
  const [form] = Form.useForm();

  const [brand, setBrand] = useState("所有品牌");
  const [open, isOpen] = useState(false);
  const [listHotel, setHotelList] = useState(hotelList);
  const closeMenu = () => isOpen(false);
  const panel = useOnclickOutside(() => closeMenu());
  // https://www.marriott.com.cn/search/hotelQuickView.mi?propertyId=WASJW&brandCode=JW&marshaCode=WASJW
  // https://www.marriott.com.cn/reservation/availability.mi?isSearch=false&propertyCode=wasjw
  const calcCount = () => {
    let count = 0;
    listHotel.forEach((item) => {
      item.list.forEach((child) => {
        if (child.isSelect) {
          count += 1;
        }
      });
    });
    if (count === 0) {
      setBrand("所有品牌");
    } else {
      setBrand(count + "个选定品牌");
    }
    return count;
  };
  const handleClick = (value) => {
    console.log(`selected ${open}`, open);
    isOpen(!open);
    setBrand("所有品牌");
    hotelList.forEach((item) => {
      item.isSelect = false;
      if (item.list) {
        item.list.forEach((child) => {
          child.isSelect = false;
        });
      }
    });
  };
  const handleHotel = (x, y) => {
    const select = listHotel[x].list[y].isSelect;
    listHotel[x].list[y].isSelect = !select;
    setHotelList([...listHotel]);
    calcCount();
  };
  const handleLevel = (type, x) => {
    if (type === 1) {
      listHotel[x].isSelect = false;
      listHotel[x].list.forEach((item) => {
        item.isSelect = true;
      });
      setHotelList([...listHotel]);
    } else {
      // 清楚，清楚
      listHotel[x].isSelect = true;
      listHotel[x].list.forEach((item) => {
        item.isSelect = false;
      });
      setHotelList([...listHotel]);
    }
    calcCount();
  };
  return (
    <>
      <Form form={form} size="large" layout="inline" requiredMark={false}>
        <Form.Item label="品牌" name="brand">
          <div className="panne-warp" ref={panel}>
            <div
              className="download"
              onClick={() => {
                handleClick();
              }}
            >
              {brand}
              <DownOutlined />
            </div>
            {open ? (
              <div className="pannel">
                <ul className="">
                  {listHotel.map((item, _idx) => {
                    return (
                      <li key={item.type} className="brands-select">
                        <div>
                          <span className="brands-level">{item.type}</span>
                          {item.isSelect ? (
                            <span
                              className="clean-button"
                              style={{ paddingLeft: "8px", cursor: "pointer" }}
                              onClick={() => handleLevel(1, _idx)}
                            >
                              |{item.desc}
                            </span>
                          ) : (
                            <span
                              className="clean-button"
                              style={{ paddingLeft: "8px", cursor: "pointer" }}
                              onClick={() => handleLevel(2, _idx)}
                            >
                              | {item.edesc}
                            </span>
                          )}
                        </div>
                        <div className="brands-item">
                          {item &&
                            item.list.map((child, yidx) => {
                              return (
                                <span
                                  key={child.name}
                                  className={classNames([
                                    "brands-icon",
                                    child.icon,
                                    child.isSelect ? "brand-active" : "",
                                  ])}
                                  onClick={() => handleHotel(_idx, yidx)}
                                ></span>
                              );
                            })}
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <div>
                  <Button
                    type="text"
                    size="large"
                    htmlType="submit"
                    onClick={() => {
                      handleClick();
                    }}
                  >
                    全部清除
                  </Button>
                  <Button
                    size="large"
                    htmlType="submit"
                    onClick={() => {
                      isOpen(false);
                    }}
                  >
                    应用
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </Form.Item>
        <Form.Item label="日期" name="date">
          <RangePicker size="large" />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            size="large"
            style={{ backgroundColor: "#444054" }}
            htmlType="submit"
          >
            查找酒店
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};
export default FormComponent;
