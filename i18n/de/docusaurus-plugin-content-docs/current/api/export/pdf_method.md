---
sidebar_label: pdf()
title: pdf-Methode
description: Hier erfahren Sie mehr über die pdf-Methode in der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, probieren Sie Code-Beispiele und Live-Demos aus und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# pdf()

### Beschreibung {#description}

@short: Exportiert ein Diagramm in eine PDF-Datei

:::note
Um Probleme beim Export zu vermeiden, müssen alle Bilder für Diagram-Shapes entweder im Base64-Format oder über eine absolute URL festgelegt werden.
:::

### Verwendung {#usage}

~~~jsx
pdf(config?: object): Promise<void>;
~~~

### Rückgabewert {#returns}

Ein Promise für den Datenexport

### Parameter {#parameters}

- `config` - (optional) ein Objekt mit Exporteinstellungen. Sie können die folgenden Einstellungen für den Export nach PDF festlegen:
    - `url?: string` - (optional) die URL des Dienstes, der den Export ausführt und eine exportierte Datei zurückgibt. Diese Einstellung ist optional; Sie sollten sie nur verwenden, wenn Sie den Pfad zu Ihrem lokalen Exportdienst angeben müssen. Der Standardwert ist `https://export.dhtmlx.com/diagram/pdf/6.1.0`
    - `name?: string` - (optional) der Name der exportierten Datei
    - `pdf?: object` - (optional) das Objekt der PDF-Optionen. Hier können Sie die folgenden Eigenschaften festlegen:
        - `scale?: number` - (optional) der Maßstab der Rasterdarstellung (zwischen *0.1* und *2*)
        - `landscape?: boolean` - (optional) legt eine Querformat-Ausrichtung fest, standardmäßig `false`. Funktioniert nur, wenn die Option `format` angegeben ist
        - `width?: string | number` - (optional) die Breite der Ausgabeseite. Als Wert der Eigenschaft können Sie eine Zahl oder eine Zeichenfolge mit einer Einheit angeben
        - `height?: string | number` - (optional) die Höhe der Ausgabeseite. Als Wert der Eigenschaft können Sie eine Zahl oder eine Zeichenfolge mit einer Einheit angeben
        - `margin?: object` - (optional) das Objekt mit den Papierrändern, standardmäßig `none`
            - `left?: string | number` - (optional) legt einen linken Rand fest, akzeptiert Werte mit Einheitenangabe (px,in,cm,mm)
            - `right?: string | number` - (optional) legt einen rechten Rand fest, akzeptiert Werte mit Einheitenangabe (px,in,cm,mm)
            - `top?: string | number` - (optional) legt einen oberen Rand fest, akzeptiert Werte mit Einheitenangabe (px,in,cm,mm)
            - `bottom?: string | number` - (optional) legt einen unteren Rand fest, akzeptiert Werte mit Einheitenangabe (px,in,cm,mm)
        - `format?: string` - (optional) legt das Papierformat fest. Falls angegeben, hat diese Einstellung Vorrang vor den Optionen `width` oder `height`. Standardmäßig nicht angegeben. Sehen Sie sich die Liste aller verfügbaren [Formate und ihrer Größen](#list-of-formats) an.
        - `pageRanges?: string` - (optional) zu druckende Papierbereiche, z. B. 1-5, 8, 11-13. Funktioniert nur, wenn die Option `format` angegeben ist
        - `displayHeaderFooter?: boolean` - (optional) legt fest, ob Kopf- und Fußzeile angezeigt werden, standardmäßig *false*
        - `footerTemplate?: string` - (optional) eine HTML-Vorlage für die Fußzeile des Drucks. Sie sollte gültiges HTML-Markup sein, mit den folgenden Klassen zum Einfügen von Druckwerten:
            - `date` - (optional) das formatierte Druckdatum
            - `title` - (optional) der Name des Dokuments
            - `pageNumber` - (optional) die aktuelle Seitenzahl. Wird standardmäßig verwendet
            - `totalPages` - (optional) die Gesamtzahl der Seiten im Dokument. Wird standardmäßig verwendet
        - `headerTemplate?: string` - (optional) eine HTML-Vorlage für die Kopfzeile des Drucks. Sie sollte gültiges HTML-Markup sein, mit den folgenden Klassen zum Einfügen von Druckwerten:
            - `date` - (optional) das formatierte Druckdatum
            - `title` - (optional) der Name des Dokuments
            - `pageNumber` - (optional) die aktuelle Seitenzahl
            - `totalPages` - (optional) die Gesamtzahl der Seiten im Dokument
    - `header?: string` - (optional) eine HTML-Vorlage für die Kopfzeile in der exportierten Datei
    - `footer?: string` - (optional) eine HTML-Vorlage für die Fußzeile in der exportierten Datei

### Beispiel {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    // Konfigurationsoptionen
});
diagram.data.parse(data);

// Standardexport
diagram.export.pdf()
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));

// Export mit Konfigurationseinstellungen
diagram.export.pdf({
    url: "https://export.dhtmlx.com/diagram/pdf/6.1.0",
    name:"result_pdf"
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));
~~~

### Details {#details}

:::info
Legen Sie einen ausreichenden Rand für die korrekte Anzeige von `headerTemplate`/`footerTemplate` fest.
:::

## Liste der Formate {#list-of-formats}

| Format    | Größe               |
| --------- | ------------------ |
| `"Letter"`  | (8.5in x 11in)     |
| `"Legal"`   | (8.5in x 14in)     |
| `"Tabloid"` | (11in x 17in)      |
| `"Ledger"`  | (17in x 11in)      |
| `"A0"`      | (33.1in x 46.8in)  |
| `"A1"`      | (23.4in x 33.1in)  |
| `"A2"`      | (16.54in x 23.4in) |
| `"A3"`      | (11.7in x 16.54in) |
| `"A4"`      | (8.27in x 11.7in)  |
| `"A5"`      | (5.83in x 8.27in)  |
| `"A6"`      | (4.13in x 5.83in)  |

**Verwandter Artikel**:  [Diagram exportieren](guides/data_export.md)

**Verwandte Beispiele**:

- [Diagram. Export. Diagram exportieren](https://snippet.dhtmlx.com/ybpmz0zk)
- [Diagram. Export. Wasserzeichen unten links](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. Export. Wiederholendes Wasserzeichen](https://snippet.dhtmlx.com/emkea55j)
