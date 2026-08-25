---
sidebar_label: 초기화
title: 초기화
description: Diagram을 시작하는 방법에 대해 DHTMLX JavaScript Diagram 라이브러리 문서에서 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, 무료 30일 평가판 DHTMLX Diagram을 다운로드하세요.
---

# Diagram 초기화 {#diagram-initialization}

이 문서에서는 페이지에 DHTMLX Diagram을 추가하는 단계에 대해 설명합니다. 이 과정은 다음과 같은 몇 가지 간단한 단계로 이루어집니다:

- [DHTMLX Diagram 패키지 다운로드](https://dhtmlx.com/docs/products/dhtmlxDiagram/download.shtml) 후 프로젝트 폴더에 압축을 풉니다
- [페이지에 DHTMLX Diagram 소스 파일 포함하기](#including-required-code-files)
- [객체 생성자를 사용하여 Diagram 초기화하기](#initializing-diagram)
- [Diagram에 데이터 로드하기](#loading-data-into-diagram)

~~~html
<!DOCTYPE html>
<html>
<head>
    <script type="text/javascript" src="codebase/diagram.js"></script>
    <link rel="stylesheet" href="codebase/diagram.css">
</head>

<body>
    <div id="diagram_container"></div>
    <script>
        // Diagram 데이터 준비
        const data = [
            { id: 1, x: 100, y: 40, text: "Start", type: "start", height: 50 },
            { id: 2, x: 100, y: 170, text: "Operation 1", type: "output" },
            { id: 3, x: 100, y: 300, text: "Operation 2", type: "input" },
            { from: 1, to: 2 },
            { from: 2, to: 3 }
            // 추가 객체
        ];

        // DHTMLX Diagram 생성
        const diagram = new dhx.Diagram("diagram_container", {
            // config options
        });

        // Diagram에 데이터 로드
        diagram.data.parse(data);
    </script>
</body>
</html>
~~~

## 필수 코드 파일 포함하기 {#including-required-code-files}

Diagram을 생성하려면 페이지에 2개의 소스 파일을 포함해야 합니다:

- **diagram.js**
- **diagram.css**

이 파일들에 대해 올바른 상대 경로를 설정했는지 확인하세요:

~~~html
<script type="text/javascript" src="../codebase/diagram.js"></script>
<link rel="stylesheet" href="../codebase/diagram.css">
~~~

DHTMLX Diagram 패키지의 구조는 다음과 같습니다:

- **sources** - 라이브러리의 소스 코드 파일입니다. 파일은 최소화(minify)되어 있지 않아 읽기 쉬우며, 이 패키지는 주로 컴포넌트 디버깅에 사용하기 위한 것입니다

:::note
Diagram 라이브러리의 **Trial** 버전에는 sources 폴더가 포함되어 있지 않습니다.
:::

- **samples** - 코드 샘플
- **codebase** - 라이브러리의 패키징된 코드 파일입니다. 이 파일들은 훨씬 작으며 프로덕션 환경에서 사용하기 위한 것입니다
:::info
앱에서는 **codebase** 폴더의 파일을 사용해야 합니다
:::

## Diagram 초기화하기 {#initializing-diagram}

Diagram은 컨테이너, 문서 본문, 또는 레이아웃 셀 안에서 초기화할 수 있습니다.

### 컨테이너에서의 초기화 {#initialization-in-a-container}

컨테이너 안에서 Diagram을 초기화하려면 `dhx.Diagram` 생성자를 사용하고 다음 두 개의 매개변수를 생성자 함수에 전달하세요:

- Diagram을 배치할 컨테이너, 여기서는 `"diagram_container"` id를 지정하겠습니다:

~~~html title="index.html"
<div id="diagram_container"></div>
~~~

- [구성 속성](#configuration-properties)이 담긴 객체입니다. 이 인자가 생성자에 전달되지 않으면 기본 설정이 적용됩니다

~~~jsx title="index.js"
const diagram = new dhx.Diagram("diagram_container", {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### 문서 본문에서의 초기화 {#initialization-in-the-document-body}

Diagram의 컨테이너 설정을 생략하고 문서 본문에 직접 추가할 수 있습니다:

~~~jsx
const diagram = new dhx.Diagram(document.body, {
    type: "default" // "default" | "org" | "mindmap"
});
~~~

### 레이아웃 셀에서의 초기화 {#initialization-in-a-layout-cell}

[Layout 셀](https://docs.dhtmlx.com/suite/layout/) 안에서도 Diagram을 초기화할 수 있습니다. 이 경우 컨테이너 대신 *null*을 사용하세요:

~~~jsx
const diagram = new dhx.Diagram(null, {
    type: "default" // "default" | "org" | "mindmap"
});
const layout = new dhx.Layout("layout", {
    cols: [
        {
            id: "diagram"
        }
    ]
});

layout.getCell("diagram").attach(diagram);
~~~

### 구성 속성 {#configuration-properties}

[Diagram의 구성](guides/diagram/configuration.md)을 변경하려면 생성자 함수의 두 번째 매개변수로 전달되는 config 객체에서 원하는 속성을 지정하면 됩니다.

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    scale: 0.7,
    // other config options
});
~~~

[Diagram의 전체 구성 속성 목록](api/diagram/api_overview.md#diagram-properties)을 참고하세요.

**Related sample**:	[Diagram Editor. 기본 모드. 넓은 순서도](https://snippet.dhtmlx.com/4d4k3o8p)

또는 Diagram의 `config` 객체를 통해 특정 옵션에 접근하여 값을 설정/수정할 수도 있습니다. 새로운 구성으로 Diagram을 다시 렌더링하려면 [`paint()`](api/diagram/paint_method.md) 메서드를 호출하는 것을 잊지 마세요:

~~~jsx
const diagram = new dhx.Diagram("diagram_container");
diagram.data.parse(data);

diagram.config.scale = 0.7;
diagram.paint();
~~~

## Diagram에 데이터 로드하기 {#loading-data-into-diagram}

DHTMLX Diagram에 데이터를 로드하는 방법에 대한 자세한 내용은 [데이터 로드 및 저장](guides/loading_data.md) 문서를 참고하세요.
