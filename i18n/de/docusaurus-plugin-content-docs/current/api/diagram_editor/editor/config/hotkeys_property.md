---
sidebar_label: hotkeys-Eigenschaft
title: hotkeys-Eigenschaft des Editors
description: Sie können mehr über die hotkeys-Eigenschaft des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# hotkeys

### Beschreibung {#description}

@short: Optional. Ermöglicht die Verwaltung von Tastenkombinationen (Hotkeys) für verschiedene Aktionen im Editor

Sie können alle Hotkeys vollständig deaktivieren, bestimmte Kombinationen deaktivieren oder ihr Verhalten durch eigene benutzerdefinierte Funktionen überschreiben.

:::note
Bitte beachten Sie, dass das Aktivieren oder Deaktivieren von Standard-Hotkeys sich auch auf deren Sichtbarkeit als Tooltips oder Beschriftungen in der Toolbar des Editors auswirkt.
:::

### Verwendung {#usage}

~~~jsx
hotkeys?:
    | boolean
    | {
        [key: string]: false | ((event: KeyboardEvent) => void);
      };
~~~

### Parameter {#parameters}

- `hotkeys: boolean` - wenn auf *false* gesetzt, werden alle Standard-Hotkeys deaktiviert. Wenn auf *true* gesetzt, sind alle Standard-Hotkeys aktiviert
- `hotkeys: object` - ein Objekt, dessen Schlüssel den Namen der Hotkeys entsprechen (z. B. `"ctrl+c"`, `"delete"`), und dessen Werte deren Verhalten wie folgt festlegen:
	- `false` - deaktiviert den angegebenen Hotkey
	- `(event: KeyboardEvent) => void` - definiert eine benutzerdefinierte Funktion, die ausgeführt wird, wenn dieser Hotkey gedrückt wird. Die Funktion erhält ein `KeyboardEvent`-Objekt als Argument

### Beispiel {#example}

- Deaktivieren aller Hotkeys

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: false,
});
~~~

- Deaktivieren bestimmter Hotkeys (`Ctrl+C` und `Ctrl+V` im folgenden Beispiel)

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: {
        "ctrl+c": false,
        "ctrl+v": false
    },
});
~~~

- Überschreiben des Hotkey-Verhaltens

~~~jsx
let editor = null;

editor = new dhx.DiagramEditor("editor_container", {
    hotkeys: {
        // Überschreibt die Taste "delete", um ausgewählte Elemente zu entfernen
        "delete": () => editor.diagram.data.remove(editor.diagram.selection.getIds()),
        // Fügt einen benutzerdefinierten Hotkey "Ctrl+F" hinzu
        "ctrl+f": () => console.log("custom search"),
    },
});
~~~

### Beschreibung {#description-1}

Die folgende Tabelle beschreibt die Aktionen, die von den Standard-Hotkeys ausgeführt werden, und gibt die Parameter-Schlüsselzeichenfolgen für die Hotkeys an, die überschrieben werden können:

#### Hotkeys-Tabelle {#hotkeys-table}

| Tastenkombination             | Beschreibung                                          | Parameter-Schlüsselzeichenfolge    |
|--------------------------------|------------------------------------------------------|-------------------------|
| `Alt+1`                        | Zeigt/verbirgt die Shapebar (nur im Standardmodus)             | `"alt+1"`               |
| `Alt+2`                        | Zeigt/verbirgt die Editbar                                  | `"alt+2"`               |
| `Alt+3`                        | Zeigt/verbirgt den Rasterbereich                                | `"alt+3"`               |
| `Ctrl+Z` (Win), `CMD+Z` (macOS)| Macht die letzte Aktion rückgängig                            | `"ctrl+z"`              |
| `Ctrl+Shift+Z` (Win), `CMD+Shift+Z` (macOS)| Stellt die rückgängig gemachte Aktion wieder her           | `"ctrl+shift+z"`        |
| `Ctrl+D` (Win), `CMD+D` (macOS)| Dupliziert ein ausgewähltes Element (nur im Standardmodus)    | `"ctrl+d"`              |
| `Ctrl+C` (Win), `CMD+C` (macOS)| Kopiert ein ausgewähltes Element (nur im Standardmodus)        | `"ctrl+c"`              |
| `Ctrl+V` (Win), `CMD+V` (macOS)| Fügt ein ausgewähltes Element ein (nur im Standardmodus)        | `"ctrl+v"`              |
| `Ctrl+Alt+C` (Win), `CMD+Alt+C` (macOS)| Kopiert den Stil des ausgewählten Elements (anwendbar auf Elemente derselben Art)| `"alt+ctrl+c"`       |
| `Ctrl+Alt+V` (Win), `CMD+Alt+V` (macOS)| Wendet einen kopierten Stil auf das ausgewählte Element an (anwendbar auf Elemente derselben Art)| `"alt+ctrl+v"` |
| `Ctrl+A` (Win), `CMD+A` (macOS)| Wählt alle Elemente aus                                    | `"ctrl+a"`              |
| `Ctrl+Shift+A` (Win), `CMD+Shift+A` (macOS)| Hebt die Auswahl aller ausgewählten Elemente auf             | `"ctrl+shift+a"`        |
| `Shift+Left Click`             | Fügt ein Element zur Liste der ausgewählten Elemente hinzu           | (kein direkter `hotkeys`-Parameterschlüssel) |
| `Alt+Left Click`               | Hebt die Auswahl des ausgewählten Elements auf                          | (kein direkter `hotkeys`-Parameterschlüssel) |
| `Delete` (`Del`), `Backspace`  | Löscht ein oder mehrere Elemente                                   | `"delete"`, `"backspace"` |
| `Arrow-Left`, `Arrow-Right`, `Arrow-Up`, `Arrow-Down`| Bewegt die ausgewählten Elemente       | `"arrowLeft"`, `"arrowRight"`, `"arrowUp"`, `"arrowDown"` |
| `Ctrl+Mousewheel` (Win), `CMD+Mousewheel` (macOS)| Erhöht/verringert den Skalierungswert | (kein direkter `hotkeys`-Parameterschlüssel) |

**Changelog:**

- Die Eigenschaft `hotkeys` wurde in v6.1 hinzugefügt

**Verwandtes Beispiel:**

- [Diagram Editor. Verwaltung des Hinzufügens, Änderns und Deaktivierens von Hotkeys über die API](https://snippet.dhtmlx.com/8ads5dq8)