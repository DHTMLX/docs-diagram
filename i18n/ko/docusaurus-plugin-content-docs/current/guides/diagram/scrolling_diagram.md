---
sidebar_label: Diagram 스크롤
title: Diagram 스크롤
description: Diagram 스크롤에 대해 DHTMLX JavaScript Diagram 라이브러리 문서에서 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, 무료 30일 평가판 DHTMLX Diagram을 다운로드하세요.
---

# Diagram 스크롤 {#scrolling-diagram}

기본적으로 컴포넌트의 크기는 콘텐츠에 맞게 자동으로 설정됩니다. 필요한 경우 컴포넌트는 HTML 컨테이너의 크기를 따르며, 콘텐츠에 맞게 가로 및 세로 내부 스크롤을 렌더링합니다.

## Diagram 스크롤 {#scrolling-diagram-1}

Diagram 객체의 [`showItem()`](api/diagram/showitem_method.md) 메서드를 사용하면 필요한 항목이 위치한 영역으로 Diagram을 스크롤할 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/d7kvzq4r?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

또는 [`scrollTo()`](api/diagram/scrollto_method.md) 메서드를 사용하여 Diagram의 원하는 위치로 스크롤할 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/f970hbym?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 스크롤 상태 가져오기 {#getting-scroll-state}

Diagram API를 사용하면 관련된 [`getScrollState()`](api/diagram/getscrollstate_method.md) 메서드를 통해 현재 스크롤 위치를 가져올 수 있습니다:

~~~jsx
// 초기 스크롤 위치를 반환
const coords = diagram.getScrollState(); // -> {x:0,y:0}
~~~

이 메서드는 가로 및 세로 스크롤 위치가 담긴 객체를 반환합니다.

## Diagram 스크롤 감지하기 {#catching-diagram-scrolling}

[`scroll`](api/diagram/scroll_event.md) 이벤트를 사용하여 Diagram 스크롤의 시작을 감지할 수 있습니다. 핸들러 함수는 스크롤의 위치를 매개변수로 받습니다:

- `pos` - (*object*) x 및 y 속성을 가진 객체 형태의 스크롤 위치

~~~jsx
diagram.events.on("Scroll", (position) => {
    alert("The diagram has been scrolled:" + position);
});
~~~
