## Programmazione sistemi mobili - Android

[![repo](https://img.shields.io/badge/repo-Github-blue)](https://github.com/darkimage/Universita-android-ChronotrackerApp)
![language](https://img.shields.io/badge/main_language-Java-green)
[![relazione](https://img.shields.io/badge/relazione-PDF-orange)](https://github.com/darkimage/Universita-android-ChronotrackerApp/raw/master/documents/relazione_android.pdf)

---

Applicazione realizzata utilizzando **[Android Studio](https://developer.android.com/studio)**.

Strutturata per utilizzare tutte le tecniche di sviluppo mobile quali:

 - Utilizzo del pattern di programmazione **MVC (Model-View-Controller)** (che e' anche la base del Framework UI di Android)
 - Utilizzo della libreria **[Android Material](https://material.io/develop/android/)** per ottenere una UI moderna, responsiva e conforme alle specifiche del **Material Design**.

Il progetto e' strutturato per utilizzare tutte le linee guida Google per la realizzazione di applicativi mobile.

I principali sono:

- Utilizzo del **pattern [MVC](https://it.wikipedia.org/wiki/Model-view-controller)**
- Utilizzo di **Query asincrone** per la richiesta/ricezione dei dati dal Model
	> E' stato creato un sistema ADHOC per tale scopo che utilizza una classe anche essa creata per tale esigenza, [NoLeakAsyncTask](https://github.com/darkimage/Universita-android-ChronotrackerApp#classe-noleakasynctask)
- Utilizzo di comunicazione tra Controllers tramite **[Observables (LiveData)](https://developer.android.com/topic/libraries/architecture/livedata)**

l'applicazione realizza una app per il tracciamento e cronometraggio di atleti, mette a disposizione interfaccie per i profili degli altleti e la loro history delle prove cronometrate.