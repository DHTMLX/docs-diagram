---
sidebar_label: Shapebar API 개요
title: Shapebar API 개요
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Shapebar 개요를 확인할 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# Shapebar API 개요 {#shapebar-api-overview}

[Shapebar](guides/diagram_editor/shapebar.md)는 Diagram 항목(도형, 그룹, 스윔레인)의 미리보기를 렌더링하는 Diagram Editor의 일부입니다. Shapebar를 표시하거나 숨기고 구성하려면 [`view`](api/diagram_editor/editor/config/view_property.md) 구성 객체의 `shapebar` 속성을 사용하십시오. 선택할 수 있는 두 가지 초기화 방법이 있습니다:

- `shapebar:true` 설정을 사용하여 기본 Shapebar를 생성하는 방법:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        shapebar: true // 기본 Shapebar를 표시합니다
    }
});
~~~

- [속성 집합](/category/shapebar-properties/)이 있는 객체로 지정하여 Shapebar를 구성하는 방법:

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        // 객체를 통해 Shapebar 구성
        shapebar: {
            css: "custom_css",
            show: true,
            width: 300,
            preview: {
               scale: 0.65,
               gap: 8
            },
            sections: {
                "Swimlane": [{ swimlane: true }],
                "Groups": [{ group: true }],
                "Flowchart shapes": [{ flowShapes: true }],
                "Org shapes, text, topic": [{ org: true }, "text", "topic"]
            }
        }
    }
});
~~~

사용 가능한 Shapebar의 속성을 살펴보려면 [관련 API 섹션](/category/shapebar-properties/)을 확인하십시오.
