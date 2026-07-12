---
sidebar_label: Colorpicker
title: Editbar-Basissteuerelemente - Colorpicker
description: Sie können das Colorpicker-Steuerelement von Editbar in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erkunden. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion der DHTMLX Suite herunter.
---

# Colorpicker

@short: Das grundlegende Steuerelement zur Auswahl einer Farbe.

![Colorpicker-Steuerelement](/img/editbar-basic-controls/colorpicker.png)

## Verwendung {#usage}

~~~jsx
{
    type: "colorpicker",
    key?: string | string[],
    wrap?: boolean, // Standardmäßig false

    css?: string,
    disabled?: boolean, // Standardmäßig false
    hidden?: boolean, // Standardmäßig false
    height?: string | number | "content", // Standardmäßig "content"
    width?: string | number | "content", // Standardmäßig "content"
    padding?: string | number,

    customColors?: string[],
    grayShades?: boolean, // Standardmäßig true
    icon?: string,
    mode?: "palette" | "picker", // Standardmäßig "palette"
    palette?: string[][],
    paletteOnly?: boolean, // Standardmäßig false
    pickerOnly?: boolean, // Standardmäßig false
    placeholder?: string,

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

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"colorpicker"`
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
- `wrap` - (optional) ermöglicht die Anzeige der externen Umrahmung. Standardmäßig *false*
- `css` - (optional) fügt einem Steuerelement Stilklassen hinzu
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `hidden` - (optional) legt fest, ob ein Steuerelement ausgeblendet ist. Standardmäßig *false*
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und dem Rand eines Colorpicker-Steuerelements fest
- `customColors` - (optional) zeigt einen Bereich mit benutzerdefinierten Farben im unteren Teil des Colorpickers an
- `grayShades` - (optional) legt fest, ob der Bereich mit Grautönen in der Palette angezeigt wird. Standardmäßig *true*
- `icon` - (optional) die CSS-Klasse eines Symbols aus der verwendeten Icon-Schriftart
- `mode` - (optional) der Modus eines Steuerelements: `"palette"` | `"picker"`. Standardmäßig `"palette"`
- `palette` - (optional) enthält Arrays von Farben, die in einem Colorpicker angezeigt werden sollen
- `paletteOnly` - (optional) legt fest, ob der Colorpicker nur im Paletten-Modus angezeigt wird. Standardmäßig *false*
- `pickerOnly` - (optional) legt fest, ob der Colorpicker nur im Picker-Modus angezeigt wird. Standardmäßig *false*
- `placeholder` - (optional) ein Hinweis für die Eingabe
- `label` - (optional) legt ein Label für ein Steuerelement fest
- `labelPosition` - (optional) legt die Position eines Labels fest: `"left"` | `"top"`. Standardmäßig `"top"`
- `labelWidth` - (optional) legt die Breite des Labels eines Steuerelements fest

### Service-Eigenschaften und -Methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend empfehlen, die Service-Eigenschaften und -Methoden für die Standardtypen von Steuerelementen nicht neu zu definieren, da dies zu Fehlfunktionen führen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt hat die folgenden Eigenschaften:
    - `eventName` - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form-Steuerelement
            - `editor` - das Objekt des Diagram Editors
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-colorpicker-events/)
- `$handler` - (optional) - eine Callback-Funktion, die das Behandeln von Aktionen beim Auslösen der Events `change` und `input` des [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form-Steuerelements und des `change`-Events von DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft oder der Pfad zu ihr im Objekt eines Diagram-Elements
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der neue Wert des [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form-Steuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Setzen des Werts des [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form-Steuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Colorpicker](https://docs.dhtmlx.com/suite/form/colorpicker/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration eines Steuerelements ohne Service-Eigenschaften

## Beispiel {#example}

~~~jsx {7-25}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "colorpicker",
                        wrap: true,
                        label: "Fill",
                        placeholder: "Select color",
                        grayShades: false,
                        palette: [
                            ["#69d2e7", "#a7dbd8", "#e0e4cc", "#f38630", "#fa6900", "#7fc7af", "#dad8a7"],
                            ["#fe4365", "#fc9d9a", "#f9cdad", "#c8c8a9", "#83af9b", "#948c75", "#d5ded9"],
                            ["#ecd078", "#d95b43", "#c02942", "#542437", "#53777a", "#cbe86b", "#f2e9e1"],
                            ["#556270", "#4ecdc4", "#c7f464", "#ff6b6b", "#c44d58", "#dce9be", "#555152"],
                            ["#774f38", "#e08e79", "#f1d4af", "#ece5ce", "#c5e0dc", "#005f6b", "#008c9e"],
                            ["#e8ddcb", "#cdb380", "#036564", "#033649", "#031634", "#73626e", "#b38184"],
                            ["#490a3d", "#bd1550", "#e97f02", "#f8ca00", "#8a9b0f", "#fc913a", "#f9d423"],
                            ["#594f4f", "#547980", "#45ada8", "#9de0ad", "#e5fcc2", "#fecea8", "#ff847c"],
                            ["#00a0b0", "#6a4a3c", "#cc333f", "#eb6841", "#edc951", "#80bca3", "#f6f7bd"],
                            ["#e94e77", "#d68189", "#c6a49a", "#c6e5d9", "#f4ead5", "#40c0cb", "#f9f2e7"]
                        ]
                    }
                ]
            }
        }
    }
});
~~~
