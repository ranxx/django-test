from selenium import webdriver
from selenium.webdriver.common.by import By

options = webdriver.FirefoxOptions()
# profile = webdriver.FirefoxProfile()
options.add_argument('--incognito')
# profile = options.profile.add_extension
# profile.set_preference('browser.privatebrowsing.autostart')
browser = webdriver.Firefox(options=options)
browser.set_window_size(1200, 800)
browser.get('https://www.marriott.com/reservation/availabilitySearch.mi?isSearch=false&isRateCalendar=false&numberOfRooms=1&numberOfAdults=1&numberOfChildren=0&useRewardsPoints=false&propertyCode=BJSXR&fromDate=09/20/23&toDate=09/21/23')
# 设置隐式等待时间为10秒
browser.implicitly_wait(10)
kw_input = browser.find_element(By.ID, 'room-rate-container')
# kw_input.send_keys('Python')
# su_button = browser.find_element(By.CSS_SELECTOR, '#su')
# su_button.click()
print(kw_input)
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