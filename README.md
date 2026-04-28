# AI Copilot Marketing Site

[![CI](https://github.com/Auto-no-mous-AI/ai-copilot-marketing-site/actions/workflows/ci.yml/badge.svg)](https://github.com/Auto-no-mous-AI/ai-copilot-marketing-site/actions/workflows/ci.yml)
[![Release](https://github.com/Auto-no-mous-AI/ai-copilot-marketing-site/actions/workflows/release.yml/badge.svg)](https://github.com/Auto-no-mous-AI/ai-copilot-marketing-site/actions/workflows/release.yml)

Public Angular marketing site for the AI Copilot platform.

## Purpose

This repository owns the public product narrative, landing pages, security and enterprise messaging, and releaseable static site/container artifact for AI Copilot.

## Local Development

```bash
npm ci
npm start
```

The development server runs on `http://localhost:4200/` unless Angular CLI selects another port.

## Production Build

```bash
npm run build
```

The CI pipeline also builds the Docker image to verify the deployable artifact.

## Enterprise Readiness

Operational expectations, data handling rules, and release evidence requirements are tracked in `docs/ENTERPRISE_READINESS.md`.

## Release

Release workflow instructions live in `docs/releasing.md`. Production-impacting releases should be traceable to a commit SHA, CI run, and image digest.
