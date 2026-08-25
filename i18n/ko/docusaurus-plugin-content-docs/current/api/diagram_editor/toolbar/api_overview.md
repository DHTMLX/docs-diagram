---
sidebar_label: Toolbar API 개요
title: Toolbar API 개요
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Toolbar 개요를 확인할 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# Toolbar API 개요 {#toolbar-api-overview}

[Toolbar](guides/diagram_editor/toolbar.md)는 Diagram Editor의 일부로 사용자가 편집 프로세스를 제어할 수 있도록 도와줍니다. Toolbar를 표시, 숨기기 및 구성하려면 [`view`](api/diagram_editor/editor/config/view_property.md) 구성 객체의 `toolbar` 속성을 사용하세요. 다음 두 가지 초기화 방법 중에서 선택할 수 있습니다:

- `toolbar:true` 설정을 사용하여 기본 Toolbar를 생성하는 방법:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true // 기본 Toolbar 표시
    }
});
~~~

- [속성 집합](/category/toolbar-properties/)이 포함된 객체로 지정하여 Toolbar를 구성하는 방법:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // 객체를 통해 Toolbar 구성
        toolbar: {
            css: "custom_css",
            items: ["file", "spacer", "scale"],
            navigationType: "pointer"
        }
    }
});
~~~

사용 가능한 Toolbar의 메서드, 속성 및 이벤트를 살펴보려면 관련 API 섹션을 확인하세요.

## Toolbar 메서드 {#toolbar-methods}

- [Toolbar 메서드 목록](api/diagram_editor/toolbar/methods/overview.md)

## Toolbar 속성 {#toolbar-properties}

- [Toolbar 속성 목록](/category/toolbar-properties/)

## Toolbar 이벤트 {#toolbar-events}

- [Toolbar 이벤트 목록](api/diagram_editor/toolbar/events/overview.md)
