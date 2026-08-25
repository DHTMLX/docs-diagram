---
sidebar_label: 인라인 편집
title: 인라인 편집
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 인라인 편집에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# 인라인 편집

인라인 편집을 사용하면 Diagram 항목을 더블클릭하여 텍스트 콘텐츠를 편집할 수 있습니다. Diagram과 에디터 양쪽에서 모두 항목을 편집할 수 있습니다.

선에 대한 인라인 편집은 Diagram의 기본 모드에서만 활성화됩니다.

![](/img/inline_editing.gif)

:::note
인라인 편집은 사용자 지정 도형에는 작동하지 않습니다.
:::

이 기능은 기본적으로 활성화되어 있습니다. 인라인 편집을 비활성화하려면 편집할 수 없게 만들고 싶은 요소의 `editable` 속성을 *false*로 설정하세요.

아래에서 Diagram 항목에 대한 인라인 편집을 비활성화하는 예제를 확인할 수 있습니다.

#### 선 제목 {#line-titles}

~~~jsx title="선의 텍스트 콘텐츠 편집 기능 비활성화" {18}
const data = [
    // 도형 구성
    { "id": "shape_1", "type": "start", "x": 0, "text": "Start" },
    { "id": "shape_2", "type": "process", "x": 400, "text": "Step 1" },
    // 선 구성
    {
        "id": "line_1",
        "type": "line",
        "from": "shape_1",
        "to": "shape_2"
    },
    // 선 제목 구성
    {
        "id": "title_1",
        "type": "lineTitle",
        "parent": "line_1",
        "text": "Some text",
        "editable": false // 선의 텍스트 항목에 대한 인라인 편집 비활성화
    }
];
~~~

#### 도형 {#shapes}

~~~jsx title="도형의 텍스트 콘텐츠 편집 기능 비활성화"
const data = [
    { "id": 1, "x": 280, "y": 0, "text": "Start", "type": "start", "editable": false}
];
~~~

#### 그룹 {#groups}

~~~jsx title="그룹 헤더의 텍스트 콘텐츠 편집 기능 비활성화"
const data = [
    {
        "type": "$group",
        "id": 1,
        "width": 400,
        "height": 200,
        "x": 0,
        "y": 0,
        "header": {
            "text": "Group 1",
            "editable": false
        }
    }
];
~~~

#### 스윔레인 {#swimlanes}

~~~jsx title="스윔레인 헤더와 서브헤더의 텍스트 콘텐츠 편집 기능 구성"
const data = [
    {
        "id": "main",
        "type": "$swimlane",
        "height": 730,
        "width": 1195,
        "header": {
            "closable": true,
            "text": "Waterfall diagram template",
            // 헤더에 대한 인라인 편집 비활성화
            "editable": false
        },
        "layout": [
            [1, 2, 3]
        ],
        "subHeaderCols": {
            "headers": [
                { "text": "September", "fill": "rgba(243, 92, 79, 0.4)" },
                // 서브헤더에 대한 인라인 편집 활성화
                { "text": "October", "fill": "rgba(155, 96, 248, 0.4)", "editable": true },
                { "text": "November", "fill": "rgba(255, 174, 18, 0.4)" }
            ],
            // 모든 서브헤더에 대한 인라인 편집 비활성화
            "editable": false
        }
    }
];
~~~

## 키보드 단축키 {#keyboard-shortcuts}

인라인 텍스트 에디터는 다음 키보드 단축키를 지원합니다.

| 단축키 | 설명 |
|--------|-------------|
| `Ctrl+Enter` (Win), `CMD+Enter` (macOS) | 선택한 요소에 대해 인라인 텍스트 에디터를 엽니다. 더블클릭의 대안으로 작동합니다. 편집 가능한 `text` 속성이 있는 도형에만 적용됩니다. |
| `Shift+Enter` | 에디터를 연 상태로 유지하면서 줄 바꿈(`\n`)을 삽입합니다. |
| `Delete` (`Del`), `Backspace` | 커서 위치의 문자를 삭제합니다. 요소 자체는 삭제하지 않습니다. |
| `Enter` | 현재 텍스트를 확정하고 에디터를 닫습니다. 에디터는 입력하는 대로 변경 사항을 동적으로 적용하므로, Enter를 누르면 편집이 성공적으로 완료되었음을 나타냅니다. |
| `Escape` | 저장하지 않은 모든 변경 사항을 취소하고 에디터를 닫아, 요소의 텍스트를 편집을 시작하기 전 값으로 복원합니다. |

## API 이벤트 {#api-events}

라이브러리에는 에디터가 열리고 닫힐 때의 동작을 제어하고, 항목의 텍스트를 편집하는 과정을 제어하는 데 사용할 수 있는 유용한 [API 이벤트](/api/inline_editor/) 세트가 포함되어 있습니다.
