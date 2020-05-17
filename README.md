# Data-Exchange-Python-JavaScript

Skrypty do obsługi wymiany danych w formacie JSON, napisane w JavaScript (po stronie klienta), oraz w Pythonie (po stronie serwera). Skrypt po stronie serwera wysyła jeden zserializowany obiekt, który może odczytać klient.

## Od czego zacząć

Ta instrukcja pokaże Ci jak uruchomić skrypt na swoim systemie oraz jakich zasad powinienieś się trzymać.

### Wymagania wstępne

Flask

```
pip install Flask
```
---
### Jak uruchomić skrypty

```
Pobierz projekt
```
```
Uruchom terminal z wybranym folderem "Data-Exchange-Python-JavaScript>"
```
```
Wpisz komende "flask run", aby uruchomić serwer.
```

Jeśli wykonałeś wszystko zgodnie z instrukcją, po włączeniu strony powinny wyświetlić się dwa posty. Dane tego powyżej zostały pobrane jako obiekt z Pythona do JavaScriptu a następnie wyświetlone (dzieje się to automatycznie). Post poniżej jest wyświetlany, po wciśnieciu przycisku na stronie dane pobierane są przez JavaScript, a następnie wysłane do Pythona.

---

## Stworzony za pomocą

* [Python 3.8](https://www.python.org/) - język programowania
* JavaScript - język programowania
* [Flask 1.1.2](https://flask.palletsprojects.com/) -  framework aplikacji webowych

## Autor

* **Jan Kacper Sawicki** - [szypkiwonsz](https://github.com/szypkiwonsz)

## Informacje dodatkowe

* Skrypt został napisany jako zadanie na studia.
