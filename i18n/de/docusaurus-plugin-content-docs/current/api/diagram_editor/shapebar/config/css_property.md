---
sidebar_label: css
title: css-Eigenschaft von Shapebar
description: Sie können mehr über die css-Eigenschaft von Shapebar in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-tägige Testversion von DHTMLX Diagram herunter.
---

# css

### Beschreibung {#description}

@short: Optional. Ermöglicht die Anwendung benutzerdefinierter CSS-Klassen zur Anpassung des Erscheinungsbilds der Shapebar

### Verwendung {#usage}

~~~jsx
css?: string;
~~~

### Beispiel {#example}

~~~html {8}
<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        view: {
            // shapebar: true, // Anzeige der Standard-Shapebar
            // oder Konfiguration der Shapebar über ein Objekt
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

**Verwandte Artikel**:

- [Shapebar und das Erscheinungsbild von Shapes](guides/diagram_editor/shapebar.md#shapebar-and-shapes-appearance)
- [Konfigurieren des Aussehens von Shapes in der Shapebar](guides/themes/base_themes_configuration.md#configuring-the-look-of-shapes-in-shapebar)

**Changelog**: Hinzugefügt in v6.0
