---
sidebar_label: DHTMLX MCP 서버
title: 도형 및 커넥터 API를 위한 DHTMLX Diagram MCP 서버
description: AI 어시스턴트를 MCP 서버에 연결하면 도형, 스윔레인, 조직도, Diagram Editor에 관한 최신 DHTMLX Diagram 문서를 찾습니다.
---

# DHTMLX Diagram MCP 서버: 도형, 커넥터, 에디터 API {#dhtmlx-diagram-mcp-server-shapes-connectors-and-editor-apis}

[DHTMLX Diagram](/)은 [도형 지오메트리](/shapes/configuration_properties), [커넥터 라우팅](/lines/), [레이아웃 규칙](/guides/diagram/configuration)에 대한 실질적인 제어 권한을 제공하며, 에디터가 허용하도록 구성된 모든 옵션까지 포함합니다. 생성된 코드는 이전 학습 스냅샷 상태가 아니라 최신 도형 속성, 커넥터 메서드, 레이아웃 옵션을 반영해야 합니다.

DHTMLX MCP 서버는 바로 이 문제를 해결하기 위한 것으로, 도형을 하나라도 그리기 전에 최신 Diagram 문서를 어시스턴트에게 제공합니다. [스윔레인](/swimlanes/), [커스텀 도형](/shapes/custom_shape), [Diagram Editor](/guides/diagram_editor/initialization) 또는 라이브러리의 다른 어떤 부분을 다루든, 어시스턴트는 응답을 생성하기 전에 최신 참조 자료를 가져옵니다.

### MCP 엔드포인트 {#mcp-endpoint}

~~~
https://docs.dhtmlx.com/mcp
~~~

:::note
DHTMLX MCP 서버는 DHTMLX Diagram뿐만 아니라 모든 주요 DHTMLX 제품을 지원합니다. 어떤 구성 요소로 작업하든 동일한 엔드포인트와 구성 단계가 적용됩니다.
:::

## MCP 서버로 더 빨라지는 Diagram 작업 {#diagram-work-the-mcp-server-speeds-up}

DHTMLX Diagram 문서는 MCP 서버의 인덱스에 저장되어 있습니다. 개발자는 다음과 같은 작업을 위해 이를 조회합니다.

- [도형](/shapes/default_shapes), [선](/lines/), [그룹](/groups/), [스윔레인](/swimlanes/)의 최신 API 조회.
- 설명을 기반으로 즉시 실행 가능한 Diagram 코드를 생성.
- [Editor](/guides/diagram_editor/initialization) 구성 옵션, 툴바 컨트롤, 이벤트 처리 방식 탐색.
- [내보내기](/guides/data_export) 옵션을 확인하고 PDF 또는 PNG 출력을 생성하는 방법을 이해.
- [다이어그램 구성](/guides/diagram/configuration)을 사용하여 기본 모드 다이어그램의 자동 레이아웃 옵션을 구성.
- 사용 가능한 [데이터 메서드](/guides/loading_data)를 사용하여 다이어그램 데이터를 로드하고 다시 직렬화.
- 사용자 상호작용에 대응하기 위해 [Diagram 및 Editor 이벤트](/guides/event_handling)를 처리.
- React, Vue, Angular, Svelte에 대한 [TypeScript 지원](/guides/using_typescript) 및 프레임워크 통합 탐색.

## Diagram MCP 서버 요청 내부 살펴보기 {#inside-a-diagram-mcp-server-request}

DHTMLX MCP 서버는 Model Context Protocol(MCP) 위에서 검색 증강 생성(Retrieval-Augmented Generation, RAG) 파이프라인을 실행하며, 각 쿼리를 두 가지 워크플로 중 하나로 라우팅합니다. 하나는 어시스턴트가 참고할 관련 참조 페이지를 가져오는 *Search*이고, 다른 하나는 해당 페이지를 읽고 완성된 답변을 바로 반환하는 *Inference*입니다. 요청 중 실제로 Diagram 문서가 필요한 부분은 일부에 불과하며, 어시스턴트는 먼저 그 부분만 추출한 뒤 나머지는 스스로 처리합니다.

예를 들어 *"내부 HR API에서 직원 기록을 가져와 부서별로 자동 배치하는 DHTMLX Diagram 조직도를 어떻게 만드나요?"*라는 프롬프트에서는 다음과 같은 과정을 거칩니다.

1. 어시스턴트는 문서가 필요한 부분, 즉 JSON 데이터 세트로 구성된 조직도의 자동 레이아웃을 설정하는 방법을 찾아냅니다.
2. 서버는 이를 다이어그램 구성 문서와 매칭합니다.
3. 답변에 생성된 코드가 필요하므로 *Search*로 라우팅됩니다(자동 레이아웃을 제어하는 메서드가 무엇인지와 같은 더 좁은 범위의 사실 확인 질문이라면 *Inference*로 라우팅됩니다).
4. *Search*는 최신 Diagram 문서로 구축된 벡터 인덱스에서 일치하는 페이지를 가져옵니다.
5. 이 페이지들은 컨텍스트로 어시스턴트에게 반환됩니다.
6. 어시스턴트는 해당 컨텍스트를 사용해 자동 레이아웃을 구성한 다음, Diagram API를 추측하는 대신 자체 지식을 바탕으로 HR API 가져오기 로직을 작성합니다.

이러한 과정을 통해 생성된 Diagram 코드는 현재 문서 상태와 일치하게 유지됩니다.

## AI 도구에 MCP 서버 연결하기 {#bringing-the-mcp-server-into-your-ai-tool}

아래의 각 도구는 저마다의 방식으로 동일한 MCP 엔드포인트에 연결합니다. 일부는 CLI 플래그를 사용하고, 다른 일부는 JSON 구성 블록을 사용합니다. 도구별로 한 번만 등록하면 이후 해당 도구에서 여는 모든 Diagram 프로젝트에 연결이 유지됩니다.

~~~
https://docs.dhtmlx.com/mcp
~~~

가장 많이 사용되는 도구에 대한 설정 방법은 아래에 나와 있습니다.

### Claude Code 설정 {#claude-code-setup}

:::info
Claude Code에 MCP 서버를 연결하는 방법에 대한 자세한 내용은 [공식 문서](https://code.claude.com/docs/en/mcp)에서 확인할 수 있습니다.
:::

Claude Code에 DHTMLX MCP 서버를 추가하는 가장 빠른 방법은 CLI를 사용하는 것입니다.

~~~bash
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

수동으로 구성하려면 `.mcp.json` 파일에 다음 항목을 추가합니다.

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor 설정 {#cursor-setup}

:::info
Cursor의 [공식 문서](https://cursor.com/en-US/docs/mcp)에서 모든 MCP 구성 옵션을 단계별로 확인할 수 있습니다.
:::

다음 단계에 따라 DHTMLX MCP 서버를 Cursor에 연결합니다.

1. 설정을 엽니다(Mac에서는 `Cmd+Shift+J`, Windows/Linux에서는 `Ctrl+Shift+J`)
2. **Tools & MCP**로 이동합니다
3. **Add Custom MCP**를 클릭합니다
4. 다음 구성을 붙여넣습니다

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Google Antigravity {#google-antigravity}

#### Antigravity 2.0 {#antigravity-20}

:::info
Antigravity의 [공식 문서](https://antigravity.google/docs/mcp)에서 MCP 서버 통합에 대한 모든 내용을 확인할 수 있습니다.
:::

다음은 DHTMLX MCP 서버를 Google Antigravity에 연결하기 위해 완료해야 하는 단계입니다.

1. 명령 팔레트를 엽니다
2. "mcp add"를 입력합니다
3. "HTTP"를 선택합니다
4. 다음 값을 입력합니다
- 이름:
~~~
dhtmlx-mcp
~~~
- URL:
~~~
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info
Gemini CLI에서 Antigravity CLI로 마이그레이션하시나요? [관련 가이드](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)에서 변경 사항을 확인할 수 있습니다.
:::

DHTMLX MCP 서버를 Antigravity CLI에 연결하려면 다음 위치 중 한 곳에 `mcp_config.json`을 생성합니다.

- 전역: `~/.gemini/config/mcp_config.json`
- 워크스페이스: `.agents/mcp_config.json`

다음 구성을 추가합니다.

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

그런 다음 터미널에서 `agy`를 실행합니다.

### ChatGPT 설정 {#chatgpt-setup}

:::info
[공식 문서](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt)에서 ChatGPT에 MCP 서버를 연결하는 모든 단계를 확인할 수 있습니다.
:::

다음 단계에 따라 DHTMLX MCP 서버를 ChatGPT에 연결합니다.

1. **Settings** → **Apps & Connectors**로 이동합니다
2. **Advanced settings**를 클릭합니다
3. **Developer mode**를 활성화합니다
4. **Apps & Connectors** 화면으로 돌아가서 "Create"를 클릭합니다
5. 커넥터를 구성합니다:
- 이름:
~~~
dhtmlx-mcp
~~~
- URL:
~~~
https://docs.dhtmlx.com/mcp
~~~
- 인증: `No authentication`
6. **Create**를 클릭합니다

연결되면 ChatGPT는 대화 중 질문에 답할 때 Diagram 문서를 가져옵니다.

:::info
집중적인 코딩 작업에는 다른 MCP 지원 도구가 더 효율적일 수 있습니다.
:::

### 기타 도구 {#other-tools}

대부분의 최신 AI 코딩 도구(Windsurf, Cline, Continue.dev 등 포함)는 설정에서 "Model Context Protocol", "Context Sources", "Custom integrations" 등의 이름으로 MCP를 제공합니다. 소스 URL로 `https://docs.dhtmlx.com/mcp`를 추가하세요.

## MCP 서버와 개인정보 보호 {#the-privacy-side-of-the-mcp-server}

이 서비스는 사용자의 컴퓨터에서 전혀 실행되지 않습니다. DHTMLX MCP 서버는 완전히 원격 서비스로만 작동하며, 개인 데이터의 사본을 전혀 보관하지 않습니다.

서버가 쿼리를 기록하는 목적은 디버깅과 서비스 개선뿐입니다.

로깅을 완전히 끄고 싶으신가요? 상용 배포에서는 이를 지원합니다. `info@dhtmlx.com`으로 문의하여 설정하세요.

## 일반적인 Diagram 작업을 위한 프롬프트 {#prompts-for-common-diagram-tasks}

필요한 특정 Diagram 기능(도형, 에디터, 내보내기 등)을 명시한 프롬프트는 모호한 프롬프트보다 더 관련성 높은 결과를 가져옵니다. 아래 그룹은 기능별로 예시를 정리한 것입니다.

**다이어그램 생성하기**

~~~
DHTMLX Diagram에서 커스텀 섹션이 있는 스윔레인 다이어그램을 어떻게 만드나요? 문서를 참고해서 답변해 주세요.
~~~
~~~
DHTMLX Diagram에서 JSON 데이터 세트를 기반으로 조직도를 만들고 싶습니다. 자동 레이아웃은 어떻게 구성하나요?
~~~
~~~
DHTMLX Diagram에서 결정 노드와 여러 개의 링크가 있는 플로우차트를 어떻게 만드나요?
~~~
~~~
DHTMLX Diagram에서 도형을 자동으로 배치하려면 autoPlace()를 어떻게 사용하나요?
~~~

**도형 다루기**

~~~
DHTMLX Diagram에 아이콘이 있는 커스텀 도형을 추가하고 싶습니다. 도형 템플릿은 어떻게 정의하나요?
~~~
~~~
DHTMLX Diagram Editor에서 사용자가 배치할 수 있는 도형을 어떻게 제한하나요?
~~~
~~~
DHTMLX Diagram에서 모든 도형의 기본 텍스트 스타일과 배경색을 어떻게 변경하나요?
~~~

**에디터 구성하기**

~~~
DHTMLX Diagram에서 도형 텍스트에 대한 인라인 편집을 활성화하고 싶습니다.
~~~
~~~
DHTMLX Diagram Editor에 커스텀 툴바 버튼을 어떻게 추가하나요?
~~~

**데이터 및 내보내기**

~~~
DHTMLX Diagram을 PNG 파일로 어떻게 내보내나요?
~~~
~~~
DHTMLX Diagram은 직렬화된 데이터에 어떤 형식을 사용하며, 이를 다시 로드하려면 어떻게 해야 하나요?
~~~

## MCP 서버가 활용할 수 있는 프롬프트 작성하기 {#writing-prompts-the-mcp-server-can-act-on}

- **API 대상을 명확히 하세요.** 다이어그램 인스턴스와 에디터를 구분하세요. 예를 들어 "DHTMLX Diagram Editor에서"와 "다이어그램 객체에서"를 구분합니다. 대상이 명확할수록 서버가 더 관련성 높은 문서를 가져옵니다.
- **도형 유형을 포함하세요.** "스윔레인 도형" 또는 "HTML 콘텐츠가 있는 커스텀 도형"과 같은 프롬프트는 일반적인 "도형"보다 올바른 참조 페이지를 더 빠르게 가져옵니다.
- 프롬프트에 **"문서를 참고해 주세요"**를 추가하세요. 이 표현은 어시스턴트가 학습 데이터로 답변하는 대신 MCP 조회를 실행하도록 신호를 보냅니다.
- **예상하는 버전 동작을 구체적으로 명시하세요.** 생성된 코드가 문서의 내용과 일치하지 않으면 "최신 DHTMLX Diagram 문서를 기준으로"라는 문구를 추가하여 새로 조회하도록 유도하세요.
