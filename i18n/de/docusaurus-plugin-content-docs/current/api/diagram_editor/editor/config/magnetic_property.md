---
sidebar_label: magnetic-Eigenschaft
title: magnetic-Eigenschaft des Editors
description: Erfahren Sie mehr über die magnetic-Eigenschaft des Editors in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek. Durchsuchen Sie Entwickler-Handbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos, und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# magnetic

:::info
Die Eigenschaft `magnetic` funktioniert nur im `default`-Modus des Editors (`type: "default"`)
:::

### Beschreibung {#description}

@short: Optional. Legt fest, ob beim Verschieben einer Form Fanglinien angezeigt werden sollen. Falls ja, ermöglicht dies die Konfiguration ihres Erscheinungsbilds

:::tip
Fanglinien werden angezeigt, wenn die zentralen oder äußersten seitlichen Koordinaten der Form, die Sie verschieben, mit den zentralen oder äußersten seitlichen Koordinaten der statischen benachbarten Formen übereinstimmen
:::

### Verwendung {#usage}

~~~jsx
magnetic?: {
    show?: boolean,
    lineWidth?: number,
    lineColor?: string
} | boolean;
~~~

### Standardkonfiguration {#default-config}

~~~jsx
magnetic: true
~~~

Der magnetische Modus wird mit der folgenden Konfiguration aktiviert:

~~~jsx
magnetic: {
    show: true,
    lineWidth: 2,
    lineColor: "#000"
}
~~~

### Parameter {#parameters}

Als Objekt kann die Eigenschaft `magnetic` die folgenden Parameter enthalten:

- `show` - (optional) aktiviert/deaktiviert Fanglinien beim Verschieben einer Form
- `lineWidth` - (optional) die Breite der Fanglinien (standardmäßig 2)
- `lineColor` - (optional) die Farbe der Fanglinien (standardmäßig *"#000"*)

### Beispiel {#example}

~~~jsx {3-7}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    magnetic: {
        show: true,
        lineWidth: 2,
        lineColor: "#B0B8CD"
    }
});
~~~

**Changelog**: Der Parameter `show` wurde in v6.0 hinzugefügt
