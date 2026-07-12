---
sidebar_label: Toolbar
title: Editor-Anleitungen - Toolbar
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die Toolbar des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# Toolbar

Die Toolbar ist der obere Bereich des Diagram Editors, der Benutzern hilft, den Bearbeitungsprozess zu steuern.

![](/img/diagram-editor-toolbar/scale-default-mode.png)

Um die Toolbar zu konfigurieren, können Sie die folgenden Eigenschaften verwenden:

- [`css`](api/diagram_editor/toolbar/config/css_property.md) - wendet die benutzerdefinierte CSS-Klasse an

- [`navigationType`](api/diagram_editor/toolbar/config/navigationtype_property.md) - definiert die Aktion, die ein Toolbar-Element aktiviert. Sie können eine der folgenden Aktionen angeben:
    - `"click"` - aktiviert ein Toolbar-Element, wenn ein Benutzer darauf klickt
    - `"pointer"` - aktiviert ein Toolbar-Element, wenn ein Benutzer den Mauszeiger darüber bewegt

- [`items`](api/diagram_editor/toolbar/config/items_property.md) - das Array von [`items`](#service-elements) (Steuerelementen), die auf der Toolbar angeordnet sind. Es gibt 2 Möglichkeiten, Toolbar-Elemente zu konfigurieren:
    - [**Konfigurieren von Elementen über Strings**](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-strings)
    - [**Konfigurieren von Elementen über Objekte**](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-objects)

~~~jsx {9-40}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // zeigt die Standard-Toolbar an
        // oder konfigurieren Sie die Toolbar über ein Objekt
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                {
                    type: "file",
                    items: [
                        "importJson",
                        {
                            type: "exportJson",
                            value: "Export to JSON"
                        },
                        {
                            id: "custom_id_1",
                            type: "menuItem",
                            value: "Server export",
                            icon: "dxi dxi-vault",
                            items: [
                                "exportPdf",
                                {
                                    id: "custom_id_2",
                                    type: "menuItem",
                                    value: "PNG",
                                    handler: editor => {
                                        editor.diagram.export.png();
                                        // eigene Logik hier
                                    }
                                }
                            ]
                        }
                    ]
                },
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

## Service-Elemente {#service-elements}

Toolbar-Elemente werden durch **Service-Elemente** dargestellt. Sie können die folgenden Service-Elemente verwenden und konfigurieren:

- `file` - bildet eine Gruppe von Service-Elementen zum Importieren und Exportieren von Dateien

    <details>
    Das Element `file` hat die folgende Struktur:

    ~~~jsx
    - file
        - importJson
        - export
            - exportJson
            - exportPdf
            - exportPng
    ~~~

    Die Elementsammlung `file` sieht folgendermaßen aus:

    ![](/img/diagram-editor-toolbar/file-default-mode.png)
    </details>

- `importJson` - öffnet ein Dialogfeld zum Importieren einer Datei im JSON-Format

- `export` - bildet eine Gruppe von Service-Elementen zum Exportieren einer Datei im gewählten Format

    <details>
    Das Element `export` hat die folgende Struktur:

    ~~~jsx
    - export
        - exportJson
        - exportPdf
        - exportPng
    ~~~
    </details>

- `exportJson` - exportiert eine Datei im JSON-Format

- `exportPdf` - exportiert eine Datei im PDF-Format

- `exportPng` - exportiert eine Datei im PNG-Format

<hr/>

- `edit` - bildet eine Gruppe von Service-Elementen zum Verwalten und Bearbeiten von Shapes, Lines, Groups und Swimlanes

    <details>
    Im Modus `default` hat die Elementsammlung `edit` die folgende Standardstruktur:

    ~~~jsx
    - edit
        - undo
        - redo
        - separator
        - duplicate
        - copy
        - paste
        - separator
        - copyStyle
        - pasteStyle
        - separator
        - selectAll
        - selectNone
    ~~~

    ![](/img/diagram-editor-toolbar/edit-default-mode.png)

    In den Modi `org`/`mindmap` hat die Elementsammlung `edit` die folgende Standardstruktur:

    ~~~jsx
    - edit
        - undo
        - redo
        - separator
        - copyStyle
        - pasteStyle
        - separator
        - selectAll
        - selectNone
    ~~~

    ![](/img/diagram-editor-toolbar/edit-org-mode.png)
    </details>

- `undo` - geht einen Schritt im Änderungsverlauf zurück

- `redo` - geht einen Schritt im Änderungsverlauf vorwärts

- `duplicate` - dupliziert ausgewählte Elemente

- `copy` - kopiert ausgewählte Dateien in das Objekt `model`

- `paste` - fügt kopierte Dateien aus dem Objekt `model` ein

- `copyStyle` - kopiert die Stile der ausgewählten Elemente in das Objekt `model`

- `pasteStyle` - wendet die im Objekt `model` gespeicherten Stile auf die ausgewählten Elemente an

- `selectAll` - wählt alle zur Auswahl verfügbaren Elemente aus

- `selectNone` - hebt die Auswahl aller verfügbaren Elemente auf

<hr/>

- `view` - bildet eine Gruppe von Service-Elementen zur Verwaltung der Ansicht von Diagram-Editor-Elementen

    <details>
    Im Modus `default` hat die Elementsammlung `view` die folgende Standardstruktur:

    ~~~jsx
    - view
        - theme
            - themeLight
            - themeDark
            - themeLightContrast
            - themeDarkContrast
        - separator
        - shapebar
        - editbar
        - grid
        - separator
        - connectionPoints
        - resizePoints
        - magnetic
        - separator
        - zoomIn
        - zoomOut
    ~~~

    ![](/img/diagram-editor-toolbar/view-default-mode.png)

    In den Modi `org`/`mindmap` hat die Elementsammlung `view` die folgende Standardstruktur:

    ~~~jsx
    - view
        - theme
            - themeLight
            - themeDark
            - themeLightContrast
            - themeDarkContrast
        - separator
        - editbar
        - separator
        - grid
        - separator
        - resizePoints
        - itemsDraggable
        - separator
        - zoomIn
        - zoomOut
    ~~~

    ![](/img/diagram-editor-toolbar/view-org-mode.png)
    </details>

- `theme` - bildet eine Gruppe von Service-Elementen zum Anwenden von Themes

    <details>
    Das Element `theme` hat die folgende Struktur:

    ~~~jsx
    - theme
        - themeLight
        - themeDark
        - themeLightContrast
        - themeDarkContrast
    ~~~
    </details>

- `themeLight` - wendet das **Light**-Theme an

- `themeDark` - wendet das **Dark**-Theme an

- `themeLightContrast` - wendet das **LightContrast**-Theme an

- `themeDarkContrast` - wendet das **DarkContrast**-Theme an

- `shapebar` - zeigt das Panel `Shapebar` an oder blendet es aus

- `editbar` - zeigt das Panel `Editbar` an oder blendet es aus

- `grid` - zeigt das `grid` im Grid-Bereich an oder blendet es aus

- `connectionPoints` - zeigt die **Verbindungspunkte** an oder blendet sie aus

- `resizePoints` - zeigt die **Größenänderungspunkte** an oder blendet sie aus

- `magnetic` - schaltet die Funktion `magnetic` ein oder aus

- `zoomIn` - erhöht den Maßstabswert um 0.05 (5%)

- `zoomOut` - verringert den Maßstabswert um 0.05 (5%)

<hr/>

- `arrange` - bildet eine Gruppe von Service-Elementen zum Anordnen von Diagram-Editor-Elementen

    <details>
    Im Modus `default` hat die Elementsammlung `arrange` die folgende Standardstruktur:

    ~~~jsx
    - arrange
        - layout
            - layoutMode
                - layoutModeDirect
                - layoutModeEdges
            - separator
            - layoutOrthogonal
            - layoutRadial
        - align
            - alignHorizontalLeft
            - alignHorizontalCenter
            - alignHorizontalRight
            - separator
            - alignVerticalTop
            - alignVerticalCenter
            - alignVerticalBottom
        - distribute
            - distributeVertical
            - distributeHorizontal
    ~~~

    ![](/img/diagram-editor-toolbar/arrange-default-mode.png)
    </details>

- `layout` - bildet eine Gruppe von Service-Elementen zur automatischen Platzierung von Diagram-Editor-Elementen

    <details>
    Das Element `layout` hat die folgende Struktur:

    ~~~jsx
    - layout
        - layoutMode
            - layoutModeDirect
            - layoutModeEdges
        - separator
        - layoutOrthogonal
        - layoutRadial
    ~~~
    </details>

- `layoutMode` - bildet eine Gruppe von Service-Elementen zur Verwaltung des Modus für die automatische Platzierung

    <details>
    Das Element `layoutMode` hat die folgende Struktur:

    ~~~jsx
    - layoutMode
        - layoutModeDirect
        - layoutModeEdges
    ~~~
    </details>

- `layoutModeDirect` - wendet den Modus `direct` für die Elementverbinder an

- `layoutModeEdges` - wendet den Modus `edges` für die Elementverbinder an

- `layoutOrthogonal` - wendet den Modus `orthogonal` für die Elementanordnung an

- `layoutRadial` - wendet den Modus `radial` für die Elementanordnung an

- `align` - bildet eine Gruppe von Service-Elementen zur Verwaltung der Ausrichtung der Diagram-Editor-Elemente

    <details>
    Das Element `align` hat die folgende Struktur:

    ~~~jsx
    - align
        - alignHorizontalLeft
        - alignHorizontalCenter
        - alignHorizontalRight
        - separator
        - alignVerticalTop
        - alignVerticalCenter
        - alignVerticalBottom
    ~~~
    </details>

- `alignHorizontalLeft` - richtet Elemente horizontal links aus

- `alignHorizontalCenter` - richtet Elemente horizontal zentriert aus

- `alignHorizontalRight` - richtet Elemente horizontal rechts aus

- `alignVerticalTop` - richtet Elemente vertikal oben aus

- `alignVerticalCenter` - richtet Elemente vertikal zentriert aus

- `alignVerticalBottom` - richtet Elemente vertikal unten aus

- `distribute` - bildet eine Gruppe von Service-Elementen zum Verteilen der Diagram-Editor-Elemente

    <details>
    Das Element `distribute` hat die folgende Struktur:
    ~~~jsx
    - distribute
        - distributeVertical
        - distributeHorizontal
    ~~~
    </details>

- `distributeVertical` - verteilt Elemente vertikal

- `distributeHorizontal` - verteilt Elemente horizontal

<hr/>

- `scale` - das Steuerelement, mit dem Benutzer den Maßstabswert um 0.05 (5%) erhöhen oder verringern können

    <details>
    Das Element `scale` sieht folgendermaßen aus:

    ![](/img/diagram-editor-toolbar/scale-default-mode.png)
    </details>

- [`separator`](https://docs.dhtmlx.com/suite/toolbar/api/api_separator_properties/) - eine horizontale (zwischen Menüoptionen) oder vertikale (zwischen Toolbar-Steuerelementen) Linie, die Elemente/Elementgruppen voneinander trennt.

- [`spacer`](https://docs.dhtmlx.com/suite/toolbar/api/api_spacer_properties/) - ein Abstand auf der Toolbar, der zum Ausrichten von Steuerelementen verwendet wird

## Basiselemente {#base-elements}

Neben den [**Service-Elementen**](#service-elements) können Sie mithilfe des [Objekt](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-objects)-Ansatzes auch die folgenden **Basiselemente** angeben und konfigurieren:

- [Button](https://docs.dhtmlx.com/suite/toolbar/button/)
- [Custom HTML](https://docs.dhtmlx.com/suite/toolbar/customhtmlbutton/)
- [Datepicker](https://docs.dhtmlx.com/suite/toolbar/datepicker/)
- [ImageButton]( https://docs.dhtmlx.com/suite/toolbar/image_button/)
- [Input](https://docs.dhtmlx.com/suite/toolbar/input/)
- [MenuItem](https://docs.dhtmlx.com/suite/toolbar/menuitem/)
- [NavItem](https://docs.dhtmlx.com/suite/toolbar/navitem/)
- [SelectButton](https://docs.dhtmlx.com/suite/toolbar/selectbutton/)
- [Separator](https://docs.dhtmlx.com/suite/toolbar/separator/)
- [Spacer](https://docs.dhtmlx.com/suite/toolbar/spacer/)
- [Title](https://docs.dhtmlx.com/suite/toolbar/title/)

Das folgende Beispiel zeigt, wie Sie das Steuerelement [Button](https://docs.dhtmlx.com/suite/toolbar/button/) zur Toolbar hinzufügen:

~~~jsx {8-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org", // "default" | "org" | "mindmap"
    view: {
        // toolbar: true, // zeigt die Standard-Toolbar an
        // oder konfigurieren Sie die Toolbar über ein Objekt
        toolbar: {
            items: [
                {
                    type: "button",
                    value: "Best button"
                }
            ]
        }
    }
});
~~~

Zusätzlich zu den inneren Eigenschaften der **Basiselemente** (mit Ausnahme von [Separator](https://docs.dhtmlx.com/suite/toolbar/separator/), [Spacer](https://docs.dhtmlx.com/suite/toolbar/spacer/) und [Title](https://docs.dhtmlx.com/suite/toolbar/title/)) können Sie auch die folgenden Eigenschaften verwenden:

- `checkIcon` - (optional) - der Handler, der die CSS-Klasse des Icons zurückgibt. Er wird mit dem folgenden Argument aufgerufen:
    - `editor` - das Diagram-Editor-Objekt

~~~jsx
checkIcon?: (editor: IDiagramEditor) => string; // Nur für Basiselemente verwenden, die ein Icon enthalten
~~~

- `handler` - (optional) - der Handler, der ausgeführt wird, wenn das Event `click` oder `inputChange` eintritt. Er wird mit den folgenden Argumenten aufgerufen:
    - `editor` - das Diagram-Editor-Objekt
    - `event` - ein [natives Event](https://developer.mozilla.org/en-US/docs/Web/API/Event)

~~~jsx
handler?: (editor: object, event: Event) => void;
~~~

**Verwandtes Beispiel**: [Diagram mit Editor. Standardmodus. Anpassung von Karten, Editbar, Toolbar und Shapebar](https://snippet.dhtmlx.com/1p0wemnn)
