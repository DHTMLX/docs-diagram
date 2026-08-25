---
sidebar_label: Select
title: Editbar Grundlegende Steuerelemente - Select
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek können Sie das Select-Steuerelement der Editbar erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Select

@short: Das grundlegende Steuerelement, das eine erweiterte Auswahlbox mit einer Reihe von Optionen zur Auswahl darstellt.

![Select control](/img/editbar-basic-controls/select.png)

## Verwendung {#usage}

~~~jsx
{
    type: "select",
    options: (object | string)[],
    key?: string | string[],
    wrap?: boolean, // standardmäßig false

    css?: string,
    disabled?: boolean, // standardmäßig false
    hidden?: boolean, // standardmäßig false
    height?: string | number | "content", // standardmäßig "content"
    width?: string | number | "content", // standardmäßig "content"
    padding?: string | number,
    icon?: string,

    // Prüfen Sie bei `wrap:true` die Label-Eigenschaften für Fieldset
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // standardmäßig "top"

    // Dienst-Eigenschaften und -Methoden
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

Konfigurationsobjekt einer Option innerhalb von Select:

~~~jsx
{
    value: string | number,
    content: string,
    disabled?: boolean
}
~~~

## Beschreibung {#description}

### Select-Eigenschaften {#select-properties}

#### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Legen Sie ihn auf `"select"` fest
- `options` - (erforderlich) ein Array von Select-Optionen; jede Option kann als *string* oder als *object* mit einer Reihe von `key:value`-Paaren festgelegt werden - [Attribute der Optionen und deren Werte](#option-properties)
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `wrap` - (optional) ermöglicht die Anzeige der äußeren Umhüllung. Standardmäßig *false*
- `css` - (optional) fügt dem Steuerelement Stilklassen hinzu
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (boolean) legt fest, ob ein Select ausgeblendet ist. Standardmäßig *false*
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines Select-Steuerelements fest
- `icon` - (optional) die CSS-Klasse eines [Icons](https://docs.dhtmlx.com/suite/helpers/icon/) aus der verwendeten Icon-Schriftart
- `label` - (optional) legt ein Label für das Steuerelement fest
- `labelWidth` - (optional) legt die Label-Breite des Steuerelements fest
- `labelPosition` - (optional) legt die Position eines Labels fest: `"left"` | `"top"`. Standardmäßig `"top"`

#### Dienst-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend empfehlen, die Dienst-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen nicht neu zu definieren, da dies deren Funktionalität beeinträchtigen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt verfügt über die folgenden Eigenschaften:
    - `eventName` - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [Select](https://docs.dhtmlx.com/suite/form/select/) Form-Steuerelement
            - `editor` - das Objekt des Diagram Editors
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-select-events/)
- `$handler` - (optional) - eine Callback-Funktion, die das Behandeln von Aktionen beim Auslösen des Events `change` des [Select](https://docs.dhtmlx.com/suite/form/select/) Form-Steuerelements sowie des Events `change` von DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Select](https://docs.dhtmlx.com/suite/form/select/) Form-Steuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der neue Wert des [Select](https://docs.dhtmlx.com/suite/form/select/) Form-Steuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Festlegen des Werts des [Select](https://docs.dhtmlx.com/suite/form/select/) Form-Steuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Select](https://docs.dhtmlx.com/suite/form/select/) Form-Steuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Select](https://docs.dhtmlx.com/suite/form/select/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Dienst-Eigenschaften

### Options-Eigenschaften {#option-properties}

- `value` - (erforderlich) legt den Wert für die Select-Option fest
- `content` - (erforderlich) der Inhalt, der in der Select-Option angezeigt wird
- `disabled` - (optional) legt fest, ob die Option aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*

## Beispiel {#example}

~~~jsx {7-20}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "select",
                        label: "Position",
                        key: "position",
                        wrap: true,
                        options: [
                            "",
                            "Technical Director",
                            "Manager",
                            "QA Lead",
                            { value: 4, content: "Team Lead", disabled: true },
                            { value: 5, content: "Programmer" }
                        ]
                    }
                ]
            }
        }
    }
});
~~~
