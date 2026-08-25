---
sidebar_label: Toggle
title: Editbar Basissteuerelemente - Toggle
description: Entdecken Sie das Toggle-Steuerelement der Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Toggle

@short: Das Basissteuerelement, das eine spezielle Schaltfläche darstellt, die beim Klicken ihren Zustand von gedrückt zu nicht gedrückt ändern kann.

![Toggle-Steuerelement](/img/editbar-basic-controls/toggle.png)

## Verwendung {#usage}

~~~jsx
{
    type: "toggle",
    key?: string | string[],

    hidden?: boolean, // Standardmäßig false
    disabled?: boolean, // Standardmäßig false
    full?: boolean, // Standardmäßig false

    text?: string,
    icon?: string,
    offText?: string,
    offIcon?: string,
    value?: string | number,

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

Das Steuerelement kann sowohl mit dem *boolean*-Wert als auch mit dem *string*-Wert verwendet werden, wenn die Eigenschaft `value` angegeben ist. Die Eigenschaft `value` wird benötigt, um den festgelegten Wert als Wert der angewendeten Eigenschaft zuzuweisen. [Sehen Sie sich das Beispiel unten an](#example), um die Idee zu verstehen.

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"toggle"`
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `hidden` - (optional) legt fest, ob ein Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `full` - (optional) legt fest, ob der Toggle auf die durch die Eigenschaft `width` festgelegte Breite erweitert wird. Standardmäßig *false*
- `text` - (optional) legt den Text innerhalb des Toggles fest. Wenn zusammen mit der Eigenschaft `offText` initialisiert, wird der angegebene Text im ausgewählten (gedrückten) Zustand angezeigt
- `offText` - (optional) legt den Text fest, der im nicht ausgewählten (nicht gedrückten) Zustand des Toggles angezeigt wird
- `icon` - (optional) legt die CSS-Klasse eines Icons fest, das innerhalb des Toggles angezeigt wird. Wenn zusammen mit der Eigenschaft `offIcon` initialisiert, werden die angegebenen CSS-Klassen der Icons im ausgewählten (gedrückten) Zustand des Toggles angezeigt
- `offIcon` - (optional) legt die CSS-Klasse eines Icons fest, das im nicht ausgewählten (nicht gedrückten) Zustand des Toggles angezeigt wird
- `value` - (optional) legt den Wert im ausgewählten (gedrückten) Zustand fest. Wenn nicht definiert, wird das Steuerelement mit dem *boolean*-Wert verwendet
- `css` - (optional) fügt einem Steuerelement Style-Klassen hinzu
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand des Toggle-Steuerelements fest

### Service-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend davon abraten, die Service-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen neu zu definieren, da dies zu Fehlfunktionen führen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt hat die folgenden Eigenschaften:
    - `eventName`  - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [Toggle](https://docs.dhtmlx.com/suite/form/toggle/)-Formularsteuerelement
            - `editor` - das Objekt von Diagram Editor
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-toggle-events/)
- `$handler` - (optional) - eine Callback-Funktion, die die Behandlung von Aktionen beim Auslösen des `change`-Events des [Toggle](https://docs.dhtmlx.com/suite/form/toggle/)-Formularsteuerelements und des `change`-Events der DataCollection ermöglicht. Wird mit folgendem Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt von Diagram Editor
        - `control` - das Objekt des [Toggle](https://docs.dhtmlx.com/suite/form/toggle/)-Formularsteuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der neue Wert des [Toggle](https://docs.dhtmlx.com/suite/form/toggle/)-Formularsteuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Festlegen des Werts des [Toggle](https://docs.dhtmlx.com/suite/form/toggle/)-Formularsteuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in der DataCollection ermöglicht. Wird mit folgendem Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt von Diagram Editor
        - `control` - das Objekt des [Toggle](https://docs.dhtmlx.com/suite/form/toggle/)-Formularsteuerelements, auf dem die Komponente aufgebaut ist
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Toggle](https://docs.dhtmlx.com/suite/form/toggle/)-Formularsteuerelements zurück. Wird mit folgendem Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Service-Eigenschaften

## Beispiel {#example}

~~~jsx {7-14} title="Anwenden des booleschen Werts für einen Toggle"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "toggle",
                        key: ["header", "enable"],
                        icon: "dxi dxi-eye",
                        offIcon: "dxi dxi-eye-off",
                        text: "Visible",
                        offText: "Invisible"
                    }
                ]
            }
        }
    }
});
~~~

~~~jsx {7-12} title="Zuweisen des festgelegten Werts als Wert der angewendeten Eigenschaft"
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
     view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "toggle",
                        key: "fontStyle",
                        value: "italic",
                        icon: "dxi dxi-format-italic"
                    }
                ]
            }
        }
    }
});
~~~
