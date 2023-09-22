from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions
from selenium.webdriver.support.wait import WebDriverWait
import random
import random
import string

# 创建Chrome参数对象
options = webdriver.ChromeOptions()
# 添加试验性参数
options.add_experimental_option('excludeSwitches', ['enable-automation'])
options.add_experimental_option('useAutomationExtension', False)
options.add_argument('--incognito')
options.add_argument('--user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/117.0.0.0 Safari/537.36')
# options.add_argument('cookie=MI_SITE=prod13; 413141d1174a7af87c579167d62f0ec0=dca8fb55dc827147eb7d98b2e34ee3b0; akacd_phoenix=3872640283~rv=6~id=4b4285ce3165f13603aca645ae3d56d8; MI_Visitor=E0435C61-360C-5502-A3B4-B6CE63C82680; at_check=true; 855f89e12f62018a955cfa5e05012eda=71fb7d0c393b0ad8b6cc3fd5d8cdc47c; usprivacy=1---; AMCVS_664516D751E565010A490D4C%40AdobeOrg=1; mdLogger=false; kampyle_userid=7f67-5b76-e2bc-1d16-5113-373b-77e1-a250; s_cc=true; aam_uuid=89729124968205038931556026700379045376; demdex=89729124968205038931556026700379045376; _gcl_au=1.1.1393680602.1695187510; F8eh4Hwq=A5YCDrGKAQAAQnldn5pV4RMvEj76Qols9yEoEkaM4n6uv7ObkogaAj_5ZsF7Aavf0ZmucgHcwH8AAEB3AAAAAA; OneTrustWPCCPAGoogleOptOut=false; _scid=aa4719a0-39e1-4db3-837d-ae913d205028; _cls_v=643e32a2-d466-4eed-aeb0-0f7398a1acbb; _cls_s=602b73bc-d530-420d-9976-4ba50f3606b6:0; _fbp=fb.1.1695187625903.1480015463; _pin_unauth=dWlkPU16SmxZamd6TUdVdE1EaGtOUzAwT0dNekxUaGxaalF0TlRReU0yWXdOMlJoT0RZeg; _yjsu_yjad=1695187626.a549ba02-6e63-43ca-a34c-804611a539ff; ln_or=eyIzNjA1NzIiOiJkIn0%3D; _sctr=1%7C1695139200000; tntId=E0435C61-360C-5502-A3B4-B6CE63C82680.34_0; 54101a7964dcdb9dcb7d4ee99752c5ea=ea1d7e8ab125e5b464f557b90073a62e; s_tbm=true; sessionID=7C3A0F57-B6C4-59C2-88D2-993D97ED076D; a57b2616814e0f1487309dd765f09aac=e4a0c1eccb4e407d3b601d556e78649b; AKA_A2=A; bm_sz=F1B40F6352FF11FF36A297905F5D49F0~YAAQbyCEtoIJqoiKAQAAqIaDshXE8DTMm1sUVxy8RBLP0lof3Xdonmtr6vhT8VbZ1a2MX8pVVAHtXKMezPUmH3DxHYv87bcmwpRhenJF7LeogRhqVE4E3Z6Q/sWgoxA7bAZdLcYaTw8h6L9dNQ8BB7pRXGDIRLxnIs+NU2gDY5wGOabPNs8rVPUQKWAR6qGRWQe5SkSbK9Kx6wG/Fqt3uI9O6ybse7Qyoh1tI/anMmGp0OJ33Wwqj4b5aniVLHuShwPcNUUIEzRtPnf0SnhU5tUbEZ5NWpOwwONy6eo1PVMfIsFgyA==~3682370~4338740; AMCV_664516D751E565010A490D4C%40AdobeOrg=-1124106680%7CMCMID%7C89983819426984783961584847990276681833%7CMCAAMLH-1695816902%7C3%7CMCAAMB-1695816902%7C6G1ynYcLPuiQxYZrsz_pkqfLG9yMXBpb2zX5dvJdYQJzPXImdj0y%7CMCOPTOUT-1695219302s%7CNONE%7CvVersion%7C5.2.0; kndctr_664516D751E565010A490D4C_AdobeOrg_identity=CiY4OTk4MzgxOTQyNjk4NDc4Mzk2MTU4NDg0Nzk5MDI3NjY4MTgzM1IRCKHgjpSrMRgBKgRKUE4zMAPwAaHgjpSrMQ==; kndctr_664516D751E565010A490D4C_AdobeOrg_cluster=jpn3; _ga=GA1.2.1667292935.1695212108; _gid=GA1.2.1673891526.1695212108; _dpm_ses.be2e=*; bm_mi=646316FD4064FBEA1B0C00089CE713BB~YAAQFWl7dt1nWIeKAQAA/AOEshVlbYtgc4SgktWInQmOZU3TMl/LSFkbnB/awvnjpZA+T2WZf4W4xuzZZFvl7IZjKy24rVTPqqrj3Lnd6evfXOoHg1+7DJbj5IQRfOJy2NNPRdIPtNIkQ/mr9x3n7MesRMIJ3+e8ajH+9aBXZW2TATvsojQs7ENmWhsjlzMjYCiGPG5qi0UXAJC5bzhXkQEQNOGsZdCO8bOFCOPsjWRKu9VJDVQMHIY45erZKsVCs/ZYdP4mZ1+VHOT0Gb4R5kooWeSUkVnH9U1wZ7uhJJkfiKwEFZGMt3sNDpy7cLJfXLGV1lNUbhQN3xgxRA0YMKUo2X1LR7LnJUpj~1; MarriottOrigin=B; 510658a4ae9addc5e67b55f9313cbbd4=0889e20dea1745a05977925e064c1650; ak_bmsc=4FF0229D2776470BC25A90AB3F97570E~000000000000000000000000000000~YAAQFWl7duZnWIeKAQAAGQ6EshXXNj1XLc+fT4jilAMae9Q2Nur01tiu5bpmuXCLMNoSohHsC06uN2zMGbWmVver1Inl0HdNKtKmd+bnwgan6h+cox7Z72///oY76YpePv/QPzXh4KzZrnnfnhruOG/5AZHP4miad6IEa5maq+3RtkHLc6k9DbS+8t1EvNZTkFfM/Qp4O0p4cGSfeKMTpZDEyvrdHZDqJWdss2SYIHEU6ur8HrkAsunC017u3ZgH4GOb561+7vubj7Wo57nM27/O/p+BqWD0H+SWe0APoQNIDatqSSy/54/ImS1HdAieDWV8Q19SX0rYEK9VuwExHy0IzTOhyt4NDFznKdXE2nEuVpdx3WIflWUB/taDCkx167DxUPdpBuRNuNQOX4STQKpxwlfgm0SPyCjo12mrenIoyG+7ar4ZsIoKtUkZleCiurh+pevWxS9nbhasENdTdnZbKlQhZ+2Vu5Y6a9ywwZuJPGmcReMP4x9k/fh1FZcOcbOeAKarOvGJKoiQuFzxjx4lLEHKxtGP3AbjIUu9s9tRAy67kS8uKkGKQg==; dtCookie=v_4_srv_8_sn_145655397FB025B95A3A397922BDF3A8_perc_100000_ol_0_mul_1_app-3A220110cf75551a30_0_rcs-3Acss_0; __lt__cid=38aa857e-f93d-4aec-983a-0aa06241fa90; __lt__sid=2a121b9c-2b3520ca; merchViewed=reservationAvailabilityFooterBanner-unlockYourStay1120|; 7f43ca11c4dc21bb60196804ca3a8e4a=269beefa17569f6d9af505506b259e50; _uetsid=559d3c30577611eebd70918b2e8c47fd; _uetvid=559d4600577611eeaa13bb7f39288a2c; kampyleUserSession=1695212166348; kampyleUserSessionsCount=5; kampyleSessionPageCounter=1; OptanonConsent=isGpcEnabled=0&datestamp=Wed+Sep+20+2023+20%3A16%3A06+GMT%2B0800+(%E4%B8%AD%E5%9B%BD%E6%A0%87%E5%87%86%E6%97%B6%E9%97%B4)&version=6.26.0&isIABGlobal=false&hosts=&landingPath=NotLandingPage&groups=1%3A1%2C3%3A1%2C4%3A1%2C6%3A1&AwaitingReconsent=false; _scid_r=aa4719a0-39e1-4db3-837d-ae913d205028; _dpm_id.be2e=eb909d84-1053-418e-a55b-0917e5bc50e4.1695187626.2.1695212168.1695189401.266d407a-3e19-4135-835f-9e7a28483f8b; JVMID=aries-play-reservation-app-green-63-qn6rb; e37a5a7b342e64476a0b7920f4e28414=7caeb324351f9c92d82330afbaa1a5b3; 922a5b25d7e793688c6fb7bd18ae0835=38df8f6d941ebbb936115741a8744f2e; x-mi-tag=NA; bm_sv=C5EF906530C3E525C97CABCEE098902E~YAAQFWl7dq1pWIeKAQAADQ+FshUY1hDKtnuhM/lkpxJjam4KaewlZpLmbYf4jt1WwrwaUsEBPN90NdQ6d/g/zcE8bCAPq6rxm9ucaEmGLW/O0eMvmMNFLTUnQiMlIwmA9rL8osXgmBp+s1wUO+cQWtictxdP5GcHRP9LhakXxV1Lz2KoNkt8qM6etNNkGTJjxIt6F6UqkgKIu7zi9UaNefWFDMEcg+YAn2+gwxSQSPrKVEOqg+dusEV5gGumPlN46lI=~1; ZMz286iJ=f%3DA7EQhbKKAQAAGGyZS-XrLIN0Qz4oYHMhK3gwIOBPIfjJJrTQCwlQFcdwk3GMAavf0ZmucgHcwH8AAEB3AAAAAA%253D%253D%26b%3Dmxpnd8%26c%3DAAAedrKKAQAAX3uS5Mo3PRcMakkiVHmvahLogcDowBIFHZ5KsJtomW43GDaC%26d%3DABYAgACAAIAAgACAAQCbaJluNxg2ggAAAABAmSBTAJRpc6aLftt44aH4GKl3WAE%26z%3Dq%26a%3D2-ZV2u22i58uL36XowZbJiHlgSFP; mbox=PC#df880b31122f40feb06302d34483a905.38_0#1758457000|session#c2558940add649ad97450294008b8d20#1695213962; _abck=3AA5A89A3399258EC2A37112660D0B8A~-1~YAAQFWl7drZpWIeKAQAAlRiFsgrYD8T5LNSPsPh6HvNFkg9IkgYElmOTvVCMUwM+Pi9SuJkllOVIZBnSA0lUpiEd11h7Ri/J7Ql0jAU5XEkU7l27JKCW5zZmwajS3/bJeB68B92jL1Vn5SwiZO8Uv5dOFprj+mmBuTd72rhqRKznN6ZKBxM6gowGqgEfMJWLUYvsGjO4N/u0VdehihbetdHCoow8kSm5oAM3UlPYioC+NVJitvW08/3ITA9QYFqshL9Z1rvYucoteiHEH7G60YXPClerTGTxRq7wKTif7DQAVRuwcJ+mtwZV7SnSuv5+Q60ZHNEpOTXWxQAz+5s2dLTwPrtlWn+cRCpB0vsGP7T/JksI4GN7SCDt3/DaYvtUKjyZCSy6ICp9APmn8h2OOA8ExyZeyFIPSHNM~-1~-1~-1')

ran_str = ''.join(random.sample(string.ascii_letters + string.digits, 16))
r = random.Random()
r.seed(ran_str)
path = ran_str +str(r.randint(0,1))

userDir='--user-data-dir=C:\Selenium\\'+path

options.add_argument(userDir)


options.add_argument('--profile-directory=Default')

options.add_argument("--disable-blink-features=AutomationControlled")

# 创建Chrome浏览器对象并传入参数



browser = webdriver.Chrome(options=options)
# 执行Chrome开发者协议命令（在加载页面时执行指定的JavaScript代码）
browser.execute_cdp_cmd(
    'Page.addScriptToEvaluateOnNewDocument',
    {'source': 'Object.defineProperty(navigator, "webdriver", {get: () => undefined})'}
)

# browser.set_window_size(1200, 800)
browser.get('https://www.marriott.com/reservation/availabilitySearch.mi?isSearch=false&isRateCalendar=false&numberOfRooms=1&numberOfAdults=1&numberOfChildren=0&useRewardsPoints=false&propertyCode=AOGCNDI&fromDate=09/22/23&toDate=09/23/23')
# 设置隐式等待时间为10秒
browser.implicitly_wait(10)
kw_input = browser.find_element(By.ID, 'room-rate-container')
# kw_input.send_keys('Python')
# su_button = browser.find_element(By.CSS_SELECTOR, '#su')
# su_button.click()
print(kw_input)
# print(browser.find_element(By.CLASS_NAME, "l-margin-bottom-none").text)
# 创建显示等待对象
# wait_obj = WebDriverWait(browser, 10)
# # 设置等待条件（等搜索结果的div出现）
# wait_obj.until(
#     expected_conditions.presence_of_element_located(
#         (By.ID, 'room-rate-container')
#     )
# )
# 截屏
browser.get_screenshot_as_file('python_result1.png')