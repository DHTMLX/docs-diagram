---
sidebar_label: addShape()
title: addShape 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 addShape 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# addShape()

### 설명 {#description}

@short: 사용자 지정 도형을 생성합니다

`addShape()` 메서드는 다이어그램과 에디터 모두에서 사용할 수 있습니다. [아래 예제를 확인하세요](#example)

### 사용법 {#usage}

~~~jsx
addShape(
    type: string,
    parameters: object
): void;
~~~

### 매개변수 {#parameters}

- `type` - (필수) 사용자 지정 도형 유형의 고유한 이름입니다. 이 이름은 기본 도형의 이름과 달라야 합니다
- `parameters` - (필수) `addShape()` 메서드의 추가 매개변수가 담긴 객체입니다. 여기에서 다음 속성을 지정할 수 있습니다:
    - `template: function` - (필수) 도형의 구성 객체를 매개변수로 받아 HTML 또는 SVG 템플릿을 반환하는 함수입니다
    - [`defaults: object`](shapes/custom_shape.md) - (선택 사항) 생성된 도형의 기본 구성입니다. [도형의 전체 구성 속성 목록](shapes/configuration_properties.md)을 참조하세요
    - [`eventHandlers: object`](shapes/custom_shape.md#event-handlers-for-custom-shapes) - (선택 사항) 도형 템플릿의 HTML 요소에 사용자 지정 이벤트 핸들러를 추가합니다. `eventHandlers` 객체는 다음과 같은 `key:value` 쌍의 집합을 포함합니다:
        - `key: string` - 이벤트의 이름입니다. 이벤트 이름 앞에는 'on' 접두사가 사용된다는 점에 유의하세요(onclick, onmouseover)
        - `value: object` - 다음과 같은 `key:value` 쌍을 포함하는 객체입니다:
          - `key`는 핸들러가 적용될 CSS 클래스 이름입니다
          - `value`는 두 개의 매개변수를 받는 함수입니다:
            - `event: object` - (필수) 이벤트 객체입니다
            - `shape: object` - (필수) 도형 객체입니다

        :::tip
        사용자 지정 이벤트 핸들러를 초기화할 때는 서로 다른 사용자 지정 도형에 대해 서로 다른 CSS 클래스를 사용하는 것이 좋습니다.
        :::

### 예제 {#example}

~~~jsx {8-37} title="다이어그램에 도형 추가하기"
const diagram = new dhx.Diagram("diagram_container", {
    type: "org", //  또는 type: "default", 또는 type: "mindmap"
    defaultShapeType: "personal",
});

diagram.data.parse(data);

diagram.addShape("personal", {
    template: ({ name, photo, post }) => (`
        <div class="dhx_diagram_template_a_box dhx_diagram_template_a">
            <div class="dhx_diagram_template_a__inside">
                <div class="dhx_diagram_template_a__picture" style="background-image: url(${photo});"></div>
                <div class="dhx_diagram_template_a__body">
                    <div class="dhx_diagram_template_a__title">${name}</div>
                    <div class="dhx_diagram_template_a__row">
                        <span class="dhx_diagram_template_a__text">${post}</span>
                    </div>
                </div>
                <div class="toggle--open-menu">
                    <span class="dhx_diagram_template_a__icon mdi mdi-dots-vertical"></span>
                </div>
            </div>
        </div>
    `),
    defaults: {
        height: 115, width: 330,
        name: "Name and First name",
        post: "Resident",
        photo: "",
    },
    eventHandlers: {
        onclick: {
            "toggle--open-menu": () => console.log("open menu")
        }
    }
});
~~~

**Related sample**: [Editor가 포함된 Diagram. 조직도 모드. 카드, 편집 바 및 도구 모음 사용자 지정](https://snippet.dhtmlx.com/vcnt647v)

아래 예제는 Diagram Editor에 사용자 지정 도형을 추가하는 방법과 함께, 에디터의 [Shapebar](guides/diagram_editor/shapebar.md) 및 [Editbar](guides/diagram_editor/editbar.md) 패널을 구성하는 방법을 보여줍니다. Editor의 editbar에서 사용자 지정 도형을 구성하는 것은 Editbar 패널의 [`properties`](api/diagram_editor/editbar/config/properties_property.md) 속성을 통해 구현됩니다.

~~~jsx {34-49} title="다이어그램 에디터에 도형 추가하기"
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
            <section class="dhx_diagram_template_d">
                <img class="dhx_diagram_template_d__image" src="${img}" alt="${text}"></img>
                <span class="dhx_diagram_template_d__title">${text}</span>
                <span class="dhx_diagram_template_d__text">${ip}</span>
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

**Change log**: `properties` 속성은 v6.0에서 제거되었습니다.

**Related article**: [사용자 지정 도형](shapes/custom_shape.md)

**Related samples**:

- [Diagram. 마인드맵 모드. 사이트맵 및 사용자 흐름 예제(사용자 지정 템플릿)](https://snippet.dhtmlx.com/do1jwmw1)
- [Editor가 포함된 Diagram. 조직도 모드. 카드, 편집 바 및 도구 모음 사용자 지정](https://snippet.dhtmlx.com/vcnt647v)
- **Related sample**: [Diagram Editor. 기본 모드. 기본 및 사용자 지정 테마](https://snippet.dhtmlx.com/9twmlfus)
