---
sidebar_label: Diagram Editor 개요
title: Editor 개요
description: 문서에서 DHTMLX JavaScript Diagram 라이브러리에 대한 개요를 확인할 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

import useBaseUrl from '@docusaurus/useBaseUrl';

# DHTMLX Diagram Editor 개요

DHTMLX Diagram 컴포넌트는 깔끔하고 보기 좋은 다이어그램을 만드는 데 디자이너로서의 역량을 시험하고 적용할 수 있는 Editor를 제공합니다.

### 기본 모드의 Editor {#editor-in-the-default-mode}

기본 모드로 초기화된 editor의 인터페이스는 네 가지 기능적 부분으로 구성됩니다.

- [toolbar](guides/diagram_editor/toolbar.md)
- [shapebar](guides/diagram_editor/shapebar.md)
- [grid area](guides/diagram_editor/grid_area.md)
- [editbar](guides/diagram_editor/editbar.md)

다이어그램을 만들려면 shapebar에서 필요한 항목을 드래그하거나 도형 toolbar를 통해 항목의 복사본을 만들어야 합니다.

[editbar의 사이드바 옵션](guides/diagram_editor/editbar.md)을 통해 항목의 속성을 조정할 수 있습니다. 스타일링 프로세스를 가속화하려면 `Alt (Option) + Ctrl (Cmd) + С` 조합을 사용하여 항목의 스타일을 복사하고, `Alt (Option) + Ctrl (Cmd) + V`를 사용하여 선택한 항목에 이 스타일을 적용하십시오.

![](/img/default_editor.png)

**관련 샘플:** [Diagram Editor. 기본 모드. 와이드 순서도](https://snippet.dhtmlx.com/4d4k3o8p?text=diagram&mode=wide)

[shapebar](guides/diagram_editor/shapebar.md)를 사용자 지정할 수 있으며, 사용자 지정 도형을 추가한 경우 해당 도형의 속성에 맞게 [editbar를 구성](api/diagram_editor/editbar/config/properties_property.md)할 수도 있습니다.

### 조직도 모드의 Editor {#editor-in-the-org-chart-mode}

조직도 모드로 초기화된 editor의 인터페이스는 세 가지 기능적 부분으로 구성됩니다.

- [toolbar](guides/diagram_editor/toolbar.md)
- [grid area](guides/diagram_editor/grid_area.md)
- [editbar](guides/diagram_editor/editbar.md)

:::note
이 모드의 editor에는 shapebar가 없습니다
:::

editor의 조직도 모드에서 다이어그램을 만들려면 도형을 선택하고 새 자식을 추가해야 합니다. 도형을 한 부모 항목에서 다른 부모 항목으로 드래그할 수 있습니다. 이동한 항목은 모든 자식 항목과 함께 드래그됩니다.

사용 가능한 [editbar의 사이드바 옵션](guides/diagram_editor/editbar.md)을 통해 도형의 속성을 조정할 수 있습니다. 스타일링 프로세스를 가속화하려면 `Alt (Option) + Ctrl (Cmd) + С` 조합을 사용하여 항목의 스타일을 복사하고, `Alt (Option) + Ctrl (Cmd) + V`를 사용하여 선택한 항목에 이 스타일을 적용하십시오.

![](/img/orgchart_editor_draggable.png)

**관련 샘플:** [Diagram Editor. 조직도 모드. 기본 초기화](https://snippet.dhtmlx.com/og4qm3ja?text=diagram&mode=wide)

조직도 모드의 editor에 사용자 지정 도형을 추가한 경우, 도형의 사용자 지정 속성을 편집할 수 있도록 [editbar를 구성](api/diagram_editor/editbar/config/properties_property.md)할 수 있습니다.

모든 레벨의 부모 도형에 `assistant` 또는 `partner` 항목을 추가할 수 있습니다. assistant 또는 partner 항목은 부모 항목이 될 수 없습니다.

<img
  src={useBaseUrl('/img/orgchart_editor_assistant.png')}
  alt="Org chart editor assistant" width='600'
/>

부모 도형과 그 partner 간의 연결은 항상 수평입니다. 또한 부모에 partner 항목을 추가하면, 연결이 이전에 수직이었더라도 부모 도형과 모든 자식 도형 간의 연결이 수평이 됩니다.

### 마인드맵 모드의 Editor {#editor-in-the-mindmap-mode}

마인드맵 모드로 초기화된 editor의 인터페이스는 세 가지 부분으로 구성됩니다.

- [toolbar](guides/diagram_editor/toolbar.md)
- [grid area](guides/diagram_editor/grid_area.md)
- [editbar](guides/diagram_editor/editbar.md)

:::note
이 모드의 editor에는 shapebar가 없습니다
:::

editor의 마인드맵 모드에서 다이어그램을 만들려면 도형을 선택하고 새 자식을 추가해야 합니다. 도형을 한 부모 항목에서 다른 부모 항목으로 드래그할 수 있습니다. 이동한 항목은 모든 자식 항목과 함께 드래그됩니다.

사용 가능한 [editbar의 사이드바 옵션](guides/diagram_editor/editbar.md)을 통해 도형의 속성을 조정할 수 있습니다. 스타일링 프로세스를 가속화하려면 `Alt (Option) + Ctrl (Cmd) + С` 조합을 사용하여 항목의 스타일을 복사하고, `Alt (Option) + Ctrl (Cmd) + V`를 사용하여 선택한 항목에 이 스타일을 적용하십시오.

 ![](/img/mindmap_editor_draggable.png)

 **관련 샘플:** [Diagram Editor. 마인드맵 모드. 감정 마인드맵](https://snippet.dhtmlx.com/lo1vm0e8?text=diagram&mode=wide)

마인드맵 모드의 editor에 사용자 지정 도형을 추가한 경우, 도형의 사용자 지정 속성을 편집할 수 있도록 [editbar를 구성](api/diagram_editor/editbar/config/properties_property.md)할 수 있습니다.

## 다음 단계 {#whats-next}

여기까지입니다. 이제 다이어그램 작업을 시작하거나 [가이드](guides/overview.md)에서 JavaScript Diagram과 Diagram Editor의 내부 세계를 계속 탐구할 수 있습니다.
