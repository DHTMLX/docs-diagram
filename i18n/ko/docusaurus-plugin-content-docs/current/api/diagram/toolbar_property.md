---
sidebar_label: toolbar
title: toolbar 속성
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 toolbar 속성에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하십시오.
---

# toolbar

### 설명 {#description}

@short: 선택 사항입니다. 항목에 대한 버튼이 있는 toolbar를 설정하는 아이콘 객체의 배열입니다.

### 사용법 {#usage}

~~~jsx
toolbar?: [
    {
        id: string,
        content: string,
        check?: function,
        css?: function,
        tooltip?: string
    },
    {...} // 다른 아이콘 객체
];
~~~

### 매개변수 {#parameters}

`toolbar` 배열에는 아이콘 객체 집합이 포함됩니다. 각 아이콘 객체는 다음과 같은 매개변수를 가질 수 있습니다:

- `id` - (필수) 아이콘의 id
- `content` - (필수) 아이콘의 콘텐츠입니다. 아이콘 클래스 이름을 가진 HTML 요소를 포함할 수 있습니다
- `check` - (선택 사항) 아이콘을 항목에 적용해야 하는지 확인합니다. 이 함수는 항목 객체를 받아, 해당 항목에 아이콘이 렌더링될 경우 *true*를 반환합니다
- `css` - (선택 사항) 항목에 적용해야 할 CSS 클래스 이름을 반환하는 함수입니다
- `tooltip` - (선택 사항) 아이콘 위에 마우스를 올리면 나타나는 tooltip입니다

### 예제 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    type: "org",
    select: true,
    // 항목에 버튼이 있는 toolbar 설정
    toolbar: [
        {
            id: "add",
            content: "<i class='dxi dxi-plus-box'>",
            check: item => !item.assistant && !item.partner,
            tooltip: "Add new shape"
        },
        {
            id: "download",
            content: "<i class='dxi dxi-download'></i>",
            tooltip: "Download to PDF"
        },
        {
            id: "remove",
            content: "<i class='dxi dxi-delete-outline'>",
            check: item => item.parent,
            css: () => "dhx_diagram_toolbar__icon--remove",
            tooltip: "Remove"
        }
    ]
});
~~~

**변경 로그**:

- `tooltip` 매개변수는 v5.0에서 추가되었습니다

**관련 문서**:

- [도형에 대한 toolbar 설정](guides/diagram/configuration.md#setting-toolbar-for-shapes)
- [기본 아이콘](https://docs.dhtmlx.com/suite/helpers/icon/)

**관련 샘플**: [Diagram. 구성. 도형 toolbar](https://snippet.dhtmlx.com/4if395hd)
