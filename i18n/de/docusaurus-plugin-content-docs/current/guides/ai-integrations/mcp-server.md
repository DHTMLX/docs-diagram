---
sidebar_label: DHTMLX MCP-Server
title: DHTMLX Diagram MCP-Server für Formen- und Verbindungs-APIs
description: Richten Sie einen KI-Assistenten auf den MCP-Server aus, und er findet die aktuelle DHTMLX-Diagram-Dokumentation zu Formen, Swimlanes, Organigrammen und dem Diagram Editor.
---

# DHTMLX Diagram MCP-Server: Formen, Verbindungen und Editor-APIs {#dhtmlx-diagram-mcp-server-shapes-connectors-and-editor-apis}

[DHTMLX Diagram](/) gibt Ihnen echte Kontrolle über [Formgeometrie](/shapes/configuration_properties), [Verbindungs-Routing](/lines/) und [Layout-Regeln](/guides/diagram/configuration) sowie über jede Option, die der Editor zulässt. Generierter Code muss die aktuellen Formeigenschaften, Verbindungsmethoden und Layout-Optionen widerspiegeln – nicht den Stand eines früheren Trainings-Snapshots.

Genau dafür gibt es den DHTMLX MCP-Server: Er stellt dem Assistenten die aktuelle Diagram-Dokumentation bereit, noch bevor auch nur eine einzige Form gezeichnet wird. Egal, ob Sie mit [Swimlanes](/swimlanes/), [benutzerdefinierten Formen](/shapes/custom_shape), dem [Diagram Editor](/guides/diagram_editor/initialization) oder einem anderen Teil der Bibliothek arbeiten – der Assistent ruft das aktuelle Referenzmaterial ab, bevor er eine Antwort generiert.

### MCP-Endpunkt {#mcp-endpoint}

~~~
https://docs.dhtmlx.com/mcp
~~~

:::note
Der DHTMLX MCP-Server deckt alle wichtigen DHTMLX-Produkte ab, nicht nur DHTMLX Diagram. Derselbe Endpunkt und dieselben Konfigurationsschritte gelten unabhängig davon, mit welcher Komponente Sie arbeiten.
:::

## Diagram-Aufgaben, die der MCP-Server beschleunigt {#diagram-work-the-mcp-server-speeds-up}

Die Dokumentation von DHTMLX Diagram ist im Index des MCP-Servers erfasst. Entwickler fragen ihn zum Beispiel für Folgendes ab:

- Nachschlagen der aktuellen API für [Formen](/shapes/default_shapes), [Linien](/lines/), [Gruppen](/groups/) oder [Swimlanes](/swimlanes/).
- Generieren von sofort lauffähigem Diagram-Code auf Grundlage einer Beschreibung.
- Erkunden von [Editor](/guides/diagram_editor/initialization)-Konfigurationsoptionen, Toolbar-Steuerelementen und Event-Handling.
- Prüfen der [Export](/guides/data_export)-Optionen und Verstehen, wie PDF- oder PNG-Ausgaben erzeugt werden.
- Konfigurieren von Auto-Layout-Optionen für Diagramme im Standardmodus mithilfe der [Diagram-Konfiguration](/guides/diagram/configuration).
- Laden von Diagrammdaten und deren Serialisierung mithilfe der verfügbaren [Datenmethoden](/guides/loading_data).
- Verarbeiten von [Diagram- und Editor-Events](/guides/event_handling), um auf Benutzerinteraktionen zu reagieren.
- Erkunden der [TypeScript-Unterstützung](/guides/using_typescript) und der Framework-Integration für React, Vue, Angular und Svelte.

## Innerhalb einer Diagram-MCP-Server-Anfrage {#inside-a-diagram-mcp-server-request}

Der DHTMLX MCP-Server führt eine Retrieval-Augmented-Generation-(RAG)-Pipeline über das Model Context Protocol (MCP) aus und leitet jede Anfrage an einen von zwei Workflows weiter: *Search*, der passende Referenzseiten abruft, mit denen der Assistent weiterarbeitet, oder *Inference*, der diese Seiten liest und direkt eine fertige Antwort liefert. Nur ein Teil einer Anfrage benötigt tatsächlich die Diagram-Dokumentation, und der Assistent extrahiert zunächst genau diesen Teil – den Rest übernimmt er selbst.

So läuft das für den Prompt *„Wie baue ich mit DHTMLX Diagram ein Organigramm, das Mitarbeiterdaten aus meiner internen HR-API bezieht und automatisch nach Abteilung anordnet?“* ab:

1. Der Assistent identifiziert den Teil, der Dokumentation erfordert: wie das Auto-Layout für ein aus einem JSON-Datensatz erstelltes Organigramm konfiguriert wird.
2. Der Server gleicht ihn mit der Dokumentation zur Diagram-Konfiguration ab.
3. Da die Antwort generierten Code erfordert, wird die Anfrage an *Search* weitergeleitet (eine engere Sachfrage – etwa welche Methode das Auto-Layout steuert – würde an *Inference* gehen).
4. *Search* ruft die passenden Seiten aus einem Vektorindex ab, der auf der aktuellen Diagram-Dokumentation basiert.
5. Diese Seiten gehen als Kontext an den Assistenten zurück.
6. Der Assistent konfiguriert das Auto-Layout anhand dieses Kontexts und schreibt die Logik für den HR-API-Abruf anschließend aus eigenem Wissen, statt bei der Diagram-API zu raten.

So bleibt generierter Diagram-Code stets mit dem aktuellen Stand der Dokumentation im Einklang.

## Den MCP-Server in Ihr KI-Tool einbinden {#bringing-the-mcp-server-into-your-ai-tool}

Jedes der folgenden Tools verbindet sich auf seine eigene Weise mit demselben MCP-Endpunkt: bei einigen über ein CLI-Flag, bei anderen über einen JSON-Konfigurationsblock. Registrieren Sie den Server einmal pro Tool – die Verbindung gilt danach für jedes Diagram-Projekt, das Sie dort öffnen:

~~~
https://docs.dhtmlx.com/mcp
~~~

Nachfolgend finden Sie Einrichtungsanleitungen für die am häufigsten verwendeten Tools.

### Claude Code-Einrichtung {#claude-code-setup}

:::info
Vollständige Details zum Verbinden von MCP-Servern mit Claude Code finden Sie in der [offiziellen Dokumentation](https://code.claude.com/docs/en/mcp).
:::

Der schnellste Weg, den DHTMLX MCP-Server zu Claude Code hinzuzufügen, ist über die CLI:

~~~bash
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Um ihn manuell zu konfigurieren, fügen Sie den folgenden Eintrag zu Ihrer `.mcp.json` hinzu:

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor-Einrichtung {#cursor-setup}

:::info
Die [offizielle Dokumentation](https://cursor.com/en-US/docs/mcp) von Cursor behandelt jede MCP-Konfigurationsoption.
:::

Folgen Sie den nachstehenden Schritten, um den DHTMLX MCP-Server mit Cursor zu verbinden:

1. Öffnen Sie Settings (`Cmd+Shift+J` unter Mac, `Ctrl+Shift+J` unter Windows/Linux)
2. Wechseln Sie zu **Tools & MCP**
3. Klicken Sie auf **Add Custom MCP**
4. Fügen Sie diese Konfiguration ein:

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info
Die [offizielle Dokumentation](https://antigravity.google/docs/mcp) von Antigravity behandelt die MCP-Server-Integration vollständig.
:::

Führen Sie die folgenden Schritte aus, um den DHTMLX MCP-Server mit Google Antigravity zu verbinden:

1. Öffnen Sie die Befehlspalette
2. Geben Sie „mcp add“ ein
3. Wählen Sie „HTTP“ aus
4. Geben Sie die folgenden Werte an:
- Name:
~~~
dhtmlx-mcp
~~~
- URL:
~~~
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info
Sie migrieren von Gemini CLI zu Antigravity CLI? Der [zugehörige Leitfaden](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes) beschreibt die Änderung.
:::

Um den DHTMLX MCP-Server mit Antigravity CLI zu verbinden, erstellen Sie `mcp_config.json` an einem der folgenden Speicherorte:

- Global: `~/.gemini/config/mcp_config.json`
- Workspace: `.agents/mcp_config.json`

Fügen Sie die folgende Konfiguration hinzu:

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Führen Sie anschließend `agy` im Terminal aus.

### ChatGPT-Einrichtung {#chatgpt-setup}

:::info
Die [offizielle Dokumentation](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt) behandelt jeden Schritt der Verbindung eines MCP-Servers mit ChatGPT.
:::

Folgen Sie diesen Schritten, um den DHTMLX MCP-Server mit ChatGPT zu verbinden:

1. Wechseln Sie zu **Settings** → **Apps & Connectors**
2. Klicken Sie auf **Advanced settings**
3. Aktivieren Sie **Developer mode**
4. Kehren Sie zum Bildschirm **Apps & Connectors** zurück und klicken Sie auf „Create“
5. Konfigurieren Sie den Connector:
- Name:
~~~
dhtmlx-mcp
~~~
- URL:
~~~
https://docs.dhtmlx.com/mcp
~~~
- Authentifizierung: `No authentication`
6. Klicken Sie auf **Create**

Sobald die Verbindung besteht, ruft ChatGPT die Diagram-Dokumentation ab, wenn es während Ihrer Unterhaltungen Fragen beantwortet.

:::info
Für intensive Coding-Workflows können andere MCP-fähige Tools effizienter sein.
:::

### Weitere Tools {#other-tools}

Die meisten modernen KI-Coding-Tools (darunter Windsurf, Cline, Continue.dev usw.) zeigen MCP in ihren Einstellungen unter Bezeichnungen wie „Model Context Protocol“, „Context Sources“ oder „Custom integrations“ an. Fügen Sie `https://docs.dhtmlx.com/mcp` als Quell-URL hinzu.

## Datenschutz beim MCP-Server {#the-privacy-side-of-the-mcp-server}

Nichts davon läuft auf Ihrem Rechner: Der DHTMLX MCP-Server arbeitet vollständig als Remote-Dienst und speichert keine Kopie Ihrer persönlichen Daten.

Der Server protokolliert Abfragen ausschließlich zur Fehlerbehebung und Serviceverbesserung.

Möchten Sie die Protokollierung lieber vollständig deaktivieren? Ein kommerzielles Deployment ermöglicht das. Richten Sie es über `info@dhtmlx.com` ein.

## Prompts für gängige Diagram-Aufgaben {#prompts-for-common-diagram-tasks}

Ein Prompt, der die konkrete Diagram-Funktion benennt, die Sie benötigen (eine Form, den Editor, den Export), liefert relevantere Ergebnisse als ein vager Prompt. Die folgenden Gruppen ordnen Beispiele nach Funktion.

**Diagramme erstellen**

~~~
How do I create a swimlane diagram with custom sections in DHTMLX Diagram? Use the docs.
~~~
~~~
I want to build an org chart from a JSON data set in DHTMLX Diagram. How do I configure the auto-layout?
~~~
~~~
How do I create a flowchart with decision nodes and multiple links in DHTMLX Diagram?
~~~
~~~
How do I use autoPlace() to automatically arrange shapes in DHTMLX Diagram?
~~~

**Mit Formen arbeiten**

~~~
I want to add custom shapes with icons to DHTMLX Diagram. How do I define a shape template?
~~~
~~~
How do I restrict which shapes a user can place in the DHTMLX Diagram Editor?
~~~
~~~
How do I change the default text style and background color for all shapes in DHTMLX Diagram?
~~~

**Den Editor konfigurieren**

~~~
I want to enable inline editing for shape text in DHTMLX Diagram.
~~~
~~~
How do I add a custom toolbar button to the DHTMLX Diagram Editor?
~~~

**Daten und Export**

~~~
How do I export a DHTMLX Diagram to a PNG file?
~~~
~~~
What format does DHTMLX Diagram use for serialized data, and how do I reload it?
~~~

## Prompts formulieren, die der MCP-Server verarbeiten kann {#writing-prompts-the-mcp-server-can-act-on}

- **Benennen Sie die API-Oberfläche.** Unterscheiden Sie zwischen der Diagramminstanz und dem Editor, zum Beispiel: „in the DHTMLX Diagram Editor“ vs. „on the diagram object“. Der Server ruft relevantere Dokumentation ab, wenn das Ziel eindeutig ist.
- **Geben Sie den Formtyp an.** Prompts wie „a swimlane shape“ oder „a custom shape with HTML content“ rufen die passenden Referenzseiten schneller ab als das allgemeine „a shape“.
- **Fügen Sie „Use the docs“** zu Ihrem Prompt hinzu. Diese Formulierung signalisiert dem Assistenten, dass er eine MCP-Abfrage auslösen soll, anstatt aus Trainingsdaten zu antworten.
- **Machen Sie genaue Angaben zum erwarteten Versionsverhalten.** Wenn der generierte Code nicht mit dem übereinstimmt, was Sie in der Dokumentation sehen, fügen Sie „based on the current DHTMLX Diagram documentation“ hinzu, um eine erneute Abfrage zu erzwingen.
