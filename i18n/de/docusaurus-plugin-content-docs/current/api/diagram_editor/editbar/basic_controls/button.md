---
sidebar_label: Button
title: Editbar Basis-Steuerelemente - Button
description: Entdecken Sie das Button-Steuerelement von Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Button

@short: Das grundlegende Button-Steuerelement, das ein Symbol haben kann.

![Button-Steuerelement](/img/editbar-basic-controls/button.png)

## Verwendung {#usage}

~~~jsx
{
    type: "button",
    text?: string,

    css?: string,
    disabled?: boolean, // standardmäßig false
    hidden?: boolean, // standardmäßig false
    height?: string | number | "content", // standardmäßig "content"
    width?: string | number | "content", // standardmäßig "content"
    padding?: string | number,

    // Button-Ansicht
    circle?: boolean, // standardmäßig false
    color?: "danger" | "secondary" | "primary" | "success", // standardmäßig "primary"
    full?: boolean, // standardmäßig false
    icon?: string,
    size?: "small" | "medium", // standardmäßig "medium"
    view?: "flat" | "link", // standardmäßig "flat"

    // Diensteigenschaften und -methoden
    $on?: { [eventName: string]: function },
    $layout?: function
}
~~~

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"button"`
- `text` - (optional) die Textbeschriftung eines Buttons
- `css` - (optional) fügt einem Steuerelement Stilklassen hinzu
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (optional) legt fest, ob ein Steuerelement ausgeblendet ist. Standardmäßig *false*
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und einem Rand eines Button-Steuerelements fest
- `circle` - (optional) rundet die Ecken eines Buttons ab. Standardmäßig *false*
- `color` - (optional) legt das Farbschema eines Buttons fest: `"danger"` | `"secondary"` | `"primary"` | `"success"`. Standardmäßig `"primary"`
- `full` - (optional) erweitert einen Button auf die volle Breite der Editbar. Standardmäßig *false*
- `icon` - (optional) legt die CSS-Klasse eines Symbols fest, das innerhalb des Buttons angezeigt wird
- `size` - (optional) legt die Größe eines Buttons fest: `"small"` | `"medium"`. Standardmäßig `"medium"`
- `view` - (optional) legt das Erscheinungsbild eines Buttons fest: `"flat"` | `"link"`. Standardmäßig `"flat"`

### Diensteigenschaften und -methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend davon abraten, die Diensteigenschaften und -methoden für die Standardtypen von Steuerelementen neu zu definieren, da dies deren Funktionalität beeinträchtigen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt verfügt über die folgenden Eigenschaften:
    - `eventName`  - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [Button](https://docs.dhtmlx.com/suite/form/button/) Form-Steuerelement
            - `editor` - das Objekt des Diagram Editors
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-button-events/)
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Button](https://docs.dhtmlx.com/suite/form/button/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Diensteigenschaften

## Beispiel {#example}

~~~jsx {8-20}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    { type: "input", label: "Text", placeholder: "Push the button", key: "text" },
                    {
                        type: "button",
                        full: true,
                        text: "Change shape text",
                        color: "danger",
                        $on: {
                            click: ({ id, editor }) => {
                                editor.diagram.data.update(id, {
                                    text: "New text"
                                });
                            }
                        }
                    }
                ]
            }
        }
    }
});
~~~
