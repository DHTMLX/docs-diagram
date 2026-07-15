---
sidebar_label: png()
title: png 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 png 메서드에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# png()

### 설명 {#description}

@short: 다이어그램을 PNG 파일로 내보냅니다

:::note
내보내기 시 문제가 발생하지 않도록, Diagram 도형에 사용되는 모든 이미지는 base64 형식으로 설정하거나 절대 URL을 통해 설정해야 합니다.
:::

### 사용법 {#usage}

~~~jsx
png(config?: object): Promise<void>;
~~~

### 반환값 {#returns}

데이터 내보내기 Promise

### 매개변수 {#parameters}

- `config` - (optional) 내보내기 설정이 포함된 객체입니다. PNG로 내보내기 위해 다음 설정을 지정할 수 있습니다:
  - `url?: string` - (optional) 내보내기를 실행하고 내보낸 파일을 반환하는 서비스의 URL입니다. 이 설정은 선택 사항이며, 로컬 내보내기 서비스의 경로를 지정해야 하는 경우에만 사용해야 합니다. 기본값은 `https://export.dhtmlx.com/diagram/png/6.1.0`입니다
  - `name?: string` - (optional) 내보낸 파일의 이름입니다
  - `header?: string` - (optional) 내보낸 파일의 머리글에 대한 HTML 템플릿입니다
  - `footer?: string` - (optional) 내보낸 파일의 바닥글에 대한 HTML 템플릿입니다

### 예제 {#example}

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    // 설정 옵션
});
diagram.data.parse(data);

// 기본 내보내기
diagram.export.png()
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));

// 설정 옵션을 사용한 내보내기
diagram.export.png({
    name: "result_png"
})
    .then(() => console.log("success"))
    .catch(() => console.log("failure"))
    .finally(() => console.log("finished"));
~~~

**관련 문서**:  [다이어그램 내보내기](guides/data_export.md)

**관련 예제**:

- [Diagram. 내보내기. 다이어그램 내보내기](https://snippet.dhtmlx.com/ybpmz0zk)
- [Diagram. 내보내기. 좌측 하단 워터마크](https://snippet.dhtmlx.com/d56spdsc)
- [Diagram. 내보내기. 반복 워터마크](https://snippet.dhtmlx.com/emkea55j)
