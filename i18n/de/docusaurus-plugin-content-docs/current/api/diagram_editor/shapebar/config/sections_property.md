---
sidebar_label: sections
title: sections-Eigenschaft von Shapebar
description: Sie können mehr über die sections-Eigenschaft von Shapebar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# sections

Die [Standardabschnitte der Shapebar](guides/diagram_editor/shapebar.md#default-sections) sind: *Shapes*, *Groups*, *Swimlanes*.

Mit der Eigenschaft `sections` können Sie die Struktur der Shapebar ändern und die gewünschten Elemente anzeigen.

### Beschreibung {#description}

@short: Optional. Ein Objekt, das Abschnitte von Elementen festlegt, die in der Shapebar des Editors angezeigt werden

### Verwendung {#usage}

~~~jsx
sections?: {
    [name: string]: (obj | string)[]
};
~~~

### Parameter {#parameters}

Das Objekt `sections` kann eine Reihe von *Schlüssel:Wert*-Paaren enthalten, wobei:
- `key` - der von einem Nutzer angegebene Name eines Abschnitts
- `value` - ein Array, das Folgendes enthalten kann:
  - ein Objekt mit einem *Schlüssel:Wert*-Paar zum Rendern einer <span id="basic">grundlegenden Auswahl an Shapes</span>. Die Liste der verfügbaren Paare finden Sie unten:
    - `{flowShapes: true}` - (optional) zeigt alle verfügbaren Typen der [Flow-chart](shapes/default_shapes.md#shapes-in-the-default-mode)-Shapes an
    - `{org: true}` - (optional) zeigt Org shapes an: die Shape-Typen `"card"` und `"img-card"`
    - `{group: true}` - (optional) zeigt eine grundlegende Auswahl an Groups an
    - `{swimlane: true}` - (optional) zeigt eine grundlegende Auswahl an Swimlanes an
  - ein String-Wert mit einem bestimmten Typ des im Abschnitt zu rendernden Elements (zum Beispiel `"text"`, `"topic"` usw.)
  - ein Objekt mit mehreren *Schlüssel:Wert*-Paaren zum Neudefinieren der Standardeigenschaften einer beliebigen Shape

### Beispiel {#example}

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // Anzeige der Standard-Shapebar
        // oder Konfiguration der Shapebar über ein Objekt
        shapebar: {
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

### Details {#details}

Je nach den gewählten Elementen kann die Konfiguration der Elemente eines bestimmten Abschnitts wie folgt aussehen:

1. Rendern von Basisabschnitten

Sie können eine grundlegende Auswahl an Shapes mithilfe des Konfigurationsobjekts `sections` rendern. Zum Beispiel:

~~~jsx {5-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }],
                "Base org cards": [{ org: true }],
                "Base groups": [{ group: true }],
                "Base swimlane": [{ swimlane: true }]
            }
        }
    }
});
~~~

2. Angabe von Elementen mithilfe von String-Literalen

Sie können Shapebar-Elemente rendern, indem Sie die Shape-Typen mithilfe von String-Literalen angeben. Sehen Sie sich das folgende Beispiel an:

~~~jsx {5-8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom section": ["custom_shape"],
                "Other shapes": ["text", "topic", "circle"]
            }
        }
    }
});
~~~

3. Neudefinieren von Basiskonfigurationen

Eine weitere Möglichkeit besteht darin, die Grundeigenschaften einer beliebigen Shape neu zu definieren und sie mit den erforderlichen Parametern zu rendern. Das folgende Beispiel zeigt das Rendern einer Shape vom Typ `circle` mit verschiedenen Text- und Farbeinstellungen:

~~~jsx {5-23}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Circles": [
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange"
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue"
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green"
                    }
                ]
            }
        }
    }
});
~~~

Auf diese Weise können Sie jeden Shape-Typ neu konfigurieren.

4. Kombinieren verschiedener Elementtypen in einem Abschnitt

Wenn Ihr Projekt die Verwendung verschiedener Elemente voraussetzt, können Sie Abschnitte mit gemischten Elementtypen in der Shapebar erstellen. Sehen Sie sich das folgende Beispiel an:

~~~jsx {7-27}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // Anzeige der Standard-Shapebar
        // oder Konfiguration der Shapebar über ein Objekt
        shapebar: {
            sections: {
                "Base flow shapes": [{ flowShapes: true }, "text", "topic"],
                "Circles": [
                     "circle",
                    {
                        type: "circle",
                        fill: "#fcba03",
                        text: "Orange"
                    },
                    {
                        type: "circle",
                        fill: "#03d7fc",
                        text: "Blue"
                    },
                    {
                        type: "circle",
                        fill: "#03fc88",
                        text: "Green"
                    }
                ]
            }
        }
    }
});
~~~

**Verwandter Artikel**:  [Shapebar](guides/diagram_editor/shapebar.md#custom-sections)

**Changelog**: Hinzugefügt in v6.0
