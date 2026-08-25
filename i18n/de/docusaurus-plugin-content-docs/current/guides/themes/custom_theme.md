---
sidebar_label: Benutzerdefiniertes Theme
title: Benutzerdefiniertes Theme
description: Sie können in der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren, wie Sie ein benutzerdefiniertes Theme erstellen. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Codebeispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Benutzerdefiniertes Theme

Wenn die Basis-Diagram-Themes nicht zu Ihrem Projekt passen, können Sie Ihr eigenes Farb-Theme konfigurieren.
Sehen Sie sich die Themes **custom light** und **custom dark** im folgenden Snippet an:

<iframe src="https://snippet.dhtmlx.com/9twmlfus?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

Um ein benutzerdefiniertes Theme zu erstellen, überschreiben Sie die Werte der internen CSS-Variablen wie folgt:

~~~html
<style>
    [data-dhx-theme='custom-theme-dark'] {
        /* Schrift */
        --dhx-font-color-primary: var(--dhx-color-gray-200);
        --dhx-font-color-secondary: var(--dhx-color-gray-500);
        --dhx-font-color-additional: var(--dhx-color-gray-500);
        --dhx-font-color-disabled: var(--dhx-color-gray-800);
        --dhx-font-color-contrast: var(--dhx-color-black);
        /* Ende Schrift */

        /* Rahmen */
        --dhx-border-color: #007a99;
        /* Ende Rahmen */

        /* Farbschema */
        --dhx-h-primary: 45;
        --dhx-s-primary: 100%;
        --dhx-l-primary: 35%;

        --dhx-h-secondary: 185;
        --dhx-s-secondary: 5%;
        --dhx-l-secondary: 50%;

        --dhx-h-danger: 330;
        --dhx-s-danger: 65%;
        --dhx-l-danger: 50%;

        --dhx-h-success: 175;
        --dhx-s-success: 60%;
        --dhx-l-success: 40%;

        --dhx-h-background: 190;
        --dhx-s-background: 100%;
        --dhx-l-background: 10%;
        /* Ende Farbschema */

        /* Theme-Farben */
        --dhx-background-primary: hsl(var(--dhx-h-background), var(--dhx-s-background), var(--dhx-l-background));
        --dhx-background-secondary: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 8%));
        --dhx-background-additional: hsl(var(--dhx-h-background), var(--dhx-s-background), calc(var(--dhx-l-background) + 12%));
        /* Ende Theme-Farben */

        /* DHTMLX Grid-Servicevariablen*/
        --dhx-s-grid-header-background: #002229;
        --dhx-s-grid-selection-background: var(--dhx-color-gray-100);
        /* Ende DHTMLX Grid-Servicevariablen*/

        /* DHTMLX Toolbar-Servicevariablen*/
        --dhx-s-toolbar-background: #002229;
        /* Ende DHTMLX Toolbar-Servicevariablen */
    }
</style>

<script>
    const diagram = new dhx.Diagram("diagram_container", {
        type: "default",
    });

    dhx.setTheme("custom-theme-dark");
</script>
~~~

**Verwandtes Beispiel:** [Diagram Editor. Standardmodus. Basis- und benutzerdefinierte Themes](https://snippet.dhtmlx.com/9twmlfus)


