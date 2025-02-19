#!/usr/bin/env bash
#exit on error

set -o errexit

# Modify this line as needed for your package manager(pip, poetry, etc.)
pip install -r requirements.txt

python manage.py collectstatic --no-input

python manage.py makemigrations

python manage.py migrate
