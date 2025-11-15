# 📋 PYTANIA STRATEGICZNE - Projekt RENO

**Pracownia Konserwatorska - Modernizacja + E-commerce**

> Przed rozpoczęciem prac musimy ustalić kluczowe aspekty projektu.
> Przeczytaj dokładnie każdą sekcję i odpowiedz na pytania.

---

## 🎯 SEKCJA 1: ZAKRES FUNKCJONALNY PROJEKTU

### 1.1 Rodzaj strony

**Pytanie:** Jaki jest główny cel tej strony?

- [ ] **A) Wizytówka + informacje** (bez sprzedaży online)
  - Prezentacja usług
  - Galeria realizacji
  - Formularz kontaktowy
  - Klient dzwoni/pisze po wycenę

- [ ] **B) Pełna platforma e-commerce**
  - Koszyk + płatności online
  - System zamówień
  - Panel klienta (śledzenie statusu)
  - Zarządzanie przesyłkami
  - Faktury/paragony

- [x] **C) Hybrydowa** (część usług online, część na zapytanie)
  - Np. "proste naprawy" - od ręki z ceną
  - Np. "zabytki" - indywidualna wycena

**Wybierz jedną opcję i wyjaśnij dlaczego:**
```
Odpowiedź:

Dysponuję w miarę kompletnym materiałem do zbudowania strony. Chciałbym w opraciu o niego wraz z popmocą agentAI przetestować mozliwość utworzenia kompletnej strony www. Jeżeli przedsięwzięcie się pwowiedzie trafi ona na serwer produkcyjnym i będzie pewniue modyfikowana lub rozbudowywana, niemnej trzeba ten projekt raktować jako testowy a wspólne pracę jako drogę dla mojej nauki. Na tym teapie na pytania, na którę nie udzielę odpowiedzi (np nr karty itp) należy wstawić dane domyślne, które zostaną uzupełnione poxniej, bądz Ai ma dokonąc wybory najlepszego rowiązania z punktu widzenia projektu.


```

---

### 1.2 Proces zamówienia/kontaktu

**Dla opcji A (wizytówka):**
- [x] Klient wypełnia formularz kontaktowy
- [x] Wysyła zdjęcia przedmiotu
- [x] Otrzymuje wycenę emailem
- [ ] Umawia się na dostawę/odbiór
Wydaje mi się, że jest tu zle ustalone etapy prac. Trzeba tu odzielić pierwszorazowego klienta (A) i klienta powracającego (B).
Ad A. Klient wchodzi na formularz kontaktowy z listy wybiera rodzaj tematu (usszkodzenia) który chce opisać. Dodaje opis uszkodzenia i ewentylanie zdjęcia przedmiotu i wysyła wiadomość do pracowni. System rejestruje  wiadomość w bazie danych i wysyła potwierdzenie jej otrzymania  z informacją z linkiem potwierdzającym konto email. W typowych sprawach wycena jest ustalana w widełkach, w innym wypadku wymaga wyceny człowieka, który przez aplikacje udziela odpowiedzi też mailowo. W każdym wypadku poza odpowiedzią klient proszony jest, jeżeli wycena mu odpowiada, o zalogowanie się do systemu własnym lub wygenerowanych hasłem.
Ad B. Kilent powracający rozpoznawany jest przez cookie więc aporoszony jest o zalogowanie się do systemu i wtedy przenoszony jest do panelu klienta gdzie formularz jest podobny lub identyczny z pkt. A.
**Dla opcji B/C (e-commerce):**

**Pytanie 1.2.1:** Jak klient będzie składać zamówienie?

```
Krok 1: (np. wybiera kategorię: "Renowacja drewna")


Krok 2: (np. wypełnia formularz opisowy + dodaje zdjęcia)


Krok 3: (np. otrzymuje wstępną wycenę lub płaci zaliczkę)


Krok 4: (np. wysyła przedmiot InPost/DHL)


Krok 5: (np. śledzi status prac w panelu klienta)


Krok 6: (np. płaci resztę i otrzymuje przesyłkę zwrotną)
Wszystkie kroki do implementacji na poźniejszych etapach wdrażania.

```

**Pytanie 1.2.2:** Czy chcesz **automatyczne wyceny** czy **zawsze ręczne**?

- [ ] Automatyczne (dla standardowych usług, np. "naprawa ramy 30x40cm = 150 PLN")
- [ ] Ręczne (każde zamówienie = indywidualna wycena przez Ciebie)
- [x] Hybrydowa (proste = auto, złożone = ręczne)

```
Odpowiedź + uzasadnienie:



```

---

### 1.3 Upload zdjęć przez klienta

**Pytanie:** Czy klient ma móc przesyłać zdjęcia przedmiotu?

- [] TAK - podczas składania zapytania/zamówienia
- [x] TAK - ale tylko przez email/formularz
- [x] NIE - opisy tekstowe wystarczą

**Jeśli TAK:**
- Maksymalny rozmiar pliku: _______ MB (rekomendacja: 5-10MB)
- Liczba zdjęć: _______ (rekomendacja: 3-5 zdjęć)
- Obsługiwane formaty: JPG, PNG, WEBP (inne: _______)

```
Dodatkowe uwagi:
wszystko w rozmiarze jaki wychodzi z typowego smatfona. Gdy większy system automatycznie powiniem przeskalować do rozmiaru 10 MB.

```

---

## 💳 SEKCJA 2: SYSTEM PŁATNOŚCI

### 2.1 Metody płatności

**Pytanie:** Które metody płatności chcesz obsługiwać?

- [x] **Przelewy24** (karty, BLIK, przelewy - prowizja ~1.5%)
- [x] **PayU** (podobne do P24)
- [ ] **Stripe** (międzynarodowe karty - prowizja ~2.9%)
- [x] **PayPal** (prowizja ~3.4%)
- [x] **Tradycyjny przelew** (podajesz numer konta)
- [x] **Za pobraniem** (płatność przy odbiorze paczki)
- [x] **Gotówka** (przy osobistym odbiorze)

```
Wybrane metody (możesz zaznaczyć kilka):




Preferowany dostawca bramki płatności:
(rekomendacja: Przelewy24 dla Polski, Stripe dla międzynarodowych)


```

---

### 2.2 Model płatności

**Pytanie:** Jak ma wyglądać proces płatności?

**Wariant A: Zaliczka + Reszta**
```
1. Klient płaci zaliczkę: 50 % (np. 30-50%)
2. Wykonujesz pracę
3. Klient płaci resztę: 50 %
4. Wysyłasz przedmiot
```

**Wariant B: 100% z góry**
```
1. Klient płaci pełną kwotę
2. Wykonujesz pracę
3. Wysyłasz przedmiot
```

**Wariant C: Po wykonaniu**
```
1. Klient składa zamówienie
2. Wykonujesz pracę
3. Wysyłasz fakturę/link do płatności
4. Po zapłacie - wysyłasz przedmiot
```

**Wariant D: Hybrydowy**
```
- Małe zlecenia (<500 PLN): _________________
- Średnie (500-2000 PLN): _________________
- Duże (>2000 PLN): _________________
```

```
Wybrany wariant + uzasadnienie:

Rozróznienie klienci lokalni i potwierdzeni lub nie. Największe obawy dotyczą zleceń zagranicznych i zdalnych (krajowych). Zasady powinny być jasne i wyjasnione na stronie www.


```

---

### 2.3 Faktury i dokumenty

**Pytanie:** Czy wystawiasz faktury VAT?

- [x] TAK - mam działalność (NIP: _____________)
- [ ] NIE - tylko paragony/potwierdzenia
- [ ] Planuję założyć działalność

**Jeśli TAK:**
- [x] Chcę automatyczne generowanie faktur (integracja z np. InFakt, Wfirma)
- [x] Będę wystawiać ręcznie i przesyłać PDFy
- [ ] Mam własny system księgowy (jaki: _______)

```
Dodatkowe informacje:
Na dalszym etapie do wdrożenia.

```

---

## 📦 SEKCJA 3: LOGISTYKA I PRZESYŁKI

### 3.1 InPost Paczkomaty

**Pytanie:** Jak chcesz wykorzystać InPost?

- [ ] **Tylko nadawanie** (Ty wysyłasz do klienta)
- [ ] **Tylko odbieranie** (klient wysyła do Ciebie)
- [x] **Obustronne** (klient → Ty → klient)

**Pytanie:** Kto płaci za przesyłkę?

**InPost - dostawa do klienta:**
- [ ] Zawsze klient (doliczane do zamówienia)
- [ ] Darmowa dostawa powyżej: _____ PLN
- [x] Zawsze Ty (wliczone w cenę usługi)

**InPost - przesyłka od klienta:**
- [x] Klient (wysyła na swój koszt)
- [ ] Ty (wysyłasz mu etykietę zwrotną)
- [ ] 50/50 (w zależności od wartości zlecenia)

```
Preferencje:




```

**Pytanie:** Jakie rozmiary paczek obsługujesz?

InPost Paczkomaty:
- [x] A (8×38×64 cm) - do 25 kg
- [x] B (19×38×64 cm) - do 25 kg
- [x] C (41×38×64 cm) - do 25 kg

```
Czy wszystkie rozmiary, czy są ograniczenia?




```

---

### 3.2 DHL / Kurier

**Pytanie:** Kiedy używasz DHL/kuriera zamiast InPost?

- [x] Przedmioty za duże na paczkomat (>64cm)
- [x] Przedmioty delikatne/cenne (zabytki)
- [x] Wysyłka międzynarodowa (Niemcy, Francja)
- [x] Na życzenie klienta (drożej)
- [ ] Zawsze (nie używam paczkomatów)

**Pytanie:** Integracja z DHL:

- [ ] **Automatyczna** - generowanie etykiet z systemu (wymaga konta biznesowego)
- [ ] **Ręczna** - sam przygotowuję przesyłki
- [x] **Hybrydowa** - zależy od typu zamówienia

```
Dodatkowe preferencje DHL:




```

---

### 3.3 Odbiór osobisty

**Pytanie:** Czy oferujesz odbiór osobisty?

- [x] TAK - pod adresem: _______________________________
  - Godziny odbioru: _______________________________
  - Czy wymagane umówienie: [x] TAK  [ ] NIE

- [ ] NIE - tylko przesyłki

```
Uwagi:


```

---

### 3.4 Opakowania i bezpieczeństwo

**Pytanie:** Jak pakujesz przedmioty?

- [x] Standardowe (karton + folia bąbelkowa)
- [x] Wzmocnione (dedykowane dla zabytków)
- [ ] Klient wybiera opcję pakowania (normalny +0 PLN / premium +X PLN)

**Pytanie:** Ubezpieczenie przesyłki:

- [ ] Zawsze ubezpieczam (wliczone w cenę)
- [x] Opcjonalnie (klient dopłaca X PLN)
- [ ] Nie ubezpieczam (odpowiedzialność kuriera)
- [x] Zależy od wartości przedmiotu (>____ PLN = ubezpieczenie)

```
Polityka pakowania i ubezpieczeń:




```

---

## 🌍 SEKCJA 4: WIELOJĘZYCZNOŚĆ

### 4.1 Języki i rynki

**Pytanie:** W jakiej kolejności chcesz wdrożyć języki?

**Faza 1 (MVP - start):**
- [1] Polski (oczywiście)
- [2] Angielski
- [3] Niemiecki
- [4] Francuski

**Faza 2 (później):**
- [ ] Pozostałe z listy

```
Priorytet języków (ponumeruj 1-4):

1 Polski
2 Angielski
___ Niemiecki
___ Francuski
```

---

### 4.2 Tłumaczenia treści

**Pytanie:** Skąd weźmiemy tłumaczenia?

**Dla treści statycznych (nagłówki, menu, FAQ):**
- [x] AI (GPT-4) + Twoja weryfikacja
- [ ] Profesjonalne biuro tłumaczeń
- [ ] Ty sam (znasz języki)
- [ ] Mix: AI dla draftu, biuro dla korekty

**Dla dynamicznych treści (opisy usług, blog):**
- [x] Automatyczne AI (Google Translate API / DeepL API)
- [ ] Ręczne tłumaczenie przez Ciebie
- [ ] Tylko po polsku (inne języki: tylko podstawy)

```
Preferowana metoda i budżet na tłumaczenia:




```

---

### 4.3 System tłumaczeń

**Pytanie:** Jak ma działać przełączanie języków?

**Wariant A: Subdomena**
```
pl.reno.pl (Polski)
en.reno.pl (Angielski)
de.reno.pl (Niemiecki)
fr.reno.pl (Francuski)
```

**Wariant B: Ścieżka URL**
```
reno.pl/pl/drewno
reno.pl/en/wood
reno.pl/de/holz
reno.pl/fr/bois
```

**Wariant C: Parametr**
```
reno.pl/drewno?lang=pl
reno.pl/drewno?lang=en
```

**Wariant D: Automatyczne wykrywanie** (geolokalizacja + wybór użytkownika)
```
Użytkownik z Polski → automatycznie PL
Użytkownik z Niemiec → automatycznie DE
+ przycisk do zmiany w header
```

```
Preferowany wariant (możesz połączyć kilka):

wariant A i D


```

---

### 4.4 Waluty i ceny

**Pytanie:** Czy ceny mają się zmieniać w zależności od języka/kraju?

- [ ] **NIE** - zawsze PLN (klient przelicza sam)
- [x] **TAK** - dynamiczne waluty:
  - Polski → PLN
  - Angielski → PLN lub EUR (użytkownik wybiera)
  - Niemiecki → EUR
  - Francuski → EUR

**Jeśli TAK - skąd kursy walut?**
- [ ] Statyczne (ustawiasz ręcznie co miesiąc)
- [ ] Dynamiczne (API NBP / ECB - automatyczne)
- [x] Fixed markup (np. PLN x 0.22 = EUR + 5% marży)

```
Strategia cenowa dla rynków zagranicznych:
Poproszę o omówienie, ale prostym i opisowym językiem.



```

---

## 📱 SEKCJA 5: MOBILE FIRST & RESPONSYWNOŚĆ

### 5.1 Priorytety urządzeń

**Pytanie:** Jaki % twoich klientów używa telefonu? (jeśli wiesz)

- [x] Nie wiem (założymy ~60% mobile)
- [ ] Wiem: około _____%

**Pytanie:** Które urządzenia priorytetyzujemy?

**Ponumeruj od 1 (najważniejsze) do 4:**

___ Telefon (375px - 430px)
___ Tablet (768px - 1024px)
___ Laptop (1280px - 1920px)
___ Desktop (>1920px, duże monitory)

```
Uzasadnienie (np. "większość klientów szuka przez telefon"):




```

---

### 5.2 Treść na urządzeniach mobilnych

**Pytanie:** Jak obsługujemy długie treści na telefonie?

**FAQ (masz ~15 pytań na materiał):**
- [ ] Pokaż wszystkie (długa strona, trzeba scrollować)
- [x] Pokaż 5 najczęstszych + "Rozwiń więcej"
- [ ] Accordion (domyślnie zwinięte, rozwijasz co Cię interesuje)
- [ ] Osobna zakładka "FAQ" (osobna strona)

**Opisy usług:**
- [ ] Pełny tekst (może być długi)
- [x] Krótka wersja na mobile, pełna na desktop
- [ ] "Czytaj więcej" po 3 akapitach

```
Preferowane podejście:




```

---

### 5.3 Galeria zdjęć

**Pytanie:** Jak wyświetlać galerię realizacji?

**Na telefonie:**
- [x] Slider (przesuwaj palcem)
- [ ] Grid 2 kolumny (miniaturki)
- [ ] Grid 1 kolumna (duże zdjęcia)
- [x] Lightbox (kliknij = pełny ekran)

**Na desktopie:**
- [x] Grid 3-4 kolumny
- [x] Masonry layout (Pinterest-style)
- [x] Slider z thumbnails

**Optymalizacja obrazów:**
- [x] Next.js Image (automatyczne WebP + lazy loading)
- [x] Cloudinary / ImageKit (CDN dla obrazów)
- [ ] Własny hosting

```
Preferencje + jakość obrazów (HD / standard):

za wcześnie na odpowiedz na tym etapie


```

---

## 🎨 SEKCJA 6: DESIGN & BRANDING

### 6.1 Tożsamość wizualna

**Pytanie:** Czy masz już branding?

- [ ] TAK - mam logo, kolory, fonty
  - Logo (format): ___________ (SVG / PNG / AI)
  - Kolory firmowe (hex):
    - Główny: #_______
    - Dodatkowy: #_______
    - Akcent: #_______
  - Czcionki: _______________

- [ ] NIE - potrzebuję pomocy z brandingiem
  - [ ] Minimalistyczny / elegancki
  - [ ] Klasyczny / tradycyjny (rzemiosło)
  - [ ] Nowoczesny / technologiczny

```
Dodatkowe uwagi o stylu:

Potrzebuję pomocy z uwzględnieniem charaktrystyki działaności pracowni.


```

---

### 6.2 Inspiracje designem

**Pytanie:** Jakie strony lubisz? (podaj 2-3 przykłady)

```
1. URL: _______________________________
   Co Ci się podoba: _________________

2. URL: _______________________________
   Co Ci się podoba: _________________

3. URL: _______________________________
   Co Ci się podoba: _________________
```

**Pytanie:** Czego NIE chcesz?

- [ ] Zbyt kolorowe/krzykliwe
- [ ] Zbyt minimalistyczne/puste
- [ ] Zbyt dużo tekstu
- [ ] Autoplay video/muzyka
- [ ] Popup'y i reklamy

```
Inne "nie chcę":

Podaj mi 5 przykładów wstepnie do wyboru.

```

---

### 6.3 Zdjęcia i media

**Pytanie:** Jakie masz materiały?

**Zdjęcia realizacji (przed/po):**
- [x] Mam wiele (>50 zdjęć)
- [ ] Mam trochę (10-20 zdjęć)
- [ ] Mam kilka (<10 zdjęć)
- [ ] Nie mam - będę robić

**Jakość zdjęć:**
- [x] Profesjonalne (fotograf)
- [ ] Dobrej jakości (telefon/aparat)
- [ ] Różne (mix)

**Pytanie:** Czy chcesz watermark na zdjęciach?
- [ ] TAK (logo/nazwa w rogu)
- [x] NIE
- [ ] Tylko na niektórych

```
Plan dostarczenia zdjęć:




```

---

## 👤 SEKCJA 7: PANEL UŻYTKOWNIKA

### 7.1 Konta klientów

**Pytanie:** Czy klienci mają zakładać konta?

- [x] **Obowiązkowe** (rejestracja przed zamówieniem)
- [x] **Opcjonalne** (można bez konta lub z kontem)
- [ ] **Nie** (tylko email do kontaktu)

**Jeśli TAK/OPCJONALNE:**
opsałem wyżej.

**Logowanie przez:**
- [x] Email + hasło
- [x] Google (OAuth)
- [x] Facebook (OAuth)
- [x] Apple (OAuth)

**Panel klienta - co widzi:**
- [x] Historia zamówień
- [ x] Status bieżących zleceń ("W trakcie renowacji", "Wysłane")
- [ x] Faktury/paragony do pobrania
- [ x] Przesłane zdjęcia
- [ x] Dane do wysyłki (zapisane adresy)
- [ x] Ulubione/zapisane usługi

```
Preferowany model kont:




```

---

### 7.2 Panel administratora (Twój)

**Pytanie:** Co chcesz zarządzać z panelu admina?

- [ x] Zamówienia (akceptuj/odrzuć)
- [ x] Statusy zleceń (zmień status na "W realizacji", "Gotowe")
- [ x] Klienci (przeglądaj dane, historia)
- [ x] Treści strony (edycja tekstów, FAQ)
- [ x] Galeria (dodawanie zdjęć realizacji)
- [ x] Blog/aktualności
- [ x] Statystyki (ile zamówień, przychody)
- [ x] Faktury (generowanie/wysyłka)

**Pytanie:** Czy tylko Ty czy więcej osób?
- [ ] Tylko ja
- [ ] Ja + 1 osób (role: np. "obsługa zamówień", "moderator")

```
Kluczowe funkcje panelu:




```

---

## 📊 SEKCJA 8: MARKETING & ANALYTICS

### 8.1 SEO i analityka

**Pytanie:** Jakie narzędzia chcesz?

- [ x] Google Analytics 4 (śledzenie ruchu)
- [ x] Google Search Console (SEO)
- [ x] Facebook Pixel (reklamy FB/Instagram)
- [ ] Microsoft Clarity (heatmapy, nagrania sesji)
- [ ] Hotjar (zaawansowane heatmapy)
- [ ] Vercel Analytics (podstawowe, darmowe)

```
Priorytet narzędzi:




```

---

### 8.2 Newsletter i email marketing

**Pytanie:** Czy chcesz zbierać emaile?

- [ ] TAK - newsletter z aktualnościami
  - Częstotliwość: [ ] Tydzień  [ ] Miesiąc  [x ] Okazjonalnie
  - Narzędzie: [ ] Mailchimp  [ ] SendGrid  [ ] Własny

- [ ] TAK - tylko powiadomienia o zamówieniach
- [ ] NIE

```
Strategia email marketingu:




```

---

### 8.3 Blog / Aktualności

**Pytanie:** Czy chcesz sekcję blog/aktualności?

- [ x] TAK - chcę pisać regularnie (1-2 razy/miesiąc)
  - Tematy: [ x] Porady konserwatorskie  [ ] Case studies  [ ] Aktualności firmy

- [ x] TAK - rzadko (kilka razy w roku)
- [ ] NIE - na razie nie

**Jeśli TAK:**
- [x ] Ja sam będę pisać posty
- [x ] AI pomoże generować drafty (ja koryguje)
- [ ] Copywriter (zlecę komuś)

```
Plan blogowania:




```

---

## 🔒 SEKCJA 9: BEZPIECZEŃSTWO I LEGAL

### 9.1 RODO i polityki

**Pytanie:** Czy masz przygotowane dokumenty?

- [ ] Polityka prywatności (RODO)
- [ ] Regulamin świadczenia usług
- [ ] Regulamin sklepu (jeśli e-commerce)
- [ ] Polityka cookies

**Jeśli NIE:**
- [x ] Chcę pomoc w przygotowaniu (szablony)
- [ ] Mam prawnika (sam przygotuje)

```
Status dokumentów prawnych:




```

---

### 9.2 Cookies i zgody

**Pytanie:** Jak obsługiwać cookies?

- [ x] **Minimalne** - tylko techniczne (Google Analytics opt-in)
- [ ] **Pełne** - banner z opcjami (marketing, analityka, funkcjonalne)
- [ ] **Strict** - domyślnie wyłączone, użytkownik musi zgodzić się

```
Preferowane podejście:



```

---

### 9.3 Certyfikat SSL i hosting

**Pytanie:** Domena:

- [ ] Mam domenę: _______________
- [ ] Chcę kupić: sugestia: _______________
- [ ] Potrzebuję pomocy w wyborze

**Hosting:**
- [ ] Vercel (darmowy dla małych stron)
- [ ] Netlify (alternatywa)
- [ ] Własny serwer VPS
- [ ] Nie wiem - potrzebuję porady

```
Uwagi:

za wcześnie na odpowiedz.
```

---

## 💰 SEKCJA 10: BUDŻET I TIMELINE

### 10.1 Budżet

**Pytanie:** Jaki jest Twój budżet na cały projekt?

```
Budżet całkowity: ________ PLN

Podział (orientacyjny):
- Development (Next.js, komponenty): ________ PLN
- Design (UI/UX): ________ PLN
- Treści (teksty, tłumaczenia): ________ PLN
- Zdjęcia (fotograf/edycja): ________ PLN
- Prawne (regulaminy, RODO): ________ PLN
- Inne: ________ PLN
```

**Miesięczne koszty operacyjne (szacunek):**
```
- Hosting (Vercel): 0 PLN (darmowy) lub _____ PLN (Pro)
- Domena: ~50 PLN/rok
- Email marketing: _____ PLN
- Tłumaczenia AI (DeepL API): _____ PLN
- Bramka płatności (prowizje): ~1.5-3% transakcji
- Inne: _____ PLN

RAZEM miesięcznie: ________ PLN
```

---

### 10.2 Timeline

**Pytanie:** Kiedy chcesz uruchomić stronę?

- [ ] Jak najszybciej (MVP za 3-4 tygodnie)
- [ x] Mam czas (2-3 miesiące na pełną wersję)
- [ ] Nie śpieszy się (etapami przez pół roku)

**Priorytety faz:**

**Faza 1 - MVP (Minimum Viable Product):**
```
Co MUSI być od razu:
- [ x] Strona główna
- [ x] 9 stron materiałów (PL)
- [ ] FAQ
- [x ] Formularz kontaktowy
- [ ] _______________________

Deadline: ______________
```

**Faza 2 - E-commerce:**
```
- [ x] System zamówień
- [ ] Płatności
- [ x] Integracja InPost/DHL
- [ x] Panel klienta
- [ ] _______________________

Deadline: ______________
```

**Faza 3 - Rozbudowa:**
```
- [x ] Tłumaczenia (EN, DE, FR)
- [ ] Galeria zaawansowana
- [ x] Blog
- [ x] Panel admina pełny
- [ ] _______________________

Deadline: ______________
```

---

### 10.3 Zasoby i współpraca

**Pytanie:** Ile czasu możesz poświęcić tygodniowo?

- [ ] <5h (mało, tylko konsultacje)
- [ x] 5-10h (średnio, testy + feedback)
- [ ] 10-20h (dużo, aktywna współpraca)
- [ ] >20h (bardzo dużo, intensywna praca)

**Pytanie:** Preferowana komunikacja:

- [ x] Email (odpowiedź w ciągu 24h)
- [ ] Slack/Discord (na bieżąco)
- [ ] Spotkania Zoom (co tydzień)
- [ ] Mix powyższych

**Pytanie:** Dostępność do testów:

```
Jak szybko możesz przetestować nową funkcję?
- [ x] Tego samego dnia
- [ x] W ciągu 2-3 dni
- [ ] Pod koniec tygodnia
- [ ] Zależy od tygodnia
```

---

## 🎯 SEKCJA 11: PRIORYTETYZACJA

### 11.1 Top 3 najważniejsze rzeczy

**Pytanie:** Co jest dla Ciebie NAJWAŻNIEJSZE w tym projekcie?

Ponumeruj od 1 (najważniejsze) do 10:

_10__ Szybkość ładowania strony (performance)
_3__ SEO (żeby Google Cię znalazło)
_1__ Wygląd/Design (piękna strona)
__2_ Mobile first (idealnie na telefonie)
__5_ E-commerce (sprawny system sprzedaży)
__9_ Wielojęzyczność (4 języki od razu)
_4__ Bezpieczeństwo płatności
__6_ Panel admina (łatwe zarządzanie)
_8__ Koszty (jak najtaniej)
_7__ Czas (jak najszybciej uruchomić)

---

### 11.2 Deal-breakers

**Pytanie:** Czego absolutnie NIE MOŻESZ zaakceptować?

```
Red flags (np. "strona wolniej niż 3 sekundy = NIE"):

1. ___________________________________________

2. ___________________________________________

3. ___________________________________________
```

---

## 📝 SEKCJA 12: DODATKOWE FUNKCJE

**Pytanie:** Czy chcesz któreś z poniższych?

- [ ] Chatbot (FAQ-based, bez AI)
- [ ] Live chat (np. Tawk.to, Crisp)
- [ x] Kalkulator wyceny (klient odpowiada na pytania → szacunkowa cena)
- [ ] Booking/kalendarz wizyt (Cal.com)
- [ x] Mapa (Google Maps - lokalizacja pracowni)
- [ ] Opinie klientów (Google Reviews / Trustpilot)
- [ ] Social media feed (Instagram)
- [ ] Wersja ciemna/jasna (dark mode)
- [ ] Accessibility (WCAG - dla osób niepełnosprawnych)
- [ ] PWA (instalacja jak aplikacja na telefonie)

```
Wybrane (możesz wybrać kilka) + priorytet:




```

---

## ✅ PODSUMOWANIE I NASTĘPNE KROKI

### Kiedy odpowiesz na powyższe pytania:

1. **Przejrzę odpowiedzi** i stworzę spersonalizowany plan
2. **Przygotuję harmonogram** z konkretnymi etapami
3. **Zaproponuję stack technologiczny** dopasowany do budżetu
4. **Oszacuję koszty** dokładnie
5. **Zacznę implementację** (vibe coding z Twoim feedbackiem)

---

**Jak wypełnić ten dokument:**

1. Przejdź przez każdą sekcję uważnie
2. Zaznacz opcje checkboxami: `[x]`
3. Wypełnij pola tekstowe
4. Jeśli czegoś nie wiesz - napisz "Nie wiem, potrzebuję porady"
5. Wyślij mi wypełniony dokument

**Szacunkowy czas wypełnienia:** 45-60 minut (warto zrobić w spokoju!)

---

## 📞 Kontakt

Masz pytania podczas wypełniania? Pytaj śmiało!

**Następny krok po wypełnieniu:**
→ Stworzymy szczegółowy **PLAN DZIAŁANIA** z etapami i kosztami

---

**Data utworzenia:** 2025-01-15
**Wersja dokumentu:** 1.0
