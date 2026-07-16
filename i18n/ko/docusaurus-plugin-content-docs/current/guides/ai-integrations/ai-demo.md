---
sidebar_label: AI 통합 데모
title: AI 기반 Diagram 구축
description: DHTMLX Diagram AI 데모를 실행하기 위한 단계별 가이드입니다. OpenAI API를 사용한 텍스트 기반 조직도 생성 기능과 라이브 미리보기 및 JSON 편집기를 제공합니다.
---

# AI 기반 Diagram 구축 {#building-ai-powered-diagram}

DHTMLX Diagram은 AI와 통합하여 AI 기반 다이어그램 제작 애플리케이션을 만들 수 있습니다. 자연어로 제공된 요청을 기반으로 조직도를 생성하는 애플리케이션을 구축하기 위해 DHTMLX Diagram을 AI와 함께 사용하는 방법에 대한 예제를 준비했습니다.

[데모 앱](https://dhtmlx.com/docs/demo/ai-org-chart-builder/)은 텍스트를 Diagram으로 변환하는 기능, AI 기반 JSON 생성, 완성된 Diagram의 실시간 미리보기, 그리고 생성된 JSON 데이터를 확인하고 조정하여 Diagram 미리보기를 즉시 업데이트할 수 있는 내장 코드 편집기 등의 기능을 포함합니다. 자세한 내용은 관련 [GitHub 저장소](https://github.com/DHTMLX/diagram-org-chart-builder-ai-demo)를 참고하세요.

## 프로젝트 설정 {#project-setup}

프로젝트를 다운로드하려면 다음 명령어를 사용하여 저장소를 클론하세요:

~~~jsx
git clone diagram-org-chart-builder-ai-demo
~~~

그런 다음 아래 명령어를 사용하여 프로젝트 저장소로 이동하세요:

~~~jsx
cd diagram-org-chart-builder-ai-demo
~~~

### 종속성 설치하기 {#installing-dependencies}

종속성을 설치하고 앱을 실행하려면 패키지 관리자가 필요합니다. 이 가이드에서는 [npm](https://www.npmjs.com/)을 사용합니다 — 다음 명령어를 호출하여 데모 앱을 설치하세요:

~~~jsx
npm install
~~~

### 환경 변수 조정하기 {#adjusting-environment-variables}

그런 다음 환경 변수를 구성해야 합니다. 이를 위해 `env.sample` 파일의 내용을 복사하여 **diagram-org-chart-builder-ai-demo** 디렉터리 안에 `.env`라는 이름의 새 파일을 생성하세요.
새로 생성된 `.env` 파일에는 키와 구성 정보가 저장됩니다. 아래에 제공된 필수 값을 입력하세요:

~~~jsx title="diagram-org-chart-builder-ai-demo/.env"
# --- OpenAI API 구성 ---
OPENAI_API_KEY=sk-YourSecretApiKeyGoesHere
OPENAI_BASE_URL=https://api.openai.com/v1

# --- 보안 구성 ---
CORS_ALLOWED_ORIGINS=http://localhost:3001,http://127.0.0.1:3001,http://localhost:5500,http://127.0.0.1:5500

# --- 서버 구성 (선택 사항) ---
PORT=3001
~~~

:::info
`.env` 파일에는 민감한 정보가 포함되어 있으므로 업로드하지 마세요!
:::

아래에서 `.env` 파일 변수에 대한 설명을 확인하세요:

- `OPENAI_API_KEY`: (필수) AI 서비스용 비밀 API 키입니다.
- `OPENAI_BASE_URL`: AI 서비스의 API 엔드포인트입니다. 프록시 또는 OpenAI API와 호환되는 다른 제공업체를 사용하도록 변경할 수 있습니다.
- `CORS_ALLOWED_ORIGINS`: 중요한 보안 설정입니다. 백엔드 서버에 연결이 허용된 웹 주소를 쉼표로 구분한 목록입니다. 프로덕션 환경에서는 이 값을 공개 프런트엔드 URL로 **반드시** 변경해야 합니다(예: `https://myapp.com`).
- `PORT`: (선택 사항) 서버가 실행될 포트 번호입니다. 설정하지 않으면 기본값은 3001입니다.

### 애플리케이션 실행하기 {#running-the-application}

애플리케이션을 시작하려면 앱 디렉터리에서 다음 명령어를 사용하세요:

~~~jsx
npm start // 이것은 필수 시작 명령어입니다
~~~

터미널에 다음과 같은 출력이 표시됩니다:

~~~jsx
Server started on port 3001.
~~~

그런 다음 웹 브라우저를 열고 `http://localhost:3001`로 이동하면 Diagram을 생성할 준비가 된 애플리케이션을 확인할 수 있습니다.

## 데모 앱의 작동 방식 {#how-the-demo-app-works}

텍스트 요청을 Diagram으로 변환하는 기본 단계는 다음과 같습니다:

- 먼저, 사용자가 일반적인 표현으로 Diagram에 대한 텍스트 설명을 입력합니다. 예를 들어: "최고 관리자 한 명과 각각 두 명의 직원을 둔 다섯 개의 부서로 구성된 Diagram"
- 그런 다음 프롬프트가 백엔드로 전송되고, AI 서비스가 요청을 기반으로 구조화된 JSON 구성을 생성합니다.
- 그 후 프런트엔드가 결과 데이터를 받아 대화형 DHTMLX Diagram을 즉시 렌더링합니다.
- 다음으로, 해당 JSON 코드가 Diagram 아래의 코드 편집기에 표시됩니다. 사용자는 코드를 미세 조정하고 결과 Diagram을 실시간으로 편집할 수 있습니다.
- 마지막으로, 사용자는 생성된 데이터를 JSON 파일로 저장하거나 Diagram을 PDF 또는 PNG 파일로 내보낼 수 있습니다.

