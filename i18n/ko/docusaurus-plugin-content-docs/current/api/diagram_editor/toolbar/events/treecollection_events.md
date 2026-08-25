---
sidebar_label: TreeCollection 이벤트
title: Toolbar의 TreeCollection 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Toolbar의 TreeCollection 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

다음과 같은 [**Suite**](https://docs.dhtmlx.com/suite/)의 [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-events/) 이벤트를 사용할 수 있습니다:

| 이름                                                                                                 | 설명                                           |
| ---------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| [afterAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afteradd_event/)       | 트리 컬렉션에 새 항목을 추가한 후 발생합니다  |
| [afterRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afterremove_event/) | 트리 컬렉션에서 항목을 제거한 후 발생합니다|
| [beforeAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeadd_event/)     | 트리 컬렉션에 새 항목을 추가하기 전에 발생합니다 |
| [beforeRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeremove_event/) | 트리 컬렉션에서 항목을 제거하기 전에 발생합니다|
| [change](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_change_event/)           | 트리 컬렉션이 수정될 때 발생합니다              |
| [filter](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_event/)           | 트리 컬렉션을 필터링한 후 발생합니다               |
| [load](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_load_event/)               | 트리 컬렉션에 항목이 로드될 때 발생합니다      |
| [loadError](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_loaderror_event/)     | 데이터 로드가 실패할 때 발생합니다                      |
| [removeAll](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_event/)     | 트리 컬렉션에서 모든 항목이 제거될 때 발생합니다|

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// "load" 이벤트를 처리합니다
editor.toolbar.events.on("load", () => {
    // some logic here
});
// 새 toolbar 데이터를 로드합니다
editor.toolbar.parse(["file", "spacer", "scale"]);
~~~
