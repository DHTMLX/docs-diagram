---
sidebar_label: preview
title: Shapebar의 preview 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Shapebar의 preview 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# preview

### 설명 {#description}

@short: 선택 사항입니다. 항목의 미리보기를 구성하는 객체입니다.

### 사용법 {#usage}

~~~jsx
preview?: {
    scale?: number,
    gap?: string | number
}
~~~

### 매개변수 {#parameters}

- `scale` - (선택 사항) 에디터의 shapebar에 렌더링되는 항목의 배율을 정의합니다.
- `gap` - (선택 사항) shapebar에 렌더링되는 항목 사이의 간격을 지정합니다.

### 기본 설정 {#default-config}

~~~jsx
preview: {
    scale: 0.5,
    gap: "6px 8px"
    // 상단과 하단에는 6px, 좌우에는 8px의 간격을 설정합니다
};
~~~

### 예제 {#example}

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // shapebar: true, // 기본 Shapebar를 표시합니다
        // 또는 객체를 통해 Shapebar 구성
        shapebar: {
            preview: {
               scale: 0.65,
               gap: 8
            }
        }
    }
});
~~~

### 세부 정보 {#details}

`gap`과 `scale` 속성의 값은 도형 객체의 [preview](shapes/configuration_properties.md#properties-specific-for-the-default-mode) 속성에 있는 `gap`과 `scale` 특성을 통해 개별 도형에 대해 재정의할 수 있습니다:

~~~jsx {14-17}
const defaults = {
    rectangle: {
        preview: {
            scale: 0.72,
            gap: 8
        }
    }
}

const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: {
           preview: {
               scale: 0.65,
               gap: 2
            }
        }
    },
    defaults
});
~~~

**관련 문서:** [Shapebar](guides/diagram_editor/shapebar.md#setting-the-preview-of-shapes)

**변경 로그:** v6.0에서 추가
