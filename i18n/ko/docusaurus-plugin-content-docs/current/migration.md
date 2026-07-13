---
sidebar_label: 최신 버전으로 마이그레이션
title: 최신 버전으로 마이그레이션
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 최신 버전으로의 마이그레이션에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 최신 버전으로 마이그레이션 {#migration-to-newer-versions}

## 5.0 -> 6.0 {#50---60}

### Diagram Editor 구조 {#diagram-editor-structure}

Diagram Editor의 주요 구성 요소 이름이 변경되었습니다:

- 왼쪽 패널 -> [Shapebar](guides/diagram_editor/shapebar.md)
- 오른쪽 패널 -> [Editbar](guides/diagram_editor/editbar.md)에는 [유연한 구성이 제공됩니다](whats_new.md#new-functionality)

기본 [Toolbar](guides/diagram_editor/toolbar.md) 구조가 변경되었습니다. Toolbar도 세부적으로 구성할 수 있게 되어 사용자 지정 Toolbar 요소를 추가할 수도 있습니다.

### Diagram Editor API {#diagram-editor-api}

Diagram Editor 패널을 구성하기 위한 `view` 객체가 도입되었습니다:

~~~jsx
view?: {
    toolbar?: boolean | obj,
    shapebar?: boolean | obj,
    editbar?: boolean | obj
}
~~~

패널 관리의 새로운 가능성을 살펴보려면 관련 API 개요 가이드를 확인하세요:

- [View API 개요](api/diagram_editor/view/api_overview.md)
- [Toolbar API 개요](api/diagram_editor/toolbar/api_overview.md)
- [Shapebar API 개요](api/diagram_editor/shapebar/api_overview.md)
- [Editbar API 개요](api/diagram_editor/editbar/api_overview.md)

#### 지원 중단된 메서드 {#deprecated-methods}

- Diagram Editor의 `setViewMode()` 메서드는 지원이 중단되어 더 이상 사용할 수 없습니다. 대신 `view` 객체의 [`show()`](api/diagram_editor/view/methods/show_method.md)/[`hide()`](api/diagram_editor/view/methods/hide_method.md) 메서드를 사용하세요.

~~~jsx {4} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.setViewMode("preview"); // "preview" 또는 "edit"
~~~

~~~jsx {4-5} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container");
editor.parse(data);

editor.view.hide("shapebar");
editor.view.hide("editbar");
~~~

#### 지원 중단된 속성 {#deprecated-properties}

- Diagram Editor의 `reservedWidth` 속성은 지원이 중단되어 더 이상 사용할 수 없습니다.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    reservedWidth: 150
});
~~~

대신 다음 구문을 사용하세요:

~~~jsx title="From v6.0"
editor.diagram.config.margin.x = 40;
~~~

- Diagram Editor의 `editMode` 속성은 지원이 중단되어 더 이상 사용할 수 없습니다. 대신 `view` 객체의 해당 속성([toolbar](api/diagram_editor/toolbar/api_overview.md), [shapebar](api/diagram_editor/shapebar/api_overview.md), [editbar](api/diagram_editor/editbar/api_overview.md))을 사용하세요.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    editMode: false
});
~~~

~~~jsx {2-6} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        toolbar: false,
        shapebar: false, // "default" 모드에서만 해당
        editbar: false
    }
});
~~~

- Diagram Editor의 `controls` 속성은 지원이 중단되어 더 이상 사용할 수 없습니다. 대신 `view.toolbar` 구성의 [`items`](api/diagram_editor/toolbar/config/items_property.md) 속성을 사용하세요.

~~~jsx {2-4} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    controls: {
        // ...
    }
});
~~~

~~~jsx {2-6} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    view: {
        toolbar: {
            items: []
        }
    }
});
~~~

- Diagram Editor의 `shapeBarWidth` 속성은 지원이 중단되어 더 이상 사용할 수 없습니다. 대신 `view.shapebar` 구성의 [`width`](api/diagram_editor/shapebar/config/width_property.md) 속성을 사용하세요.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeBarWidth: 190
});
~~~

~~~jsx {3-7} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            width: 400 // 기본값은 300
        }
    }
});
~~~

- Diagram Editor의 `shapeSections` 속성은 지원이 중단되어 더 이상 사용할 수 없습니다. 대신 `view.shapebar` 구성의 [`sections`](api/diagram_editor/shapebar/config/sections_property.md) 속성을 사용하세요.

~~~jsx {2-7} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "Swimlane": [{ swimlane: true }],
        "Groups": [{ group: true }],
        "Flowchart shapes": [{ flowShapes: true }],
        "Org shapes, text, topic": [{ org: true }, "text", "topic"]
    }
});
~~~

~~~jsx {3-12} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

- Diagram Editor의 `gapPreview` 속성은 지원이 중단되어 더 이상 사용할 수 없습니다. 대신 `view.shapebar` 구성의 [`preview`](api/diagram_editor/shapebar/config/preview_property.md) 객체의 `gap` 속성을 사용하세요.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    gapPreview: 10
});
~~~

~~~jsx {3-10} title="From v6.0"
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

- Diagram Editor의 `scalePreview` 속성은 지원이 중단되어 더 이상 사용할 수 없습니다. 대신 `view.shapebar` 구성의 [`preview`](api/diagram_editor/shapebar/config/preview_property.md) 객체의 `scale` 속성을 사용하세요.

~~~jsx {2} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    gapPreview: 10
});
~~~

~~~jsx {3-10} title="From v6.0"
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

#### 지원 중단된 이벤트 {#deprecated-events}

- Toolbar에 해당 버튼이 없으므로 Diagram Editor의 다음 이벤트는 지원이 중단되어 더 이상 사용할 수 없습니다: `resetButton`, `applyButton`, `visibility`, `exportData`, `importData`, `autoLayout`. 대신 Diagram Editor의 `toolbar` 객체에서 발생하는 `click` 이벤트를 리스닝할 수 있습니다:

~~~jsx
editor.toolbar.events.on("click", id => console.log(id));
~~~

:::note
[서비스 요소](guides/diagram_editor/toolbar.md#service-elements)의 이름 ID는 `$` 기호로 시작합니다.
:::

- Diagram Editor의 `changeGridStep` 이벤트는 지원이 중단되어 더 이상 사용할 수 없습니다.

### Diagram API {#diagram-api}

- [`addShape`](api/diagram/addshape_method.md) 메서드의 `properties` 속성은 지원이 중단되어 더 이상 사용되지 않습니다. Editor의 Editbar에서 사용자 지정 도형을 구성하는 방식은 Editbar 패널의 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 속성을 통해 구현됩니다:

~~~jsx {13-16} title="Before v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default"
});
editor.parse(data);

editor.diagram.addShape("network", {
    template: config => (
        `<section className='template'>
            <h3>${config.title}</h3>
            <ul><li>${config.text.join("</li><li>")}</li></ul>
        </section>`
    ),
    properties:[
        { type:"arrange" },
        { type:"size" }
    ]
});
~~~

~~~jsx {14-27} title="From v6.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
            sections: {
                "Network shapes": [
                    { type: "network", text: "Core", img: src + "core.svg" },
                    { type: "network", text: "Server", img: src + "server.svg" }
                ],
                "Flow shapes": [{ flowShapes: true }]
            }
        },
        editbar: {
            properties: {
                network: [
                    { type: "arrange" },
                    {
                        type: "fieldset",
                        label: "Network information",
                        rows: [
                            { type: "avatar", key: "img", circle: true, readOnly: true },
                            { type: "textarea", key: "text", label: "Description" },
                            { type: "input", key: "ip", label: "IP" }
                        ]
                    }
                ]
            }
        }
    }
});

editor.parse(data);

editor.diagram.addShape("network", {
    template: ({ img, text, ip }) => {
        return `
            <section className="dhx_diagram_template_d">
                <img className="dhx_diagram_template_d__image" src="${img}" alt="${text}"/></img>
                <span className="dhx_diagram_template_d__title">${text}</span>
                <span className="dhx_diagram_template_d__text">${ip}</span>
            </section>
        `;
    },
    defaults: {
        width: 160, height: 160,
        preview: { scale: 0.7 },
        ip: "127.0.0.1"
    }
});
~~~

### Diagram Selection API {#diagram-selection-api}

- Diagram의 Selection 객체에 있는 `getId()` 메서드는 지원이 중단되어 더 이상 사용할 수 없습니다. 대신 Selection 객체의 [`getIds()`](api/selection/getids_method.md) 및 [`getItem()`](api/selection/getitem_method.md) 메서드를 사용할 수 있습니다. 아래 예제를 확인하세요:

~~~jsx {7} title="Before v6.0"
// diagram은 "select:true" 옵션으로 생성해야 합니다
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
diagram.data.parse(data);

const id = diagram.selection.getId(); // -> "2"
~~~

~~~jsx {7-11} title="From v6.0"
// diagram은 "select:true" 옵션으로 생성해야 합니다
const diagram = new dhx.Diagram("diagram_container", {
    select: true
});
diagram.data.parse(data);

// 마지막으로 선택된 요소를 반환합니다
let id = diagram.selection.getIds().at(-1);
id = diagram.selection.getItem().id;
~~~

### Shape 속성 {#shape-properties}

[Shape 구성 객체](shapes/configuration_properties.md)의 `text` 속성은 문자열 값으로만 사용이 제한됩니다. 사용자 지정 도형을 구성할 때 문자열 값의 배열로 사용하는 방식은 지원이 중단되어 더 이상 사용할 수 없습니다.

### 라인 제목 {#line-titles}

라인 제목은 `line` 객체에서 라인과 같은 레벨의 공통 데이터 구조로 이동되었으며 [`lineTitles`](/line_titles/) 객체로 정의됩니다.

v6.0 이전에는 라인 제목이 다음과 같이 `line` 객체 내부에 지정되었습니다:

~~~jsx title="Before v6.0"
const data = [
    // line 객체
    {
        // line 객체 속성
        title?: {
            fontSize?: number | string, // 기본값은 14
            lineHeight?: number | string, // 기본값은 14
            textAlign?: "center" | "left" | "right", // 기본값은 "center"
            textVerticalAlign?: string,
            fontStyle?: "normal" | "italic" | "oblique", // 기본값은 "normal"
            fontColor?: string, // 기본값은 "#4C4C4C"
            fontWeight?: string, // 기본값은 "500"
            fill?: string,
            editable?: boolean, // 기본값은 true
            hidden?: boolean,
            draggable?: boolean,
            autoPosition?: boolean,
            text?: [
                {
                    id?: string | number,
                    type?: "$linetext",
                    width?: number,
                    height?: number,
                    distance?: number,
                    autoPosition?: boolean,
                    hidden?: boolean,
                    editable?: boolean, // 기본값은 true
                    draggable?: boolean,
                    fill?: string,
                    text?: string,
                    fontSize?: number | string, // 기본값은 14
                    lineHeight?: number | string, // 기본값은 14
                    fontStyle?: "normal" | "italic" | "oblique", // 기본값은 "normal"
                    fontColor?: string, // 기본값은 "#4C4C4C"
                    fontWeight?: string, // 기본값은 "500"
                    textAlign?: "center" | "left" | "right", // 기본값은 "center"
                    textVerticalAlign?: "center" | "top" | "bottom" // 기본값은 "center"
                },
                // 라인의 텍스트 항목에 대한 추가 객체
            ]
        }
    },
    // 추가 line 객체
]
~~~

From v6.0 라인 제목은 `"lineTitle"` 유형의 별도 객체로 정의됩니다. `lineTitle` 객체에는 다음과 같은 구성 속성이 있습니다:

~~~jsx title="From v6.0"
const data = [
    // line title 객체
    {
        type: "lineTitle",
        id?: string | number,
        text: string,
        parent: string | number,

        distance?: number, // 기본값은 50
        autoPosition?: boolean, // 기본값은 true
        editable?: boolean, // 기본값은 true
        fixed?: boolean, // 기본값은 false
        hidden?: boolean, // 기본값은 false

        fill?: string,
        fontSize?: string | number, // 기본값은 14
        lineHeight?: string | number, // 기본값은 14
        fontStyle?: "normal" | "italic" | "oblique", // 기본값은 "normal"
        fontColor?: string, // 기본값은 "#4C4C4C"
        fontWeight?: string, // 기본값은 "500"
        textAlign?: "center" | "left" | "right" // 기본값은 "center"
    },
    // 추가 객체
];
~~~

자세한 내용은 LineTitles [API](line_titles/configuration_properties.md) 및 [가이드](/line_titles/)에서 확인하세요.

### 현지화 {#localization}

Diagram Editor 인터페이스의 변경으로 인해 로케일 설정이 업데이트되었습니다. 자세한 내용은 [현지화 가이드](guides/localization.md)를 확인하세요.

## 4.2 -> 5.0 {#42---50}

### Diagram API {#diagram-api-1}

Diagram의 `lineGap` 속성은 지원이 중단되어 더 이상 사용할 수 없습니다. 대신 [lineConfig](api/diagram/lineconfig_property.md) 속성의 `lineGap` 매개변수를 사용하세요.

~~~jsx {3} title="Before v5.0"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineGap: 30
});
~~~

~~~jsx {3-5} title="From v5.0"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default",
    lineConfig: {
        lineGap: 30
    },
    // 기타 구성 매개변수
});
~~~

### Editor API {#editor-api}

Diagram Editor의 `lineGap` 속성은 지원이 중단되어 더 이상 사용할 수 없습니다. 대신 `lineConfig` 속성 내부의 `lineGap` 매개변수를 사용하세요.

~~~jsx {3} title="Before v5.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineGap: 30
});
~~~

~~~jsx {3-5} title="From v5.0"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    lineConfig: {
        lineGap: 30
    },
    // 기타 구성 매개변수
});
~~~

## 4.1 -> 4.2 {#41---42}

### Diagram API {#diagram-api-2}

v4.2에서 `defaultLinkType` 속성은 지원이 중단되었습니다.

v4.2부터는 커넥터 라인의 기본 유형을 지정하려면 새로운 [lineConfig](api/diagram/lineconfig_property.md) 속성을 적용해야 합니다.

~~~jsx title="Before v4.2"
const diagram = new dhx.Diagram("diagram_container", {
    defaultLinkType: "dash"
});
~~~

~~~jsx {2-4} title="From v4.2"
const diagram = new dhx.Diagram("diagram_container", {
    lineConfig: {
        lineType: "dash",
    },
    // 기타 구성 매개변수
});
~~~

### Editor API {#editor-api-1}

Editor의 왼쪽 패널에서 섹션에 기본 항목 세트를 지정하는 구문이 변경되었습니다.

v4.2 이전에는 섹션에 사용 가능한 모든 플로우차트 도형을 표시하려면 섹션 항목 배열에 불리언 *true* 값을 설정할 수 있었습니다:

~~~jsx {3} title="Before v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [true],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

v4.2부터는 이 목적을 위해 다른 구문을 사용해야 합니다:

~~~jsx {3} title="From v4.2"
const editor = new dhx.DiagramEditor("editor_container", {
    shapeSections: {
        "flowchart shapes": [{ flowShapes: true }],
        "text": ["text"],
        "mind map shape": ["topic"]
    },
});
~~~

또한 관련 *key:value* 쌍을 통해 다른 기본 항목 세트를 지정할 수 있게 되었습니다. 자세한 내용은 `shapeSections` 문서를 확인하세요.

## 3.1 -> 4.0 {#31---40}

### API {#api}

`shapeHover` 이벤트는 v4.0에서 지원이 중단되었습니다. v4.0부터는 대신 새로운 [itemMouseOver](api/diagram/itemmouseover_event.md) 이벤트를 사용하세요.

~~~jsx title="Before v4.0"
diagram.events.on("shapeHover", (id,e) => {
    console.log("An item"+ diagram.data.getItem(id).text +"has been hovered over");
});
~~~

~~~jsx title="From v4.0"
diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
// Diagram Editor의 경우
editor.diagram.events.on("itemMouseOver", (id, event) => {
    console.log(id, event);
});
~~~

## 3.0 -> 3.1 {#30---31}

### Editor API {#editor-api-2}

editor 객체의 `shapeMove` 이벤트는 v3.1에서 지원이 중단되었습니다. v3.1부터는 대신 새로운 `BeforeShapeMove` 및 `AfterShapeMove` 이벤트를 사용하세요.

~~~jsx title="Before v3.1"
editor.events.on("shapeMove", () => {
    console.log("The shape is moved");
});
~~~

~~~jsx title="From v3.1"
// BeforeShapeMove 이벤트
editor.events.on("BeforeShapeMove", (e) => {
    console.log("Before the shape is moved:", e);
    return true;
});

// AfterShapeMove 이벤트
editor.events.on("AfterShapeMove", (e) => {
    console.log("After the shape is moved:", e);
});
~~~

## 2.2 -> 3.0 {#22---30}

### 사용자 지정 도형 생성 {#creating-custom-shapes}

사용자 지정 도형을 생성하는 방식이 변경, 간소화 및 개선되었습니다.

v3.0부터는 원하는 유형의 도형을 생성하려면 *diagram.flowShapes* 객체 대신 새로운 `addShape` 메서드를 사용해야 합니다. 이 메서드를 사용하면 다양한 브라우저에서 작동하는 HTML 템플릿을 생성할 수 있습니다. 또한 이 메서드를 사용하면 Diagram Editor에서 사용자 지정 도형을 생성하고 편집할 수 있습니다.

*diagram.flowShapes* 객체는 지원이 중단되었지만 계속 작동합니다.

### Editor의 Toolbar 버튼 {#toolbar-buttons-in-editor}

버전 3.0 이전에는 Editor의 관련 *showApply, showReset, showExport* 구성 속성을 통해 Diagram Editor에서 Toolbar 버튼을 표시/숨김 처리할 수 있었습니다.

버전 3.0에서는 이러한 속성이 지원 중단되어 제거되었습니다. 대신 *control_name:value* 쌍의 집합을 포함하는 `controls` 구성 속성이 추가되었습니다. 따라서 이러한 속성은 다음과 같이 대체됩니다:

- showApply -> controls.apply
- showReset -> controls.reset
- showExport -> controls.export

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    controls: {
        apply: false,
        reset: false,
        export: true
    }
});
~~~

Toolbar 버튼을 활성화/비활성화하려면 컨트롤 값을 *true*(기본값) 또는 *false*로 지정해야 합니다.

사용 가능한 전체 컨트롤 목록은 [Toolbar](guides/diagram_editor/toolbar.md) 문서에서 확인하세요.

## 1.1 -> 2.0 {#11---20}

### 제거된 API {#removed-api}

- diagram.eachChild

### 변경된 API {#changed-api}

- diagram.addItem -> [diagram.data.add](api/data_collection/add_method.md)
- diagram.attachEvent -> [diagram.events.on](guides/event_handling.md#attaching-event-listeners)
- diagram.callEvent -> [diagram.events.fire](guides/event_handling.md#calling-events)
- diagram.clearAll -> [diagram.data.removeAll](api/data_collection/removeall_method.md)
- diagram.deleteItem -> [diagram.data.remove](api/data_collection/remove_method.md)
- diagram.detachEvent -> [diagram.events.detach](guides/event_handling.md#detaching-event-listeners)
- diagram.eachItem -> [diagram.data.map](api/data_collection/map_method.md)
- diagram.getItem -> [diagram.data.getItem](api/data_collection/getitem_method.md)
- diagram.getSelectedId -> `diagram.selection.getId`
- diagram.load -> [diagram.data.load](api/data_collection/load_method.md)
- diagram.parse -> [diagram.data.parse](api/data_collection/parse_method.md)
- diagram.selectItem -> [diagram.selection.add](api/selection/add_method.md)
- diagram.serialize -> [diagram.data.serialize](api/data_collection/serialize_method.md)
- diagram.unselectItem -> [diagram.selection.remove](api/selection/remove_method.md)
- diagram.updateItem -> [diagram.data.update](api/data_collection/update_method.md)
