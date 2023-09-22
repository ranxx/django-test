import {
  GlobalOutlined,
  QuestionCircleFilled,
  InfoCircleFilled,
  ShoppingFilled,
  UserOutlined,
} from "@ant-design/icons";
export const navList = [
  {
    name: "中文",
    icon: GlobalOutlined,
    url: "",
    img: "",
  },
  {
    name: "帮助",
    icon: QuestionCircleFilled,
    img: "",
    url: "",
  },
  {
    name: "常客假话常见问题",
    icon: InfoCircleFilled,
    url: "",
  },
  {
    name: "我的旅程",
    icon: ShoppingFilled,
    img: "",
    url: "",
  },
  {
    name: "登录或加入",
    icon: UserOutlined,
    img: "",
    url: "",
  },
];
export const oderList = [
  {
    name: "查找和预订",
  },
  {
    name: "特别优惠",
  },
  {
    name: "假期",
  },
  {
    name: "关于万豪旅享家",
  },
  {
    name: "我们的信用卡",
  },
  {
    name: "会议与活动",
  },
];
export const hotelList = [
  {
    type: "奢华",
    desc: " 选择所有奢华品牌",
    edesc: "Clear All Luxury Brands",
    isSelect: false,
    list: [
      {
        icon: "t-brand-logo-icon-eb icon-12",
        name: "艾迪逊酒店",
        value: "EB",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-rz icon-28",
        name: "丽思卡尔顿酒店",
        value: "RZ",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-lc icon-28",
        name: "豪华精选酒店",
        value: "LC",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-xr icon-28",
        name: "瑞吉酒店",
        value: "XR",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-wh icon-28",
        name: "W 酒店",
        value: "WH",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-jw icon-28",
        name: "JW万豪酒店",
        value: "JW",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-bg icon-12",
        name: "宝格丽",
        value: "BG",
        isSelect: false,
      },
    ],
  },
  {
    type: "高级",
    desc: " 选择所有高级品牌",
    edesc: "Clear All Premium Brands",
    list: [
      {
        icon: "t-brand-logo-icon-mc icon-28",
        name: "万豪酒店",
        value: "MC",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-si icon-28",
        name: "喜来登酒店",
        value: "SI",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-mv icon-28",
        name: "万豪度假会",
        value: "MV",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-de icon-28",
        name: "德尔塔酒店",
        value: "DE",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-wi icon-12",
        name: "威斯汀酒店及度假村",
        value: "WI",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-md icon-12",
        name: "艾美酒店",
        value: "MD",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-BR icon-28",
        name: "万丽酒店",
        value: "BR",
        isSelect: false,
      },
      //   {
      //     icon: "t-brand-logo-icon-br",
      //     name: "万丽酒店",
      //     value: "BR",
      //   },
      {
        icon: "t-brand-logo-icon-ak icon-28",
        name: "傲途格精选酒店",
        value: "AK",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-tx",
        name: "臻品之选酒店",
        value: "TX",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-ds",
        name: "Design Hotels™ 成员",
        value: "DS",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-ge",
        name: "盖洛德酒店",
        value: "GE",
        isSelect: false,
      },
    ],
  },
  {
    type: "精选",
    desc: " 选择所有精选品牌",
    edesc: "Clear All Select Brands",
    list: [
      {
        icon: "t-brand-logo-icon-cy icon-12",
        name: "万怡酒店",
        value: "CY",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-cy icon-12",
        name: "福朋喜来登酒店",
        value: "FP",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-sh icon-28",
        name: "SpringHill Suites 酒店",
        value: "SH",
      },
      {
        icon: "t-brand-logo-icon-fi ",
        name: "万枫酒店",
        value: "FI",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-pr icon-28",
        name: "普罗提亚酒店",
        value: "PR",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-ar icon-28",
        name: "AC酒店",
        value: "AR",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-al icon-28",
        name: "雅乐轩酒店",
        value: "AL",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-ox",
        name: "MOXY酒店",
        value: "OX",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-ox",
        name: "万豪 City Express",
        value: "XE",
        isSelect: false,
      },
    ],
  },
  {
    type: "长住",
    desc: "选择所有长住品牌",
    edesc: "Clear All Longer Stays Brands",
    list: [
      {
        icon: "t-brand-logo-icon-ri",
        name: "Residence Inn 酒店",
        value: "RI",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-ts",
        name: "TownePlace Suites 酒店",
        value: "TS",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-er",
        name: "万豪行政公寓",
        value: "ER",
        isSelect: false,
      },
      {
        icon: "t-brand-logo-icon-el",
        name: "源宿酒店",
        value: "EL",
        isSelect: false,
      },
    ],
  },
];
