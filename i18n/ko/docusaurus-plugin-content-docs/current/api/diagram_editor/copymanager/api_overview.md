---
sidebar_label: Copy manager API 개요
title: Copy manager API 개요
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Copy manager 개요를 확인할 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# Copy manager API 개요 {#copy-manager-api-overview}

Diagram Editor의 항목을 복사하고 붙여넣을 때 사용할 수 있는 API 세트입니다. `model` 키워드를 사용하여 `editor` 객체를 통해 Copy manager에 액세스합니다.

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // default 전용
});
// ...
editor.model.copy(); // 선택한 항목을 복사합니다
~~~

## Copy manager 메서드 개요 {#copy-manager-methods-overview}

| Name                                                                     | 설명                                                                 |
| :----------------------------------------------------------------- | :--------------------------------------------------------------------- |
| [](api/diagram_editor/copymanager/methods/copy_method.md)             | @getshort(api/diagram_editor/copymanager/methods/copy_method.md)       |
| [](api/diagram_editor/copymanager/methods/copystyles_method.md)    | @getshort(api/diagram_editor/copymanager/methods/copystyles_method.md) |
| [](api/diagram_editor/copymanager/methods/paste_method.md)         | @getshort(api/diagram_editor/copymanager/methods/paste_method.md)      |
| [](api/diagram_editor/copymanager/methods/pastestyles_method.md)   | @getshort(api/diagram_editor/copymanager/methods/pastestyles_method.md)|
