---
sidebar_label: Diagram 개요
title: Diagram 개요
slug: /
description: 문서에서 DHTMLX JavaScript Diagram 라이브러리에 대한 개요를 확인할 수 있습니다. 개발자 가이드와 API 참조를 살펴보고, 코드 예제와 라이브 데모를 사용해 보고, DHTMLX Diagram의 무료 30일 평가판을 다운로드할 수 있습니다.
---

# DHTMLX Diagram 개요

DHTMLX Diagram은 객체, 개념 또는 생물 간의 관계를 도식, 차트, 조직도, 마인드맵 등과 같은 시각적 형태로 표시할 수 있는 클라이언트 사이드 차트 컴포넌트입니다.
Diagram을 사용하면 복잡하고 방대한 정보를 간단하고 이해하기 쉬운 방식으로 표현할 수 있습니다.

## 기본 모드의 Diagram {#diagram-in-the-default-mode}

DHTMLX Diagram은 [미리 정의된 도형 세트](shapes/default_shapes.md)와 [커넥터](/lines/)를 사용하여 다양한 다이어그램을 만들고, 그 모양과 느낌을 자유롭게 실험할 수 있는 기능을 제공합니다.

원하는 유형의 도형을 선택하고 적절한 커넥터로 연결하여, 특정 프로세스를 구성하는 일련의 작업 순서를 보여주는 다양한 유형의 다이어그램을 다음과 같이 만들 수 있습니다.

| [데이터 계획 모델](https://snippet.dhtmlx.com/e6zm6wh1) | [수직 의사결정 트리](https://snippet.dhtmlx.com/t6t8ay80) | [와이드 순서도](https://snippet.dhtmlx.com/4d4k3o8p) |
| ---------------------------------------------------------- | ------------------------------------------------------------- | ----------------------------------------------------- |
| ![](/img/icon_data_planning_model.png)                   | ![](/img/icon_vert_decision_tree.png)                       | ![](/img/icon_wide_diagram.png)                     |

| [의사결정 트리](https://snippet.dhtmlx.com/7bn52dl1) | [액티비티 다이어그램](https://snippet.dhtmlx.com/a9t2z2dt) |
| ---------------------------------------------------- | ------------------------------------------------------- |
| ![](/img/icon_decision_tree.png)                   | ![](/img/icon_activity.png)                           |

### 사용자 지정 도형 {#custom-shapes}

[직접 만든 도형 템플릿](shapes/custom_shape.md)을 만들어 필요한 다이어그램을 자유롭게 디자인할 수 있습니다. 예를 들어 다음과 같이 잘 알려진 사용자 지정 다이어그램을 만들 수 있습니다.

| [라이프사이클 다이어그램](https://snippet.dhtmlx.com/y4k51owl) | [벤 다이어그램 템플릿](https://snippet.dhtmlx.com/2tzyfois) | [UML 클래스 다이어그램 템플릿](https://snippet.dhtmlx.com/madymxt5) |
| --------------------------------------------------------- | --------------------------------------------------- | -------------------------------------------------------- |
| ![](/img/sticky.png)                                    | ![](/img/venn.png)                                | ![](/img/html.png)                                     |

| [네트워크 다이어그램 템플릿](https://snippet.dhtmlx.com/u1xqyo9w) | [게임 레벨 및 위치](https://snippet.dhtmlx.com/1h4j9gb3) |
| ------------------------------------------------------ | ---------------------------------------------------------------- |
| ![](/img/network.png)                                | ![](/img/game_levels.png)                                      |

### 그룹 {#groups}

Diagram의 요소인 그룹을 활용하여 도형을 다양한 방식으로 그룹화함으로써 단순하거나 더 복잡한 도식을 그릴 수 있습니다. 단일 수준 그룹과 중첩 그룹을 모두 만들고 모양과 동작을 구성할 수 있습니다. 자세한 내용은 [그룹](/groups/) 문서를 확인하십시오.

| [Diagram Editor. 기본 모드. 가상 사설 클라우드 아키텍처](https://snippet.dhtmlx.com/0hf8ahrb) |
| ------------------------------------------------------------------------------------------------ |
| ![](/img/virtual_cloud.png)                                                                    |

### 스윔레인 {#swimlanes}

DHTMLX Diagram 라이브러리의 스윔레인을 사용하면 모든 프로세스(비즈니스, 제조, 서비스 또는 기타)나 그 일부를 처음부터 끝까지 표현할 수 있습니다. 자세한 내용은 [스윔레인](/swimlanes/) 문서를 확인하십시오.

| [Diagram. 기본 모드. 스윔레인 템플릿](https://snippet.dhtmlx.com/z6x5m3gb) |
| ------------------------------------------------------------------------------- |
| ![](/img/swimlane.png)                                                        |

### 라인 제목 {#line-titles}

라인 제목은 Diagram의 기본 모드에서 사용할 수 있습니다. 라인을 더블 클릭하여 텍스트를 추가할 수 있습니다. 또한 더블 클릭으로 텍스트를 편집할 수도 있습니다. 자세한 내용은 [LineTitles](/line_titles/) 문서를 확인하십시오.

<iframe src="https://snippet.dhtmlx.com/e6zm6wh1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 조직도 모드의 Diagram {#diagram-in-the-org-chart-mode}

Diagram에는 도형을 계층적 순서로 라인으로 연결하여 표시하는 조직도 모드도 있습니다.

<iframe src="https://snippet.dhtmlx.com/5ign6fyy?text=diagram&mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### Assistant 및 partner 도형 {#assistant-and-partner-shapes}

모든 레벨의 부모 도형은 assistant 또는 partner 항목을 가질 수 있습니다. assistant 및 partner 도형은 부모 항목이 될 수 없습니다. assistant 및 partner 항목은 [에디터](editor_overview.md#editor-in-the-org-chart-mode)에서 추가하거나 [데이터 세트](guides/loading_data.md#preparing-data-to-load)를 준비하여 추가할 수 있습니다.

계층적 순서에서 assistant 항목은 부모 도형과 자식 도형 사이에 표시됩니다.

| [Diagram editor. 조직도 모드. 기본 초기화](https://snippet.dhtmlx.com/og4qm3ja) |
| ------------------------------------------------------------------------------------------- |
| ![](/img/orgchart_with_assistant.png)                                                     |

부모 도형과 partner 항목 간의 연결은 항상 수평입니다. 또한 부모에 partner 항목을 추가하면, 연결이 이전에 수직이었더라도 부모 도형과 모든 자식 도형 간의 연결이 수평이 됩니다.

partner 도형은 가계도를 만드는 데 매우 유용합니다.

**관련 샘플**: [Diagram editor. 조직도 모드. 가계도](https://snippet.dhtmlx.com/5pfybpmz)

다음은 부모 도형이 1개, 2개, 3개, 4개의 partner를 가질 때 연결이 어떻게 보이는지에 대한 예입니다.

| Partner 1개                               | Partner 2개                              |
| ----------------------------------------- | ------------------------------------------ |
| ![](/img/orgchart_with_one_partner.png) | ![](/img/orgchart_with_two_partners.png) |

| Partner 3개                               | Partner 4개                               |
| -------------------------------------------- | ------------------------------------------- |
| ![](/img/orgchart_with_three_partners.png) | ![](/img/orgchart_with_four_partners.png) |

### 사용자 지정 도형 {#custom-shapes-1}

의료 기관의 계층적 조직 구조를 표현하는 다이어그램을 만들기 위해 사용자 지정 도형을 추가하는 예입니다.

| [Diagram Editor. 조직도 모드. 의료 계층 구조 다이어그램 템플릿](https://snippet.dhtmlx.com/8fubjmlz) |
| -------------------------------------------------------------------------------------------------- |
| ![](/img/medical_hierarchy_overview.png)                                                         |

## 마인드맵 모드의 Diagram {#diagram-in-the-mindmap-mode}

마인드맵 모드는 하위 주제의 가지로 둘러싸인 핵심 주제나 아이디어를 표현하는 데 사용됩니다.

| [Diagram. 마인드맵 모드. 감정 마인드맵](https://snippet.dhtmlx.com/twd25ww1) |
| ------------------------------------------------------------------------------- |
| ![](/img/mindmap_emotions.png)                                                |

도형은 곡선으로 연결되며 다이어그램의 중심 도형을 중심으로 배치됩니다.

### 사용자 지정 도형 {#custom-shapes-2}

다이어그램의 마인드맵 모드에 사용자 지정 템플릿을 추가하여 사이트맵을 만드는 예입니다.

<iframe src="https://snippet.dhtmlx.com/do1jwmw1?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## PERT 모드의 Diagram {#diagram-in-the-pert-mode}

[PERT 모드](api/diagram/type_property.md)는 작업과 프로젝트의 순서 및 그 사이의 연결을 시각화하는 데 사용됩니다. 또한 임계 경로를 파악하고 프로젝트를 계획하는 데도 유용합니다.

PERT 모드의 Diagram은 [DHTMLX Gantt 데이터 구조를 사용](guides/loading_data.md#data-structure-of-diagram-in-the-pert-mode)하며, 이를 통해 [구성 요소 간의 간편한 상호작용](#integrating-pert-diagram-and-dhtmlx-gantt)이 가능합니다. Gantt 데이터 세트를 로드하면 PERT 모드의 Diagram이 작업과 프로젝트 간의 연결을 기반으로 자동으로 정렬됩니다.

<iframe src="https://snippet.dhtmlx.com/4h5fi7xd?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

### PERT Diagram과 DHTMLX Gantt 통합 {#integrating-pert-diagram-and-dhtmlx-gantt}

다음은 PERT 모드의 Diagram과 Gantt 차트를 통합하는 예입니다.

<iframe src="https://snippet.dhtmlx.com/gcnx4a9h?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 도형 검색 {#shape-search}

DHTMLX Diagram은 Diagram 작업을 더 편리하게 만들기 위해 적용할 수 있는 API 세트를 제공합니다.
예를 들어, 대규모 다이어그램 작업을 간소화하는 데 도움이 되는 도형 검색 기능을 구현할 수 있습니다.

<iframe src="https://snippet.dhtmlx.com/d7kvzq4r?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## Diagram 배율 {#diagram-scale}

확대/축소 템플릿을 다이어그램에 적용하여 확대하거나 축소함으로써 모양을 변경할 수 있습니다. 또한 사용자가 선택한 도형에 대한 자세한 정보를 얻을 수 있도록 할 수도 있습니다.

<iframe src="https://snippet.dhtmlx.com/09o8t3o2?mode=result" frameborder="0" class="snippet_iframe" width="100%" height="600"></iframe>

## 다음 단계 {#whats-next}

이제 애플리케이션에서 DHTMLX Diagram Editor를 사용하는 방법을 알아볼 수 있습니다. 이 도구에 대해 자세히 알아보려면 [Diagram Editor 개요](editor_overview.md)를 읽어보십시오. AI 코딩 어시스턴트로 개발하는 경우, [DHTMLX MCP 서버](guides/ai-integrations/mcp-server.md)를 통해 최신 문서에 연결하십시오.
