---
sidebar_label: Combo
title: Editbar-Basissteuerelemente - Combo
description: Sie können das Combo-Steuerelement von Editbar in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

# Combo

@short: Das grundlegende Eingabesteuerelement, das ein erweitertes editierbares Auswahlfeld mit einer Reihe von Optionen darstellt.

![Combo-Steuerelement](/img/editbar-basic-controls/combo.png)

## Verwendung {#usage}

~~~jsx
{
    type: "combo",
    options: (object | string)[],
    key?: string | string[],
    wrap?: boolean, // Standardmäßig false

    css?: string,
    disabled?: boolean, // Standardmäßig false
    hidden?: boolean, // Standardmäßig false
    height?: string | number | "content", // Standardmäßig "content"
    width?: string | number | "content", // Standardmäßig "content"
    padding?: string | number,

    filter?: (item: any, input: string) => boolean,
    eventHandlers?: {
        [eventName: string]: {
            [className: string]: (event: Event, id: string | number) => void | boolean;
        };
    },
    itemHeight?: number | string, // Standardmäßig 32
    itemsCount?: boolean | ((count: number) => string),
    listHeight?: number | string, // Standardmäßig 224
    multiselection?: boolean, // Standardmäßig false
    placeholder?: string,
    readOnly?: boolean, // Standardmäßig false
    selectAllButton?: boolean, // Standardmäßig false
    template?: (item: object) => string,
    virtual?: boolean, // Standardmäßig false

    // Prüfen Sie bei `wrap:true` die Label-Eigenschaften für Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // Standardmäßig "top"

    // Service-Eigenschaften und -Methoden
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

Konfigurationsobjekt einer Option innerhalb von Combo:

~~~jsx
{
    id: string | number,
    value: string | number
}
~~~

## Beschreibung {#description}

### Combo-Eigenschaften {#combo-properties}

#### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"combo"`
- `options` - (erforderlich) ein Array von Combo-Optionen. Jede Option kann als *String* oder als *Objekt* mit einer Reihe von `key:value`-Paaren angegeben werden - [Attribute der Optionen und ihre Werte](#option-properties)
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `wrap` - (optional) ermöglicht die Anzeige der externen Umrahmung. Standardmäßig *false*
- `css` - (optional) fügt einem Steuerelement Stilklassen hinzu
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (optional) legt fest, ob eine Combo ausgeblendet ist. Standardmäßig *false*
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines Combo-Steuerelements fest
- `filter` - (optional) legt eine benutzerdefinierte Funktion zum Filtern der Combo-Optionen fest. [Details ansehen](https://docs.dhtmlx.com/suite/combobox/customization/#custom-filter-for-options)
- `eventHandlers` - (optional) fügt Event-Handler zu HTML-Elementen einer benutzerdefinierten Vorlage der Combo-Elemente hinzu. [Details ansehen](https://docs.dhtmlx.com/suite/combobox/api/combobox_eventhandlers_config/)
- `itemHeight` - (optional) legt die Höhe einer Zelle in der Liste der Optionen fest. Standardmäßig *32*
- `itemsCount` - (optional) zeigt die Gesamtzahl der ausgewählten Optionen an
- `listHeight` - (optional) legt die Höhe der Liste der Optionen fest. Standardmäßig *224*
- `multiselection` - (optional) aktiviert die Auswahl mehrerer Optionen in Combo. Standardmäßig *false*
- `placeholder` - (optional) legt einen Platzhalter in der Eingabe von Combo fest
- `readOnly` - (optional) macht Combo schreibgeschützt (es ist nur möglich, Optionen aus der Liste auszuwählen, ohne Wörter in die Eingabe einzugeben). Standardmäßig *false*
- `selectAllButton` - (optional) legt fest, ob die Schaltfläche "Alle auswählen" angezeigt wird. Standardmäßig *false*
- `template` - (optional) legt eine Vorlage für die Anzeige der Optionen in der Popup-Liste fest
- `virtual` - (optional) aktiviert das dynamische Laden von Daten beim Scrollen der Liste der Optionen. Standardmäßig *false*
- `label` - (optional) legt ein Label für ein Steuerelement fest
- `labelPosition` - (optional) legt die Position eines Labels fest: `"left"` | `"top"`. Standardmäßig `"top"`
- `labelWidth` - (optional) legt die Breite des Labels eines Steuerelements fest

#### Service-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend empfehlen, die Service-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen nicht neu zu definieren, da dies zu Fehlfunktionen führen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt hat die folgenden Eigenschaften:
    - `eventName` - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form-Steuerelement
            - `editor` - das Objekt des Diagram Editors
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-combo-events/)
- `$handler` - (optional) - eine Callback-Funktion, die das Behandeln von Aktionen beim Auslösen des `change`-Events des [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form-Steuerelements und des `change`-Events von DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der neue Wert des [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form-Steuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Setzen des Werts des [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form-Steuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Combo](https://docs.dhtmlx.com/suite/form/combo/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Service-Eigenschaften

### Optionseigenschaften {#option-properties}

- `id` - das Attribut `id` wird zurückgegeben und in die Formulardaten übernommen. Dieses Attribut sollte immer ausgefüllt werden, um unerwartetes Verhalten zu vermeiden
- `value` - das Attribut `value` wird im Eingabefeld angezeigt

## Beispiel {#example}

~~~jsx {7-13}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": undefined },
    { "id": "shape_3", "parent": "shape_1", "responsible": "Henry Bennet" }
]);
~~~

~~~jsx {7-14} title="Mit aktivierter Mehrfachauswahl"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        multiselection: true,
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", "Greg Mash"]
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": [] },
    { "id": "shape_3", "parent": "shape_1", "responsible": ["Henry Bennet", "Mike Frebel"] }
]);
~~~

~~~jsx {7-14} title="Festlegen von Optionen als Objekte"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "combo",
                        key: "responsible",
                        multiselection: true,
                        label: "Responsible",
                        placeholder: "Select responsible",
                        options: ["Henry Bennet", "Mike Frebel", { id: 1, value: "Greg Mash" }]
                    }
                ]
            }
        }
    }
});
editor.parse([
    { "id": "shape_1" },
    { "id": "shape_2", "parent": "shape_1", "responsible": [] },
    { "id": "shape_3", "parent": "shape_1", "responsible": ["Mike Frebel", 1] }
]);
~~~
