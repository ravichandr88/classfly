from django.shortcuts import render,HttpResponse


def signup(request):
    return render(request, 'signup.html', {'title': 'Sign-Up'})


from .forms import VideoUploadForm
def videoupload(request):
    if request.method == 'GET':
        return render(request, 'videouploader.html')
    
    form = VideoUploadForm(request.POST)
    print(form.is_valid())
    if form.is_valid():
        print(form.cleaned_data)
    else:
       print( form.errors.as_data)
    return HttpResponse(request.POST) 