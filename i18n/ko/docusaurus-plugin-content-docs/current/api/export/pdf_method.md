---
sidebar_label: pdf()
title: pdf 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 pdf 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# pdf()

### 설명 {#description}

@short: 다이어그램을 PDF 파일로 내보냅니다

:::note
내보내기 시 문제가 발생하지 않도록, Diagram 도형에 사용되는 모든 이미지는 base64 형식으로 설정하거나 절대 URL을 통해 설정해야 합니다.
:::

### 사용법 {#usage}

~~~jsx
pdf(config?: object): Promise<void>;
~~~

### 반환값 {#returns}

데이터 내보내기 Promise

### 매개변수 {#parameters}

- `config` - (optional) 내보내기 설정이 포함된 객체입니다. PDF로 내보내기 위해 다음 설정을 지정할 수 있습니다:
    - `url?: string` - (optional) 내보내기를 실행하고 내보낸 파일을 반환하는 서비스의 URL입니다. 이 설정은 선택 사항이며, 로컬 내보내기 서비스의 경로를 지정해야 하는 경우에만 사용해야 합니다. 기본값은 `https://export.dhtmlx.com/diagram/pdf/6.1.0`입니다
    - `name?: string` - (optional) 내보낸 파일의 이름입니다
    - `pdf?: object` - (optional) pdf 옵션 객체입니다. 여기에서 다음 속성을 지정할 수 있습니다:
        - `scale?: number` - (optional) 그리드 렌더링의 배율입니다 (*0.1*에서 *2* 사이)
        - `landscape?: boolean` - (optional) 가로 방향을 정의하며, 기본값은 `false`입니다. `format` 옵션이 지정된 경우에만 작동합니다
        - `width?: string | number` - (optional) 출력 페이지의 너비입니다. 속성 값으로 숫자 또는 단위가 포함된 문자열을 지정할 수 있습니다
        - `height?: string | number` - (optional) 출력 페이지의 높이입니다. 속성 값으로 숫자 또는 단위가 포함된 문자열을 지정할 수 있습니다
        - `margin?: object` - (optional) 용지 여백을 지정하는 객체이며, 기본값은 `none`입니다
            - `left?: string | number` - (optional) 왼쪽 여백을 정의하며, 단위가 포함된 값(px,in,cm,mm)을 허용합니다
            - `right?: string | number` - (optional) 오른쪽 여백을 정의하며, 단위가 포함된 값(px,in,cm,mm)을 허용합니다
            - `top?: string | number` - (optional) 위쪽 여백을 정의하며, 단위가 포함된 값(px,in,cm,mm)을 허용합니다
            - `bottom?: string | number` - (optional) 아래쪽 여백을 정의하며, 단위가 포함된 값(px,in,cm,mm)을 허용합니다
        - `format?: string` - (optional) 용지 형식을 정의합니다. 설정된 경우 `width` 또는 `height` 옵션보다 우선합니다. 기본적으로 지정되지 않습니다. 사용 가능한 모든 [형식 및 크기](#list-of-formats) 목록을 확인하세요.
        - `pageRanges?: string` - (optional) 인쇄할 용지 범위입니다 (예: 1-5, 8, 11-13). `format` 옵션이 지정된 경우에만 작동합니다
        - `displayHeaderFooter?: boolean` - (optional) 머리글과 바닥글의 표시 여부를 정의하며, 기본값은 *false*입니다
        - `footerTemplate?: string` - (optional) 인쇄 바닥글에 대한 HTML 템플릿입니다. 다음 클래스를 사용하여 인쇄 값을 삽입할 수 있는 유효한 HTML 마크업이어야 합니다:
            - `date` - (optional) 형식이 지정된 인쇄 날짜입니다
            - `title` - (optional) 문서 이름입니다
            - `pageNumber` - (optional) 현재 페이지 번호입니다. 기본적으로 사용됩니다
            - `totalPages` - (optional) 문서의 총 페이지 수입니다. 기본적으로 사용됩니다
        - `headerTemplate?: string` - (optional) 인쇄 머리글에 대한 HTML 템플릿입니다. 다음 클래스를 사용하여 인쇄 값을 삽입할 수 있는 유효한 HTML 마크업이어야 합니다:
            - `date` - (optional) 형식이 지정된 인쇄 날짜입니다
            - `title` - (optional) 문서 이름입니다
            - `pageNumber` - (optional) 현재 페이지 번호입니다
            - `totalPages` - (optional) 문서의 총 페이지 수입니다
    - `header?: string` - (optional) 내보낸 파일의 머리글에 대한 HTML 템플릿입니다
    - `footer?: string` - (optional) 내보낸 파일의 바닥글에 대한 HTML 템플릿입니다

### 예제 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    // 설정 옵션
});
diagram.data.parse(data);

// 기본 내보내기
diagram.export.pdf()
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));

// 설정 옵션을 사용한 내보내기
diagram.export.pdf({
    url: "https://export.dhtmlx.com/diagram/pdf/6.1.0",
    name:"result_pdf"
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));
~~~

### 세부 정보 {#details}

:::info
`headerTemplate`/`footerTemplate`의 올바른 표시를 위해 충분한 여백을 설정하세요.
:::

## 형식 목록 {#list-of-formats}

| 형식    | 크기               |
| --------- | ------------------ |
| `"Letter"`  | (8.5in x 11in)     |
| `"Legal"`   | (8.5in x 14in)     |
| `"Tabloid"` | (11in x 17in)      |
| `"Ledger"`  | (17in x 11in)      |
| `"A0"`      | (33.1in x 46.8in)  |
| `"A1"`      | (23.4in x 33.1in)  |
| `"A2"`      | (16.54in x 23.4in) |
| `"A3"`      | (11.7in x 16.54in) |
| `"A4"`      | (8.27in x 11.7in)  |
| `"A5"`      | (5.83in x 8.27in)  |
| `"A6"`      | (4.13in x 5.83in)  |

**관련 문서**:  [다이어그램 내보내기](guides/data_export.md)

**관련 예제**:

- [Diagram. 내보내기. 다이어그램 내보내기](https://snippet.dhtmlx.com/ybpmz0zk)
- [Diagram. 내보내기. 좌측 하단 워터마크](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. 내보내기. 반복 워터마크](https://snippet.dhtmlx.com/emkea55j)
