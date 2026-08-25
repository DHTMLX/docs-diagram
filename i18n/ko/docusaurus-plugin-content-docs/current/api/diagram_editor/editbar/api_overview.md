---
sidebar_label: Editbar API 개요
title: Editbar API 개요
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Editbar 개요를 확인할 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 체험해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# Editbar API 개요 {#editbar-api-overview}

[Editbar](guides/diagram_editor/editbar.md)는 Diagram 항목(도형, 선, 그룹 등)을 관리하기 위한 컨트롤을 포함하는 Diagram Editor의 일부입니다. [`view`](api/diagram_editor/editor/config/view_property.md) 구성 객체의 `editbar` 속성을 사용하여 Editbar를 표시, 숨기기 및 구성할 수 있습니다. 다음 두 가지 초기화 방법 중에서 선택할 수 있습니다.

- `editbar:true` 설정을 사용하여 기본 Editbar를 생성하는 방법:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        editbar: true // 기본 Editbar 표시
    }
});
~~~

- [속성 집합](/category/editbar-properties/)이 포함된 객체로 지정하여 Editbar를 구성하는 방법:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // 객체를 통해 Editbar 구성
        editbar: {
            css: "custom_css",
            show: true,
            width: 300,
            controls: {...},
            properties: {...}
        }
    }
});
~~~

Editbar의 사용 가능한 속성을 살펴보려면 [관련 API 섹션](/category/editbar-properties/)을 확인하세요.
