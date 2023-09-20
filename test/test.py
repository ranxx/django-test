#-*- coding:UTF-8 -*-
# import requests               #引入Requests库

from urllib import request,parse
from selenium import webdriver

# import urllib.request

if __name__ == '__main__':              
    target = '''https://www.marriott.com/reservation/availabilitySearch.mi?isSearch=false&isRateCalendar=false&numberOfRooms=1&numberOfAdults=1&numberOfChildren=0&useRewardsPoints=false&propertyCode=BJSXR&fromDate=09/20/23&toDate=09/21/23'''
    
    ret = request.urlopen(target)
    
    print(ret)

    html = ret.read().decode('utf-8')

    print(html)

    webdriver
   
    # resp = requests.get(target)
    
    
    # target = parse.urlencode(target)
    # print(parse.quote(target))

    # a = request.urlopen(target)         # 获取目标URL

    # html = a.read().decode('utf-8')
    # print(html)                  # 打印目标任务text