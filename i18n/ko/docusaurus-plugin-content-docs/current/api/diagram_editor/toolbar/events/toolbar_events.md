---
sidebar_label: Toolbar 이벤트
title: Toolbar의 이벤트
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Toolbar의 이벤트에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

다음과 같은 [**Suite**](https://docs.dhtmlx.com/suite/)의 [`Toolbar`](https://docs.dhtmlx.com/suite/category/toolbar-events/) 이벤트를 사용할 수 있습니다:

| 이름                                                                                 | 설명                                                        |
| ------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| [afterHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_afterhide_event/)      | Toolbar의 하위 항목을 숨긴 후 발생합니다                           |
| [beforeHide](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_beforehide_event/)    | Toolbar의 하위 항목을 숨기기 전에 발생합니다                          |
| [click](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_click_event/)              | 컨트롤을 클릭한 후 발생합니다                                   |
| [input](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_input_event/)              | 입력 필드에 텍스트를 입력할 때 발생합니다                      |
| [inputBlur](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputblur_event/)      | 컨트롤이 포커스를 잃을 때 발생합니다                                    |
| [inputChange](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputchange_event/)  | Toolbar의 Input 컨트롤에서 값을 변경할 때 발생합니다        |
| [inputFocus](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_inputfocus_event/)    | 컨트롤이 포커스를 얻을 때 발생합니다                                    |
| [keydown](https://docs.dhtmlx.com/suite/toolbar/api/toolbar_keydown_event/)          | Toolbar의 컨트롤에 포커스가 있는 상태에서 아무 키나 누르면 발생합니다 |
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
    // some logic here
});
~~~
