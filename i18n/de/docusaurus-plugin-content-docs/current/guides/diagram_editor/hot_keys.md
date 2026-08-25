---
sidebar_label: Hotkeys
title: Editor-Anleitungen - Hotkey-Liste
description: Erfahren Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek mehr über die Hotkeys des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Hotkey-Liste

In diesem Abschnitt finden Sie eine Reihe von Standard-Hotkeys, die Sie beim Erstellen eines Diagramms im Editor verwenden können, Beschreibungen der von diesen Hotkeys ausgeführten Aktionen sowie die Parameter-Zeichenfolgen der Hotkeys, die überschrieben werden können. Verwenden Sie die Eigenschaft [`hotkeys`](api/diagram_editor/editor/config/hotkeys_property.md), um Tastenkombinationen innerhalb des Editors zu verwalten.

| Tastenkombination             | Beschreibung                                          | Parameter-Zeichenfolge    |
|--------------------------------|------------------------------------------------------|-------------------------|
| `Alt+1`                        | Zeigt/verbirgt die Formenleiste (nur im Standardmodus)             | `"alt+1"`               |
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
| `Shift+Left Click`             | Fügt ein Element der Liste der ausgewählten Elemente hinzu           | (Kein direkter Parameterschlüssel von `hotkeys`) |
| `Alt+Left Click`               | Hebt die Auswahl des ausgewählten Elements auf                          | (Kein direkter Parameterschlüssel von `hotkeys`) |
| `Delete` (`Del`), `Backspace`  | Löscht ein oder mehrere Elemente                                   | `"delete"`, `"backspace"` |
| `Arrow-Left`, `Arrow-Right`, `Arrow-Up`, `Arrow-Down`| Verschiebt die ausgewählten Elemente       | `"arrowLeft"`, `"arrowRight"`, `"arrowUp"`, `"arrowDown"` |
| `Ctrl+Mousewheel` (Win), `CMD+Mousewheel` (macOS)| Erhöht/verringert den Skalierungswert | (Kein direkter Parameterschlüssel von `hotkeys`) |
| `Ctrl+Enter` (Win), `CMD+Enter` (macOS) | Öffnet den Inline-Texteditor für das ausgewählte Element. Dient als Alternative zum Doppelklick. Nur für Formen mit einer bearbeitbaren Eigenschaft `text` anwendbar. | `"ctrl+enter"` |

## Tastenkombinationen des Inline-Texteditors {#inline-text-editor-shortcuts}

Die folgenden Hotkeys sind verfügbar, wenn der [Inline-Texteditor](guides/inline_editing.md) aktiv ist. Sie können nicht über die Eigenschaft `hotkeys` konfiguriert werden.

| Hotkey | Beschreibung |
|--------|-------------|
| `Ctrl+Enter` (Win), `CMD+Enter` (macOS) | Öffnet den Inline-Texteditor für das ausgewählte Element. Dient als Alternative zum Doppelklick. Nur für Formen mit einer bearbeitbaren Eigenschaft `text` anwendbar. |
| `Shift+Enter` | Fügt einen Zeilenumbruch (`\n`) ein, ohne den Editor zu schließen. |
| `Delete` (`Del`), `Backspace` | Löscht das Zeichen an der Cursorposition. Löscht nicht das Element selbst. |
| `Enter` | Bestätigt den aktuellen Text und schließt den Editor. Da der Editor Änderungen dynamisch während der Eingabe übernimmt, markiert das Drücken der Eingabetaste den erfolgreichen Abschluss der Bearbeitung. |
| `Escape` | Verwirft alle nicht gespeicherten Änderungen und schließt den Editor, wobei der Text des Elements auf den Wert vor Beginn der Bearbeitung zurückgesetzt wird. |
