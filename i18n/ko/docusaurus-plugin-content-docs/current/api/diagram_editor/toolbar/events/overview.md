---
sidebar_label: 이벤트 개요
title: Toolbar 이벤트 개요
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Toolbar 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보며, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# Toolbar 이벤트 개요 {#toolbar-events-overview}

다음 [**Suite**](https://docs.dhtmlx.com/suite/)의 [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-events/) 이벤트를 사용할 수 있습니다:

| 이름                                                                                 | 설명                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [afterHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_afterhide_event/)      | Toolbar의 하위 항목을 숨긴 후 발생합니다                           |
| [beforeHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_beforehide_event/)    | Toolbar의 하위 항목을 숨기기 전에 발생합니다                          |
| [click](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_click_event/)              | 컨트롤을 클릭한 후 발생합니다                                   |
| [input](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_input_event/)              | 입력 필드에 텍스트를 입력할 때 발생합니다                      |
| [inputBlur](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputblur_event/)      | 컨트롤이 포커스를 잃을 때 발생합니다                                    |
| [inputChange](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputchange_event/)  | Toolbar의 Input 컨트롤에서 값이 변경될 때 발생합니다        |
| [inputFocus](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputfocus_event/)    | 컨트롤이 포커스를 얻을 때 발생합니다                                    |
| [keydown](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_keydown_event/)          | Toolbar의 컨트롤이 포커스된 상태에서 아무 키나 누르면 발생합니다 |
| [openMenu](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_openmenu_event/)        | 메뉴 컨트롤을 확장할 때 발생합니다                                  |

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// "click" 이벤트를 처리합니다
editor.toolbar.events.on("click", (id, event) => {
    // 로직 작성
});
~~~

# TreeCollection 이벤트 개요 {#treecollection-events-overview}

다음 [**Suite**](https://docs.dhtmlx.com/suite/)의 [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-events/) 이벤트를 사용할 수 있습니다:

| 이름                                                                                                    | 설명                                            |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------ |
| [afterAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afteradd_event/)            | tree collection에 새 항목을 추가한 후 발생합니다   |
| [afterRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_afterremove_event/)      | tree collection에서 항목을 제거한 후 발생합니다 |
| [beforeAdd](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeadd_event/)          | tree collection에 새 항목을 추가하기 전에 발생합니다  |
| [beforeRemove](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_beforeremove_event/)    | tree collection에서 항목을 제거하기 전에 발생합니다   |
| [change](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_change_event/)                | tree collection이 수정될 때 발생합니다               |
| [filter](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_event/)                | tree collection을 필터링한 후 발생합니다                |
| [load](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_load_event/)                    | tree collection에 항목이 로드될 때 발생합니다       |
| [loadError](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_loaderror_event/)          | 데이터 로드가 실패할 때 발생합니다                       |
| [removeAll](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_event/)          | tree collection에서 모든 항목이 제거될 때 발생합니다|

~~~jsx {7-10}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// "load" 이벤트를 처리합니다
editor.toolbar.events.on("load", () => {
    // 여기에 로직 작성
});
// 새 toolbar 데이터 로드
editor.toolbar.parse(["file", "spacer", "scale"]);
~~~
