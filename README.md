Запуск
(venv) alex@alex:~/dev_env/app$ python manage.py runserver

youtube
Build a Shopping Cart with Django, pt1 | Django Projects for Beginners

youtube
Build a Shopping Cart with Django, pt2 | Django Projects for Beginners

selfedu
https://proproprogs.ru/django4

How To Use PostgreSQL with your Django Application on Ubuntu 20.04

Создание корзины покупок в Django

https://www.w3schools.com/html/html_forms.asp


Видео
Как можно добавить иконки на сайт. Иконочный шрифт из svg. Как подключить иконочный шрифт.

Создание папки 
$ mkdir  dev_env

вход в папку
$ cd dev_env

Выход из папки
$ cd ..

Создание виртуальное окружение
$ python3 -m venv venv

Активация(вход в виртуальное окружение)
alex@alex:~/dev_env$ source venv/bin/activate

Установка django
(venv) alex@alex:~/dev_env/$
pip install django==4.2.7
pip install psycopg2-binary  // для работы с postgres
pip install Pillow==10.2.0  // для работы с картинками

Проверим установку
pip list
pip show Django
pip show Pillow

