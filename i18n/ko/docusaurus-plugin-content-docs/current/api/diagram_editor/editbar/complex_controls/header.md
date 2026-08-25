---
sidebar_label: Header
title: Editbar 복합 컨트롤 - Header
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Header 컨트롤에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고 코드 예제와 라이브 데모를 사용해 보세요. 그리고 DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Header

@short: Diagram editor의 `"group"` 및 `"swimlane"` 요소의 헤더를 표시하고 수정하기 위한 복합 컨트롤입니다.

<img
  src={useBaseUrl('/img/editbar-complex-controls/header.png')}
  alt="Header control" width='300'
/>

:::info
**Header** 컨트롤은 Diagram editor의 *default* 모드에서 `group` 및 `swimlane` 요소에만 사용할 수 있습니다.
:::

## 사용법 {#usage}

~~~jsx
{
    type: "header",

    hidden?: boolean, // 기본값: false
    disabled?: boolean, // 기본값: false

    css?: string,
    width?: string | number | "content", // 기본값: "content"
    height?: string | number | "content", // 기본값: "content"
    padding?: string | number, // 기본값: "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // 기본값: "left"
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // 기본값: "start"
    compact?: boolean // 기본값: false
}
~~~

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (required) 컨트롤의 유형입니다. `"header"`로 설정하세요
- `hidden` - (optional) 컨트롤의 숨김 여부를 정의합니다. 기본값은 *false*
- `disabled` - (optional) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다. 기본값은 *false*
- `css` - (optional) 컨트롤에 스타일 클래스를 추가합니다
- `width` - (optional) 컨트롤의 너비입니다. 기본값은 `"content"`
- `height` - (optional) 컨트롤의 높이입니다. 기본값은 `"content"`
- `padding` - (optional) 컨트롤 그룹 내부 콘텐츠의 여백을 설정합니다. 기본값은 *"0 16px"*
- `label` - (optional) 컨트롤의 레이블을 지정합니다
- `labelAlignment` - (optional) 레이블의 위치를 정의합니다. 기본값은 `"left"`
- `align` - (optional) 컨트롤 그룹 내부 컨트롤의 정렬을 설정합니다. 기본값은 `"start"`
- `compact` - (optional) 컴팩트 모드를 지정하며, 여백과 프레임을 제거합니다. 기본값은 *false*

## 예제 {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                $group: [
                    {
                        type: "header",
                        label: "Group header style"
                    }
                ]
            }
        }
    }
});
~~~
