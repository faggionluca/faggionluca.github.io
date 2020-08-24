[![repo](https://img.shields.io/badge/repo-Github-blue)](https://github.com/darkimage/Universita-ios-weatherApp)
[![language](https://img.shields.io/badge/main_language-Objective_C-green)](https://it.wikipedia.org/wiki/Objective-C)
[![relazione](https://img.shields.io/badge/relazione-PDF-orange)](https://github.com/darkimage/Universita-ios-weatherApp/raw/master/Documents/relazione_ios.pdf)

Progetto realizzato con [XCode](https://en.wikipedia.org/wiki/Xcode) e Objective-C.

l'applicazione consente di visualizzare all'utente le previsioni meteo per le citta da lui inserite. Ogni citta a la propria history, nella quale sono visualizzate le passate condizioni meteo. Ogni citta puo essere marcata come favorita e essere esportata su un file [CSV](https://it.wikipedia.org/wiki/Comma-separated_values) per poi essere ricaricate nell'applicazione.

Strutturata per utilizzare tutte le tecniche di sviluppo mobile quali:

 - Utilizzo del pattern di programmazione **MVC (Model-View-Controller)**
 - Utilizzo delle API [OpenWeatherMap](OpenWeatherMap) per i dati relativi al meteo.
 - Utilizzo di [Skeleton View](https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a).
	 > Consento di mostrare all'utente una interfaccia provvisoria mentre vengono recuperati i dati che saranno poi mostrati quando disponibili risultando cosi in una esperienza piu gradevo per l'utente senza continui loading screens.
	 
- Utilizzo di richieste Http asincrone.

