---
sidebar_label: 초기화
title: Diagram Editor 초기화
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Diagram Editor를 시작하는 방법을 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram 무료 30일 평가판을 다운로드하세요.
---

# Diagram Editor 초기화 {#diagram-editor-initialization}

이 문서에서는 페이지에 Diagram Editor를 표시하는 과정을 다룹니다. 에디터를 초기화하려면 Editor 전용 소스 파일을 포함하고 `DiagramEditor` 인스턴스를 사용해야 합니다. 그 외의 모든 측면에서 초기화 단계는 Diagram 구성 요소와 동일합니다.

- [DHTMLX Diagram 패키지를 다운로드](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml)하여 프로젝트 폴더에 압축을 풉니다
- [페이지에 소스 파일 포함하기](#including-required-code-files)
- [객체 생성자로 Diagram Editor 초기화하기](#initializing-diagram-editor)
- [Diagram Editor에 데이터 로드하기](#loading-data-into-diagram-editor)

~~~html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
    <link rel="stylesheet" href="../codebase/diagramWithEditor.css">
</head>

<body>
    <div id="editor_container"></div>
    <script>
        // 데이터 준비
        const data = [
            { id: 1, x: 100, y: 40, text: "Start", type: "start", height: 50 },
            { id: 2, x: 100, y: 170, text: "Operation 1", type: "output" },
            { id: 3, x: 100, y: 300, text: "Operation 2", type: "input" },
            { from: 1, to: 2 },
            { from: 2, to: 3 }
            // 추가 객체
        ];

        // Diagram Editor 생성
        const editor = new dhx.DiagramEditor("editor_container", {
            // 구성 옵션
        });

        // 에디터에 데이터 로드
        editor.parse(data);
    </script>
</body>
</html>
~~~

## 필요한 코드 파일 포함하기 {#including-required-code-files}

Diagram Editor를 생성하려면 페이지에 2개의 소스 파일을 포함해야 합니다.

- **diagramWithEditor.js**
- **diagramWithEditor.css**

이 파일에 대한 올바른 상대 경로를 설정했는지 확인하세요.

~~~html
<script type="text/javascript" src="../codebase/diagramWithEditor.js"></script>
<link rel="stylesheet" href="../codebase/diagramWithEditor.css">
~~~

### npm 또는 yarn을 통해 Diagram Editor 설치하기 {#installing-diagram-editor-via-npm-or-yarn}

#### npm 또는 yarn을 통해 체험판 Diagram Editor 설치하기 {#installing-trial-diagram-editor-via-npm-or-yarn}

:::info
Diagram Editor의 체험판을 사용하려면 [**체험판 Diagram 패키지**](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml)를 다운로드하고 *README* 파일에 안내된 단계를 따르세요. 체험판 Diagram Editor는 30일 동안만 사용할 수 있습니다.
:::

#### npm 또는 yarn을 통해 PRO Diagram Editor 설치하기 {#installing-pro-diagram-editor-via-npm-or-yarn}

:::info
[클라이언트 영역](https://dhtmlx.com/clients/)에서 **npm**용 로그인 및 비밀번호를 생성하여 DHTMLX 프라이빗 **npm**에 직접 액세스할 수 있습니다. 자세한 설치 가이드도 해당 페이지에서 확인할 수 있습니다. 프라이빗 **npm** 액세스는 사용자의 독점 Diagram 라이선스가 유효한 동안에만 가능합니다.
:::

## Diagram Editor 초기화하기 {#initializing-diagram-editor}

Diagram Editor는 컨테이너, 문서 body, 또는 레이아웃 셀 안에 초기화할 수 있습니다.

### 컨테이너에서 초기화하기 {#initialization-in-a-container}

컨테이너에서 Diagram Editor를 초기화하려면 `dhx.DiagramEditor` 생성자를 사용하고 다음 두 개의 매개변수를 생성자 함수에 전달합니다.

- Diagram Editor를 배치할 컨테이너. 여기서는 `"editor_container"` id를 지정합니다:

~~~html title="index.html"
<div id="editor_container"></div>
~~~

- [구성 속성](#configuration-properties)이 담긴 객체. 이 인수를 생성자에 전달하지 않으면 기본 설정이 적용됩니다

~~~jsx title="index.js"
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### 문서 body에서 초기화하기 {#initialization-in-the-document-body}

Diagram Editor의 컨테이너 설정을 생략하고 문서 body에 직접 추가할 수도 있습니다.

~~~jsx
const editor = new dhx.DiagramEditor(document.body, {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### 레이아웃 셀에서 초기화하기 {#initialization-in-a-layout-cell}

[레이아웃 셀](https://docs.dhtmlx.com/suite/layout/) 안에서도 에디터를 초기화할 수 있습니다. 이 경우 컨테이너 대신 *null*을 사용합니다.

~~~jsx
const editor = new dhx.DiagramEditor(null, {
    type: "default" // "default" | "org" | "mindmap"
});
const layout = new dhx.Layout("layout", {
    cols: [
        {
            id: "diagram_editor"
        }
    ]
});

layout.getCell("diagram_editor").attach(editor);
~~~

### 구성 속성 {#configuration-properties}

에디터의 구성을 변경하려면 생성자 함수의 두 번째 매개변수로 전달되는 구성 객체에서 원하는 속성을 지정하면 됩니다.

~~~jsx
const editor = new dhx.DiagramEditor("editor_container", {
    type: "default", // "default" | "org" | "mindmap"
    shapeBarWidth: 320,
    lineGap: 20
});
~~~

### 속성 {#properties}

[Editor의 전체 구성 속성 목록](api/diagram_editor/editor/config/overview.md)을 확인하세요.

## Diagram Editor에 데이터 로드하기 {#loading-data-into-diagram-editor}

에디터의 [parse()](api/diagram_editor/editor/methods/parse_method.md) 메서드를 통해 [적절한 데이터 세트](guides/loading_data.md#preparing-data-to-load)를 에디터에 로드할 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/xshe9ut7?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>
