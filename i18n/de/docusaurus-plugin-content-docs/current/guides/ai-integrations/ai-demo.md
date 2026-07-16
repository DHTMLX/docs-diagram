---
sidebar_label: KI-Integrationsdemo
title: KI-gestütztes Diagram erstellen
description: Schritt-für-Schritt-Anleitung zur Ausführung der DHTMLX Diagram KI-Demo. Text-zu-Diagram-Generierung von Organigrammen mit der OpenAI API, mit Live-Vorschau und JSON-Editor.
---

# KI-gestütztes Diagram erstellen {#building-ai-powered-diagram}

DHTMLX Diagram lässt sich mit KI integrieren, um KI-gestützte Diagram-Anwendungen zu erstellen. Wir haben ein Beispiel vorbereitet, das zeigt, wie Sie DHTMLX Diagram mit KI verwenden können, um eine Anwendung zu erstellen, die aus einer in natürlicher Sprache formulierten Anfrage ein Organigramm generiert.

Die [Demo-App](https://dhtmlx.com/docs/demo/ai-org-chart-builder/) bietet Funktionen wie die Umwandlung von Text in Diagram, KI-gestützte JSON-Generierung, eine sofortige Live-Vorschau des fertigen Diagram und einen integrierten Code-Editor zum Anzeigen und Anpassen der generierten JSON-Daten, um die Diagram-Vorschau in Echtzeit zu aktualisieren. Weitere Informationen finden Sie im entsprechenden [GitHub-Repository](https://github.com/DHTMLX/diagram-org-chart-builder-ai-demo).

## Projekt-Setup {#project-setup}

Um das Projekt herunterzuladen, klonen Sie das Repository mit dem folgenden Befehl:

~~~jsx
git clone diagram-org-chart-builder-ai-demo
~~~

und wechseln Sie anschließend mit dem folgenden Befehl in das Projektverzeichnis:

~~~jsx
cd diagram-org-chart-builder-ai-demo
~~~

### Installieren der Abhängigkeiten {#installing-dependencies}

Um die Abhängigkeiten zu installieren und die Anwendung auszuführen, benötigen Sie einen Paketmanager. In dieser Anleitung wird [npm](https://www.npmjs.com/) verwendet — installieren Sie die Demo-App, indem Sie den folgenden Befehl aufrufen:

~~~jsx
npm install
~~~

### Anpassen der Umgebungsvariablen {#adjusting-environment-variables}

Anschließend müssen Sie die Umgebungsvariablen konfigurieren. Erstellen Sie dazu eine neue Datei mit dem Namen `.env` im Verzeichnis **diagram-org-chart-builder-ai-demo**, indem Sie den Inhalt der Datei `env.sample` kopieren.
Die neu erstellte Datei `.env` speichert Ihre Schlüssel und Ihre Konfiguration. Tragen Sie die unten aufgeführten erforderlichen Werte ein:

~~~jsx title="diagram-org-chart-builder-ai-demo/.env"
# --- OpenAI-API-Konfiguration ---
OPENAI_API_KEY=sk-YourSecretApiKeyGoesHere
OPENAI_BASE_URL=https://api.openai.com/v1

# --- Sicherheitskonfiguration ---
CORS_ALLOWED_ORIGINS=http://localhost:3001,http://127.0.0.1:3001,http://localhost:5500,http://127.0.0.1:5500

# --- Serverkonfiguration (optional) ---
PORT=3001
~~~

:::info
Laden Sie Ihre Datei `.env` NICHT hoch, da sie sensible Informationen enthält!
:::

Nachfolgend finden Sie die Beschreibungen der Variablen der Datei `.env`:

- `OPENAI_API_KEY`: (Erforderlich) Ihr geheimer API-Schlüssel für den KI-Dienst.
- `OPENAI_BASE_URL`: Der API-Endpunkt für den KI-Dienst. Kann geändert werden, um einen Proxy oder einen anderen mit der OpenAI API kompatiblen Anbieter zu verwenden.
- `CORS_ALLOWED_ORIGINS`: Eine wichtige Sicherheitseinstellung. Dies ist eine durch Kommas getrennte Liste von Webadressen, die eine Verbindung zu Ihrem Backend-Server herstellen dürfen. Für den Produktivbetrieb **müssen** Sie diese auf die URL Ihres öffentlichen Frontends ändern (z. B. `https://myapp.com`).
- `PORT`: (Optional) Die Portnummer, auf der der Server ausgeführt wird. Standardmäßig 3001, falls nicht festgelegt.

### Ausführen der Anwendung {#running-the-application}

Um die Anwendung zu starten, verwenden Sie den folgenden Befehl im App-Verzeichnis:

~~~jsx
npm start // dies ist der erforderliche Startbefehl
~~~

In Ihrem Terminal sollte die folgende Ausgabe erscheinen:

~~~jsx
Server started on port 3001.
~~~

Öffnen Sie anschließend den Webbrowser und rufen Sie `http://localhost:3001` auf, um die einsatzbereite Anwendung zum Erstellen von Diagram-Inhalten zu sehen.

## Funktionsweise der Demo-App {#how-the-demo-app-works}

Dies sind die grundlegenden Schritte zur Umwandlung einer Textanfrage in Diagram:

- Zunächst gibt der Benutzer eine Textbeschreibung von Diagram in einfachen Worten ein, zum Beispiel: „Ein Diagram mit einem obersten Manager und fünf Abteilungen mit jeweils zwei Mitarbeitern“.
- Anschließend wird der Prompt an das Backend gesendet, wo der KI-Dienst basierend auf der Anfrage eine strukturierte JSON-Konfiguration generiert.
- Danach empfängt das Frontend die resultierenden Daten und rendert sofort ein interaktives DHTMLX Diagram.
- Anschließend wird der entsprechende JSON-Code im Code-Editor unterhalb von Diagram angezeigt. Der Benutzer kann den Code feinabstimmen und das resultierende Diagram in Echtzeit bearbeiten.
- Abschließend kann der Benutzer die generierten Daten in einer JSON-Datei speichern oder Diagram als PDF- oder PNG-Datei exportieren.

