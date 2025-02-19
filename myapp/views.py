from django.shortcuts import render, redirect
from .models import Phrase

def index(request):
    if request.method == 'POST':
        phrase_text = request.POST.get('phrase')
        if phrase_text:  # Make sure input is not empty
            Phrase.objects.create(phrase=phrase_text)  # Save phrase
        return redirect('success')  # Redirect to clear form and avoid resubmission

    # Fetch all saved phrases
    phrases = Phrase.objects.all().order_by('-id')

    return render(request, 'index.html', {'phrases': phrases})
