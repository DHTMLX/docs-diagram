---
sidebar_label: MCP-сервер DHTMLX
title: MCP-сервер DHTMLX Diagram для API фигур и коннекторов
description: Направьте ИИ-ассистента на MCP-сервер — и он найдёт актуальную документацию DHTMLX Diagram по фигурам, дорожкам, организационным диаграммам и Diagram Editor.
---

# MCP-сервер DHTMLX Diagram: фигуры, коннекторы и API редактора {#dhtmlx-diagram-mcp-server-shapes-connectors-and-editor-apis}

[DHTMLX Diagram](/) даёт вам реальный контроль над [геометрией фигур](/shapes/configuration_properties), [трассировкой коннекторов](/lines/) и [правилами компоновки](/guides/diagram/configuration), а также над любыми параметрами, которые редактор позволяет настраивать. Сгенерированный код должен отражать актуальные свойства фигур, методы коннекторов и параметры компоновки, а не состояние более раннего снимка данных обучения.

MCP-сервер DHTMLX существует именно для этого: он предоставляет ассистенту актуальную документацию Diagram ещё до того, как будет нарисована хотя бы одна фигура. Работаете ли вы с [дорожками](/swimlanes/), [пользовательскими фигурами](/shapes/custom_shape), [Diagram Editor](/guides/diagram_editor/initialization) или любой другой частью библиотеки — ассистент получает актуальные справочные материалы перед формированием ответа.

### Конечная точка MCP {#mcp-endpoint}

~~~
https://docs.dhtmlx.com/mcp
~~~

:::note
MCP-сервер DHTMLX охватывает все основные продукты DHTMLX, а не только DHTMLX Diagram. Та же конечная точка и те же шаги настройки применяются независимо от того, с каким компонентом вы работаете.
:::

## Работа с Diagram, которую ускоряет MCP-сервер {#diagram-work-the-mcp-server-speeds-up}

Документация DHTMLX Diagram хранится в индексе MCP-сервера. Разработчики обращаются к ней, например, для таких задач:

- Поиск актуального API для [фигур](/shapes/default_shapes), [линий](/lines/), [групп](/groups/) или [дорожек](/swimlanes/).
- Генерация готового к запуску кода Diagram на основе описания.
- Изучение параметров конфигурации [Editor](/guides/diagram_editor/initialization), элементов управления панели инструментов и обработки событий.
- Проверка параметров [экспорта](/guides/data_export) и понимание того, как получить PDF- или PNG-файл.
- Настройка параметров автоматического размещения элементов (auto-layout) для диаграмм в режиме по умолчанию с помощью [конфигурации диаграммы](/guides/diagram/configuration).
- Загрузка данных диаграммы и их обратная сериализация с помощью доступных [методов работы с данными](/guides/loading_data).
- Обработка [событий Diagram и Editor](/guides/event_handling) для реакции на действия пользователя.
- Изучение [поддержки TypeScript](/guides/using_typescript) и интеграции с фреймворками React, Vue, Angular и Svelte.

## Внутри запроса к MCP-серверу Diagram {#inside-a-diagram-mcp-server-request}

MCP-сервер DHTMLX запускает конвейер Retrieval-Augmented Generation (RAG) поверх Model Context Protocol (MCP) и направляет каждый запрос в один из двух сценариев: *Search*, который находит подходящие справочные страницы для дальнейшей работы ассистента, или *Inference*, который читает эти страницы и сразу возвращает готовый ответ. Документация Diagram нужна лишь для части запроса, и ассистент сначала выделяет именно эту часть, а остальное обрабатывает самостоятельно.

Вот как это работает на примере запроса *«Как построить в DHTMLX Diagram организационную диаграмму, которая получает данные о сотрудниках из моего внутреннего HR API и автоматически распределяет их по отделам?»*:

1. Ассистент выделяет часть, для которой нужна документация: как настроить auto-layout для организационной диаграммы, построенной из набора данных JSON.
2. Сервер сопоставляет её с документацией по конфигурации диаграммы.
3. Поскольку ответ требует сгенерированного кода, запрос направляется в *Search* (более узкий фактический вопрос — например, какой метод управляет auto-layout — ушёл бы в *Inference*).
4. *Search* извлекает подходящие страницы из векторного индекса, построенного на основе актуальной документации Diagram.
5. Эти страницы возвращаются ассистенту в качестве контекста.
6. Ассистент настраивает auto-layout, используя этот контекст, а затем самостоятельно пишет логику обращения к HR API, опираясь на собственные знания, а не догадки об API Diagram.

Благодаря этому сгенерированный код Diagram остаётся согласованным с документацией в её нынешнем виде.

## Подключение MCP-сервера к вашему ИИ-инструменту {#bringing-the-mcp-server-into-your-ai-tool}

Каждый из перечисленных ниже инструментов подключается к одной и той же конечной точке MCP своим способом: где-то это флаг CLI, где-то — блок конфигурации JSON. Зарегистрируйте сервер один раз для каждого инструмента — и подключение будет действовать для каждого проекта Diagram, который вы откроете в нём:

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
[Официальная документация](https://cursor.com/en-US/docs/mcp) Cursor подробно описывает все параметры настройки MCP.
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
[Официальная документация](https://antigravity.google/docs/mcp) Antigravity полностью описывает интеграцию MCP-сервера.
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
Переходите с Gemini CLI на Antigravity CLI? [Соответствующее руководство](https://antigravity.google/docs/gcli-migration#mcp-config-formatting-changes) описывает, что изменилось.
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
[Официальная документация](https://help.openai.com/en/articles/12584461-developer-mode-and-mcp-apps-in-chatgpt) описывает все шаги подключения MCP-сервера к ChatGPT.
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

После подключения ChatGPT получает документацию Diagram при ответах на вопросы в ходе ваших диалогов.

:::info
Для интенсивных задач написания кода другие инструменты с поддержкой MCP могут работать эффективнее.
:::

### Другие инструменты {#other-tools}

Большинство современных ИИ-инструментов для написания кода (включая Windsurf, Cline, Continue.dev и другие) отображают MCP в настройках под такими названиями, как «Model Context Protocol», «Context Sources» или «Custom integrations». Добавьте `https://docs.dhtmlx.com/mcp` в качестве исходного URL.

## Конфиденциальность в работе MCP-сервера {#the-privacy-side-of-the-mcp-server}

Ничего из этого не выполняется на вашем компьютере: MCP-сервер DHTMLX работает исключительно как удалённый сервис и не хранит копию ваших персональных данных.

Сервер регистрирует запросы в журнале только для отладки и улучшения сервиса.

Хотите полностью отключить логирование? Это доступно в коммерческом развёртывании — свяжитесь с нами по адресу `info@dhtmlx.com`, чтобы его настроить.

## Запросы для типичных задач Diagram {#prompts-for-common-diagram-tasks}

Запрос, в котором указана конкретная функция Diagram (фигура, редактор, экспорт), возвращает более релевантные результаты, чем расплывчатая формулировка. Ниже примеры сгруппированы по функциям.

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

## Как формулировать запросы, на которые сработает MCP-сервер {#writing-prompts-the-mcp-server-can-act-on}

- **Указывайте область API.** Различайте экземпляр диаграммы и редактор — например, «in the DHTMLX Diagram Editor» и «on the diagram object». Сервер находит более релевантные документы, когда цель запроса очевидна.
- **Указывайте тип фигуры.** Запросы вроде «a swimlane shape» или «a custom shape with HTML content» находят нужные справочные страницы быстрее, чем обобщённое «a shape».
- **Добавляйте фразу «Use the docs»** к своему запросу. Эта формулировка сигнализирует ассистенту, что нужно выполнить поиск через MCP, а не отвечать на основе данных обучения.
- **Уточняйте, какое поведение версии вы ожидаете.** Если сгенерированный код не совпадает с тем, что вы видите в документации, добавьте фразу «based on the current DHTMLX Diagram documentation», чтобы принудительно выполнить новый поиск.
