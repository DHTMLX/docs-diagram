---
sidebar_label: preview
title: preview-Eigenschaft von Shapebar
description: Sie können mehr über die preview-Eigenschaft von Shapebar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# preview

### Beschreibung {#description}

@short: Optional. Ein Objekt, das die Vorschau von Elementen konfiguriert

### Verwendung {#usage}

~~~jsx
preview?: {
    scale?: number,
    gap?: string | number
}
~~~

### Parameter {#parameters}

- `scale` - (optional) legt den Maßstab der in der Shapebar des Editors gerenderten Elemente fest
- `gap` - (optional) legt den Abstand zwischen den in der Shapebar gerenderten Elementen fest

### Standardkonfiguration {#default-config}

~~~jsx
preview: {
    scale: 0.5,
    gap: "6px 8px"
    // legt einen Abstand von 6px oben und unten sowie 8px links und rechts fest
};
~~~

### Beispiel {#example}

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // Anzeige der Standard-Shapebar
        // oder Konfiguration der Shapebar über ein Objekt
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

### Details {#details}

Die Werte der Eigenschaften `gap` und `scale` können für eine einzelne Shape über die Attribute `gap` und `scale` der Eigenschaft [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) des Shape-Objekts neu definiert werden:

~~~jsx {14-17}
const defaults = {
    rectangle: {
        preview: {
            scale: 0.72,
            gap: 8
        }
    }
}

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
           preview: {
               scale: 0.65,
               gap: 2
            }
        }
    },
    defaults
});
~~~

**Verwandter Artikel**: [Shapebar](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)

**Changelog**: Hinzugefügt in v6.0
