---
sidebar_label: Arrange
title: Editbar 복합 컨트롤 - Arrange
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Arrange 컨트롤에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고 코드 예제와 라이브 데모를 사용해 보세요. 그리고 DHTMLX Suite의 무료 30일 평가판을 다운로드하세요.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Arrange

@short: Diagram 요소의 너비, 높이, 회전 각도, x 및 y 속성을 편집하기 위한 복합 컨트롤입니다.

<img
  src={useBaseUrl('/img/editbar-complex-controls/arrange.png')}
  alt="Arrange control" width='300'
/>

:::info
**Arrange** 컨트롤은 Diagram editor의 *default* 모드에서 `line` 및 `lineTitle` 요소를 제외한 모든 요소에 사용할 수 있습니다.
:::

## 사용법 {#usage}

~~~jsx
{
    type: "arrange",

    hidden?: boolean, // 기본값: false
    disabled?: boolean, // 기본값: false

    css?: string,
    width?: string | number | "content", // 기본값: "content"
    height?: string | number | "content", // 기본값: "content"
    padding?: string | number, // 기본값: "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // 기본값: "left"
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // 기본값: "start"
    compact?: boolean, // 기본값: false

    // 서비스 속성
    $properties?: object
}
~~~

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (required) 컨트롤의 유형입니다. `"arrange"`로 설정하세요
- `hidden` - (optional) 컨트롤의 숨김 여부를 정의합니다. 기본값은 *false*
- `disabled` - (optional) 컨트롤의 활성화(*false*) 또는 비활성화(*true*) 여부를 정의합니다
- `css` - (optional) 컨트롤에 스타일 클래스를 추가합니다
- `width` - (optional) 컨트롤의 너비입니다. 기본값은 `"content"`
- `height` - (optional) 컨트롤의 높이입니다. 기본값은 `"content"`
- `padding` - (optional) 컨트롤 그룹 내부 콘텐츠의 여백을 설정합니다. 기본값은 *"0 16px"*
- `label` - (optional) 컨트롤의 레이블을 지정합니다
- `labelAlignment` - (optional) 컨트롤 레이블의 위치를 정의합니다. 기본값은 `"left"`
- `align` - (optional) 컨트롤 그룹 내부 컨트롤의 정렬을 설정합니다. 기본값은 `"start"`
- `compact` - (optional) 컴팩트 모드를 지정하며, 여백과 프레임을 제거합니다. 기본값은 *false*

### 서비스 속성 {#service-properties}

- `$properties` - (optional) 복합 컨트롤 내에서 [기본 컨트롤](api/diagram_editor/editbar/basic_controls_overview.md)의 값을 재정의할 수 있습니다. 기본 컨트롤을 기반으로 **Arrange** 컨트롤의 다음 요소를 구성할 수 있습니다:
    - `x` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) Diagram 요소의 x축 위치를 설정합니다
    - `y` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) Diagram 요소의 y축 위치를 설정합니다
    - `width` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) Diagram 요소의 너비(px)를 설정합니다
    - `height` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) Diagram 요소의 높이(px)를 설정합니다
    - `angle` - ([input](api/diagram_editor/editbar/basic_controls/input.md)) Diagram 요소의 회전 각도를 설정합니다

## 예제 {#example}

~~~jsx {7-13}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: {
            properties: {
                rectangle: [
                    {
                        type: "arrange",
                        disabled: true,
                        $properties: {
                            angle: { hidden: true } // "input" 기본 컨트롤의 구성
                        }
                    }
                ]
            }
        }
    }
});
~~~
