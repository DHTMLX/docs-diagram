---
sidebar_label: History manager API 개요
title: History manager API 개요
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 History manager 개요를 확인할 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# History manager API 개요 {#history-manager-api-overview}

Diagram Editor에서 작업 내역을 관리하는 데 사용할 수 있는 API 집합입니다. `editor` 객체를 통해 History manager에 접근하려면 `history` 키워드를 사용하세요:

~~~jsx {5}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // 기본값만 가능
});
// ...
editor.history.redo(); // Undo 작업으로 되돌려진 작업을 복원합니다
~~~

## History manager 메서드 개요 {#history-manager-methods-overview}

| Name                                                           | 설명                                                        |
| :---------------------------------------------------------- | :----------------------------------------------------------------- |
| [](api/diagram_editor/historymanager/methods/add_method.md) | @getshort(api/diagram_editor/historymanager/methods/add_method.md) |
| [](api/diagram_editor/historymanager/methods/disable_method.md) | @getshort(api/diagram_editor/historymanager/methods/disable_method.md) |
| [](api/diagram_editor/historymanager/methods/enable_method.md) | @getshort(api/diagram_editor/historymanager/methods/enable_method.md) |
| [](api/diagram_editor/historymanager/methods/isredo_method.md) | @getshort(api/diagram_editor/historymanager/methods/isredo_method.md) |
| [](api/diagram_editor/historymanager/methods/isundo_method.md) | @getshort(api/diagram_editor/historymanager/methods/isundo_method.md) |
| [](api/diagram_editor/historymanager/methods/redo_method.md) | @getshort(api/diagram_editor/historymanager/methods/redo_method.md) |
| [](api/diagram_editor/historymanager/methods/reset_method.md) | @getshort(api/diagram_editor/historymanager/methods/reset_method.md) |
| [](api/diagram_editor/historymanager/methods/undo_method.md) | @getshort(api/diagram_editor/historymanager/methods/undo_method.md) |

## History manager 속성 개요 {#history-manager-properties-overview}

| Name                                                           | 설명                                                        |
| :---------------------------------------------------------- | :----------------------------------------------------------------- |
| [](api/diagram_editor/historymanager/config/savedelay_property.md) | @getshort(api/diagram_editor/historymanager/config/savedelay_property.md) |
