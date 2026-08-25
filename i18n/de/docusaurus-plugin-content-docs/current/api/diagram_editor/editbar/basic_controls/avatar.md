---
sidebar_label: Avatar
title: Editbar Basis-Steuerelemente - Avatar
description: Entdecken Sie das Avatar-Steuerelement von Editbar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Suite herunter.
---

# Avatar

@short: Das grundlegende Steuerelement zum Hochladen von Bildern.

![Avatar-Steuerelement](/img/editbar-basic-controls/avatar.png)

## Verwendung {#usage}

~~~jsx
{
    type: "avatar",
    key?: string, // standardmäßig "img"
    wrap?: boolean, // standardmäßig false
    target?: string,

    hidden?: boolean, // standardmäßig false
    disabled?: boolean, // standardmäßig false
    readOnly?: boolean, // standardmäßig false

    removeIcon?: boolean, // standardmäßig true
    circle?: boolean, // standardmäßig false
    icon?: string,
    placeholder?: string,
    preview?: string,
    alt?: string,
    size?: "small" | "medium" | "large" | number, // standardmäßig "medium"

    css?: string,
    width?: string | number | "content", // standardmäßig "content"
    height?: string | number | "content", // standardmäßig "content"
    padding?: string | number,

    // bei `wrap:true` die Label-Eigenschaften für das Fieldset beachten
    label?: string,
    labelWidth?: string | number,
    labelPosition?: "left" | "top", // standardmäßig "top"

    accept?: string, // standardmäßig "image/*"
    fieldName?: string, // standardmäßig "file"
    autosend?: boolean, // standardmäßig false
    params?: { [key: string]: any },
    headerParams?: { [key: string]: any },
    updateFromResponse?: boolean,  // standardmäßig true

    // Diensteigenschaften und -methoden
    $on?: { [eventName: string]: function },
    $handler?: function,
    $setValue?: function,
    $layout?: function
~~~

## Beschreibung {#description}

### Grundlegende Eigenschaften {#basic-properties}

- `type` - (erforderlich) der Typ eines Steuerelements. Setzen Sie ihn auf `"avatar"`
- `key` - (optional) der Name der angegebenen/geänderten Eigenschaft im Objekt eines Diagram-Elements. Standardmäßig `"img"`
- `wrap` - (optional) ermöglicht die Anzeige der äußeren Umrahmung. Standardmäßig *false*
- `target` - (optional) legt eine URL zum serverseitigen Skript fest, das den Datei-Upload verarbeitet; die Eigenschaft ist erforderlich, wenn ein Bild über das Steuerelement an den Server gesendet wird
:::note
Beachten Sie beim Laden eines Bildes und dem Senden an den Server über die Eigenschaft `target`, dass das [*value*-Objekt](https://docs.dhtmlx.com/suite/form/api/avatar/api_avatar_properties/#description) an den Server gesendet wird. Die Datei selbst wird im Datensatz im *base64*-Format gespeichert. Sie können diese Logik mithilfe der [Servicemethoden](#service-properties-and-methods) neu definieren.
:::
- `hidden` - (optional) legt fest, ob ein Steuerelement ausgeblendet ist. Standardmäßig *false*
- `disabled` - (optional) legt fest, ob ein Steuerelement aktiviert (*false*) oder deaktiviert (*true*) ist. Standardmäßig *false*
- `readOnly` - (optional) legt den Nur-Lese-Modus für das Steuerelement fest. Standardmäßig *false*
- `removeIcon` - (optional) aktiviert das Leeren des Steuerelements über die Benutzeroberfläche. Standardmäßig *true*
- `circle` - (optional) legt den Anzeigemodus des Steuerelements mit abgerundeten Ecken fest. Standardmäßig *false*
- `icon` - (optional) ermöglicht das Festlegen der CSS-Klasse eines Symbols, wenn kein Bild hochgeladen wurde; funktioniert nicht zusammen mit der Eigenschaft `preview`
- `placeholder` - (optional) ermöglicht das Festlegen eines Textes, der sichtbar ist, wenn kein Bild hochgeladen wurde; funktioniert nicht zusammen mit der Eigenschaft `preview`
- `preview` - (optional) gibt den absoluten Pfad zum Vorschaubild an. Das Vorschaubild ist sichtbar, wenn kein Bild hochgeladen wurde
- `alt` - (optional) legt das Attribut des &lt;img&gt;-Tags fest - ein alternativer Text, wenn kein Bild hochgeladen wurde
- `size` - (optional) ermöglicht das Festlegen einer der drei Standardgrößen des Steuerelements: `"small"` | `"medium"` | `"large"`, oder das Anwenden einer benutzerdefinierten Größe in px. Standardmäßig `"medium"`
- `css` - (optional) fügt einem Steuerelement Stilklassen hinzu
- `width` - (optional) die Breite eines Steuerelements. Standardmäßig `"content"`
- `height` - (optional) die Höhe eines Steuerelements. Standardmäßig `"content"`
- `padding` - (optional) legt den Abstand zwischen einer Zelle und einem Rand des Avatar-Steuerelements fest
- `label` - (optional) legt eine Bezeichnung für das Steuerelement fest
- `labelWidth` - (optional) legt die Bezeichnungsbreite des Steuerelements fest
- `labelPosition` - (optional) legt die Position einer Bezeichnung fest: `"left"` | `"top"`. Standardmäßig `"top"`
- `accept` - (optional) ermöglicht die Angabe des Typs/der Erweiterung der ausgewählten Datei. Standardmäßig *"image/*"*. [Details ansehen](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/accept)
- `fieldName` - (optional) legt den Namen des Dateifelds in den an den Server gesendeten Formulardaten fest. Standardmäßig `"file"`
- `autosend` - (optional) aktiviert/deaktiviert das automatische Senden einer hinzugefügten Datei. Standardmäßig *false*
- `params` - (optional) fügt zusätzliche Parameter zum Senden eines XMLHttpRequest hinzu
- `headerParams` - (optional) stellt zusätzliche Parameter für Request-Header bereit
- `updateFromResponse` - (optional) aktualisiert Dateiattribute mit den Daten aus der Serverantwort. Standardmäßig *true*

### Diensteigenschaften und -methoden {#service-properties-and-methods}

:::warning
Beachten Sie, dass wir dringend davon abraten, die Diensteigenschaften und -methoden für die Standardtypen von Steuerelementen neu zu definieren, da dies deren Funktionalität beeinträchtigen kann.
:::

- `$on` - (optional) - ermöglicht das Festlegen eines Event-Listeners. Das Objekt verfügt über die folgenden Eigenschaften:
    - `eventName`  - eine Callback-Funktion, die mit den folgenden Parametern aufgerufen wird:
        - `object` - ein Objekt mit den folgenden Eigenschaften:
            - `control` - das [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form-Steuerelement
            - `editor` - das Objekt des Diagram Editors
            - `id` - die ID eines Diagram-Elements
        - `arguments` - (optional) - die [ursprünglichen Event-Argumente](https://docs.dhtmlx.com/suite/category/form-avatar-events/)
- `$handler` - (optional) - eine Callback-Funktion, die das Behandeln von Aktionen beim Auslösen des `change`-Events des [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form-Steuerelements und des `change`-Events von DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `id` - die ID eines Diagram-Elements
        - `key` - der Name der angegebenen/geänderten Eigenschaft im Objekt eines Diagram-Elements
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der neue Wert des [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form-Steuerelements
- `$setValue` - (optional) - eine Callback-Funktion, die das Festlegen des Werts des [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form-Steuerelements bei der Initialisierung eines Steuerelements und bei der Änderung des Werts in DataCollection ermöglicht. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - ein Objekt mit den folgenden Eigenschaften:
        - `editor` - das Objekt des Diagram Editors
        - `control` - das Objekt des [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form-Steuerelements, auf dem die Komponente basiert
        - `value` - der Wert eines Diagram-Elements
- `$layout` - (optional) - eine Callback-Funktion, die das Festlegen der Struktur eines Steuerelements ermöglicht. Gibt die Konfiguration des [Avatar](https://docs.dhtmlx.com/suite/form/avatar/) Form-Steuerelements zurück. Wird mit dem folgenden Parameter aufgerufen:
    - `object` - die Konfiguration des Steuerelements ohne Diensteigenschaften

## Beispiel {#example}

~~~jsx {7-19}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                "img-card": [
                    {
                        type: "avatar",
                        accept: "image/*",
                        fieldName: "file",
                        target: "https://docs.dhtmlx.com/suite/backend/upload",
                        params: {
                            "firstCustomParam": "customValue"
                        },
                        headerParams: {
                            "firstCustomParam": "customValue"
                        },
                        autosend: true
                    }
                ]
            }
        }
    }
});
~~~
