---
sidebar_label: Text align
title: Editbar 복합 컨트롤 - Text align
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar의 Text align 컨트롤에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Suite의 무료 30일 평가판을 다운로드할 수 있습니다.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# Text align

@short: Diagram 요소 내 텍스트 정렬을 관리하기 위한 복합 컨트롤

<img
  src={useBaseUrl('/img/editbar-complex-controls/textalign.png')}
  alt="Text align control" width='300'
/>

## 사용법 {#usage}

~~~jsx
{
    type: "textAlign",

    hidden?: boolean, // 기본값: false
    disabled?: boolean, // 기본값: false

    css?: string,
    width?: string | number | "content", // 기본값: "content"
    height?: string | number | "content", // 기본값: "content"
    padding?: string | number, // 기본값: "0 16px"

    label?: string,
    labelAlignment?: "left" | "right" | "center", // 기본값: "left"
    align?: "start" | "center" | "end" | "between" | "around" | "evenly", // 기본값: "between"
    compact?: boolean, // 기본값: false

    // 서비스 속성
    $properties?: object
}
~~~

## 설명 {#description}

### 기본 속성 {#basic-properties}

- `type` - (필수) 컨트롤의 유형입니다. `"textAlign"`으로 설정합니다
- `hidden` - (선택 사항) 컨트롤이 숨겨져 있는지 여부를 정의합니다. 기본값은 *false*입니다
- `disabled` - (선택 사항) 컨트롤이 활성화(*false*)되어 있는지 또는 비활성화(*true*)되어 있는지를 정의합니다. 기본값은 *false*입니다
- `css` - (선택 사항) 컨트롤에 스타일 클래스를 추가합니다
- `width` - (선택 사항) 컨트롤의 너비입니다. 기본값은 `"content"`입니다
- `height` - (선택 사항) 컨트롤의 높이입니다. 기본값은 `"content"`입니다
- `padding` - (선택 사항) 컨트롤 그룹 내부 콘텐츠의 패딩을 설정합니다. 기본값은 *"0 16px"*입니다
- `label` - (선택 사항) 컨트롤의 레이블을 지정합니다
- `labelAlignment` - (선택 사항) 레이블의 위치를 정의합니다. 기본값은 `"left"`입니다
- `align` - (선택 사항) 컨트롤 그룹 내부 컨트롤의 정렬을 설정합니다. 기본값은 `"between"`입니다
- `compact` - (선택 사항) 컴팩트 모드를 지정하여 여백과 프레임을 제거합니다. 기본값은 *false*입니다

### 서비스 속성 {#service-properties}

- `$properties` - (선택 사항) 복합 컨트롤 내에서 [기본 컨트롤](api/diagram_editor/editbar/basic_controls_overview.md)의 값을 재정의할 수 있습니다. 기본 컨트롤을 기반으로 **Text align** 컨트롤의 다음 요소를 구성할 수 있습니다:
    - `textAlign` - ([toggleGroup](api/diagram_editor/editbar/basic_controls/togglegroup.md)) 텍스트의 가로 정렬을 설정합니다
    - `textVerticalAlign` - ([toggleGroup](api/diagram_editor/editbar/basic_controls/togglegroup.md)) 텍스트의 세로 정렬을 설정합니다

## 예제 {#example}

~~~jsx {6-11}
const editor= new dhx.DiagramEditor("editor_container", {
    type: "mindmap",
    view: {
        editbar: {
            properties: {
                $shape: [
                    {
                        type: "textAlign",
                        label: "Text align"
                    }
                ]
            }
        }
    }
});
~~~
