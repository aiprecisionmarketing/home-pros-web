---
description: Ensure clean server startup and environment hygiene
---

# Server Startup & Environment Hygiene Skill

## Description

Use this skill whenever the user asks to start, restart, or debug the development server. This ensures the environment is clean and port conflicts are resolved before execution.

## Protocol

Before starting any server, you MUST perform the following "Pre-Flight" checks:

1. **Port Cleanup**: Check if the target port (e.g., 3000, 8000) is already in use. If so, kill the process occupying it.
2. **Cache Clearance**:
   - For Node.js: Delete `node_modules/.cache`.
   - For Python: Delete `__pycache__` and `.pytest_cache`.
   - For Build Tools: Run the specific 'clean' command (e.g., `npm run clean` or `mvn clean`).
3. **Dependency Check**: Briefly verify that `package.json` or `requirements.txt` matches the installed environment.
4. **Environment Variables**: Ensure a `.env` file exists if the project structure requires one.

## Triggers

- "Start the server"
- "Restart"
- "Why is the server not starting?"
- "Fix server issues"
