---
sidebar_label: Shapebar
title: Editor-Anleitungen - Shapebar
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die Shapebar des Editors. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# Shapebar

Die Shapebar ist ein Teil des Editors, der Vorschauen von Diagram-Elementen anzeigt. Sie können die gewünschten Elemente auswählen und sie von der Shapebar in den Grid-Bereich ziehen.

:::note
Die Shapebar ist nur im Editor verfügbar, der im Standardmodus initialisiert wurde (type: `"default"`).
:::

## Standardabschnitte {#default-sections}

Standardmäßig ist die Shapebar in drei Abschnitte unterteilt: *Shapes*, *Groups* und *Swimlanes*. Der Abschnitt *Shapes* enthält alle Standard-Shapes sowie benutzerdefinierte Shapes.
Die Abschnitte *Groups* und *Swimlanes* enthalten grundlegende Sets der jeweiligen Elemente.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Benutzerdefinierte Abschnitte {#custom-sections}

Um die Struktur der Shapebar anzupassen, verwenden Sie die Eigenschaft [`sections`](api/diagram_editor/shapebar/config/sections_property.md). Damit können Sie eigene Abschnitte in der gewünschten Reihenfolge festlegen und die Elemente den entsprechenden Abschnitten zuordnen.

Die Eigenschaft `sections` ist ein Objekt mit einer Reihe von *Schlüssel:Wert*-Paaren, wobei `key` der Name eines Abschnitts und `value` ein Array mit der Liste der Elemente ist, die in diesem Abschnitt gerendert werden sollen.

Je nach den gewählten Elementen kann die Konfiguration der Elemente eines bestimmten Abschnitts wie folgt aussehen:

1. Rendering von Basisabschnitten

Sie können mit dem Konfigurationsobjekt `sections` ein Basisset an Shapes rendern. Zum Beispiel:

~~~jsx
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

Sie können Shapebar-Elemente rendern, indem Sie die Typen der Shapes mithilfe von String-Literalen angeben. Sehen Sie sich das folgende Beispiel an:

~~~jsx
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

3. <p id="customization">Neudefinition der Basiskonfigurationen</p>

Eine weitere Möglichkeit besteht darin, die Basiseigenschaften einer beliebigen Shape neu zu definieren und sie mit den gewünschten Parametern zu rendern. Das folgende Beispiel zeigt das Rendern einer Shape vom Typ `circle` mit verschiedenen Text- und Farbeinstellungen:

~~~jsx
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

Wenn Ihr Projekt verschiedene Elemente verwendet, können Sie in der Shapebar Abschnitte mit gemischten Elementtypen erstellen. Sehen Sie sich das folgende Beispiel an:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
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

## Hinzufügen von Elementen desselben Typs mit unterschiedlichen Einstellungen {#adding-items-of-the-same-type-with-different-settings}

Die Bibliothek ermöglicht es Ihnen, der Shapebar des Editors mehrere identische Elemente (d. h. Elemente desselben Typs) mit unterschiedlichen Einstellungen hinzuzufügen.
Gehen Sie dazu wie folgt vor:

- Erstellen Sie separate Objekte mit unterschiedlichen Konfigurationen für die Elemente des gewünschten Typs. Sie können so viele Objekte erstellen, wie Sie benötigen
- Verwenden Sie die *Namen* der erstellten Objekte als *Typen* der Elemente und fügen Sie sie mithilfe der Eigenschaft [`sections`](api/diagram_editor/shapebar/config/sections_property.md) den Abschnitten der Shapebar hinzu

## Festlegen der Vorschau von Shapes {#setting-the-preview-of-shapes}

Um die Vorschau der in der Shapebar des Editors gerenderten Elemente zu konfigurieren, verwenden Sie die Eigenschaft [`preview`](api/diagram_editor/shapebar/config/preview_property.md). Es handelt sich um ein Objekt mit zwei Attributen:

- `scale` - (optional) legt den Maßstab der in der Shapebar des Editors gerenderten Elemente fest, standardmäßig 0.5
- `gap` - (optional) legt den Abstand zwischen den in der Shapebar gerenderten Elementen fest, standardmäßig "6px 8px"
(legt einen Abstand von 6px oben und unten sowie 8px rechts und links fest)

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

### Anpassen einer Shape-Vorschau {#customizing-a-shape-preview}

Um das Aussehen einer bestimmten Shape anzupassen, können Sie die Konfigurationseigenschaft [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) eines Shape-Objekts verwenden.

Diese Eigenschaft kann in zwei Fällen angewendet werden:

- beim Festlegen der Standardkonfiguration einer Standard-Shape über die Eigenschaft [`defaults`](api/diagram_editor/editor/config/defaults_property.md) des Editor-Objekts
- beim Festlegen der Standardkonfiguration einer benutzerdefinierten Shape über das Attribut `defaults` der Methode [`addShape()`](api/diagram/addshape_method.md)

Betrachten wir drei Beispiele für die Konfiguration einer Shape-Vorschau:

1\. Sie können ein Bild angeben, das in der Shapebar für eine benutzerdefinierte Shape angezeigt werden soll. Übergeben Sie dazu entweder eine URL zum Laden eines Bildes oder ein Base64-Bild als String-Wert an die Eigenschaft `preview`:

~~~jsx {6}
const defaults = {
    title: "Name and First name",
    img: "../avatar-1.jpg",
    height: 115,
    width: 330,
    preview: "../shape_preview.png"
};

editor.diagram.addShape("template", {
    template,
    defaults
});
~~~

2\. Wenn Sie ein Bild angeben und dessen Breite und Höhe festlegen müssen, sollten Sie die Eigenschaft `preview` als Objekt mit den Attributen `img`, `height` und `width` bereitstellen:

~~~jsx {4-8}
const defaults = {
    title: "Name and First name", email: "some@mail.com",
    img: "../avatar-1.jpg", height: 115, width: 330,
    preview: {
        img: "../shape_preview.png",
        height: 58,
        width: 165
    }
}

editor.diagram.addShape("template", {
    template,
    defaults
});
~~~

:::note
Sie können die genaue Breite und Höhe des Bildes festlegen, es besteht jedoch keine Möglichkeit, den Maßstab des Bildes festzulegen.
:::

3\. Sie können den Maßstab einer bestimmten, in der Shapebar gerenderten Shape über die Eigenschaft `scale` neu definieren:

~~~jsx {2-4}
const defaults = {
    preview: {
        scale: 0.72
    }
};

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Custom shapes": ["personalCard"],
                "OrgChart shapes": ["card", "img-card"]
            },
            preview: {
                scale: 0.65
            }
        }
    }
});

editor.diagram.addShape("personalCard", {
    defaults,
    // ...
});
~~~

:::note
Die Eigenschaft `preview` wird beim Exportieren von Daten in das JSON-Format weggelassen.
:::

## Festlegen der Breite der Shapebar {#setting-the-width-of-shapebar}

Die Standardbreite der Shapebar beträgt 300. Sie können sie ändern und über die Eigenschaft [`width`](api/diagram_editor/shapebar/config/width_property.md) eine beliebige andere Breite festlegen, z. B.:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            width: 400 // standardmäßig 300
        }
    }
});
~~~

## Anzeigen/Ausblenden der Shapebar {#showinghiding-the-shapebar}

Wenn Sie die Sichtbarkeit einer Shapebar steuern möchten, können Sie die Eigenschaft [`show`](api/diagram_editor/shapebar/config/show_property.md) verwenden. Damit können Sie die Shapebar bei der Initialisierung des Diagram Editors mit bestimmten Einstellungen ausblenden und sie später bei Bedarf wieder anzeigen. Standardmäßig wird die Shapebar angezeigt.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            show: false // standardmäßig true
        }
    }
});
~~~

## Erscheinungsbild von Shapebar und Shapes {#shapebar-and-shapes-appearance}

Mit der Eigenschaft [`css`](api/diagram_editor/shapebar/config/css_property.md) können Sie das gewünschte Look-and-Feel für die Shapebar festlegen. Damit können Sie benutzerdefinierte CSS-Klassen angeben, um die Darstellung der Elemente in der Shapebar auf Ihre eigene Weise zu gestalten.

~~~html {6}
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            shapebar: {
                css: "custom_style"
            }
        }
    });
</script>

<style>
    .custom_style {
        background-color: var(--dhx-background-primary);
        font-size: var(--dhx-font-size-large);
    }
</style>
~~~

Außerdem können Sie das [Aussehen von Shapes anpassen](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar), indem Sie das Standardfarbschema für ein bestimmtes Theme neu definieren, oder Sie verwenden eigene CSS-Variablen, um das Farbschema der Shapebar-Elemente zu verwalten.
