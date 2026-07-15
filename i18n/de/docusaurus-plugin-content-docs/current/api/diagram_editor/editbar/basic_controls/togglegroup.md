---
sidebar_label: ToggleGroup
title: Editbar-Basissteuerelemente - ToggleGroup
description: Das ToggleGroup-Steuerelement der Editbar können Sie in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus, und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

# ToggleGroup

@short: Das Basissteuerelement zum Erstellen von Gruppen aus Toggle-Schaltflächen.

![ToggleGroup control](/img/editbar-basic-controls/togglegroup.png)

## Verwendung {#usage}

~~~jsx
{
    type: "toggleGroup",
    options: object[],
    key?: string | string[],

    full?: boolean, // Standardmäßig false
    gap?: number, // Standardmäßig 0
    hidden?: boolean, // Standardmäßig false
    disabled?: boolean, // Standardmäßig false

    css?: string,
    width?: string | number | "content", // Standardmäßig "content"
    height?: string | number | "content", // Standardmäßig "content"
    padding?: string | number,

    // Service-Eigenschaften und -Methoden
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
}
~~~

Toggle-Konfigurationsobjekt innerhalb von ToggleGroup:

~~~jsx
{
    id?: string,
    hidden?: boolean,
    disabled?: boolean,
    full?: boolean,
    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number
}
~~~

Die Objekte mit der `toggle`-Konfiguration innerhalb des Steuerelements können sowohl mit dem *boolean*-Wert als auch mit dem *string*-Wert verwendet werden, sofern die Eigenschaft `value` angegeben ist. Die Eigenschaft `value` wird benötigt, um den festgelegten Wert als Wert der angewendeten Eigenschaft zuzuweisen. [Sehen Sie sich das Beispiel unten an](#example), um die Vorgehensweise zu verstehen.

## Beschreibung {#description}

### ToggleGroup-Eigenschaften {#togglegroup-properties}

#### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"toggleGroup"`
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `options` - (erforderlich) ein Array von ToggleGroup-Optionen; jede Option wird als *object* mit einer Reihe von `key:value`-Paaren angegeben - [Attribute der Optionen und ihre Werte](#toggle-properties)
- `hidden` - (optional) legt fest, ob eine ToggleGroup ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `full` - (optional) legt fest, ob die ToggleGroup auf die durch die Eigenschaft `width` angegebene Breite erweitert wird. Standardmäßig *false*
- `gap` - (optional) legt einen Abstand zwischen den Elementen (Schaltflächen) einer Option fest. Standardmäßig *0*
- `css` - (optional) fügt einem Steuerelement Stilklassen hinzu
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Innenabstand zwischen einer Zelle und einem Rand des ToggleGroup-Steuerelements fest

#### Service-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend empfehlen, die Service-Eigenschaften und -Methoden der Standardtypen von Steuerelementen nicht neu zu definieren, da dies ihre Funktionalität beeinträchtigen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt verfügt über die folgenden Eigenschaften:
    - `eventName`  - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/)-Form-Steuerelement
            - `editor` - das Objekt des Diagram Editor
            - `id` - die id eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-togglegroup-events/)
- `$handler` - (optional) - eine Callback-Funktion, die es ermöglicht, Aktionen beim Auslösen des `change`-Events des [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/)-Form-Steuerelements und des `change`-Events der DataCollection zu behandeln. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die id eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt des Diagram Editor
        - `control` - das Objekt des [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/)-Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der neue Wert des [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/)-Form-Steuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die es ermöglicht, den Wert des [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/)-Form-Steuerelements bei der Initialisierung eines Steuerelements und beim Ändern des Werts in der DataCollection festzulegen. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt des Diagram Editor
        - `control` - das Objekt des [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/)-Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die es ermöglicht, die Struktur eines Steuerelements festzulegen. Gibt die Konfiguration des [ToggleGroup](https://docs.dhtmlx.com/suite/form/togglegroup/)-Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Service-Eigenschaften

### Toggle-Eigenschaften {#toggle-properties}

- `id` - (optional) die id eines Steuerelements, wird automatisch generiert, wenn sie nicht festgelegt ist
- `hidden` - (optional) legt fest, ob eine Option ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob eine Option aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `full` - (optional) legt fest, ob die Option auf die durch die Eigenschaft `width` angegebene Breite erweitert wird. Standardmäßig *false*
- `text` - (optional) legt den Text innerhalb der Option fest. Wird sie zusammen mit der Eigenschaft `offText` initialisiert, wird der angegebene Text im ausgewählten (gedrückten) Zustand angezeigt
- `icon` - (optional) legt die CSS-Klasse eines Icons fest, das innerhalb der Option angezeigt wird. Wird sie zusammen mit der Eigenschaft `offIcon` initialisiert, werden die angegebenen CSS-Klassen der Icons im ausgewählten (gedrückten) Zustand der Option angezeigt
- `offText` - (optional) legt den Text fest, der im nicht ausgewählten (nicht gedrückten) Zustand der Option angezeigt wird
- `offIcon` - (optional) legt die CSS-Klasse eines Icons fest, das im nicht ausgewählten (nicht gedrückten) Zustand der Option angezeigt wird
- `value` - (optional) legt den Wert im ausgewählten (gedrückten) Zustand fest. Ist er nicht definiert, wird die Option mit dem *boolean*-Wert verwendet

## Beispiel {#example}

~~~jsx {7-28}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggleGroup",
                        key: "textAlign",
                        gap: 4,
                        $on: {
                            beforeChange: (spec, values) => !Object.values(values).every(i => !i),
                        },
                        options: [
                            {
                                icon: "dxi dxi-format-align-left",
                                value: "left"
                            },
                            {
                                icon: "dxi dxi-format-align-center",
                                value: "center"
                            },
                            {
                                icon: "dxi dxi-format-align-right",
                                value: "right"
                            }
                        ]
                    }
                ]
            }
        }
    }
});
~~~
