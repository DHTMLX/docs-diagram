---
sidebar_label: Was ist neu
title: Was ist neu
description: Erfahren Sie Neuigkeiten zur JavaScript-Bibliothek DHTMLX Diagram. Durchstöbern Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Was ist neu {#whats-new}

Wenn Sie Diagram von einer älteren Version aktualisieren, finden Sie Details unter [Migration zu einer neueren Version](migration.md).

## Version 6.1.6 {#version-616}

Veröffentlicht am 1. Juli 2026

### Fehlerbehebungen {#fixes}

- Diagram. Ein Fehler behoben, der beim Laden von Daten in Diagram über `ShapeCollection` (`DataCollection`) im `mindmap`-Modus auftrat

## Version 6.1.5 {#version-615}

Veröffentlicht am 17. Juni 2026

### Aktualisierungen {#updates}

- Diagram Editor. Verbesserte Texteditierung mit neuen Tastenkombinationen: <kbd>Ctrl</kbd>+<kbd>Enter</kbd> zum Starten der Bearbeitung, <kbd>Shift</kbd>+<kbd>Enter</kbd> für neue Zeilen, <kbd>Enter</kbd> zum Bestätigen und <kbd>Escape</kbd> zum Verwerfen von Änderungen

### Fehlerbehebungen {#fixes-1}

- Diagram Editor. Behoben: Linien, die durch Swimlane-Gruppen verliefen, waren nicht auswählbar
- Diagram Editor. Automatisches Scrollen hinzugefügt, wenn Verbindungslinien auf Shapes außerhalb des aktuellen Bildschirmbereichs gezogen werden.
- Diagram Editor. Behoben: Ein Shape wurde beim Bearbeiten seines Textes gelöscht
- Diagram. Behoben: ein Safari-spezifischer Fehler, bei dem Linien mit der Eigenschaft `backArrow: "filled"` nicht korrekt gerendert wurden

## Version 6.1.3 {#version-613}

Veröffentlicht am 21. Mai 2026

### Aktualisierungen {#updates-1}

- Diagram / Diagram Editor. Verbesserungen an der Autoplatzierungslogik. Die Möglichkeit hinzugefügt, den Abstand zwischen Shapes und Ebenen über die neuen Eigenschaften `itemPadding` und `levelPadding` in der Diagram-Methode [`autoPlace()`](api/diagram/autoplace_method.md) und im Konfigurationsobjekt [`autoplacement`](api/diagram/autoplacement_property.md) zu steuern

### Fehlerbehebungen {#fixes-2}

- Diagram. Behoben: Die Anwendung der Autoplatzierung führte zu falschen Abständen zwischen Shapes
- Diagram. Behoben: Der Aufruf von [`autoPlace()`](api/diagram/autoplace_method.md) ignorierte die Linienwerte [`fromSide` und `toSide`](lines/configuration_properties.md), wodurch nun die Konsistenz der Diagrammstruktur gewährleistet ist
- Diagram. Der `Radial`-Autoplatzierungsalgorithmus wurde überarbeitet, um das Problem mit kritisch großen Abständen zwischen Shapes zu beheben und ein kompakteres Layout zu ermöglichen

## Version 6.1.2 {#version-612}

Veröffentlicht am 2. April 2026

### Fehlerbehebungen {#fixes-3}

- Diagram Editor. Das Problem bei der Erstellung von Konnektoren für Shapes mit negativen Koordinaten ist behoben
- Diagram Editor. Das Problem, dass das Drücken der Taste <kbd>Backspace</kbd> während der Inline-Textbearbeitung das Shape oder den Linientitel löschte, ist behoben
- Export. Eine Sicherheitslücke beim PDF/PNG-Export, die über HTML-Injection den Zugriff auf beliebige lokale Dateien ermöglichte, ist durch verbesserte Bereinigung und Härtung der Umgebung behoben

## Version 6.1.1 {#version-611}

Veröffentlicht am 5. Februar 2026

### Fehlerbehebungen {#fixes-4}

- Diagram Editor. Unmöglichkeit, die Zeichenfläche beim Verschieben von Elementen nach unten und rechts automatisch zu scrollen

## Version 6.1 {#version-61}

Veröffentlicht am 25. November 2025

### Neue Funktionalität {#new-functionality}

- Die Möglichkeit, Diagram-PERT-Diagramme aus Gantt-Datensätzen zu erstellen:
    - [ein neuer PERT-Modus](/#diagram-in-the-pert-mode), festgelegt über den [neuen Typ: `"pert"`](api/diagram/type_property.md)
    - [neue Shape-Typen: `"task"` und `"milestone"`](shapes/default_shapes.md#shapes-in-the-pert-mode)
    - [ein neuer Gruppentyp: `"project"`](/groups/#grouping-shapes-in-the-pert-mode) (zum Gruppieren von Tasks und Milestones)
- Diagram Editor. Die Möglichkeit, Tastenkombinationen (Hotkeys) innerhalb des Editors zu verwalten:
    - eine neue Konfigurationseigenschaft [`hotkeys`](api/diagram_editor/editor/config/hotkeys_property.md) erlaubt es, bestehende Hotkeys zu ändern oder zu deaktivieren sowie neue hinzuzufügen
- Diagram Editor. Die Möglichkeit, das Größenändern und Drehen von Shapes über eine Reihe neuer Events zu verwalten:
[`beforeItemResize`](api/diagram_editor/editor/events/beforeitemresize_event.md),
[`afterItemResize`](api/diagram_editor/editor/events/afteritemresize_event.md),
[`itemResizeEnd`](api/diagram_editor/editor/events/itemresizeend_event.md),
[`beforeItemRotate`](api/diagram_editor/editor/events/beforeitemrotate_event.md),
[`afterItemRotate`](api/diagram_editor/editor/events/afteritemrotate_event.md),
[`itemRotateEnd`](api/diagram_editor/editor/events/itemrotateend_event.md)

### Aktualisierungen {#updates-2}

- DataCollection-API. Aktualisierungen für den PERT-Modus:
    - die Methode [`parse()`](api/data_collection/parse_method.md) kann als ersten Parameter ein Objekt mit den Arrays `data` und `links` erhalten
    - die Methode [`serialize()`](api/data_collection/serialize_method.md) kann ein Objekt mit den Arrays `data` und `links` zurückgeben
- Diagram-API. Die Möglichkeit, das Format der Datumsanzeige in den Task-Shapes für den PERT-Modus festzulegen:
    - ein neuer Parameter `dateFormat` für die Konfigurationseigenschaft [`typeConfig`](api/diagram/typeconfig_property.md)
- Diagram/Diagram-Editor-API. Die Möglichkeit, den Verbindungstyp der Linien festzulegen:
    - ein neuer Parameter `connectType` für die Konfigurationseigenschaft [`lineConfig`](api/diagram/lineconfig_property.md) von Diagram
    - ein neuer Parameter `connectType` für die Konfigurationseigenschaft [`lineConfig`](api/diagram_editor/editor/config/lineconfig_property.md) von Diagram Editor
- Export-API. Die Exportfunktionen [`pdf()`](api/export/pdf_method.md) und [`png()`](api/export/png_method.md) geben nun ein Promise des Datenexports zurück

### Fehlerbehebungen {#fixes-5}

- Diagram Editor. Der Skriptfehler, der nach dem Hovern über ein Shape im Safari-Browser auftrat
- Diagram Editor. Die Konsolenwarnungen, die nach dem Entfernen von Elementen auftraten

### Neue Demo zur [KI-Integration](guides/ai-integrations/ai-demo.md) {#new-demo-on-ai-integration}

- [DHTMLX Diagram Org Chart AI Builder](https://dhtmlx.com/docs/demo/ai-org-chart-builder/)


### Neue Beispiele {#new-samples}

- [Diagram. PERT-Diagramm. Initialisierung](https://snippet.dhtmlx.com/4h5fi7xd)
- [Diagram und Gantt. PERT-Diagramm. Initialisierung](https://snippet.dhtmlx.com/409jj9uh)
- [Diagram und Gantt. PERT-Diagramm. Vollständige Integration](https://snippet.dhtmlx.com/gcnx4a9h)
- [Diagram und Gantt. PERT-Diagramm. Popup-Fenster](https://snippet.dhtmlx.com/fvfysbdb)
- [Diagram und Gantt. PERT-Diagramm. Benutzerdefinierte Shapes und Styling (benutzerdefiniertes CSS)](https://snippet.dhtmlx.com/mtk92awx)
- [Diagram. PERT-Diagramm. Verschiedene Datensätze](https://snippet.dhtmlx.com/2j2y8vy6)
- [Diagram. PERT-Diagramm. Tasks filtern/durchsuchen](https://snippet.dhtmlx.com/1b2bmmxk)
- [Diagram. PERT-Diagramm. Benutzerdefinierte Seitenleiste für Task-Informationen](https://snippet.dhtmlx.com/712lsox0)
- [Diagram. PERT-Diagramm. Themes](https://snippet.dhtmlx.com/2e5y5u6m)
- [Diagram. Export. Wasserzeichen unten links](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. Export. Sich wiederholendes Wasserzeichen](https://snippet.dhtmlx.com/emkea55j)
- [Diagram. Interaktives elektrisches Schaltplandiagramm](https://snippet.dhtmlx.com/cisyixkq)
- [Diagram Editor. Verwaltung von Verschieben, Drehen und Größenändern von Shapes über Events](https://snippet.dhtmlx.com/qldjbbm7)
- [Diagram Editor. Verwaltung des Hinzufügens, Änderns und Deaktivierens von Hotkeys über die API](https://snippet.dhtmlx.com/8ads5dq8)
- [Diagram Editor. Fishbone-Diagramm. Ursachen und Lösungen](https://snippet.dhtmlx.com/7vhwtiba)
- [Diagram Editor. Fishbone-Diagramm. Mehrere Ursachen](https://snippet.dhtmlx.com/0dgjwt6u)


## Version 6.0.11 {#version-6011}

Veröffentlicht am 18. Juni 2025

### Fehlerbehebungen {#fixes-6}

- Diagram Editor. Fehlerhaftes Verschieben von Shapes beim Zoomen

## Version 6.0.10 {#version-6010}

Veröffentlicht am 10. März 2025

### Fehlerbehebungen {#fixes-7}

- Diagram. Das Problem mit der Anpassung der Pfeilgröße der Linien-Shape beim Bearbeiten der Linienbreite

## Version 6.0.9 {#version-609}

Veröffentlicht am 4. Februar 2025

### Fehlerbehebungen {#fixes-8}

- Diagram Editor. Ein Problem beim Verschieben einer Gruppe mit Elementen sowie beim Verschieben von Elementen in bzw. aus einer Gruppe
- Diagram. Die Events `itemMouseOver` und `itemMouseOut` werden für ein ausgewähltes Shape nicht ausgelöst

## Version 6.0.8 {#version-608}

Veröffentlicht am 5. Dezember 2024

- Das Problem mit dem lokalen Testpaket beim Import in Frameworks

## Version 6.0.7 {#version-607}

Veröffentlicht am 27. November 2024

- Diagram Editor. Ein Fehler trat bei der Shape-Bearbeitung mit der Editbar auf
- Diagram Editor. Ein Problem beim Verschieben eines Shapes während der Navigation bei der Inline-Bearbeitung

## Version 6.0.4 {#version-604}

Veröffentlicht am 1. Oktober 2024

### Fehlerbehebungen {#fixes-9}

- Diagram Editor. Der Aufruf der Methode `destructor()` löst einen Fehler aus

## Version 6.0.3 {#version-603}

Veröffentlicht am 28. August 2024

### Fehlerbehebungen {#fixes-10}

- Diagram Editor. Anwendung unterschiedlicher Locales für `calendar`, `combobox`, `colorpicker`, `form`, `timepicker` der Editbar
- Diagram Editor. Hinzufügen von Diagram Editor in eine Layout-Zelle
- Diagram Editor. Die Eigenschaft `shapeToolbar` ist für den `default`-Modus nicht optional
- Diagram Editor. Fehlerhaftes Hover-Verhalten, wenn ein benutzerdefiniertes Shape ein Vorschaubild besitzt


## Version 6.0.2 {#version-602}

Veröffentlicht am 16. Juli 2024

### Fehlerbehebungen {#fixes-11}

- Diagram. Autoplatzierung. Ein Shape verbirgt sich unter einem anderen Shape

## Version 6.0.1 {#version-601}

Veröffentlicht am 24. Juni 2024

### Fehlerbehebungen {#fixes-12}

- Diagram Editor. Speicherleck
- Diagram Editor. Skriptfehler beim Klicken auf vertikale und horizontale Verteilung über die Toolbar
- Diagram. Typenproblem beim Aufruf der Methode [`getSubHeaderCellId()`](api/cell_manager/getsubheadercellid_method.md)

## Version 6.0 {#version-60}

Veröffentlicht am 16. Mai 2024

### Breaking Changes {#breaking-changes}

Das neue Update führt bedeutende Änderungen an der Struktur und Funktionalität von Diagram und Diagram Editor ein. Weitere Informationen zur aktuellen Version finden Sie im [Migrationsartikel](migration.md#50---60).

### Neue Funktionalität {#new-functionality-1}

- Umstrukturierung von Diagram Editor: Möglichkeit, mit dessen Teilen zu interagieren und deren Sichtbarkeit über die Eigenschaft [`view`](api/diagram_editor/editor/config/view_property.md) zu verwalten, die folgende Konfigurationen umfasst:
    - [Toolbar](guides/diagram_editor/toolbar.md) – ein oberer Teil von Diagram Editor, der Benutzern hilft, den Bearbeitungsprozess zu steuern (siehe [API-Übersicht](api/diagram_editor/toolbar/api_overview.md))
    - [Shapebar](guides/diagram_editor/shapebar.md) – (ehemals linkes Panel) ein Teil von Diagram Editor, der Vorschauen der Diagram-Elemente rendert (siehe [API-Übersicht](api/diagram_editor/shapebar/api_overview.md))
    - [Editbar](guides/diagram_editor/editbar.md) – (ehemals rechtes Panel) ein Teil von Diagram Editor, mit dem Benutzer Diagram-Elemente bearbeiten können (siehe [API-Übersicht](api/diagram_editor/editbar/api_overview.md)). Sie können folgende Aktionen durchführen:
        - Sätze vordefinierter [Basissteuerelemente](api/diagram_editor/editbar/basic_controls_overview.md) und [komplexer Steuerelemente](api/diagram_editor/editbar/complex_controls_overview.md)
        - anpassbare Konfiguration von [Basissteuerelementen](api/diagram_editor/editbar/basic_controls_overview.md) und [komplexen Steuerelementen](api/diagram_editor/editbar/complex_controls_overview.md) je nach den bereitgestellten Bedingungen
        - dynamische Verwaltung des Editbar-Panels je nach den bereitgestellten Bedingungen ([Beispiel](https://snippet.dhtmlx.com/ealq0m4l?mode=wide))
        - Erstellung benutzerdefinierter Steuerelemente ([Beispiel](https://snippet.dhtmlx.com/1p0wemnn?mode=wide))
        - Erstellung von HTML-Inhalten ([Beispiel](https://snippet.dhtmlx.com/vcnt647v?mode=wide))
- Diagram Editor. Die [Copy-Manager-API](api/diagram_editor/copymanager/api_overview.md) wurde hinzugefügt
- Diagram Editor. Die Möglichkeit, [Shapebar](api/diagram_editor/shapebar/config/show_property.md), [Editbar](guides/diagram_editor/editbar.md) und [Toolbar](guides/diagram_editor/toolbar.md) ein-/auszublenden
- Diagram Editor. Die Methode [destructor()](api/diagram_editor/editor/methods/destructor_method.md) wurde hinzugefügt
- Diagram Editor. Die Möglichkeit, [die Verbindungspunkte auszublenden](api/diagram_editor/editor/config/connectionpoints_property.md)
- Diagram Editor. Die Möglichkeit, [die Größenänderungspunkte auszublenden](api/diagram_editor/editor/config/resizepoints_property.md)
- Diagram Editor. Die Möglichkeit, [das Raster auszublenden](api/diagram_editor/editor/config/grid_property.md)
- Das Upgrade der [Selection-API](/api/selection/) mit der Möglichkeit der Mehrfachauswahl
- Die Titel von Linien werden als separate Objekte deklariert, definiert als [`lineTitles`](/line_titles/) mit eigenen [Konfigurationseigenschaften](line_titles/configuration_properties.md)
- [Unterstützung neuer Themes](../category/themes/): Dark, Light High Contrast und Dark High Contrast ([Beispiel](https://snippet.dhtmlx.com/9twmlfus))
- Diagram Editor. Die Möglichkeit, [das Farbschema der Shapebar-Elemente anzupassen](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar), indem CSS-Variablen neu definiert und eigene benutzerdefinierte Variablen verwendet werden

### Aktualisierungen {#updates-3}

- Diagram Editor. [Locales](guides/localization.md) wurden aktualisiert
- Diagram Editor. Die Liste der [Hotkeys](guides/diagram_editor/hot_keys.md) wurde erweitert
- Diagram Editor. Das Verhalten von Shapebar-Elementen beim Ziehen auf das Raster sowie ihr Erscheinungsbild wurden verbessert
- Diagram Editor. Die Callback-Funktion der Events [`zoomIn`](api/diagram_editor/editor/events/zoomin_event.md) / [`zoomOut`](api/diagram_editor/editor/events/zoomout_event.md) wird nun mit dem Parameter `step` aufgerufen
- Diagram Editor. Die Funktionalität der Konfigurationsoption [`magnetic`](api/diagram_editor/editor/config/magnetic_property.md) wurde erweitert
- Diagram Editor. Die Verschiebe-[Events](api/diagram_editor/editor/events/overview.md) des Editor-Objekts wurden aktualisiert:
[`afterGroupMove`](api/diagram_editor/editor/events/aftergroupmove_event.md),
[`afterItemCatch`](api/diagram_editor/editor/events/afteritemcatch_event.md),
[`afterItemMove`](api/diagram_editor/editor/events/afteritemmove_event.md),
[`afterLineTitleMove`](api/diagram_editor/editor/events/afterlinetitlemove_event.md),
[`afterShapeMove`](api/diagram_editor/editor/events/aftershapemove_event.md),
[`beforeGroupMove`](api/diagram_editor/editor/events/beforegroupmove_event.md),
[`beforeItemCatch`](api/diagram_editor/editor/events/beforeitemcatch_event.md),
[`beforeItemMove`](api/diagram_editor/editor/events/beforeitemmove_event.md),
[`beforeLineTitleMove`](api/diagram_editor/editor/events/beforelinetitlemove_event.md),
[`beforeShapeMove`](api/diagram_editor/editor/events/beforeshapemove_event.md),
[`groupMoveEnd`](api/diagram_editor/editor/events/groupmoveend_event.md),
[`itemMoveEnd`](api/diagram_editor/editor/events/itemmoveend_event.md),
[`itemTarget`](api/diagram_editor/editor/events/itemtarget_event.md),
[`lineTitleMoveEnd`](api/diagram_editor/editor/events/linetitlemoveend_event.md),
[`shapeMoveEnd`](api/diagram_editor/editor/events/shapemoveend_event.md)
- Die Möglichkeit, [mit Linientiteln über die DataCollection-API zu arbeiten](/line_titles/#working-with-line-titles)

### Veraltete API {#deprecated-api}

- #### Eigenschaften
    - Die Eigenschaft `controls` von Diagram Editor ist veraltet und wird nicht mehr unterstützt
    - Die Eigenschaft `editMode` von Diagram Editor ist veraltet und wird nicht mehr unterstützt
    - Die Eigenschaft `gapPreview` von Diagram Editor ist veraltet und wird nicht mehr unterstützt
    - Die Eigenschaft `reservedWidth` von Diagram Editor ist veraltet und wird nicht mehr unterstützt
    - Die Eigenschaft `scalePreview` von Diagram Editor ist veraltet und wird nicht mehr unterstützt
    - Die Eigenschaft `shapeBarWidth` von Diagram Editor ist veraltet und wird nicht mehr unterstützt
    - Die Eigenschaft `shapeSections` von Diagram Editor ist veraltet und wird nicht mehr unterstützt
    - Die Eigenschaft `title` der [Line](lines/configuration_properties.md)-Daten ist veraltet und wird nicht mehr unterstützt

- #### Methoden
    - Die Methode `getId()` des Selection-Objekts von Diagram ist veraltet und wird nicht mehr unterstützt
    - Die Methode `getSubId()` des Selection-Objekts von Diagram ist veraltet und wird nicht mehr unterstützt
    - Die Methode `setViewMode()` von Diagram Editor ist veraltet und wird nicht mehr unterstützt

- #### Events
    - Die folgenden Events von Diagram Editor sind veraltet und werden nicht mehr unterstützt, da es keine entsprechenden Schaltflächen mehr in der Toolbar gibt: `resetButton`, `applyButton`, `visibility`, `exportData`, `importData`, `autoLayout`
    - Das Event `changeGridStep` von Diagram Editor ist veraltet und wird nicht mehr unterstützt

### Fehlerbehebungen {#fixes-13}

- Diagram Editor. Behebt einen Konsolenfehler, der durch das erneute Klicken auf die Schaltfläche „Daten importieren" nach einem Datenimport ohne Dateiauswahl verursacht wurde
- Diagram Editor. Behebt die Blockierung beim Hinzufügen eines neuen Shapes
- Diagram Editor. Behebt das Kopieren von Linien bei manueller Auswahl von Elementen
- Diagram Editor. Behebt das Ziehen, wenn sich das Wurzel-Shape nahe am untergeordneten Shape in den Modi `mindmap`/`org` befindet
- Diagram Editor. Behebt das fehlerhafte Auswahlverhalten, das einen zusätzlichen Klick zur Auswahl eines Shapes mit der Taste <kbd>Shift</kbd> erforderte
- Diagram Editor. Behebt das gemeinsame Verschieben einer Gruppe und einer Swimlane
- Diagram Editor. Behebt das Entfernen nicht verwendeter Linien/Konnektoren
- Diagram Editor. Behebt die Möglichkeit, Elemente unterschiedlicher übergeordneter Elemente zum Zielelement zu verschieben (für die Modi `org`/`mindmap`)
- Diagram Editor. Behebt die Möglichkeit, Standardwerte für Shapebar-Elemente festzulegen
- Diagram Editor. Behebt die Darstellung von Konnektoren beim Hovern verschobener Elemente über ein beliebiges Shape
- Diagram Editor. Behebt die Unmöglichkeit, ausgewählte Elemente über das Menü in den Modi `mindmap`/`org` zu entfernen
- Diagram Editor. Behebt das Problem, dass der Datenimport nur einmal funktionierte
- Diagram Editor. Verbessert die Leistung während der Konnektor-Bewegung
- Diagram Editor. Begrenzt die Aufzeichnung von Aktionen während der Konnektor-Bewegung im `historyManager`
- Diagram Editor. Optimiert die Logik der Suche nach dem nächstgelegenen Konnektor
- Behebt die Lokalisierung bei komplexen Widgets

## Version 5.0.3 {#version-503}

Veröffentlicht am 12. Juli 2023

### Fehlerbehebungen {#fixes-14}

- Behebt das Problem, dass der Aufruf der Methode [autoPlace()](api/diagram/autoplace_method.md) nach dem Daten-Parsing einen Fehler verursachte

## Version 5.0.2 {#version-502}

Veröffentlicht am 30. Mai 2023

### Fehlerbehebungen {#fixes-15}

- Diagram Editor. Behebt das Problem, dass benutzerdefinierte Punkte sich bei einer Mehrfachauswahl-Verschiebung nicht mitbewegten
- Diagram Editor. Behebt die Unmöglichkeit, ein Shape mit sich selbst zu verknüpfen
- Behebt das Problem beim Exportieren eines Standarddiagramms ohne [exportStyles](api/diagram/exportstyles_property.md)
- Behebt das Problem mit der promiz.js-Bibliothek, das beim Import der Quellen einen Fehler bei der Definition der Methode setImmediate() verursachte
- Behebt die Pfadbildung der URL im Export-Objekt
- Typen für den Export wurden hinzugefügt

## Version 5.0.1 {#version-501}

Veröffentlicht am 19. Januar 2023

### Fehlerbehebungen {#fixes-16}

- Diagram Editor. Behebt das Problem, dass Linien nicht immer an ihrer Position gezeichnet wurden, wenn Daten exportiert und anschließend erneut geladen wurden
    - Nun ist es möglich, die Koordinaten für Linien im `default`-Modus festzulegen (neue Eigenschaft [`points`](lines/configuration_properties.md#properties-specific-for-the-default-mode) des Linienobjekts)
- Diagram Editor. Behebt das Problem beim Ziehen von Shapes im Raster nach Änderung der Zoomstufe
- Behebt den Fehler, der nach dem Klicken auf die Schaltfläche „Auto-Layout" bei fehlenden Shapes ausgelöst wurde
- Behebt das Problem mit der Anzeige der [Standardeinstellungen](api/diagram/defaults_property.md) nach der Erstellung von Linien über den Editor
- Behebt das Problem mit der Skalierung von Diagram/Diagram Editor, das beim automatischen Platzieren von Shapes im `"radial"`-Modus auftrat

## Version 5.0 {#version-50}

Veröffentlicht am 7. September 2022

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-5-0/" target="_blank">Übersicht über das Release im Blog</a>

### Breaking Changes {#breaking-changes-1}

Die neue Version führt einige Änderungen an der Eigenschaft `lineGap` ein. Weitere Informationen zur aktuellen Version finden Sie im [Migrationsartikel](migration.md#42---50).

### Neue Funktionalität {#new-functionality-2}

#### Diagram {#diagram}

- Radialer Algorithmus für die [automatische Platzierung von Shapes](guides/diagram/configuration.md#configuring-autoplacement-for-shapes):
    - der Parameter `placemode` wurde zur Eigenschaft [`autoplacement`](api/diagram/autoplacement_property.md) hinzugefügt
    - der Parameter `placemode` wurde zur Methode [`autoPlace()`](api/diagram/autoplace_method.md) hinzugefügt
- Die Möglichkeit, Tooltips für Toolbar-Symbole festzulegen:
    - der Parameter `tooltip` des Symbolobjekts wurde zur Eigenschaft [`toolbar`](api/diagram/toolbar_property.md) hinzugefügt

#### Diagram Editor {#diagram-editor}

- Radialer Algorithmus für die automatische Platzierung von Shapes:
    - der Parameter `placemode` wurde zur Eigenschaft [`autoplacement`](api/diagram_editor/editor/config/autoplacement_property.md) hinzugefügt
    - die Schaltfläche **Auto-Layout** der [Toolbar](guides/diagram_editor/toolbar.md) bietet nun zwei Optionen für die automatische Platzierung von Shapes: *Orthogonal* und *Radial*
- [Fanglinien](guides/diagram_editor/grid_area.md#enablingdisabling-snap-lines) für die präzisere Anordnung von Shapes im Rasterbereich
- Die Möglichkeit, Fanglinien über die neue Eigenschaft [`magnetic`](api/diagram_editor/editor/config/magnetic_property.md) zu konfigurieren
- Die Möglichkeit, Stile eines oder mehrerer Elemente über <kbd>Alt</kbd> (<kbd>Option</kbd>) + <kbd>Ctrl</kbd> (<kbd>Cmd</kbd>) + <kbd>С</kbd> => <kbd>Alt</kbd> (<kbd>Option</kbd>) + <kbd>Ctrl</kbd> (<kbd>Cmd</kbd>) + <kbd>V</kbd> zu kopieren und einzufügen (siehe das **[Beispiel](https://snippet.dhtmlx.com/klgvu3jq)**)
- Die Möglichkeit, [mehrere Elemente auszurichten und zu verteilen](guides/diagram_editor/grid_area.md#aligning-multiple-items)
- Nun werden Tooltips angezeigt, wenn Sie mit dem Mauszeiger über Steuerelemente in der persönlichen Toolbar von Elementen fahren
- Erweiterte Liste der [Locale-Optionen](guides/localization.md) für die Lokalisierung von Tooltips in der Toolbar pro Element
- Die Möglichkeit, Tooltips für [benutzerdefinierte Toolbar-Symbole](guides/diagram_editor/grid_area.md#configuring-the-toolbar-of-an-item) festzulegen:
    - der Parameter `tooltip` des Symbolobjekts wurde zur Eigenschaft [`shapeToolbar`](api/diagram_editor/editor/config/shapetoolbar_property.md) hinzugefügt
- Verbessertes Design des [Rasterbereichs](guides/diagram_editor/grid_area.md). Nun hängt der Abstand zwischen den Punkten im Rasterbereich vom Wert der Rasterschrittweite ab

### Fehlerbehebungen {#fixes-17}

- Behebt das Problem, dass ein Ladesymbol nach dem Laden einer Datei nicht aus dem rechten Panel des Editors verschwand

## Version 4.2 {#version-42}

Veröffentlicht am 3. März 2022

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-2-touch-support-default-settings-connector-lines-default-section-sets-editors-left-panel/" target="_blank">Übersicht über das Release im Blog</a>

### Neue Funktionalität {#new-functionality-3}

- [Touch-Unterstützung](guides/touch_support.md)
- Die Möglichkeit, die Standardeinstellung für Linien über die Eigenschaft [`lineConfig`](api/diagram/lineconfig_property.md) von Diagram festzulegen
- Die Möglichkeit, die Standardeinstellungen für neue, im Editor erstellte Linien über die Eigenschaft [`lineConfig`](api/diagram_editor/editor/config/lineconfig_property.md) von Diagram Editor festzulegen
- Die Möglichkeit, Standardsätze von Org-Shapes, Gruppen und Swimlanes in der erforderlichen Reihenfolge hinzuzufügen, [wenn Abschnitte im linken Panel des Editors konfiguriert werden](guides/diagram_editor/shapebar.md#custom-sections)

### Aktualisierungen {#updates-4}

- Die Eigenschaft `defaultLinkType` von Diagram ist veraltet. Weitere Informationen finden Sie im Artikel [Migration](migration.md#41---42)
- Die Eigenschaft `shapeSections` von Diagram Editor wurde aktualisiert. Weitere Informationen finden Sie im Artikel [Migration](migration.md#41---42)
- Nun ist es möglich, Standardkonfigurationen nicht nur für Shapes bestimmter Typen, sondern auch für Linien festzulegen:
    - die Eigenschaft [`defaults`](api/diagram/defaults_property.md) von Diagram wurde aktualisiert
    - die Eigenschaft [`defaults`](api/diagram_editor/editor/config/defaults_property.md) von Diagram Editor wurde aktualisiert
- Die Dokumentation für [Modi zum Verbinden von Shapes](api/diagram/autoplace_method.md#modes-of-connecting-shapes) wurde aktualisiert

## Version 4.1 {#version-41}

Veröffentlicht am 7. Dezember 2021

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-1-partners-assistants-org-charts-moving-shapes-children-connector-titles-much/" target="_blank">Übersicht über das Release im Blog</a>

### Neue Funktionalität {#new-functionality-4}

- Die Möglichkeit, [Partner-Shapes](/#assistant-and-partner-shapes) im Org-Chart-Modus hinzuzufügen
- Die Möglichkeit, [Assistent-Shapes](/#assistant-and-partner-shapes) im Org-Chart-Modus hinzuzufügen
- Die Möglichkeit, [Titel zu Linien hinzuzufügen](/#line-titles) im `default`-Modus
- Die Möglichkeit, [Shapes per Drag-and-Drop](editor_overview.md#editor-in-the-org-chart-mode) von einem übergeordneten Element zu einem anderen im Editor im Org-Chart- und Mindmap-Modus zu verschieben. Die Shapes werden zusammen mit ihren untergeordneten Elementen verschoben
- Die Möglichkeit, [Zielelemente zu stylen](guides/customization.md#styling-target-shapes) im Editor im Org-Chart- und Mindmap-Modus

### API {#api}

- Neue Events des Diagram-Objekts: [`emptyAreaDblClick`](api/diagram/emptyareadblclick_event.md), [`emptyAreaMouseDown`](api/diagram/emptyareamousedown_event.md), [`lineTitleClick`](api/diagram/linetitleclick_event.md), [`lineTitleDblClick`](api/diagram/linetitledblclick_event.md), [`lineTitleMouseDown`](api/diagram/linetitlemousedown_event.md)
- Neue [Shape-Eigenschaften](shapes/configuration_properties.md#properties-specific-for-the-org-chart-mode) speziell für den Org-Chart-Modus: `assistant`, `partner`, `catchItem`, `giveItem`
- Neue [Shape-Eigenschaften](shapes/configuration_properties.md#properties-specific-for-the-mindmap-mode) speziell für den Mindmap-Modus: `catchItem`, `giveItem`
- Neue [Linien-Eigenschaften](lines/configuration_properties.md#properties-specific-for-the-default-mode) speziell für den `default`-Modus: `title`
- Neue Methoden des Editor-Objekts: `setViewMode()`, `zoomIn()`, `zoomOut()`
- Neue Events des Editor-Objekts: [`beforeLineTitleMove`](api/diagram_editor/editor/events/beforelinetitlemove_event.md), [`afterLineTitleMove`](api/diagram_editor/editor/events/afterlinetitlemove_event.md), [`lineTitleMoveEnd`](api/diagram_editor/editor/events/linetitlemoveend_event.md), [`itemTarget`](api/diagram_editor/editor/events/itemtarget_event.md), [`beforeItemCatch`](api/diagram_editor/editor/events/beforeitemcatch_event.md), [`afterItemCatch`](api/diagram_editor/editor/events/afteritemcatch_event.md)
- Neue Eigenschaften des Editor-Objekts: [`itemsDraggable`](api/diagram_editor/editor/config/itemsdraggable_property.md)
- Neue HistoryManager-Methoden: [`add()`](api/diagram_editor/historymanager/methods/add_method.md), [`disable()`](api/diagram_editor/historymanager/methods/disable_method.md), [`enable()`](api/diagram_editor/historymanager/methods/enable_method.md), [`isRedo()`](api/diagram_editor/historymanager/methods/isredo_method.md), [`redo()`](api/diagram_editor/historymanager/methods/redo_method.md), [`reset()`](api/diagram_editor/historymanager/methods/reset_method.md), [`undo()`](api/diagram_editor/historymanager/methods/undo_method.md)
- Neue HistoryManager-Eigenschaften: `disabled`, [`saveDelay`](api/diagram_editor/historymanager/config/savedelay_property.md)
- Neue Selection-Methode: `getSubId()`

### Aktualisierungen {#updates-5}

- Aktualisierte Events von [InlineEditor](/api/inline_editor/): Der Parameter *subHeaderId* wurde in *subId* geändert
- Aktualisierte Events der [Selection-API](/api/selection/#events): Der Parameter *subId* wurde hinzugefügt
- Der Standardtyp des Shapes im `default`-Modus wurde in [*"rectangle"*](shapes/configuration_properties.md#common-properties) geändert

### Fehlerbehebungen {#fixes-18}

- Die Leistung wurde für alle Diagrammtypen verbessert
- Behebung der fehlerhaften Funktion der Schaltflächen *Rückgängig/Wiederholen* in der Toolbar des Editors

## Version 4.0.1 {#version-401}

Veröffentlicht am 16. September 2021

### Fehlerbehebungen {#fixes-19}

- Behebt die Anzeige von Konnektoren beim Drehen des Shapes
- Behebt die minifizierten Stile des Diagramms
- Behebt die Funktion des Algorithmus beim Hinzufügen neuer Elemente in den Diagram Editor im Org-Chart-/Mindmap-Modus
- Behebt die Funktion des rechten Panels des Editors bei der Arbeit mit Textstilen

## Version 4.0 {#version-40}

Veröffentlicht am 7. September 2021

<a href="https://dhtmlx.com/blog/dhtmlx-diagram-4-0-groups-swimlanes-angular-react-vue-demos/" target="_blank">Übersicht über das Release im Blog</a>

### Neue Funktionalität {#new-functionality-5}

- Neue Diagrammelemente wurden hinzugefügt: [Gruppen](/groups/), [Swimlanes](/swimlanes/)
- Neue Abschnitte im linken Panel von Diagram Editor wurden hinzugefügt: [Gruppen, Swimlanes](guides/diagram_editor/shapebar.md#default-sections)
- [Neue Seitenleistenoptionen wurden dem rechten Panel des Editors für Gruppen und Swimlanes hinzugefügt](guides/diagram_editor/editbar.md)
- Die Möglichkeit, [Gruppen](guides/diagram_editor/grid_area.md#managing-groups) und [Swimlanes](guides/diagram_editor/grid_area.md#managing-swimlanes) über die Benutzeroberfläche zu bearbeiten
- Erweiterte Liste der [Locale-Optionen](guides/localization.md)
- Die Möglichkeit, die Zellen einer Swimlane über die [CellManager-API](/api/cell_manager/) zu verwalten
- Die Möglichkeit, den Text eines Elements durch Doppelklick darauf zu bearbeiten
- Die Demo [DHTMLX Diagram mit Angular](guides/integrations/angular_integration.md) wurde hinzugefügt
- Die Demo [DHTMLX Diagram mit React](guides/integrations/react_integration.md) wurde hinzugefügt
- Die Demo [DHTMLX Diagram mit Vue.js](guides/integrations/vue_integration.md) wurde hinzugefügt
- Die Möglichkeit, [identische Elemente mit unterschiedlichen Stilen und Einstellungen dem linken Panel des Editors hinzuzufügen](guides/diagram_editor/shapebar.md)

### API {#api-1}

- Neue Methoden der [CellManager-API](/api/cell_manager/): [add()](api/cell_manager/add_method.md), [getCellId()](api/cell_manager/getcellid_method.md), [getCellIndex()](api/cell_manager/getcellindex_method.md), [getSubHeaderCellId()](api/cell_manager/getsubheadercellid_method.md), [getSubHeaderCellIndex()](api/cell_manager/getsubheadercellindex_method.md), [getSubHeaderType()](api/cell_manager/getsubheadertype_method.md), [move()](api/cell_manager/move_method.md), [remove()](api/cell_manager/remove_method.md), [resetSwimlane()](api/cell_manager/resetswimlane_method.md), [setSwimlane()](api/cell_manager/setswimlane_method.md), [validation()](api/cell_manager/validation_method.md)
- Neue Events der [CellManager-API](/api/cell_manager/): [afterCellsAdd](api/cell_manager/aftercellsadd_event.md), [afterCellsMove](api/cell_manager/aftercellsmove_event.md), [afterCellsRemove](api/cell_manager/aftercellsremove_event.md), [afterCellsValidation](api/cell_manager/aftercellsvalidation_event.md), [beforeCellsAdd](api/cell_manager/beforecellsadd_event.md), [beforeCellsMove](api/cell_manager/beforecellsmove_event.md), [beforeCellsRemove](api/cell_manager/beforecellsremove_event.md), [beforeCellsValidation](api/cell_manager/beforecellsvalidation_event.md)
- Neue Events des Diagram-Objekts: [afterSubmenuOpen](api/diagram/aftersubmenuopen_event.md), [beforeSubmenuOpen](api/diagram/beforesubmenuopen_event.md), [groupClick](api/diagram/groupclick_event.md), [groupDblClick](api/diagram/groupdblclick_event.md), [groupHeaderClick](api/diagram/groupheaderclick_event.md), [groupHeaderDblClick](api/diagram/groupheaderdblclick_event.md), [groupMouseDown](api/diagram/groupmousedown_event.md), [itemClick](api/diagram/itemclick_event.md), [itemDblClick](api/diagram/itemdblclick_event.md), [itemMouseDown](api/diagram/itemmousedown_event.md), [itemMouseOut](api/diagram/itemmouseout_event.md), [itemMouseOver](api/diagram/itemmouseover_event.md), [lineDblClick](api/diagram/linedblclick_event.md), [lineMouseDown](api/diagram/linemousedown_event.md)
- Neue Events des Editor-Objekts: [shapeMoveEnd](api/diagram_editor/editor/events/shapemoveend_event.md), [beforeItemMove](api/diagram_editor/editor/events/beforeitemmove_event.md), [afterItemMove](api/diagram_editor/editor/events/afteritemmove_event.md), [itemMoveEnd](api/diagram_editor/editor/events/itemmoveend_event.md), [beforeGroupMove](api/diagram_editor/editor/events/beforegroupmove_event.md), [afterGroupMove](api/diagram_editor/editor/events/aftergroupmove_event.md), [groupMoveEnd](api/diagram_editor/editor/events/groupmoveend_event.md)
- Neue Methoden von DataCollection: [eachChild()](api/data_collection/eachchild_method.md), [eachParent()](api/data_collection/eachparent_method.md), [getRoot()](api/data_collection/getroot_method.md), [getRoots()](api/data_collection/getroots_method.md)
- Neue Events von InlineEditor: [afterEditorClose](api/inline_editor/aftereditorclose_event.md), [afterEditorEditing](api/inline_editor/aftereditorediting_event.md), [afterEditorOpen](api/inline_editor/aftereditoropen_event.md), [beforeEditorClose](api/inline_editor/beforeeditorclose_event.md), [beforeEditorEditing](api/inline_editor/beforeeditorediting_event.md), [beforeEditorOpen](api/inline_editor/beforeeditoropen_event.md)
- Neue Konfigurationsattribute "editable" und "fixed" des [Shape-Objekts](shapes/configuration_properties.md)

### Aktualisierungen {#updates-6}

- Verbesserte Tastaturnavigation
- Neu gestaltete Shapes
- Aktualisierte Events des Editor-Objekts: [beforeShapeMove](api/diagram_editor/editor/events/beforeshapemove_event.md) und [afterShapeMove](api/diagram_editor/editor/events/aftershapemove_event.md)
- Aktualisierte Struktur der Shape-Collection-API

### Fehlerbehebungen {#fixes-20}

- Behebt die fehlerhafte Funktion der TypeScript-Typdefinitionen im Editor
- Behebt das Problem, dass die gedrückte Toolbar-Schaltfläche im Editor, der sich innerhalb eines HTML-Formulars befindet, das Absenden des Formulars auslöste
- Nun ist es möglich, ein Element nur dann in der Größe zu ändern, wenn der Drehwinkel entweder 0 oder 360 Grad beträgt
- Deutliche Optimierung der Diagram-Stile

## Version 3.1 {#version-31}

Veröffentlicht am 15. April 2021

### Neue Funktionalität {#new-functionality-6}

- [TypeScript-Unterstützung](guides/using_typescript.md)
- Ein neuer Mindmap-Modus ([type:"mindmap"](api/diagram/type_property.md)) von DHTMLX Diagram wurde hinzugefügt
- Die Möglichkeit, [die Richtung der untergeordneten Shapes relativ zum Wurzel-Shape im Mindmap-Modus von Diagram zu konfigurieren](guides/diagram/configuration.md#arranging-shapes-in-the-mindmap-mode-of-diagram) über die Konfigurationseigenschaft [typeConfig](api/diagram/typeconfig_property.md) des Diagram-Objekts
- Die Möglichkeit, [benutzerdefinierte Event-Handler für benutzerdefinierte Shapes hinzuzufügen](shapes/custom_shape.md#event-handlers-for-custom-shapes) über das Attribut "eventHandlers" der Methode [addShape()](api/diagram/addshape_method.md)
- Die Möglichkeit, die persönlichen Toolbars zur Bearbeitung von Elementen im [Rasterbereich](guides/diagram_editor/grid_area.md) über die Eigenschaft [shapeToolbar](api/diagram_editor/editor/config/shapetoolbar_property.md) des Editor-Objekts anzupassen
- Neue Events des Editor-Objekts: [BeforeShapeIconClick](api/diagram_editor/editor/events/beforeshapeiconclick_event.md) und [AfterShapeIconClick](api/diagram_editor/editor/events/aftershapeiconclick_event.md), [BeforeShapeMove](api/diagram_editor/editor/events/beforeshapemove_event.md) und [AfterShapeMove](api/diagram_editor/editor/events/aftershapeiconclick_event.md)
- Die Möglichkeit, das Senden von CSS-Stilen an den Export-Dienst über die Konfigurationsoption [exportStyles](api/diagram/exportstyles_property.md) des Diagram-Objekts zu deaktivieren

### Aktualisierungen {#updates-7}

- Die Konfigurationseigenschaft [type](api/diagram/type_property.md) des Diagram-Objekts wurde aktualisiert: neue Werte "default" und "mindmap" wurden hinzugefügt
- Die Methoden [collapseItem()](api/diagram/collapseitem_method.md) und [expandItem()](api/diagram/expanditem_method.md) wurden aktualisiert: der zweite Parameter "dir" wurde hinzugefügt
- Die Events [beforeCollapse](api/diagram/beforecollapse_event.md), [afterCollapse](api/diagram/aftercollapse_event.md), [beforeExpand](api/diagram/beforeexpand_event.md) und [afterExpand](api/diagram/afterexpand_event.md) wurden aktualisiert: der zweite Parameter "dir" wurde hinzugefügt

### Fehlerbehebungen {#fixes-21}

- Behebt das Problem mit dem Auswahlmodul für alle Typen von DHTMLX Diagram
- Behebt das Problem mit dem Scrollen des Diagramms, das im `default`-Modus initialisiert wurde, bei Anwendung der Methode "showItem()" auf das skalierte Diagramm
- Behebt die fehlerhafte Funktion des DOM-Parsers mit HTML-Vorlagen
- Behebt das Problem, dass das Wurzel-Shape nach dem Einklappen eines beliebigen untergeordneten Shapes eingeklappt wurde
- Behebt das Problem mit der Formatierung des Shape-Textes
- Behebt das Problem, das nach dem Hinzufügen langen Textes in das Textarea-Feld des rechten Panels des Editors auftrat
- Behebt das Problem beim Hinzufügen von Sonderzeichen zum Text benutzerdefinierter Shapes
- Behebt das Problem mit in der Konsole angezeigten Warnungen für benutzerdefinierte Shapes
- Behebt den Skriptfehler, der beim Löschen des Wurzel-Shapes im Editor ausgelöst wurde
- Behebt das Problem mit dem in der Konsole angezeigten Fehler nach Anwendung der Schaltfläche „Auto-Layout" im Editor, wenn der Editor nicht konfiguriert ist
- Behebt das Problem, dass der Typ der Shape-Kontur im `default`-Modus des Editors nach dessen Änderung nicht angewendet wurde
- Behebt das Problem bei der Nachverfolgung der Shape-Parameter im rechten Panel des Editors, der im `default`-Modus initialisiert wurde
- Behebt das Problem beim Entfernen des Fokus vom Shape im `default`-Modus des Editors
- Behebt das Problem beim Festlegen von Konnektoren zwischen den Shapes in der erforderlichen Reihenfolge, wenn der Editor im `default`-Modus initialisiert wird
- Behebt die fehlerhafte Funktion der Tastenkombination <kbd>Ctrl</kbd>+<kbd>A</kbd> im Org-Chart-Modus des Editors
- Behebt das Problem, dass Shapes ohne Konnektoren eingefügt wurden, wenn verbundene Shapes kopiert wurden
- Nun ist es nicht mehr möglich, das Wurzel-Shape über die Tastaturnavigation aus dem Editor zu entfernen, wenn der Editor im Org-Chart-Modus initialisiert ist

## Version 3.0.4 {#version-304}

Veröffentlicht am 27. Januar 2021

### Fehlerbehebungen {#fixes-22}

- Behebt das fehlerhafte Verhalten des im Editor ausgewählten Shapes, der im `default`-Modus initialisiert wurde, bei der Arbeit mit dem Eingabefeld auf der Seite
- Behebt das Problem, dass ein eingeklapptes/ausgeklapptes Element nicht mit seinem übergeordneten Element funktionierte
- Behebt die fehlerhafte Funktion der Methode [showItem()](api/diagram/showitem_method.md), wenn das untergeordnete Element ausgeblendet ist

## Version 3.0.3 {#version-303}

Veröffentlicht am 23. Dezember 2020

### Fehlerbehebungen {#fixes-23}

- Behebt das Problem mit dem Diagram-Exportdienst

## Version 3.0.2 {#version-302}

Veröffentlicht am 14. Juli 2020

### Fehlerbehebungen {#fixes-24}

- Behebt das Problem beim Importieren von Daten aus JSON in den Editor, der im Org-Chart-Modus initialisiert wurde
- Behebt die fehlerhafte Funktion der Methode [addShape()](api/diagram/addshape_method.md) bei der Konfiguration des rechten Panels des Editors
- Verbessertes Verhalten des historyManager-Steuerelements der Toolbar im Editor

## Version 3.0.1 {#version-301}

Veröffentlicht am 29. Mai 2020

### Fehlerbehebungen {#fixes-25}

- Behebt das Problem mit der Methode [autoPlace()](api/diagram/autoplace_method.md)
- Behebt das Problem mit den PNG/PDF-Exportmodulen

## Version 3.0 {#version-30}

Veröffentlicht am 12. Mai 2020

### Breaking Changes {#breaking-changes-2}

Das neue Update führt einige Änderungen und Verbesserungen ein. Weitere Informationen zur aktuellen Version finden Sie im Artikel [Migration](migration.md#22---30).

### Neue Funktionalität {#new-functionality-7}

- Neue Methode [autoPlace()](api/diagram/autoplace_method.md) und neue Eigenschaft [autoplacement](api/diagram/autoplacement_property.md) wurden hinzugefügt, um [verbundene Shapes in der hierarchischen Struktur automatisch anzuordnen](guides/manipulating_items.md#arranging-shapes-automatically)
- [Möglichkeit, die Standardkonfiguration eines Shapes festzulegen](guides/diagram/configuration.md#setting-the-default-configuration-of-a-shape) über die Eigenschaft `defaults` bei der Initialisierung von [Diagram](api/diagram/defaults_property.md) oder [Diagram Editor](api/diagram_editor/editor/config/defaults_property.md)
- Die Methode [addShape()](api/diagram/addshape_method.md) zur [Erstellung benutzerdefinierter Shapes](shapes/custom_shape.md) in Diagram und Diagram Editor wurde hinzugefügt
- Neue Eigenschaften des Editor-Objekts: `controls`, [defaults](api/diagram_editor/editor/config/defaults_property.md), `shapeSections`, `shapeBarWidth`, `scalePreview`, [scale](api/diagram_editor/editor/config/scale_property.md), `gapPreview`
- Die Seitenleistenoption *Grid Step* wurde dem [rechten Panel des Editors](guides/diagram_editor/editbar.md) hinzugefügt
- Möglichkeit, beliebige Toolbar-Schaltflächen des Editors sowie die Seitenleistenoption *Grid Step* über die Eigenschaft `controls` des Editor-Objekts ein-/auszublenden
- Möglichkeit, [Seitenleistenoptionen zur Bearbeitung von Attributen benutzerdefinierter Shapes im rechten Panel des Editors zu konfigurieren](guides/diagram_editor/editbar.md) über das Attribut `properties` der Methode [addShape()](api/diagram/addshape_method.md)
- [Möglichkeit, Abschnitte im linken Panel des Editors anzupassen](guides/diagram_editor/shapebar.md#custom-sections)
- [Möglichkeit, das Erscheinungsbild der im linken Panel des Editors gerenderten Shapes anzupassen](guides/diagram_editor/shapebar.md) über die Eigenschaft [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) des Shape-Objekts
- Möglichkeit, [mehrere Shapes im Editor auszuwählen, zu kopieren, einzufügen, zu löschen und zu verschieben](guides/diagram_editor/grid_area.md#manipulating-multiple-items)
- Möglichkeit, [mehrere Konnektorlinien auszuwählen und zu löschen](guides/diagram_editor/grid_area.md#manipulating-multiple-items) im Editor, der im `default`-Modus initialisiert wurde
- Möglichkeit, Daten aus einer JSON-Datei über die Schaltfläche [„Daten importieren"](guides/diagram_editor/toolbar.md) der Toolbar in den Editor zu importieren
- Die Methode [destructor()](api/diagram/destructor_method.md) wurde hinzugefügt

### Aktualisierungen {#updates-8}

- Möglichkeit, benutzerdefinierte HTML-Vorlagen im IE zu verwenden
- Die Benutzeroberfläche von Diagram Editor wurde aktualisiert und verbessert
- Möglichkeit, Shapes von Mitte zu Mitte zu verbinden
- Ein Satz von Hotkeys für den Editor wurde aktualisiert
- Die Möglichkeit, eine Konnektorlinie mit dem *Text*-Shape im Editor zu verbinden, der im `default`-Modus initialisiert wurde
- Automatische Anpassung der Inhaltsbreite des *Text*-Shapes wurde hinzugefügt

## Version 2.2.1 {#version-221}

Veröffentlicht am 30. Dezember 2019

### Fehlerbehebungen {#fixes-26}

- Problem mit der IE-Unterstützung für den Bildlader im Diagram Editor

## Version 2.2 {#version-22}

Veröffentlicht am 27. November 2019

### Neue Funktionalität {#new-functionality-8}

- Möglichkeit, benutzerdefinierte Shapes mithilfe von SVG- und HTML-Vorlagen zu erstellen
- Möglichkeit, Diagramme mit unterschiedlichen Shape-Typen zu erstellen
- Die Möglichkeit, Daten aus dem Diagram Editor über die Schaltfläche „Daten exportieren" der [Toolbar](guides/diagram_editor/toolbar.md) in das JSON-Format zu exportieren
- Die Option [showExport](migration.md#toolbar-buttons-in-editor) und das Event `exportData` wurden in Diagram Editor hinzugefügt

### Fehlerbehebungen {#fixes-27}

- Behebt das Problem beim Exportieren eines Diagramms in die Formate PDF und PNG
- Behebt die fehlerhafte Funktion der Mausereignisse
- Behebt das Problem beim Löschen untergeordneter Shapes aus dem Diagramm, das im Org-Chart-Modus initialisiert wurde
- Behebt die fehlerhafte Funktion des rechten und linken Panels in Diagram Editor
- Behebt das Problem bei der automatischen Generierung eindeutiger IDs von Shapes und Konnektoren

## Version 2.1.1 {#version-211}

Veröffentlicht am 11. Oktober 2019

### Fehlerbehebungen {#fixes-28}
- Probleme mit einer img-card im IE

## Version 2.1 {#version-21}

Veröffentlicht am 22. Mai 2017

### Neue Funktionalität {#new-functionality-9}

- Praktischer [Diagram-Editor](guides/diagram_editor/initialization.md) zum Erstellen übersichtlicher Diagramme
- Erweiterter Satz an Konfigurationsoptionen für [Shapes](shapes/configuration_properties.md) und [Linien](lines/configuration_properties.md)
- Größere Möglichkeiten zur [Anpassung von Diagrammen](guides/customization.md)

### Aktualisierungen {#updates-9}

- [Hotkeys](guides/diagram_editor/hot_keys.md) wurden zur Bearbeitung von Diagram im Editor hinzugefügt
- Neues Event [emptyAreaClick](api/diagram/emptyareaclick_event.md) wurde hinzugefügt
- Die Konfigurationsoption `lineGap` wurde hinzugefügt

## Version 2.0 {#version-20}

Veröffentlicht am 15. Februar 2017

### Breaking Changes {#breaking-changes-3}

Die API-Struktur wurde vollständig reorganisiert und verbessert, um die Arbeit damit zu vereinfachen. Folgen Sie dem Artikel [Migration](migration.md#11---20), um alle Änderungen kennenzulernen.

### Neue Funktionalität {#new-functionality-10}

- Möglichkeit, unterschiedliche Diagramme zu erstellen und zu stylen
- Vielfalt an [Shapes](shapes/default_shapes.md) und [Linien](/lines/)
- [Export in das PDF-Format](guides/data_export.md)
- [Export in das PNG-Format](guides/data_export.md)

### Aktualisierungen {#updates-10}

- Möglichkeit, [benötigte Shapes zu finden](guides/manipulating_items.md#finding-the-necessary-item)
- Möglichkeit, [Shapes nach festgelegten Kriterien zu filtern](guides/manipulating_items.md#filtering-items)
- Möglichkeit, [eine Toolbar mit Symbolen für Shapes hinzuzufügen](guides/diagram/configuration.md#setting-toolbar-for-shapes), um die Interaktion mit ihnen zu vereinfachen
- Verbesserte Leistung
- Möglichkeit, sich an einen beliebigen HTML-Container anzupassen, sowie integrierte automatische Größenanpassung

## Version 1.1 {#version-11}

Veröffentlicht am 5. Dezember 2017

### Neue Funktionalität {#new-functionality-11}

- [Verwendung des Editors im Org-Chart-Modus](api/diagram_editor/editor/config/type_property.md)
- Möglichkeit, [den Zustand zu speichern und wiederherzustellen](guides/loading_data.md#saving-and-restoring-state)
- Erweiterte [Anpassungsmöglichkeiten](guides/customization.md)

### Aktualisierungen {#updates-11}

- [Erweiterte API](api/diagram/api_overview.md): neue Methoden, Eigenschaften und Events

## Version 1.0 {#version-10}

Veröffentlicht am 29. September 2017

### Ursprüngliche Funktionalität {#initial-functionality}

- Organogramm-Modus
- Vertikale und horizontale Autoplatzierungsstrategien
- Laden von Daten aus JSON
- API zur Verwaltung von Daten und Zweigstatus
