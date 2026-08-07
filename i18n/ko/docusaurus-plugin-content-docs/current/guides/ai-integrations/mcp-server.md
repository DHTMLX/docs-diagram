---
sidebar_label: DHTMLX MCP 서버
title: AI 코딩 어시스턴트와 DHTMLX MCP 서버 사용하기
description: MCP 서버를 통해 AI 코딩 어시스턴트를 실시간 DHTMLX Diagram 문서와 연결합니다. 도형, 스윔레인, 조직도, Diagram Editor 등을 다룹니다.
---

# AI 코딩 어시스턴트와 DHTMLX MCP 서버 사용하기 {#using-dhtmlx-mcp-server-with-ai-coding-assistants}

다이어그램 애플리케이션을 구축하려면 도형, 연결, 레이아웃, 에디터 구성에 대한 정밀한 제어가 필요합니다. AI 도구가 오래된 학습 데이터를 기반으로 [DHTMLX Diagram](/) 코드를 생성하면 API가 일치하지 않거나 속성이 누락되거나 더 이상 존재하지 않는 구성 옵션이 사용되는 결과가 발생합니다.

DHTMLX Model Context Protocol(MCP) 서버는 AI 도구에 실시간 Diagram 문서에 대한 직접적인 액세스 권한을 부여하여 이 문제를 해결합니다. [스윔레인](/swimlanes/), [커스텀 도형](/shapes/custom_shape), [Diagram Editor](/guides/diagram_editor/initialization) 또는 라이브러리의 다른 어떤 부분을 다루든, 어시스턴트는 응답을 생성하기 전에 최신 참조 자료를 가져옵니다.

**MCP 엔드포인트**

~~~
https://docs.dhtmlx.com/mcp
~~~

:::note
DHTMLX MCP 서버는 DHTMLX Diagram뿐만 아니라 모든 주요 DHTMLX 제품을 지원합니다. 어떤 구성 요소로 작업하든 동일한 엔드포인트와 구성 단계가 적용됩니다.
:::

## Diagram 작업에서 MCP 서버가 유용한 부분 {#where-mcp-server-helps-with-diagram}

MCP 서버는 전체 DHTMLX Diagram 문서를 인덱싱합니다. MCP 서버가 유용하게 사용되는 일반적인 시나리오는 다음과 같습니다.

- [도형](/shapes/default_shapes), [선](/lines/), [그룹](/groups/), [스윔레인](/swimlanes/)의 최신 API 조회.
- 설명을 기반으로 즉시 실행 가능한 Diagram 코드를 생성.
- [Editor](/guides/diagram_editor/initialization) 구성 옵션, 툴바 컨트롤, 이벤트 처리 방식 탐색.
- [내보내기](/guides/data_export) 옵션을 확인하고 PDF 또는 PNG 출력을 생성하는 방법을 이해.
- [다이어그램 구성](/guides/diagram/configuration)을 사용하여 기본 모드 다이어그램의 자동 레이아웃 옵션을 구성.
- 사용 가능한 [데이터 메서드](/guides/loading_data)를 사용하여 다이어그램 데이터를 로드하고 다시 직렬화.
- 사용자 상호작용에 대응하기 위해 [Diagram 및 Editor 이벤트](/guides/event_handling)를 처리.
- React, Vue, Angular, Svelte에 대한 [TypeScript 지원](/guides/using_typescript) 및 프레임워크 통합 탐색.

## DHTMLX MCP 서버의 작동 방식 {#how-dhtmlx-mcp-server-works}

서버는 검색 증강 생성(Retrieval-Augmented Generation, RAG) 파이프라인과 MCP를 결합하여 AI 어시스턴트가 학습 데이터에만 의존하지 않고 필요에 따라 문서를 조회할 수 있도록 합니다.

예를 들어 *"커스텀 셀 헤더로 스윔레인 다이어그램을 구성하려면 어떻게 해야 하나요?"*라고 질문하면, 어시스턴트는 MCP 엔드포인트를 통해 프롬프트를 전송합니다. 서버는 이를 스윔레인 문서와 매칭하여 관련 참조 페이지를 가져오고 이를 컨텍스트로 반환합니다. 이후 어시스턴트는 학습 시점의 스냅샷이 아니라 최신 API를 기반으로 코드를 생성합니다.

## AI 도구를 Diagram에 연결하기 {#connecting-ai-tools-to-diagram}

AI 개발 도구는 일반적으로 CLI 명령이나 JSON 구성 파일을 통해 MCP를 지원합니다. 두 경우 모두 핵심 단계는 서버 URL을 등록하는 것입니다.

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
Cursor의 단계별 MCP 설정 방법은 [공식 문서](https://cursor.com/en-US/docs/mcp)에서 확인할 수 있습니다.
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
Antigravity에서 MCP 서버 통합에 대한 자세한 내용은 [공식 문서](https://antigravity.google/docs/mcp)를 참고하세요.
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
Gemini CLI에서 Antigravity CLI로의 마이그레이션에 대해 알아보려면 [관련 가이드](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes)를 확인하세요.
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
ChatGPT에 MCP 서버를 연결하는 전체 가이드는 [공식 문서](https://developers.openai.com/api/docs/guides/tools-connectors-mcp)를 참고하세요.
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

:::note
ChatGPT와의 MCP 통합은 응답 시간이 느려질 수 있다는 점에 유의하세요. 더 빠른 환경을 원한다면 이 페이지에 나열된 다른 도구 중 하나를 사용하는 것을 고려하세요.
:::

### 기타 도구 {#other-tools}

대부분의 최신 AI 코딩 도구(Windsurf, Cline, Continue.dev 등 포함)는 설정에서 "Model Context Protocol", "Context Sources", "Custom integrations" 등의 이름으로 MCP를 제공합니다. 소스 URL로 `https://docs.dhtmlx.com/mcp`를 추가하세요.

## 개인정보 보호 및 데이터 처리 {#privacy-and-data-handling}

DHTMLX MCP 서버는 원격으로 실행되는 클라우드 전용 서비스로, 로컬 환경에 영향을 주지 않으며 개인 사용자 데이터를 저장하지 않습니다. 쿼리는 디버깅 및 서비스 개선 목적으로 기록될 수 있습니다.

보다 엄격한 개인정보 보호가 필요한 팀은 쿼리 로깅이 비활성화된 상용 배포를 요청할 수 있습니다. 자세한 내용은 `info@dhtmlx.com`으로 문의하세요.

## AI와 함께 사용하는 Diagram 예제 프롬프트 {#example-prompts-for-diagram-with-ai}

MCP 서버가 연결되면 어시스턴트가 Diagram API의 어느 부분을 조회해야 하는지 알 수 있도록 구체적인 목표를 중심으로 프롬프트를 작성하세요. 아래 프롬프트는 작업 유형별로 정리되어 있습니다. 필요에 따라 복사하여 수정해서 사용할 수 있습니다.

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

## 효과적인 Diagram 프롬프트 작성 팁 {#tips-for-effective-diagram-prompts}

- **API 대상을 명확히 하세요.** 다이어그램 인스턴스와 에디터를 구분하세요. 예를 들어 "DHTMLX Diagram Editor에서"와 "다이어그램 객체에서"를 구분합니다. 대상이 명확할수록 서버가 더 관련성 높은 문서를 가져옵니다.
- **도형 유형을 포함하세요.** "스윔레인 도형" 또는 "HTML 콘텐츠가 있는 커스텀 도형"과 같은 프롬프트는 일반적인 "도형"보다 올바른 참조 페이지를 더 빠르게 가져옵니다.
- 프롬프트에 **"문서를 참고해 주세요"**를 추가하세요. 이 표현은 어시스턴트가 학습 데이터로 답변하는 대신 MCP 조회를 실행하도록 신호를 보냅니다.
- **예상하는 버전 동작을 구체적으로 명시하세요.** 생성된 코드가 문서의 내용과 일치하지 않으면 "최신 DHTMLX Diagram 문서를 기준으로"라는 문구를 추가하여 새로 조회하도록 유도하세요.
