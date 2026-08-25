---
sidebar_label: addShape()
title: addShape-Methode
description: Erfahren Sie mehr über die addShape-Methode in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# addShape()

### Beschreibung {#description}

@short: Erstellt eine benutzerdefinierte Form

Die Methode `addShape()` kann sowohl im Diagramm als auch im Editor verwendet werden. [Sehen Sie sich die Beispiele unten an](#example)

### Verwendung {#usage}

~~~jsx
addShape(
    type: string,
    parameters: object
): void;
~~~

### Parameter {#parameters}

- `type` - (erforderlich) der eindeutige Name für den Typ einer benutzerdefinierten Form. Der Name muss sich von den Namen der Standardformen unterscheiden
- `parameters` - (erforderlich) ein Objekt mit den zusätzlichen Parametern der Methode `addShape()`. Hier können Sie die folgenden Attribute angeben:
    - `template: function` - (erforderlich) die Funktion, die das Konfigurationsobjekt der Form als Parameter erhält und entweder eine HTML- oder SVG-Vorlage zurückgibt
    - [`defaults: object`](shapes/custom_shape.md) - (optional) die Standardkonfiguration für eine erstellte Form. Siehe [die vollständige Liste der Konfigurationseigenschaften einer Form](shapes/configuration_properties.md)
    - [`eventHandlers: object`](shapes/custom_shape.md#event-handlers-for-custom-shapes) - (optional) fügt HTML-Elementen der Vorlage einer Form benutzerdefinierte Event-Handler hinzu. Das Objekt `eventHandlers` enthält eine Reihe von `key:value`-Paaren, wobei:
        - `key: string` - der Name des Events. Beachten Sie, dass das Präfix „on“ am Anfang des Event-Namens verwendet wird (onclick, onmouseover)
        - `value: object` - ein Objekt, das ein `key:value`-Paar enthält, wobei
          - `key` der Name der CSS-Klasse ist, auf die der Handler angewendet wird
          - `value` eine Funktion ist, die zwei Parameter erhält:
            - `event: object` - (erforderlich) ein Event-Objekt
            - `shape: object` - (erforderlich) das Objekt der Form

        :::tip
        Wir empfehlen, beim Initialisieren benutzerdefinierter Event-Handler für unterschiedliche benutzerdefinierte Formen jeweils unterschiedliche CSS-Klassen zu verwenden.
        :::

### Beispiel {#example}

~~~jsx {8-37} title="Hinzufügen einer Form zum Diagramm"
const diagram = new dhx.Diagram("diagram_container", {
    type: "org", //  or type: "default", or type: "mindmap"
    defaultShapeType: "personal",
});

diagram.data.parse(data);

diagram.addShape("personal", {
    template: ({ name, photo, post }) => (`
        <div class="dhx_diagram_template_a_box dhx_diagram_template_a">
            <div class="dhx_diagram_template_a__inside">
                <div class="dhx_diagram_template_a__picture" style="background-image: url(${photo});"></div>
                <div class="dhx_diagram_template_a__body">
                    <div class="dhx_diagram_template_a__title">${name}</div>
                    <div class="dhx_diagram_template_a__row">
                        <span class="dhx_diagram_template_a__text">${post}</span>
                    </div>
                </div>
                <div class="toggle--open-menu">
                    <span class="dhx_diagram_template_a__icon mdi mdi-dots-vertical"></span>
                </div>
            </div>
        </div>
    `),
    defaults: {
        height: 115, width: 330,
        name: "Name and First name",
        post: "Resident",
        photo: "",
    },
    eventHandlers: {
        onclick: {
            "toggle--open-menu": () => console.log("open menu")
        }
    }
});
~~~

**Verwandtes Beispiel**: [Diagram mit Editor. Org-Chart-Modus. Anpassung von Karten, Editbar und Toolbar](https://snippet.dhtmlx.com/vcnt647v)

Das folgende Beispiel zeigt, wie Sie eine benutzerdefinierte Form in den Diagram Editor einfügen und die Panels [Shapebar](guides/diagram_editor/shapebar.md) und [Editbar](guides/diagram_editor/editbar.md) des Editors konfigurieren können. Die Konfiguration einer benutzerdefinierten Form in der Editbar des Editors erfolgt über die Eigenschaft [`properties`](api/diagram_editor/editbar/config/properties_property.md) des Editbar-Panels.

~~~jsx {34-49} title="Hinzufügen einer Form zum Diagram Editor"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Network shapes": [
                    { type: "network", text: "Core", img: src + "core.svg" },
                    { type: "network", text: "Server", img: src + "server.svg" }
                ],
                "Flow shapes": [{ flowShapes: true }]
            }
        },
        editbar: {
            properties: {
                network: [
                    { type: "arrange" },
                    {
                        type: "fieldset",
                        label: "Network information",
                        rows: [
                            { type: "avatar", key: "img", circle: true, readOnly: true },
                            { type: "textarea", key: "text", label: "Description" },
                            { type: "input", key: "ip", label: "IP" }
                        ]
                    }
                ]
            }
        }
    }
});

editor.parse(data);

editor.diagram.addShape("network", {
    template: ({ img, text, ip }) => {
        return `
            <section class="dhx_diagram_template_d">
                <img class="dhx_diagram_template_d__image" src="${img}" alt="${text}"></img>
                <span class="dhx_diagram_template_d__title">${text}</span>
                <span class="dhx_diagram_template_d__text">${ip}</span>
            </section>
        `;
    },
    defaults: {
        width: 160, height: 160,
        preview: { scale: 0.7 },
        ip: "127.0.0.1"
    }
});
~~~

**Changelog**: Das Attribut `properties` wurde in v6.0 entfernt.

**Verwandter Artikel**: [Benutzerdefinierte Form](shapes/custom_shape.md)

**Verwandte Beispiele**:

- [Diagram. Mindmap-Modus. Sitemap- und Benutzerablauf-Beispiel (benutzerdefinierte Vorlage)](https://snippet.dhtmlx.com/do1jwmw1)
- [Diagram mit Editor. Org-Chart-Modus. Anpassung von Karten, Editbar und Toolbar](https://snippet.dhtmlx.com/vcnt647v)
- **Verwandtes Beispiel**: [Diagram Editor. Standardmodus. Basis- und benutzerdefinierte Themes](https://snippet.dhtmlx.com/9twmlfus)
