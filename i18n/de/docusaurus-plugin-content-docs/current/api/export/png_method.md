---
sidebar_label: png()
title: png-Methode
description: Hier erfahren Sie mehr über die png-Methode in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# png()

### Beschreibung {#description}

@short: Exportiert ein Diagramm in eine PNG-Datei

:::note
Um Probleme beim Export zu vermeiden, müssen alle Bilder für Diagram-Shapes entweder im Base64-Format oder über eine absolute URL festgelegt werden.
:::

### Verwendung {#usage}

~~~jsx
png(config?: object): Promise<void>;
~~~

### Rückgabewert {#returns}

Ein Promise für den Datenexport

### Parameter {#parameters}

- `config` - (optional) ein Objekt mit Exporteinstellungen. Sie können die folgenden Einstellungen für den Export nach PNG festlegen:
  - `url?: string` - (optional) die URL des Dienstes, der den Export ausführt und eine exportierte Datei zurückgibt. Diese Einstellung ist optional; Sie sollten sie nur verwenden, wenn Sie den Pfad zu Ihrem lokalen Exportdienst angeben müssen. Der Standardwert ist `https://export.dhtmlx.com/diagram/png/6.1.0`
  - `name?: string` - (optional) der Name der exportierten Datei
  - `header?: string` - (optional) eine HTML-Vorlage für die Kopfzeile in der exportierten Datei
  - `footer?: string` - (optional) eine HTML-Vorlage für die Fußzeile in der exportierten Datei

### Beispiel {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    // Konfigurationsoptionen
});
diagram.data.parse(data);

// Standardexport
diagram.export.png()
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));

// Export mit Konfigurationseinstellungen
diagram.export.png({
    name: "result_png"
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));
~~~

**Verwandter Artikel**:  [Diagram exportieren](guides/data_export.md)

**Verwandte Beispiele**:

- [Diagram. Export. Diagram exportieren](https://snippet.dhtmlx.com/ybpmz0zk)
- [Diagram. Export. Wasserzeichen unten links](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. Export. Wiederholendes Wasserzeichen](https://snippet.dhtmlx.com/emkea55j)
