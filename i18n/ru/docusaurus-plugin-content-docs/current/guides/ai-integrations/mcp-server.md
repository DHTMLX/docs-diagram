---
sidebar_label: MCP-сервер DHTMLX
title: Использование MCP-сервера DHTMLX с ИИ-ассистентами для написания кода
description: Подключите ИИ-ассистентов для написания кода к актуальной документации DHTMLX Diagram через MCP-сервер. Рассматриваются фигуры, дорожки, организационные диаграммы, Diagram Editor и другое.
---

# Использование MCP-сервера DHTMLX с ИИ-ассистентами для написания кода

Разработка приложений с диаграммами требует точного контроля над фигурами, соединениями, компоновкой и конфигурацией редактора. Когда ИИ-инструмент генерирует код [DHTMLX Diagram](/) на основе устаревших данных обучения, результатом становятся несоответствующие API, отсутствующие свойства и параметры конфигурации, которых больше не существует.

MCP-сервер DHTMLX (Model Context Protocol) решает эту проблему, предоставляя ИИ-инструментам прямой доступ к актуальной документации Diagram. Работаете ли вы с [дорожками](/swimlanes/), [пользовательскими фигурами](shapes/custom_shape.md), [Diagram Editor](guides/diagram_editor/initialization.md) или любой другой частью библиотеки — ассистент получает актуальные справочные материалы перед формированием ответа.

**Конечная точка MCP**

~~~
https://docs.dhtmlx.com/mcp
~~~

:::note
MCP-сервер DHTMLX охватывает все основные продукты DHTMLX, а не только DHTMLX Diagram. Та же конечная точка и те же шаги настройки применяются независимо от того, с каким компонентом вы работаете.
:::

## Где MCP-сервер помогает при работе с Diagram {#where-mcp-server-helps-with-diagram}

MCP-сервер индексирует полную документацию DHTMLX Diagram. Вот распространённые сценарии, в которых MCP-сервер оказывается полезен:

- Поиск актуального API для [фигур](shapes/default_shapes.md), [линий](/lines/), [групп](/groups/) или [дорожек](/swimlanes/).
- Генерация готового к запуску кода Diagram на основе описания.
- Изучение параметров конфигурации [Editor](guides/diagram_editor/initialization.md), элементов управления панели инструментов и обработки событий.
- Проверка параметров [экспорта](guides/data_export.md) и понимание того, как получить PDF- или PNG-файл.
- Настройка параметров автоматического размещения элементов (auto-layout) для диаграмм в режиме по умолчанию с помощью [конфигурации диаграммы](guides/diagram/configuration.md).
- Загрузка данных диаграммы и их обратная сериализация с помощью доступных [методов работы с данными](guides/loading_data.md).
- Обработка [событий Diagram и Editor](guides/event_handling.md) для реакции на действия пользователя.
- Изучение [поддержки TypeScript](guides/using_typescript.md) и интеграции с фреймворками React, Vue, Angular и Svelte.

## Как работает MCP-сервер DHTMLX {#how-dhtmlx-mcp-server-works}

Сервер объединяет конвейер Retrieval-Augmented Generation (RAG) с MCP, чтобы ИИ-ассистенты могли запрашивать документацию по требованию, а не полагаться исключительно на данные обучения.

Например, когда вы спрашиваете: *«Как настроить диаграмму с дорожками и пользовательскими заголовками ячеек?»*, ассистент отправляет запрос через конечную точку MCP. Сервер сопоставляет его с документацией по дорожкам, находит соответствующие справочные страницы и возвращает их в качестве контекста. После этого ассистент генерирует код на основе актуального API, а не снимка данных обучения.

## Подключение ИИ-инструментов к Diagram {#connecting-ai-tools-to-diagram}

ИИ-инструменты для разработки обычно поддерживают MCP через команду CLI или файл конфигурации JSON. В обоих случаях ключевой шаг — регистрация URL-адреса сервера:

~~~
https://docs.dhtmlx.com/mcp
~~~

Ниже приведены инструкции по настройке для наиболее часто используемых инструментов.

### Настройка Claude Code {#claude-code-setup}

:::info
Подробные сведения о подключении MCP-серверов к Claude Code доступны в [официальной документации](https://code.claude.com/docs/en/mcp).
:::

Самый быстрый способ добавить MCP-сервер DHTMLX в Claude Code — через CLI:

~~~bash
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Чтобы настроить его вручную, добавьте следующую запись в файл `.mcp.json`:

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

### Настройка Cursor {#cursor-setup}

:::info
Пошаговые инструкции по настройке MCP для Cursor можно найти в [официальной документации](https://cursor.com/en-US/docs/mcp).
:::

Чтобы подключить MCP-сервер DHTMLX к Cursor, выполните следующие шаги:

1. Откройте настройки (`Cmd+Shift+J` на Mac, `Ctrl+Shift+J` на Windows/Linux)
2. Перейдите в раздел **Tools & MCP**
3. Нажмите **Add Custom MCP**
4. Вставьте следующую конфигурацию:

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
Подробные сведения об интеграции MCP-сервера в Antigravity приведены в [официальной документации](https://antigravity.google/docs/mcp).
:::

Чтобы подключить MCP-сервер DHTMLX к Google Antigravity, выполните следующие шаги:

1. Откройте палитру команд
2. Введите «mcp add»
3. Выберите «HTTP»
4. Укажите следующие значения:
- Имя:
~~~
dhtmlx-mcp
~~~
- URL:
~~~
https://docs.dhtmlx.com/mcp
~~~

#### Antigravity CLI {#antigravity-cli}

:::info
Ознакомьтесь с [соответствующим руководством](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes), чтобы узнать о переходе с Gemini CLI на Antigravity CLI.
:::

Чтобы подключить MCP-сервер DHTMLX к Antigravity CLI, создайте файл `mcp_config.json` в одном из следующих расположений:

- Глобально: `~/.gemini/config/mcp_config.json`
- В рабочей области: `.agents/mcp_config.json`

Добавьте следующую конфигурацию:

~~~json
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "serverUrl": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Затем выполните команду `agy` в терминале.

### Настройка ChatGPT {#chatgpt-setup}

:::info
Полное руководство по подключению MCP-серверов к ChatGPT приведено в [официальной документации](https://developers.openai.com/api/docs/guides/tools-connectors-mcp).
:::

Чтобы подключить MCP-сервер DHTMLX к ChatGPT, выполните следующие шаги:

1. Перейдите в **Settings** → **Apps & Connectors**
2. Нажмите **Advanced settings**
3. Включите **Developer mode**
4. Вернитесь на экран **Apps & Connectors** и нажмите «Create»
5. Настройте коннектор:
- Имя:
~~~
dhtmlx-mcp
~~~
- URL:
~~~
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Нажмите **Create**

После подключения ChatGPT будет получать документацию Diagram при ответах на вопросы в ходе ваших диалогов.

:::note
Обратите внимание, что интеграция MCP с ChatGPT может приводить к более медленным ответам. Для более быстрой работы рассмотрите другие инструменты, перечисленные на этой странице.
:::

### Другие инструменты {#other-tools}

Большинство современных ИИ-инструментов для написания кода (включая Windsurf, Cline, Continue.dev и другие) отображают MCP в настройках под такими названиями, как «Model Context Protocol», «Context Sources» или «Custom integrations». Добавьте `https://docs.dhtmlx.com/mcp` в качестве исходного URL.

## Конфиденциальность и обработка данных {#privacy-and-data-handling}

MCP-сервер DHTMLX — это исключительно облачный сервис, который работает удалённо, не затрагивает вашу локальную среду и не хранит персональные данные пользователей. Запросы могут регистрироваться в журнале для отладки и улучшения сервиса.

Команды, которым требуются более строгие гарантии конфиденциальности, могут запросить коммерческое развёртывание с отключённым логированием запросов. Для получения подробностей свяжитесь с нами по адресу `info@dhtmlx.com`.

## Примеры запросов для Diagram с использованием ИИ {#example-prompts-for-diagram-with-ai}

После подключения MCP-сервера формулируйте запросы вокруг конкретной цели, чтобы ассистент понимал, какую часть API Diagram нужно искать. Приведённые ниже запросы сгруппированы по типу задачи. Вы можете скопировать и адаптировать их по своему усмотрению.

**Создание диаграмм**

~~~
How do I create a swimlane diagram with custom sections in DHTMLX Diagram? Use the docs.
~~~
~~~
I want to build an org chart from a JSON data set in DHTMLX Diagram. How do I configure the auto-layout?
~~~
~~~
How do I create a flowchart with decision nodes and multiple links in DHTMLX Diagram?
~~~
~~~
How do I use autoPlace() to automatically arrange shapes in DHTMLX Diagram?
~~~

**Работа с фигурами**

~~~
I want to add custom shapes with icons to DHTMLX Diagram. How do I define a shape template?
~~~
~~~
How do I restrict which shapes a user can place in the DHTMLX Diagram Editor?
~~~
~~~
How do I change the default text style and background color for all shapes in DHTMLX Diagram?
~~~

**Настройка редактора**

~~~
I want to enable inline editing for shape text in DHTMLX Diagram.
~~~
~~~
How do I add a custom toolbar button to the DHTMLX Diagram Editor?
~~~

**Данные и экспорт**

~~~
How do I export a DHTMLX Diagram to a PNG file?
~~~
~~~
What format does DHTMLX Diagram use for serialized data, and how do I reload it?
~~~

## Советы для эффективных запросов по Diagram {#tips-for-effective-diagram-prompts}

- **Указывайте область API.** Различайте экземпляр диаграммы и редактор — например, «in the DHTMLX Diagram Editor» и «on the diagram object». Сервер находит более релевантные документы, когда цель запроса очевидна.
- **Указывайте тип фигуры.** Запросы вроде «a swimlane shape» или «a custom shape with HTML content» находят нужные справочные страницы быстрее, чем обобщённое «a shape».
- **Добавляйте фразу «Use the docs»** к своему запросу. Эта формулировка сигнализирует ассистенту, что нужно выполнить поиск через MCP, а не отвечать на основе данных обучения.
- **Уточняйте, какое поведение версии вы ожидаете.** Если сгенерированный код не совпадает с тем, что вы видите в документации, добавьте фразу «based on the current DHTMLX Diagram documentation», чтобы принудительно выполнить новый поиск.
