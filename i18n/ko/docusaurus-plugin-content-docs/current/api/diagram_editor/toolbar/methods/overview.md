---
sidebar_label: 메서드 개요
title: Toolbar 메서드 개요
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Toolbar 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# Toolbar 메서드 개요 {#toolbar-methods-overview}

:::info
[`parse()`](api/diagram_editor/toolbar/methods/parse_method.md) 메서드를 사용하여 Toolbar의 데이터를 조작할 수 있습니다.
:::

다음과 같은 [**Suite**](https://docs.dhtmlx.com/suite/)의 [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-methods/) 메서드를 사용할 수 있습니다:

| 이름                                                                                  | 설명                                                |
| :------------------------------------------------------------------------------------ | :--------------------------------------------------------- |
| [disable()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_disable_method/)        | Toolbar의 항목을 비활성화하고 흐리게 표시합니다                    |
| [enable()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_enable_method/)          | Toolbar의 비활성화된 항목을 활성화합니다                      |
| [getSelected()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_getselected_method/)| 선택된 항목의 ID로 이루어진 배열을 반환합니다                |
| [getState()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_getstate_method/)      | 컨트롤의 현재 값/상태를 가져옵니다                     |
| [hide()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_hide_method/)              | Toolbar의 항목을 숨깁니다                                   |
| [isDisabled()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_isdisabled_method/)  | Toolbar의 항목이 비활성화되어 있는지 확인합니다              |
| [isSelected()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_isselected_method/)  | 지정된 Toolbar 항목이 선택되어 있는지 확인합니다        |
| [paint()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_paint_method/)            | 페이지에서 Toolbar를 다시 그립니다                                 |
| [select()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_select_method/)          | 지정된 Toolbar 항목을 선택합니다                        |
| [setFocus()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_setfocus_method/)      | ID를 기준으로 Input 컨트롤에 포커스를 설정합니다                   |
| [setState()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_setstate_method/)      | 컨트롤의 값/상태를 설정합니다                             |
| [show()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_show_method/)              | Toolbar의 항목을 표시합니다                                   |
| [unselect()](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_unselect_method/)      | 선택된 Toolbar 항목의 선택을 해제합니다                          |

~~~jsx {7-12}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// "file" 항목을 비활성화합니다
editor.toolbar.disable("$file");
// "file" 및 "scale" 항목을 비활성화합니다
editor.toolbar.disable(["$file", "$scale"]);
// 모든 항목을 비활성화합니다
editor.toolbar.disable();
~~~

# TreeCollection 메서드 개요 {#treecollection-methods-overview}

다음과 같은 [**Suite**](https://docs.dhtmlx.com/suite/)의 [`TreeCollection`](https://docs.dhtmlx.com/suite/category/treecollection-methods/) 메서드를 사용할 수 있습니다:

| 이름                                                                                        | 설명                                                      |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [add()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_add_method/)     | 컴포넌트에 항목을 추가합니다                                        |
| [canCopy()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_cancopy_method/) | 컨트롤을 다른 컨트롤로 복사할 수 있는지 확인합니다 |
| [copy()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_copy_method/)   | 항목의 복사본을 추가하고 지정된 위치에 배치합니다     |
| [eachChild()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_eachchild_method/) | 컨트롤의 하위 항목을 순회합니다                  |
| [eachParent()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_eachparent_method/) | 모든 상위 항목을 순회합니다(직속 상위 항목과 그 상위 항목 등, 상위 항목이 컴포넌트 자체가 될 때까지) |
| [exists()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_exists_method/) | 지정된 항목이 컴포넌트에 존재하는지 확인합니다        |
| [filter()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_filter_method/) | 특정 기준에 따라 컨트롤을 필터링합니다                                |
| [forEach()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_foreach_method/) | 트리 컬렉션의 모든 항목을 순회합니다                   |
| [getFilters()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getfilters_method/) | 적용된 필터가 포함된 객체를 반환합니다               |
| [getId()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getid_method/) | 항목의 ID를 가져옵니다                                             |
| [getIndex()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getindex_method/) | 항목의 현재 위치를 가져옵니다                         |
| [getItem()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getitem_method/) | ID를 기준으로 항목을 가져옵니다                                         |
| [getItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getitems_method/) | 컨트롤의 하위 항목을 가져옵니다                            |
| [getLength()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getlength_method/) | 컨트롤의 하위 항목 수를 셉니다                            |
| [getParent()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getparent_method/) | 컨트롤의 상위 항목 ID를 가져옵니다                   |
| [getRoot()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_getroot_method/) | 마스터 컴포넌트의 ID를 반환합니다                         |
| [haveItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_haveitems_method/) | 항목에 하위 항목이 있는지 확인합니다                        |
| [move()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_move_method/)       | 항목을 다른 위치로 이동합니다                             |
| [refreshItems()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_refreshitems_method/) | 컨트롤의 하위 항목을 새로 고칩니다                   |
| [remove()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_remove_method/)   | 항목을 제거합니다                                                |
| [removeAll()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_removeall_method/) | 컴포넌트에서 모든 컨트롤을 지웁니다                       |
| [resetFilter()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_resetfilter_method/) | 활성 필터를 재설정합니다                              |
| [restoreOrder()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_restoreorder_method/) | 컴포넌트를 정렬/필터링 이전 상태로 복원합니다 |
| [save()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_save_method/) | 트리 컬렉션에서 변경된 내용을 서버 측에 저장합니다           |
| [serialize()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_serialize_method/) | 컴포넌트 데이터를 JSON, XML 또는 CSV 형식으로 직렬화합니다 |
| [sort()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_sort_method/) | 특정 기준에 따라 컨트롤을 정렬합니다                            |
| [update()](https://docs.dhtmlx.com/suite/tree_collection/api/treecollection_update_method/) | 항목을 변경합니다                                                  |

~~~jsx  {7-8}
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default",
    view: {
        toolbar: true
    }
});
// 모든 toolbar 항목을 제거합니다
editor.toolbar.data.removeAll();
~~~
