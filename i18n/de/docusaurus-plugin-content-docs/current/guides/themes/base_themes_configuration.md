---
sidebar_label: Konfigurieren integrierter Themes
title: Konfigurieren integrierter Themes
description: Sie können in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren, wie Sie Themes konfigurieren. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Konfigurieren integrierter Themes

## Konfigurieren aller Themes {#configuring-all-themes}

Ihnen wird vielleicht auffallen, dass die CSS-Variablen des [Standard](themes.md#light-theme-default)-Themes Variablen des Farbschemas enthalten:

~~~css
--dhx-h-primary: 200;
--dhx-s-primary: 98%;
--dhx-l-primary: 40%;

--dhx-h-secondary: 0;
--dhx-s-secondary: 0%;
--dhx-l-secondary: 30%;

--dhx-h-danger: 0;
--dhx-s-danger: 100%;
--dhx-l-danger: 60%;

--dhx-h-success: 154;
--dhx-s-success: 89%;
--dhx-l-success: 37%;

--dhx-h-background: 0;
--dhx-s-background: 0%;
--dhx-l-background: 100%;
--dhx-a-background: 0.5;
~~~

:::tip
Farbwerte werden im [HSL](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/hsl)-Format angegeben, wobei:

- *Farbton* ein Winkel auf dem Farbkreis von 0 bis 360 ist. 0 ist Rot, 120 ist Grün, 240 ist Blau;
- *Sättigung* ein Prozentwert ist; 0 % bedeutet vollständig entsättigt (Grau) und 100 % ist vollständig gesättigt;
- *Helligkeit* ein Prozentwert ist; 100 % ist Weiß, 0 % ist Schwarz und 50 % ist `"normal"`.
:::

Dank dieser CSS-Variablen wird das Farbschema automatisch berechnet. Das bedeutet, wenn Sie den Wert einer Farbschema-Variablen im Root ändern, werden die Werte für die Themes `"contrast-light"`, `"dark"` und `"contrast-dark"` automatisch in Echtzeit neu berechnet.

Sie können beispielsweise die Primärfarben für alle Diagram-Themes auf folgende Weise gleichzeitig überschreiben:

~~~html
<style>
    :root {
        --dhx-h-primary: 0;
        --dhx-l-primary: 30%;
    }
</style>
~~~

Außerdem werden Werte von Variablen, die auf Basis der Primärfarbe berechnet werden, entsprechend neu berechnet. Der Wert der Fokusfarbe wird beispielsweise wie folgt berechnet:

~~~jsx
--dhx-color-focused: hsl(calc(var(--dhx-h-primary) + 10), var(--dhx-s-primary), var(--dhx-l-primary));
~~~

## Konfigurieren eines einzelnen Themes {#configuring-a-separate-theme}

Wenn Sie einige Farbwerte für ein einzelnes [Diagram-Theme](themes.md) überschreiben möchten, müssen Sie dies im Attribut `'data-dhx-theme'` tun:

~~~html
<style>
    [data-dhx-theme='light'] {
        /* Rahmen */
        --dhx-border-color: #ced4da;
        /* Ende Rahmen */

        /* Farbschema */
        --dhx-h-primary: 210;
        --dhx-s-primary: 30%;
        --dhx-l-primary: 20%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 6;
        --dhx-s-danger: 78%;
        --dhx-l-danger: 57%;

        --dhx-h-success: 168;
        --dhx-s-success: 77%;
        --dhx-l-success: 42%;

        --dhx-l-background: 98%;
        /* Ende Farbschema */
    }
</style>

<script>
    const diagram = new dhx.Diagram("diagram_container", {
        type: "default",
    });

    dhx.setTheme("light");
</script>
~~~

## Konfigurieren des Erscheinungsbilds der Formen in der Shapebar {#configuring-the-look-of-shapes-in-shapebar}

### Neudefinieren der Standard-Farbschemata {#redefining-default-color-schemes}

Sie können das Erscheinungsbild der Shapebar-Elemente verwalten, indem Sie die CSS-Variablen neu definieren, die das Farbschema festlegen:

- `--dhx-shapebar-item-font-color`
- `--dhx-shapebar-item-background`
- `--dhx-shapebar-item-border-color`

Die Standardwerte dieser Variablen [hängen vom angewendeten Theme ab](themes.md).

### Festlegen benutzerdefinierter CSS-Variablen {#setting-custom-css-variables}

Sie können das Erscheinungsbild der Shapebar-Elemente auch anpassen, indem Sie Ihre eigenen CSS-Variablen verwenden. Definieren Sie dazu eine benutzerdefinierte CSS-Variable und geben Sie sie als Wert der erforderlichen Eigenschaft in der Konfigurationsoption `defaults` an.

:::note
Der Wert der Variablen wird einem Shapebar-Element zugewiesen, wenn es ausgewählt wird, und wird beim Wechsel eines Themes nicht neu definiert.
:::

Zum Beispiel:

~~~html {11-12,23-24}
<style>
    :root {
        --rectangle-fill: #428df5;
        --rectangle-font-color: #002229;
    }
    [data-dhx-theme='dark'] {
        --dhx-shapebar-item-font-color: #fff;
        --dhx-shapebar-item-background: #002229;
        --dhx-shapebar-item-border-color: #007a99;

        --rectangle-fill: #f54278;
        --rectangle-font-color: #002229;
    }
</style>

<div id="editor_container" style="height: 100%"></div>

<script>
    const editor = new dhx.DiagramEditor("editor_container", {
        type: "default",
        defaults: {
            rectangle: {
                fill: "var(--rectangle-fill)",
                fontColor: "var(--rectangle-font-color)"
            }
        }
    });
    // Dark-Theme festlegen
    const node = document.getElementById("editor_container").childNodes[0];
    dhx.setTheme("dark", node);
</script>
~~~

## Anpassen des Erscheinungsbilds von Tasks im PERT-Modus {#adjusting-the-look-of-tasks-in-the-pert-mode}

Das Erscheinungsbild der Tasks des [Diagram im PERT-Diagrammmodus](/#diagram-in-the-pert-mode) wird durch die CSS-Variable `--dhx-shape-pert-header-background` definiert. Sie wird im [Standard](themes.md#light-theme-default)-Theme wie folgt festgelegt:

~~~jsx
--dhx-shape-pert-header-background: var(--dhx-gantt-base-colors-primary, #537CFA);
~~~

- wenn Diagram im PERT-Diagrammmodus zusammen mit DHTMLX Gantt verwendet wird, wird das aktuelle Farbschema des Gantt-Diagramms auf die Tasks von Diagram angewendet
- wenn Diagram eigenständig verwendet wird, wird die oben genannte CSS-Variable auf den Standardwert `#537CFA` gesetzt

