---
sidebar_label: DHTMLX MCP-Server
title:  Verwendung des DHTMLX MCP-Servers mit KI-Coding-Assistenten
description: Verbinden Sie KI-Coding-Assistenten über den MCP-Server mit der aktuellen DHTMLX-Diagram-Dokumentation. Behandelt Formen, Swimlanes, Organigramme, den Diagram Editor und mehr.
---

# Verwendung des DHTMLX MCP-Servers mit KI-Coding-Assistenten

Der Aufbau von Diagrammanwendungen erfordert präzise Kontrolle über Formen, Verbindungen, Layout und Editor-Konfiguration. Wenn ein KI-Tool anhand veralteter Trainingsdaten Code für [DHTMLX Diagram](/) generiert, entstehen inkompatible APIs, fehlende Eigenschaften und Konfigurationsoptionen, die es nicht mehr gibt.

Der DHTMLX Model Context Protocol (MCP)-Server löst dieses Problem, indem er KI-Tools direkten Zugriff auf die aktuelle Diagram-Dokumentation gibt. Egal, ob Sie mit [Swimlanes](/swimlanes/), [benutzerdefinierten Formen](shapes/custom_shape.md), dem [Diagram Editor](guides/diagram_editor/initialization.md) oder einem anderen Teil der Bibliothek arbeiten – der Assistent ruft das aktuelle Referenzmaterial ab, bevor er eine Antwort generiert.

**MCP-Endpunkt**

~~~
https://docs.dhtmlx.com/mcp
~~~

:::note
Der DHTMLX MCP-Server deckt alle wichtigen DHTMLX-Produkte ab, nicht nur DHTMLX Diagram. Derselbe Endpunkt und dieselben Konfigurationsschritte gelten unabhängig davon, mit welcher Komponente Sie arbeiten.
:::

## Wo der MCP-Server bei Diagram hilft {#where-mcp-server-helps-with-diagram}

Der MCP-Server indiziert die vollständige DHTMLX-Diagram-Dokumentation. Häufige Szenarien, in denen der MCP-Server nützlich ist:

- Nachschlagen der aktuellen API für [Formen](shapes/default_shapes.md), [Linien](/lines/), [Gruppen](/groups/) oder [Swimlanes](/swimlanes/).
- Generieren von sofort lauffähigem Diagram-Code auf Grundlage einer Beschreibung.
- Erkunden von [Editor](guides/diagram_editor/initialization.md)-Konfigurationsoptionen, Toolbar-Steuerelementen und Event-Handling.
- Prüfen der [Export](guides/data_export.md)-Optionen und Verstehen, wie PDF- oder PNG-Ausgaben erzeugt werden.
- Konfigurieren von Auto-Layout-Optionen für Diagramme im Standardmodus mithilfe der [Diagram-Konfiguration](guides/diagram/configuration.md).
- Laden von Diagrammdaten und deren Serialisierung mithilfe der verfügbaren [Datenmethoden](guides/loading_data.md).
- Verarbeiten von [Diagram- und Editor-Events](guides/event_handling.md), um auf Benutzerinteraktionen zu reagieren.
- Erkunden der [TypeScript-Unterstützung](guides/using_typescript.md) und der Framework-Integration für React, Vue, Angular und Svelte.

## Wie der DHTMLX MCP-Server funktioniert {#how-dhtmlx-mcp-server-works}

Der Server kombiniert eine Retrieval-Augmented-Generation-(RAG)-Pipeline mit MCP, sodass KI-Assistenten die Dokumentation bei Bedarf abfragen können, anstatt sich ausschließlich auf Trainingsdaten zu verlassen.

Wenn Sie zum Beispiel fragen: *„Wie konfiguriere ich ein Swimlane-Diagramm mit benutzerdefinierten Zellenüberschriften?“*, sendet der Assistent den Prompt über den MCP-Endpunkt. Der Server gleicht ihn mit der Swimlanes-Dokumentation ab, ruft die relevanten Referenzseiten ab und gibt sie als Kontext zurück. Der Assistent generiert daraufhin Code auf Grundlage der aktuellen API und nicht anhand eines Trainings-Snapshots.

## KI-Tools mit Diagram verbinden {#connecting-ai-tools-to-diagram}

KI-Entwicklungstools unterstützen MCP in der Regel über einen CLI-Befehl oder eine JSON-Konfigurationsdatei. In beiden Fällen besteht der zentrale Schritt darin, die Server-URL zu registrieren:

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
Schrittweise Anleitungen zur MCP-Einrichtung für Cursor finden Sie in der [offiziellen Dokumentation](https://cursor.com/en-US/docs/mcp).
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
Weitere Details zur MCP-Server-Integration in Antigravity finden Sie in der [offiziellen Dokumentation](https://antigravity.google/docs/mcp).
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
Weitere Informationen zur Migration von Gemini CLI zu Antigravity CLI finden Sie im [zugehörigen Leitfaden](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes).
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
Die vollständige Anleitung zum Verbinden von MCP-Servern mit ChatGPT finden Sie in der [offiziellen Dokumentation](https://developers.openai.com/api/docs/guides/tools-connectors-mcp).
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

:::note
Beachten Sie, dass die MCP-Integration mit ChatGPT zu langsameren Antwortzeiten führen kann. Für eine schnellere Erfahrung sollten Sie eines der anderen auf dieser Seite aufgeführten Tools in Betracht ziehen.
:::

### Weitere Tools {#other-tools}

Die meisten modernen KI-Coding-Tools (darunter Windsurf, Cline, Continue.dev usw.) zeigen MCP in ihren Einstellungen unter Bezeichnungen wie „Model Context Protocol“, „Context Sources“ oder „Custom integrations“ an. Fügen Sie `https://docs.dhtmlx.com/mcp` als Quell-URL hinzu.

## Datenschutz und Datenverarbeitung {#privacy-and-data-handling}

Der DHTMLX MCP-Server ist ein reiner Cloud-Dienst, der remote ausgeführt wird, Ihre lokale Umgebung unverändert lässt und keine persönlichen Nutzerdaten speichert. Abfragen können zu Zwecken der Fehlerbehebung und Serviceverbesserung protokolliert werden.

Teams, die strengere Datenschutzgarantien benötigen, können ein kommerzielles Deployment mit deaktivierter Abfrageprotokollierung anfragen. Kontaktieren Sie uns für Details unter `info@dhtmlx.com`.

## Beispiel-Prompts für Diagram mit KI {#example-prompts-for-diagram-with-ai}

Sobald der MCP-Server verbunden ist, formulieren Sie Ihre Prompts rund um ein konkretes Ziel, damit der Assistent weiß, welchen Teil der Diagram-API er nachschlagen soll. Die folgenden Prompts sind nach Aufgabentyp gegliedert. Sie können sie nach Bedarf kopieren und anpassen.

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

## Tipps für effektive Diagram-Prompts {#tips-for-effective-diagram-prompts}

- **Benennen Sie die API-Oberfläche.** Unterscheiden Sie zwischen der Diagramminstanz und dem Editor, zum Beispiel: „in the DHTMLX Diagram Editor“ vs. „on the diagram object“. Der Server ruft relevantere Dokumentation ab, wenn das Ziel eindeutig ist.
- **Geben Sie den Formtyp an.** Prompts wie „a swimlane shape“ oder „a custom shape with HTML content“ rufen die passenden Referenzseiten schneller ab als das allgemeine „a shape“.
- **Fügen Sie „Use the docs“** zu Ihrem Prompt hinzu. Diese Formulierung signalisiert dem Assistenten, dass er eine MCP-Abfrage auslösen soll, anstatt aus Trainingsdaten zu antworten.
- **Machen Sie genaue Angaben zum erwarteten Versionsverhalten.** Wenn der generierte Code nicht mit dem übereinstimmt, was Sie in der Dokumentation sehen, fügen Sie „based on the current DHTMLX Diagram documentation“ hinzu, um eine erneute Abfrage zu erzwingen.
