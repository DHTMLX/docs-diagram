---
sidebar_label: Toolbar 메서드
title: Toolbar의 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Toolbar의 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

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
