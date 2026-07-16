---
sidebar_label: Toolbar
title: 에디터 가이드 - Toolbar
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 에디터의 Toolbar에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# Toolbar

Toolbar는 사용자가 편집 프로세스를 제어하는 데 도움이 되는 Diagram Editor의 상단 부분입니다.

![](/img/diagram-editor-toolbar/scale-default-mode.png)

Toolbar를 구성하려면 다음 속성을 사용할 수 있습니다.

- [`css`](api/diagram_editor/toolbar/config/css_property.md) - 사용자 정의 CSS 클래스를 적용합니다

- [`navigationType`](api/diagram_editor/toolbar/config/navigationtype_property.md) - Toolbar 항목을 활성화하는 동작을 정의합니다. 다음 동작 중 하나를 지정할 수 있습니다.
    - `"click"` - 사용자가 클릭하면 Toolbar 항목을 활성화합니다
    - `"pointer"` - 사용자가 마우스 포인터를 올리면 Toolbar 항목을 활성화합니다

- [`items`](api/diagram_editor/toolbar/config/items_property.md) - Toolbar에 배치된 [`items`](#service-elements)(컨트롤)의 배열입니다. Toolbar 항목을 구성하는 방법은 두 가지입니다.
    - [**문자열을 통한 항목 구성**](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-strings)
    - [**객체를 통한 항목 구성**](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-objects)

~~~jsx {9-40}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // toolbar: true, // 기본 Toolbar를 표시합니다
        // 또는 객체를 통해 Toolbar를 구성합니다
        toolbar: {
            css: "custom_css",
            navigationType: "pointer",
            items: [
                {
                    type: "file",
                    items: [
                        "importJson",
                        {
                            type: "exportJson",
                            value: "Export to JSON"
                        },
                        {
                            id: "custom_id_1",
                            type: "menuItem",
                            value: "Server export",
                            icon: "dxi dxi-vault",
                            items: [
                                "exportPdf",
                                {
                                    id: "custom_id_2",
                                    type: "menuItem",
                                    value: "PNG",
                                    handler: editor => {
                                        editor.diagram.export.png();
                                        // 사용자 정의 로직 작성 위치
                                    }
                                }
                            ]
                        }
                    ]
                },
                "spacer",
                "scale"
            ]
        }
    }
});
~~~

## 서비스 요소 {#service-elements}

Toolbar 항목은 **서비스 요소**로 표현됩니다. 다음 서비스 요소를 사용하고 구성할 수 있습니다.

- `file` - 파일 가져오기 및 내보내기를 위한 서비스 요소 그룹을 형성합니다

    <details>
    `file` 항목은 다음과 같은 구조를 가집니다.

    ~~~jsx
    - file
        - importJson
        - export
            - exportJson
            - exportPdf
            - exportPng
    ~~~

    `file` 항목 컬렉션은 다음과 같이 표시됩니다.

    ![](/img/diagram-editor-toolbar/file-default-mode.png)
    </details>

- `importJson` - JSON 형식의 파일을 가져오기 위한 대화 상자를 엽니다

- `export` - 선택한 형식으로 파일을 내보내기 위한 서비스 요소 그룹을 형성합니다

    <details>
    `export` 항목은 다음과 같은 구조를 가집니다.

    ~~~jsx
    - export
        - exportJson
        - exportPdf
        - exportPng
    ~~~
    </details>

- `exportJson` - JSON 형식으로 파일을 내보냅니다

- `exportPdf` - PDF 형식으로 파일을 내보냅니다

- `exportPng` - PNG 형식으로 파일을 내보냅니다

<hr/>

- `edit` - 도형, 선, 그룹, 스윔레인을 관리하고 편집하기 위한 서비스 요소 그룹을 형성합니다

    <details>
    `default` 모드에서 `edit` 항목 컬렉션은 다음과 같은 기본 구조를 가집니다.

    ~~~jsx
    - edit
        - undo
        - redo
        - separator
        - duplicate
        - copy
        - paste
        - separator
        - copyStyle
        - pasteStyle
        - separator
        - selectAll
        - selectNone
    ~~~

    ![](/img/diagram-editor-toolbar/edit-default-mode.png)

    `org`/`mindmap` 모드에서 `edit` 항목 컬렉션은 다음과 같은 기본 구조를 가집니다.

    ~~~jsx
    - edit
        - undo
        - redo
        - separator
        - copyStyle
        - pasteStyle
        - separator
        - selectAll
        - selectNone
    ~~~

    ![](/img/diagram-editor-toolbar/edit-org-mode.png)
    </details>

- `undo` - 변경 기록에서 한 단계 뒤로 이동합니다

- `redo` - 변경 기록에서 한 단계 앞으로 이동합니다

- `duplicate` - 선택한 요소를 복제합니다

- `copy` - 선택한 파일을 `model` 객체에 복사합니다

- `paste` - `model` 객체에서 복사된 파일을 붙여넣습니다

- `copyStyle` - 선택한 요소의 스타일을 `model` 객체에 복사합니다

- `pasteStyle` - `model` 객체에 저장된 스타일을 선택한 요소에 적용합니다

- `selectAll` - 선택 가능한 모든 요소를 선택합니다

- `selectNone` - 사용 가능한 모든 항목의 선택을 해제합니다

<hr/>

- `view` - Diagram Editor 요소의 보기를 관리하기 위한 서비스 요소 그룹을 형성합니다

    <details>
    `default` 모드에서 `view` 항목 컬렉션은 다음과 같은 기본 구조를 가집니다.

    ~~~jsx
    - view
        - theme
            - themeLight
            - themeDark
            - themeLightContrast
            - themeDarkContrast
        - separator
        - shapebar
        - editbar
        - grid
        - separator
        - connectionPoints
        - resizePoints
        - magnetic
        - separator
        - zoomIn
        - zoomOut
    ~~~

    ![](/img/diagram-editor-toolbar/view-default-mode.png)

    `org`/`mindmap` 모드에서 `view` 항목 컬렉션은 다음과 같은 기본 구조를 가집니다.

    ~~~jsx
    - view
        - theme
            - themeLight
            - themeDark
            - themeLightContrast
            - themeDarkContrast
        - separator
        - editbar
        - separator
        - grid
        - separator
        - resizePoints
        - itemsDraggable
        - separator
        - zoomIn
        - zoomOut
    ~~~

    ![](/img/diagram-editor-toolbar/view-org-mode.png)
    </details>

- `theme` - 테마를 적용하기 위한 서비스 요소 그룹을 형성합니다

    <details>
    `theme` 항목은 다음과 같은 구조를 가집니다.

    ~~~jsx
    - theme
        - themeLight
        - themeDark
        - themeLightContrast
        - themeDarkContrast
    ~~~
    </details>

- `themeLight` - **Light** 테마를 적용합니다

- `themeDark` - **Dark** 테마를 적용합니다

- `themeLightContrast` - **LightContrast** 테마를 적용합니다

- `themeDarkContrast` - **DarkContrast** 테마를 적용합니다

- `shapebar` - `Shapebar` 패널을 표시하거나 숨깁니다

- `editbar` - `Editbar` 패널을 표시하거나 숨깁니다

- `grid` - Grid 영역에서 `grid`를 표시하거나 숨깁니다

- `connectionPoints` - **연결 지점**을 표시하거나 숨깁니다

- `resizePoints` - **크기 조정 지점**을 표시하거나 숨깁니다

- `magnetic` - `magnetic` 기능을 켜거나 끕니다

- `zoomIn` - 배율 값을 0.05(5%)만큼 늘립니다

- `zoomOut` - 배율 값을 0.05(5%)만큼 줄입니다

<hr/>

- `arrange` - Diagram Editor 요소를 정렬하기 위한 서비스 요소 그룹을 형성합니다

    <details>
    `default` 모드에서 `arrange` 항목 컬렉션은 다음과 같은 기본 구조를 가집니다.

    ~~~jsx
    - arrange
        - layout
            - layoutMode
                - layoutModeDirect
                - layoutModeEdges
            - separator
            - layoutOrthogonal
            - layoutRadial
        - align
            - alignHorizontalLeft
            - alignHorizontalCenter
            - alignHorizontalRight
            - separator
            - alignVerticalTop
            - alignVerticalCenter
            - alignVerticalBottom
        - distribute
            - distributeVertical
            - distributeHorizontal
    ~~~

    ![](/img/diagram-editor-toolbar/arrange-default-mode.png)
    </details>

- `layout` - Diagram Editor 요소를 자동 배치하기 위한 서비스 요소 그룹을 형성합니다

    <details>
    `layout` 항목은 다음과 같은 구조를 가집니다.

    ~~~jsx
    - layout
        - layoutMode
            - layoutModeDirect
            - layoutModeEdges
        - separator
        - layoutOrthogonal
        - layoutRadial
    ~~~
    </details>

- `layoutMode` - 자동 배치 모드를 관리하기 위한 서비스 요소 그룹을 형성합니다

    <details>
    `layoutMode` 항목은 다음과 같은 구조를 가집니다.

    ~~~jsx
    - layoutMode
        - layoutModeDirect
        - layoutModeEdges
    ~~~
    </details>

- `layoutModeDirect` - 요소 커넥터의 `direct` 모드를 적용합니다

- `layoutModeEdges` - 요소 커넥터의 `edges` 모드를 적용합니다

- `layoutOrthogonal` - 요소 배치의 `orthogonal` 모드를 적용합니다

- `layoutRadial` - 요소 배치의 `radial` 모드를 적용합니다

- `align` - Diagram Editor 요소의 정렬을 관리하기 위한 서비스 요소 그룹을 형성합니다

    <details>
    `align` 항목은 다음과 같은 구조를 가집니다.

    ~~~jsx
    - align
        - alignHorizontalLeft
        - alignHorizontalCenter
        - alignHorizontalRight
        - separator
        - alignVerticalTop
        - alignVerticalCenter
        - alignVerticalBottom
    ~~~
    </details>

- `alignHorizontalLeft` - 요소를 수평으로 왼쪽에 정렬합니다

- `alignHorizontalCenter` - 요소를 수평으로 가운데에 정렬합니다

- `alignHorizontalRight` - 요소를 수평으로 오른쪽에 정렬합니다

- `alignVerticalTop` - 요소를 수직으로 위쪽에 정렬합니다

- `alignVerticalCenter` - 요소를 수직으로 가운데에 정렬합니다

- `alignVerticalBottom` - 요소를 수직으로 아래쪽에 정렬합니다

- `distribute` - Diagram Editor 요소를 분산 배치하기 위한 서비스 요소 그룹을 형성합니다

    <details>
    `distribute` 항목은 다음과 같은 구조를 가집니다.
    ~~~jsx
    - distribute
        - distributeVertical
        - distributeHorizontal
    ~~~
    </details>

- `distributeVertical` - 요소를 수직으로 분산합니다

- `distributeHorizontal` - 요소를 수평으로 분산합니다

<hr/>

- `scale` - 사용자가 배율 값을 0.05(5%)만큼 늘리거나 줄일 수 있는 컨트롤입니다

    <details>
    `scale` 항목은 다음과 같이 표시됩니다.

    ![](/img/diagram-editor-toolbar/scale-default-mode.png)
    </details>

- [`separator`](https://docs.dhtmlx.com/suite/toolbar/api/api_separator_properties/) - 항목/항목 그룹을 서로 구분하는 수평(메뉴 옵션 사이) 또는 수직(툴바 컨트롤 사이) 선입니다.

- [`spacer`](https://docs.dhtmlx.com/suite/toolbar/api/api_spacer_properties/) - 컨트롤 정렬에 사용되는 툴바의 공간입니다

## 기본 요소 {#base-elements}

[**서비스 요소**](#service-elements) 외에도, [객체](api/diagram_editor/toolbar/config/items_property.md#configuring-items-via-objects) 방식을 사용하여 다음과 같은 **기본 요소**를 지정하고 구성할 수도 있습니다.

- [Button](https://docs.dhtmlx.com/suite/toolbar/button/)
- [Custom HTML](https://docs.dhtmlx.com/suite/toolbar/customhtmlbutton/)
- [Datepicker](https://docs.dhtmlx.com/suite/toolbar/datepicker/)
- [ImageButton]( https://docs.dhtmlx.com/suite/toolbar/image_button/)
- [Input](https://docs.dhtmlx.com/suite/toolbar/input/)
- [MenuItem](https://docs.dhtmlx.com/suite/toolbar/menuitem/)
- [NavItem](https://docs.dhtmlx.com/suite/toolbar/navitem/)
- [SelectButton](https://docs.dhtmlx.com/suite/toolbar/selectbutton/)
- [Separator](https://docs.dhtmlx.com/suite/toolbar/separator/)
- [Spacer](https://docs.dhtmlx.com/suite/toolbar/spacer/)
- [Title](https://docs.dhtmlx.com/suite/toolbar/title/)

아래 예제는 Toolbar에 [Button](https://docs.dhtmlx.com/suite/toolbar/button/) 컨트롤을 추가하는 방법을 보여줍니다.

~~~jsx {8-11}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org", // "default" | "org" | "mindmap"
    view: {
        // toolbar: true, // 기본 Toolbar를 표시합니다
        // 또는 객체를 통해 Toolbar를 구성합니다
        toolbar: {
            items: [
                {
                    type: "button",
                    value: "Best button"
                }
            ]
        }
    }
});
~~~

**기본 요소**의 내부 속성 외에도([Separator](https://docs.dhtmlx.com/suite/toolbar/separator/), [Spacer](https://docs.dhtmlx.com/suite/toolbar/spacer/), [Title](https://docs.dhtmlx.com/suite/toolbar/title/) 제외) 다음 속성도 사용할 수 있습니다.

- `checkIcon` - (선택 사항) - 아이콘 CSS 클래스를 반환하는 핸들러입니다. 다음 인수와 함께 호출됩니다.
    - `editor` - Diagram Editor 객체

~~~jsx
checkIcon?: (editor: IDiagramEditor) => string; // 아이콘을 포함하는 기본 요소에만 사용하세요
~~~

- `handler` - (선택 사항) - `click` 또는 `inputChange` 이벤트가 발생할 때 실행되는 핸들러입니다. 다음 인수와 함께 호출됩니다.
    - `editor` - Diagram Editor 객체
    - `event` - [네이티브 이벤트](https://developer.mozilla.org/en-US/docs/Web/API/Event)

~~~jsx
handler?: (editor: object, event: Event) => void;
~~~

**관련 샘플**: [에디터가 포함된 Diagram. 기본 모드. 카드, editbar, toolbar, shapebar 사용자 정의](https://snippet.dhtmlx.com/1p0wemnn)
