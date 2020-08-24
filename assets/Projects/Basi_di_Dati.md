[![repo](https://img.shields.io/badge/repo-Github-blue)](https://github.com/darkimage/Universita-Basididati)
[![language](https://img.shields.io/badge/main_language-PHP-green)](https://www.php.net/)
[![relazione](https://img.shields.io/badge/relazione-PDF-orange)](https://github.com/darkimage/Universita-Basididati/raw/master/documents/basi_di_dati.pdf)


Progetto per l'insegnamento di **Basi di Dati e Web**, realizzato in PHP, HTML e JS con il principale scopo di effettuare un sistema di gestione delle **Task** (Attivita') aziendali. 

Il progetto verte sulla creazione di un sito web che utilizza un **database relazionale** per lo storage dei dati e una logica in **php** per la presentazione all'utente.

Nella prima fase di realizzazione e stata svolta una analisi dei requisiti per i necessari sistemi da implementare, si e' adoperata una distinzione tra Requisiti del Database per lo **storage di dati (DBMS)** e **Requisiti dell' Applicazione** (parte in PHP e presentazione ad utente finale).

Sono stati creati **tre principali sistemi cooperanti** per gestire queste necessita':

 - Utilizzo del **Pattern MVC** (Model-View-Controller)
 - Creazione di un **Custom Templating Engine** (Templating Classes)
	> Utilizzato per effetuare una composizione modulare di template HTML, rendendo piu efficente la realizzazione del progetto sfruttando il riutilizzo del codice. Il sistema e' un **preprocessor** per HTML, effettivamente virualizzando il DOM Tree rendendolo programmaticalmente disponibile in codice PHP

	> [Per maggiori info sul sistema](https://github.com/darkimage/Universita-Basididati#custom-templating-engine) 
 - Creazione di **Domain Classes** per l'astrazione del DB

