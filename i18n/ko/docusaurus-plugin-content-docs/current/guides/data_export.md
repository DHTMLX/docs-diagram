---
sidebar_label: 다이어그램 내보내기
title: 다이어그램 내보내기
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 다이어그램 내보내기에 대해 알아볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드해 보십시오.
---

# 다이어그램 내보내기

Export 객체의 [pdf()](api/export/pdf_method.md)/[png()](api/export/png_method.md) 메서드를 통해 다이어그램을 PDF 또는 PNG 형식으로 내보낼 수 있습니다:

<iframe src="https://snippet.dhtmlx.com/ybpmz0zk?mode=html" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

내보내기 설정을 조정하려면 필요한 메서드에 구성 옵션이 있는 객체를 전달합니다.

사용 가능한 설정 목록을 확인하십시오:

- [pdf()](api/export/pdf_method.md) 메서드의 경우
- [png()](api/export/png_method.md) 메서드의 경우

## 스타일 내보내기 {#exporting-styles}

기본적으로 Diagram 페이지에 포함된 모든 CSS 스타일이 내보내기 서비스로 전송됩니다. 그 결과 요청 크기가 증가하여 실패할 수 있습니다.

라이브러리를 사용하면 다음을 수행할 수 있습니다:

- 내보내기 서비스로 모든 스타일이 전송되지 않도록
Diagram 객체의 [`exportStyles`](api/diagram/exportstyles_property.md) 구성 속성을 *false*로 설정합니다:

~~~jsx
const diagram = new dhx.Diagram("diagram_container", {
    exportStyles: false
});
~~~

- 원하는 스타일의 절대 경로를 [`exportStyles`](api/diagram/exportstyles_property.md) 배열에 설정하여 내보낼 스타일 집합을 정의합니다:

<iframe src="https://snippet.dhtmlx.com/jm8if6nh?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="650"></iframe>

:::note
상대 경로가 아닌 절대 경로만 사용해야 합니다.
:::
