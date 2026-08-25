---
sidebar_label: parse()
title: Toolbar의 parse 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Toolbar의 parse 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# parse()

### 설명 {#description}

@short: Diagram Editor의 Toolbar에 항목을 로드합니다

### 사용법 {#usage}

~~~jsx
parse(items: (object | string)[]): void;
~~~

### 매개변수 {#parameters}

- `items` - (필수) Toolbar에 파싱되는 항목의 배열입니다. 사용 가능한 전체 항목 목록은 [여기](api/diagram_editor/toolbar/config/items_property.md)에서 확인하세요

### 예제 {#example}

~~~jsx {7-8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "org",
    view: {
        toolbar: true
    }
});
// 지정된 항목으로 toolbar를 표시합니다
editor.toolbar.parse([{ type: "file", disabled: false }, "spacer", "scale"]);
~~~

**변경 로그**: v6.0에서 추가
