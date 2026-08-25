---
sidebar_label: resetFilter()
title: Data Collection의 resetFilter 메서드
description: DHTMLX JavaScript Diagram 라이브러리 문서에서 Data Collection의 resetFilter 메서드를 살펴볼 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드하세요.
---

# resetFilter()

### 설명 {#description}

@short: 활성 필터를 재설정합니다

### 사용법 {#usage}

~~~jsx
resetFilter({
    id?: string,
    permanent?: boolean
}): boolean;
~~~

### 매개변수 {#parameters}

- `config` - (선택) 활성 필터를 재설정하기 위한 매개변수를 지정합니다. config가 지정되지 않았거나 비어 있는 경우, 구성 객체에 `permanent` 속성이 있는 필터를 제외한 모든 필터가 재설정됩니다. 다음 속성을 포함할 수 있습니다:
    - `id` - (선택) 재설정할 필터의 id
    - `permanent` - (선택) 구성에 `permanent:true` 설정이 있는 필터를 포함하여 모든 활성 필터를 재설정하려면 *true*로 설정합니다

### 반환값 {#returns}

이 메서드는 permanent 필터를 포함한 모든 필터가 재설정된 경우 *true*를 반환하고, 그렇지 않으면 *false*를 반환합니다

### 예제 {#example}

~~~jsx {6-7,9-10,12-13}
const diagram = new dhx.Diagram("diagram_container", {
    // 구성 설정
});
diagram.data.parse(data);

// config에 "permanent" 속성이 있는 필터를 제외한 모든 필터를 재설정합니다
diagram.data.resetFilter();

// config에 "permanent" 속성이 있는 필터를 포함한 모든 필터를 재설정합니다
diagram.data.resetFilter({ permanent: true });

// 지정된 id를 가진 필터를 재설정합니다
diagram.data.resetFilter({ id: "filter_id" });
~~~

**변경 로그**: v6.0에서 추가
