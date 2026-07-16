---
sidebar_label: Benutzerdefinierte Form
title: Benutzerdefinierte Form
description: In der Dokumentation der DHTMLX-JavaScript-Diagram-Bibliothek erfahren Sie mehr über die benutzerdefinierte Form. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Code-Beispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# Benutzerdefinierte Form

Wenn die Standardformen Ihren Anforderungen nicht entsprechen, können Sie eine benutzerdefinierte Form erstellen.

Nehmen wir an, Sie möchten eine neue `networkCard`-Form erstellen, die ein Bild, einen Text und eine IP-Adresse darstellt.

<iframe src="https://snippet.dhtmlx.com/u1xqyo9w?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

Gehen Sie dazu wie folgt vor:

1\. Wenden Sie die Methode [`addShape()`](api/diagram/addshape_method.md) an, um einen eindeutigen Namen für Ihre Form hinzuzufügen (in unserem Fall *"networkCard"*) und eine Vorlage dafür bereitzustellen:

~~~jsx
diagram.addShape("networkCard", {
    template: ({ img, text, ip }) => (`
        <section class="dhx-diagram-demo_network-card">
            <img src="${img}" alt="${text}"></img>
            <span>${text}</span>
            <span>${ip}</span>
        </section>
    `),
    // die Standardkonfiguration für Formen mit type:"networkCard"
    defaults: {
        width: 160,
        height: 160,
        img: path.network + "desktop.svg",
        text: "Network Card",
        ip: "138.68.41.78"
    }
});
~~~

Das Attribut `defaults` dient zur Festlegung der Standardkonfiguration einer `"networkCard"`-Form. Die Werte der angegebenen Eigenschaften können bei Bedarf in den Konfigurationsobjekten einzelner Formen geändert werden.

2\. Verwenden Sie den eindeutigen Namen der Form als Wert des Attributs `type` innerhalb des Formobjekts, während Sie einen Datensatz zum Laden in das Diagramm vorbereiten.

:::note
Das Datenobjekt einer benutzerdefinierten Form kann beliebige [Konfigurationseigenschaften](shapes/configuration_properties.md) enthalten, einschließlich benutzerdefinierter.
:::

~~~jsx
const networkDiagram = [
    {
        "id": 1,
        "type": "networkCard",
        "x": 0,
        "y": 380,
        // die Standardwerte der Attribute text und ip ändern
        "text": "Remote expert desktop",
        "ip": "192.168.32.2" // eine benutzerdefinierte Eigenschaft
    },
    // weitere Optionen
]
~~~

Um die Standardwerte der Eigenschaften *text* und *ip* zu ändern, haben wir dieselben Eigenschaften mit den neuen Werten im Konfigurationsobjekt einer Form angegeben.
Dadurch wird der Textwert *"Network Card"* durch *"Remote expert desktop"* ersetzt und der ip-Wert *"138.68.41.78"* durch *"192.168.32.2"*.

## Event-Handler für benutzerdefinierte Formen {#event-handlers-for-custom-shapes}

Möglicherweise müssen Sie Handler zu den Events hinzufügen, die auftreten, wenn der Benutzer mit benutzerdefinierten Formen interagiert. Dies können Sie erreichen, indem Sie über das Attribut `eventHandlers` der Methode [`addShape()`](api/diagram/addshape_method.md) Event-Handler zu HTML-Elementen der Vorlage einer Form hinzufügen.

Im folgenden Beispiel wird ein Kontextmenü geöffnet, nachdem der Benutzer auf das Symbol mit der Klasse `toggle_container` geklickt hat:

<iframe src="https://snippet.dhtmlx.com/8fubjmlz?mode=js" frameborder="0" class="snippet_iframe" width="100%" height="550"></iframe>

Das Objekt `eventHandlers` enthält eine Reihe von *Schlüssel:Wert*-Paaren, wobei:

- *Schlüssel* - der Name des Events. Beachten Sie, dass das Präfix `'on'` am Anfang des Event-Namens verwendet wird (onclick, onmouseover).
- *Wert* - ein Objekt, das ein *Schlüssel:Wert*-Paar enthält, wobei *Schlüssel* der Name der CSS-Klasse ist, auf die der Handler angewendet wird, und *Wert* eine Funktion ist, die zwei Parameter akzeptiert:
	- `event` - ein Event-Objekt
	- `shape` - das Formobjekt

*Wir empfehlen, für unterschiedliche benutzerdefinierte Formen unterschiedliche CSS-Klassen zu verwenden.*
