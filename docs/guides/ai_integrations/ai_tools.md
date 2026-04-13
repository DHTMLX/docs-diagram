---
sidebar_label: DHTMLX Diagram and MCP server
title: DHTMLX Diagram and MCP server
description: Give AI coding assistants access to live DHTMLX JavaScript Diagram documentation via the DHTMLX MCP server. Includes setup guides for Claude Code, Cursor, Gemini CLI, and ChatGPT.
---

# DHTMLX Diagram and MCP server

Building diagram applications requires precise control over shapes, connections, layout, and editor configuration. When an AI tool generates DHTMLX Diagram code from outdated training data, the result is mismatched APIs, missing properties, and configuration options that no longer exist.

The DHTMLX MCP server (built on the Model Context Protocol) solves this by giving AI tools direct access to the live Diagram documentation. Whether you are working with [swimlanes](/swimlanes/), [custom shapes](/shapes/custom_shape/), the [Diagram Editor](/guides/diagram_editor/initialization/), or any other part of the library, the assistant retrieves the current reference material before generating a response.

**MCP endpoint**

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

:::note
The DHTMLX MCP server covers all major DHTMLX products, not only DHTMLX Diagram. The same endpoint and configuration steps apply regardless of which component you are working with.
:::

Common scenarios where the MCP server is useful:

- Looking up the current API for [shapes](/shapes/default_shapes/), lines, [groups](/groups/), or [swimlanes](/swimlanes/).
- Generating ready-to-run Diagram code based on a description.
- Exploring [Editor](/guides/diagram_editor/initialization/) configuration options, toolbar controls, and event handling.
- Checking [export](/guides/data_export/) options and understanding how to produce PDF or PNG output.

## How DHTMLX MCP server pipeline works

The server combines a Retrieval-Augmented Generation (RAG) pipeline with MCP (Model Context Protocol) so that AI assistants can query documentation on demand rather than relying solely on training data.

When you submit a prompt, the assistant sends it via the MCP endpoint. From there:

1. The server identifies which product documentation is relevant to the query.
2. Matching content is retrieved from a vector index of the current docs.
3. The retrieved documentation is returned to the assistant as context.
4. The assistant composes its response using that context rather than a fixed training snapshot.

## Connecting AI tools to DHTMLX Diagram

AI development tools typically support MCP through a CLI command or a JSON configuration file. In both cases the core step is registering the server URL:

~~~jsx
https://docs.dhtmlx.com/mcp
~~~

Setup instructions for the most commonly used tools are listed below.

### Claude Code

:::info
Full details on connecting MCP servers to Claude Code are available in the [official documentation](https://code.claude.com/docs/en/mcp).
:::

The fastest way to register the server is through the CLI:

~~~jsx
claude mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

To configure it manually, add the following entry to your `mcp.json`:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "type": "http",
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Cursor

:::info
Step-by-step MCP setup instructions for Cursor can be found in the [official documentation](https://cursor.com/en-US/docs/mcp).
:::

Follow the steps below:

1. Open Settings (`Cmd+Shift+J` on Mac, `Ctrl+Shift+J` on Windows/Linux)
2. Go to **Tools & MCP**
3. Click **Add Custom MCP**
4. Paste this config:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

### Gemini CLI

:::info
A full walkthrough for adding MCP servers to Gemini CLI is available in the [official documentation](https://geminicli.com/docs/tools/mcp-server/).
:::

To connect via the CLI, use:

~~~jsx
gemini mcp add --transport http dhtmlx-mcp https://docs.dhtmlx.com/mcp
~~~

Alternatively, open `~/.gemini/settings.json` and add:

~~~jsx
{
  "mcpServers": {
    "dhtmlx-mcp": {
      "url": "https://docs.dhtmlx.com/mcp"
    }
  }
}
~~~

Restart Gemini CLI after saving the file.

### Antigravity (Google)

:::info
Refer to the [official documentation](https://antigravity.google/docs/mcp) for full details on MCP server integration in Antigravity.
:::

These are the steps to complete:

1. Open the command palette
2. Type "mcp add"
3. Select "HTTP"
4. Provide the following values:
- Name:
~~~jsx
dhtmlx-mcp
~~~
- URL: 
~~~jsx
https://docs.dhtmlx.com/mcp
~~~

### ChatGPT

:::info
See the [official documentation](https://developers.openai.com/api/docs/guides/tools-connectors-mcp) for the complete guide on connecting MCP servers to ChatGPT.
:::

Follow these steps:

1. Go to **Settings** → **Apps & Connectors**
2. Click **Advanced settings**
3. Enable **Developer mode**
4. Return to the **Apps & Connectors** screen and click "Create"
5. Configure the connector:
- Name: 
~~~jsx
dhtmlx-mcp
~~~
- URL: 
~~~jsx
https://docs.dhtmlx.com/mcp
~~~
- Authentication: `No authentication`
6. Click **Create**

Once connected, ChatGPT will retrieve Diagram documentation when answering questions during your conversations.

:::warning
When working on intensive coding tasks, other MCP-aware tools tend to be more efficient.
:::

### Other tools

Most modern AI coding tools (including Windsurf, Cline, and Continue.dev) surface MCP under names such as "Model Context Protocol", "Context Sources", or "Custom integrations" in their settings. Add `https://docs.dhtmlx.com/mcp` as the source URL.

## Privacy and data handling

The DHTMLX MCP server is a cloud-only service that runs remotely, leaves your local environment untouched, and stores no personal user data. Queries may be logged for debugging and service improvement purposes.

Teams that require stricter privacy guarantees can request a commercial deployment with query logging disabled. Contact us at `info@dhtmlx.com` for details.

## Example prompts for DHTMLX Diagram with AI

Once the MCP server is connected, phrase your prompts around a concrete goal so the assistant knows which part of the Diagram API to look up.

You can copy and test the example prompts given below:

~~~
How do I create a swimlane diagram with custom sections in DHTMLX Diagram? Use the docs.
~~~
~~~
I want to add custom shapes with icons to DHTMLX Diagram. How do I do that?
~~~
~~~
How do I configure auto-layout for an org chart in DHTMLX Diagram?
~~~
~~~
I want to enable inline editing for shape text in DHTMLX Diagram.
~~~
~~~
How do I export a DHTMLX Diagram to a PNG file?
~~~

The more specific the prompt is, the more relevant documentation the server retrieves and the more accurate the generated code is.

