---
sidebar_label: filter()-Methode
title: filter()-Methode von Data Collection
description: In der Dokumentation der DHTMLX JavaScript Diagram-Bibliothek erfahren Sie mehr über die filter()-Methode von Data Collection. Durchsuchen Sie Entwicklerhandbücher und die API-Referenz, testen Sie Codebeispiele und Live-Demos und laden Sie eine kostenlose 30-Tage-Testversion von DHTMLX Diagram herunter.
---

# filter()

### Beschreibung {#description}

@short: Filtert Elemente im Diagram

### Verwendung {#usage}

~~~jsx
filter(
    rule?: function,
    config?: {
        id?: string,
        add?: boolean,
        permanent?: boolean
    }
): void;

// or

filter(
    rule?:{
        by?: string | number,
        match?: string | number | boolean,
        compare?: (value, match, item) => {}
    },
    config?:{
        id?: string,
        add?: boolean,
        permanent?: boolean
    }
): void;
~~~

### Parameter {#parameters}

- `rule` - (optional) das Filterkriterium
  - Bei Angabe als *Funktion* wird die Filterung nach der in der Funktion festgelegten Regel angewendet. Die Funktion erhält ein Objekt eines Datenelements als Parameter
  - Bei Angabe als *Objekt* kann der Parameter folgende Attribute enthalten:
    - `by` - (optional) der Schlüssel des Elementattributs
    - `match` - (optional) ein abzugleichendes Muster
    - `compare` - (optional) eine Funktion für die erweiterte Filterung. Die Funktion gibt entweder *true* oder *false* zurück und erhält drei Parameter:
      - `value` - der zu vergleichende Wert
      - `match` - ein abzugleichendes Muster
      - `item` - ein Datenelement, dessen Werte verglichen werden sollen (z. B. ein Shape)
- `config` - (optional) ein Objekt, das die Parameter der Filterung definiert. Das Objekt kann folgende Eigenschaften enthalten:
  - `id` - (optional) die ID des Filters
  - `add` - (optional) legt fest, ob jede nachfolgende Filterung auf die bereits gefilterten Daten (<i>true</i>) oder auf die ursprünglichen Daten (<i>false</i>, Standard) angewendet wird
  - `permanent` - (optional) *true*, um den aktuellen Filter dauerhaft zu machen. Er wird auch dann angewendet, wenn die nächste Filterung in ihrem Konfigurationsobjekt nicht die Eigenschaft `add:true` enthält. Ein solcher Filter kann nur mit der Methode [`resetFilter()`](api/data_collection/resetfilter_method.md) entfernt werden

### Beispiel {#example}

~~~jsx {6-9,11-12}
const diagram = new dhx.Diagram("diagram_container", {
    type: "default"
});
diagram.data.parse(data);

// Filterung nach der in der Funktion festgelegten Regel
diagram.data.filter(function (shape) {
    return shape.id > 3;
});

// Filterung nach dem Schlüssel des Shape-Attributs
diagram.data.filter({ by: "text", match: "Read N" });
~~~

Um das Diagram in den Ausgangszustand zurückzusetzen, rufen Sie die Methode `filter()` ohne Parameter auf.

~~~jsx
diagram.data.filter();
~~~

**Verwandter Artikel**:  [Elemente filtern](guides/manipulating_items.md#filtering-items)

**Verwandtes Beispiel**: [Diagram. Daten. Shapes filtern](https://snippet.dhtmlx.com/tm43bsgn)

**Changelog**: Aktualisiert in v6.0
