from django.shortcuts import render
from django.http import HttpResponse
from hotel.models import cal

# Create your views here.

def Index(request):
    print(request)
    return render(request=request,template_name='index.html')

def CalPage(request):
    return render(request=request, template_name='cal.html')

def Cal(request):
    if request.method != "POST":
        return HttpResponse("please in post")
    valueA = int(request.POST["valueA"])
    valueB = int(request.POST["valueB"])
    print(valueA, valueB)
    # 入库
    print(cal.objects.create(valueA=valueA,valueB=valueB,result=valueA+valueB))
    return render(request=request, template_name="result.html", context={'data':valueA+valueB})

def CalList(request):
    data = cal.objects.all()
    for i in data:
        print(i.valueA, i.valueB, i.result)
    return render(request=request, template_name="callist.html", context={'data':data})