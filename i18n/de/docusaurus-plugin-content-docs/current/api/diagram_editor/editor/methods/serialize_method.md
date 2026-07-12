---
sidebar_label: serialize()
title: serialize-Methode des Editors
description: Erfahren Sie mehr über die serialize-Methode des Editors in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# serialize()

### Beschreibung {#description}

@short: Serialisiert die Daten des Editors in ein Array von JSON-Objekten

### Verwendung {#usage}

~~~jsx
serialize(): array;
~~~

### Rückgabewert {#returns}

Die Methode gibt für jedes Element der Editor-Daten ein Array von JSON-Objekten zurück

### Beispiel {#example}

~~~jsx {4}
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

const data = editor.serialize();
~~~

**Verwandtes Beispiel:** [Diagram Editor. Organigramm-Modus. Live-Editor](https://snippet.dhtmlx.com/bng7ego7)
