---
sidebar_label: margin
title: margin 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 margin 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# margin

### 설명 {#description}

@short: 선택 사항입니다. 다이어그램에서 항목 위치 지정을 위한 여백 설정이 포함된 객체입니다

### 사용법 {#usage}

~~~jsx
margin?: {
    itemX?: number,
    itemY?: number,
    x?: number,
    y?: number
};
~~~

### 매개변수 {#parameters}

`margin` 객체에는 다음 매개변수를 포함할 수 있습니다:

- `itemX` - (선택 사항) 두 도형 사이의 수평 간격([type: "org" | "mindmap"](api/diagram/type_property.md)에만 해당)
- `itemY` - (선택 사항) 두 도형 사이의 수직 간격([type: "org" | "mindmap"](api/diagram/type_property.md)에만 해당)
- `x` - (선택 사항) 다이어그램의 시작과 첫 번째 항목 사이의 수평 간격
- `y` - (선택 사항) 다이어그램의 시작과 첫 번째 항목 사이의 수직 간격

### 기본 설정 {#default-config}

~~~jsx
margin: {
    x: 40, y: 40,
    itemX: 40, itemY: 40
}
~~~

### 예제 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    margin: {
        x: 20, y: 20,
        itemX: 50, itemY: 50
    }
});
~~~

**관련 예제**:

- [Diagram. 조직도 모드. 도형 간 여백](https://snippet.dhtmlx.com/bwe9vm6i)
- [Diagram. 기본 모드. 순서도 사용자 지정 스타일](https://snippet.dhtmlx.com/3wyut2mn)
