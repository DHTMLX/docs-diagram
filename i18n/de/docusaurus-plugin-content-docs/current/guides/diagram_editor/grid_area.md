---
sidebar_label: Rasterbereich
title: Editor-Anleitungen - Rasterbereich
description: Erfahren Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek mehr über den Rasterbereich des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Rasterbereich

Der Rasterbereich ist der Bereich, der für die Bearbeitung eines Diagramms vorgesehen ist. Sie können neue Elemente hinzufügen, ihr Aussehen und ihre Positionierung ändern oder sie entfernen.

In diesem Abschnitt erfahren Sie, welche Oberflächenelemente für jedes Diagrammelement je nach dem Modus, in dem der Editor initialisiert wird, verfügbar sind. Außerdem wird erläutert, wie Sie die Gestaltung eines Diagramms durch die Verwendung von Tastenkombinationen oder das gleichzeitige Bearbeiten mehrerer ausgewählter Elemente vereinfachen können.

:::note
Der Abstand zwischen den Punkten im Rasterbereich hängt vom Wert des [Rasterschritts](api/diagram_editor/editor/config/gridstep_property.md) ab.
:::

## Formen verwalten {#managing-shapes}

### Oberflächenelemente im Standardmodus {#interface-elements-in-the-default-mode}

Sie können Formen aus der Formenleiste in den Rasterbereich ziehen, um sie an den gewünschten Positionen zu platzieren und zu verbinden.

![](/img/default_shape_toolbar.png)

Wenn Sie auf eine beliebige Form klicken, wird diese bearbeitbar und erhält eigene Oberflächenelemente:

- eine Toolbar mit Steuerelementen:
    - `"copy"` - erstellt eine Kopie der Form (außer bei Formen, die sich innerhalb einer Gruppe oder einer Swimlane befinden)
    - `"connect"` - aktiviert den Modus zum Herstellen von Verbindungen zu einer anderen Form
    - `"remove"` - löscht die ausgewählte Form
- Ziehpunkte zur Größenänderung (ziehen Sie an den Anfassern der bearbeitbaren Form, um ihre Größe zu ändern)
- ein Dreh-Symbol (klicken Sie auf das Symbol, um die Form zu drehen)

Wenn der Verbindungsmodus für eine Form aktiviert ist, können Sie Verbindungen zu anderen Formen herstellen, deren Position und Form anpassen sowie nicht mehr benötigte Verbindungen über das Toolbar-Steuerelement `"remove"` löschen.

Doppelklicken Sie auf den Text einer Form, um ihn zu bearbeiten.

### Oberflächenelemente im Organigramm-Modus {#interface-elements-in-the-org-chart-mode}

Sie können Formen ziehen, um sie an den gewünschten Positionen relativ zur Wurzelform zu platzieren, oder die Wurzelform ziehen, um das gesamte Diagramm zu verschieben. Um eine neue Form hinzuzufügen, wählen Sie eine Form aus und fügen Sie ihr ein neues Kind hinzu. Sie können auch *Assistent*- oder *Partner*-Elemente hinzufügen. Die Verbindung zwischen einer übergeordneten Form und ihrem Partner ist immer horizontal.

Sie können Formen von einem übergeordneten Element zu einem anderen ziehen. Das verschobene Element wird zusammen mit allen seinen untergeordneten Elementen gezogen.

![](/img/orgchart_shape_toolbar_vertical.png)

![](/img/orgchart_shape_toolbar_horizontal.png)

Wenn Sie auf eine beliebige Form klicken, wird diese bearbeitbar und erhält eigene Oberflächenelemente:

- eine Toolbar, die folgende Steuerelemente enthalten kann:
    - `"add"` - fügt der ausgewählten Form ein neues Kind hinzu
    - *„add assistant“* - fügt der ausgewählten Form einen Assistenten hinzu
    - *„add partner“* - fügt der ausgewählten Form einen Partner hinzu
    - *„align vertically“* - ordnet die untergeordneten Elemente der Form vertikal an
    - *„align horizontally“* - ordnet die untergeordneten Elemente der Form horizontal an
    - `"remove"` - löscht die ausgewählte Form (außer der Wurzelform) mitsamt ihren untergeordneten Elementen
- Ziehpunkte zur Größenänderung (ziehen Sie an den Anfassern der bearbeitbaren Form, um ihre Größe zu ändern)
- ein Symbol zum Ein-/Ausklappen untergeordneter Formen (sofern vorhanden)

Wenn Sie auf eine Assistenten- oder Partnerform klicken, wird diese bearbeitbar und erhält eigene Oberflächenelemente:

- `"remove"` - löscht die ausgewählte Form

Doppelklicken Sie auf den Text einer Form, um ihn zu bearbeiten.

### Oberflächenelemente im Mindmap-Modus {#interface-elements-in-the-mindmap-mode}

Sie können Formen ziehen, um sie an den gewünschten Positionen relativ zur Wurzelform zu platzieren, oder die Wurzelform ziehen, um das gesamte Diagramm zu verschieben. Wenn Sie die übergeordnete Form ziehen, wird die Form zusammen mit allen untergeordneten Formen verschoben. Um eine neue Form hinzuzufügen, wählen Sie eine Form aus und fügen Sie ihr ein neues Kind hinzu. Die Formen können von einem übergeordneten Element zu einem anderen gezogen werden. Das verschobene Element wird zusammen mit allen seinen untergeordneten Elementen gezogen.

![](/img/mindmap_toolbar_of_shape.png)

Wenn Sie auf eine beliebige Form klicken, wird diese bearbeitbar und erhält eigene Oberflächenelemente:

- eine Toolbar mit Steuerelementen:
    - `"add"` - fügt der ausgewählten Form ein neues Kind hinzu (außer bei der Wurzelform)
    - `"addLeft"` - fügt links von der Wurzelform ein neues Kind hinzu
    - `"addRight"` - fügt rechts von der Wurzelform ein neues Kind hinzu
    - `"remove"` - löscht die ausgewählte Form (außer der Wurzelform) mitsamt ihren untergeordneten Elementen
- Ziehpunkte zur Größenänderung (ziehen Sie an den Anfassern der bearbeitbaren Form, um ihre Größe zu ändern)
- ein Symbol zum Ein-/Ausklappen untergeordneter Formen

Doppelklicken Sie auf den Text einer Form, um ihn zu bearbeiten.

## Linien verwalten {#managing-lines}

Im Standardmodus können Sie Verbindungen zu anderen Formen herstellen, deren Position und Form anpassen sowie der Linie Text hinzufügen und nicht mehr benötigte Verbindungen löschen.

![](/img/line_with_toolbar.png)

Im Standardmodus können Sie einer Linie außerdem durch Doppelklick Text hinzufügen. Klicken Sie auf den Text, um seine Richtung festzulegen oder ihn zu löschen. Doppelklicken Sie auf den Text, um ihn zu bearbeiten.

![](/img/line_with_text.png)

## Gruppen verwalten {#managing-groups}

Sie können Gruppen aus der Formenleiste in den Rasterbereich ziehen, um sie an den gewünschten Positionen zu platzieren. Sie können mehrere Formen oder andere Gruppen in eine Gruppe einfügen und sie als Einheit verschieben, kopieren oder löschen.

![](/img/group_toolbar.png)

Wenn Sie auf eine beliebige Gruppe klicken, wird diese bearbeitbar und erhält eigene Oberflächenelemente:

- eine Toolbar mit Steuerelementen:
    - `"copy"` - erstellt eine Kopie der Gruppe (außer bei Gruppen, die sich innerhalb einer anderen Gruppe oder einer Swimlane befinden);
    - `"remove"` - löscht die ausgewählte Gruppe;
- Ziehpunkte zur Größenänderung (ziehen Sie an den Anfassern der bearbeitbaren Gruppe, um ihre Größe zu ändern).

Doppelklicken Sie auf den Text in der Kopfzeile der Gruppe, um ihn zu bearbeiten.

## Swimlanes verwalten {#managing-swimlanes}

Sie können eine Swimlane aus der Formenleiste in den Rasterbereich ziehen, um sie an der gewünschten Position zu platzieren.

![](/img/swimlane_toolbar.png)

Wenn Sie auf eine beliebige Swimlane klicken, wird diese bearbeitbar und erhält eigene Oberflächenelemente:

- eine Toolbar mit Steuerelementen:
    - `"addRowLast"` - fügt am Ende der Swimlane eine neue Zeile hinzu
    - `"addColumnLast"` - fügt am Ende der Swimlane eine neue Spalte hinzu
    - `"copy"` - erstellt eine Kopie der Swimlane
    - `"remove"` - löscht die ausgewählte Swimlane
- Ziehpunkte zur Größenänderung (ziehen Sie an den Anfassern der bearbeitbaren Swimlane, um ihre Größe zu ändern)

Sie können außerdem Spalten oder Zeilen der Swimlane über die Optionen des Kontextmenüs hinzufügen, verschieben oder entfernen. Das Kontextmenü wird angezeigt, nachdem der Benutzer auf das Symbol einer Swimlane-Unterüberschrift geklickt hat.

![](/img/swimlane_contextmenu.png)

Beachten Sie, dass einige Optionen zum Verschieben der ersten/letzten Spalten und Zeilen durch interne Einstellungen einer Swimlane deaktiviert sind.

## Attribute eines Elements bearbeiten {#editing-attributes-of-an-item}

Nachdem Sie ein Element im Rasterbereich ausgewählt haben, können Sie dessen Attribute [über die Seitenleistenoptionen in der Editbar des Editors](guides/diagram_editor/editbar.md) aktualisieren.

## Die Toolbar eines Elements konfigurieren {#configuring-the-toolbar-of-an-item}

Sie können die individuelle Toolbar von Formen, Gruppen und Swimlanes über die Eigenschaft [shapeToolbar](api/diagram_editor/editor/config/shapetoolbar_property.md) des Editors nach Ihren Bedürfnissen anpassen.

## Fanglinien aktivieren/deaktivieren {#enablingdisabling-snap-lines}

:::note
Diese Funktion ist nur im Standardmodus des Editors verfügbar
:::

Ab v5.0 ist der Rasterbereich mit Fanglinien ausgestattet, die das symmetrische Platzieren von Formen zueinander vereinfachen.

Wenn Sie die Breite und Farbe der Linien ändern oder sie vollständig ausblenden möchten, verwenden Sie die Eigenschaft [magnetic](api/diagram_editor/editor/config/magnetic_property.md) des Editors.

## Mehrere Elemente bearbeiten {#manipulating-multiple-items}

Sie können mehrere Diagrammelemente auswählen, indem Sie bei gedrückter linker Maustaste über sie fahren. Sie können die benötigten Elemente auch über die Tastenkombination Shift+Left Click auswählen.

Sie können alle ausgewählten Elemente gleichzeitig bearbeiten, und zwar:

- Elemente kopieren und einfügen (*nur im Standardmodus*)
- die Elemente ziehen
- die Elemente löschen
- die kopierten Stile eines Elements einfügen
- [eine Gruppe von Elementen ausrichten](#aligning-multiple-items) (*nur im Standardmodus*)

Sie können Linien nur auswählen und löschen, wenn der Editor im Standardmodus initialisiert ist.

### Mehrere Elemente ausrichten {#aligning-multiple-items}

:::note
Diese Funktion ist nur im Standardmodus des Editors verfügbar.
:::

Ab v5.0 können Sie eine Gruppe von Elementen ausrichten oder verteilen, indem Sie sie auswählen und das gewünschte Steuerelement in der Toolbar anklicken. Folgende Steuerelemente stehen zur Verfügung:

| Steuerelement                     | Beschreibung                                       |
| ---------------------------------- | -------------------------------------------|
| **Links ausrichten**                    | Richtet Elemente entlang der x-Achse links aus   |
| **Horizontal zentrieren**      | Richtet Elemente entlang der x-Achse zentriert aus |
| **Rechts ausrichten**                   | Richtet Elemente entlang der x-Achse rechts aus  |
| **Horizontalen Abstand verteilen** | Verteilt Elemente gleichmäßig entlang der x-Achse   |
| **Vertikalen Abstand verteilen**   | Verteilt Elemente gleichmäßig entlang der y-Achse   |
| **Oben ausrichten**                     | Richtet Elemente entlang der y-Achse oben aus    |
| **Vertikal zentrieren**        | Richtet Elemente entlang der y-Achse zentriert aus |
| **Unten ausrichten**                   | Richtet Elemente entlang der y-Achse unten aus   |

![](/img/editor/group_align_and_distribution.gif)
