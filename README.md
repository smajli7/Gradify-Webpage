# Gradify – Projektpräsentation & Dokumentation

> Web-basiertes Notenverwaltungssystem für Hochschulen. Microservice-Architektur mit Spring Boot, Angular und Kubernetes.

**Frankfurt University of Applied Sciences** · Modul *Web-basierte Anwendungssysteme* · WiSe 2025/26

---

## Über dieses Projekt

Diese **Homepage** ist die offizielle Projektpräsentation und technische Dokumentation von **Gradify**. Sie stellt das System vor, listet Demo-Zugänge, erklärt die Architektur und bündelt alle Dokumentationsartikel in einem modernen, suchbaren Blog.

| Was du hier findest | Beschreibung |
|--------------------|--------------|
| **Startseite** | Übersicht, Demo-Nutzer mit Passwort, 3 Launch-Optionen (lokal, Docker, K8s), Microservices, Rollen, Tech Stack |
| **Dokumentation** | Blog mit Artikeln zu Systemübersicht, Services, Frontend, Deployment, Datenmodell, Berechnungslogik u. v. m. |
| **Themen** | Tags für Architektur, APIs, Auth, Berechnung, Deployment usw. |
| **Team** | Autoren, Reflexion, Studiengänge |

---

## Schnellstart

### Voraussetzungen

- **Node.js** 20+
- **npm** oder **pnpm**

### Entwicklung

```bash
npm install
npm run dev
```

Die Seite läuft unter **http://localhost:4321** (oder dem in der Konsole angezeigten Port).

### Build & Vorschau

```bash
npm run build
npm run preview
```

---

## Tech Stack der Website

| Bereich | Technologie |
|--------|-------------|
| Framework | [Astro](https://astro.build) 5 |
| Styling | [Tailwind CSS](https://tailwindcss.com) 4 |
| UI-Komponenten | [Radix UI](https://www.radix-ui.com), [Lucide](https://lucide.dev) Icons |
| Interaktivität | [React](https://react.dev) 19 (Search, Newsletter, Skills) |
| Animationen | [Framer Motion](https://www.framer.com/motion/) |
| Content | MDX, Astro Content Collections |
| Code-Highlighting | astro-expressive-code, rehype-pretty-code |

---

## Projektstruktur (ausgewählt)

```
demo-website/
├── src/
│   ├── components/     # Astro- und React-Komponenten (Header, Footer, BlogCard, Search, …)
│   ├── content/        # Blog (MDX), Authors
│   │   ├── blog/       # Dokumentationsartikel (01–14)
│   │   └── authors/
│   ├── data/           # Demo-Nutzer, Konstanten
│   ├── layouts/        # Layout.astro
│   ├── lib/            # Daten-Utils, Konstanten
│   ├── pages/          # index, blog, tags, authors, about, 404, API (search, RSS, OG)
│   └── styles/         # global.css, typography.css
├── public/
├── astro.config.ts
├── package.json
└── README.md           # diese Datei
```

---

## Gradify im Überblick (die Anwendung)

Die **Gradify-App** (nicht dieses Repo) besteht aus:

- **7 Microservices**: API-Gateway, Auth-, User-, Studiengang-, Noten-, Berechnungs-Service + Angular-Frontend
- **4 Protokolle**: REST, GraphQL, gRPC, RabbitMQ
- **5 Rollen**: Admin, Hochschulverwalter, Prüfungsamt, Lehrender, Student
- **3 Launch-Optionen**: lokal (PowerShell-Skripte), Docker Compose, Kubernetes

Die genaue Anleitung zum Starten der Anwendung findest du auf der **Startseite** dieser Website im Abschnitt *Anwendung starten* sowie im README des Hauptprojekts (z. B. `webapp-http-200`).

---

## Skripte

| Befehl | Aktion |
|--------|--------|
| `npm run dev` | Entwicklungsserver starten |
| `npm run build` | Produktions-Build (inkl. Astro Check) |
| `npm run preview` | Build lokal vorschauen |
| `npm run astro` | Astro-CLI (z. B. `astro add`) |
| `npm run prettier` | Code formatieren (inkl. Astro, Tailwind) |

---

## Konfiguration

- **Seitentitel, Beschreibung, Links**: `src/consts.ts`
- **Demo-Passwort & Nutzer**: `src/data/demo-nutzer.ts`
- **Umgebung**: Optionale Umgebungsvariablen z. B. `PUBLIC_APP_URL`, `PUBLIC_GOOGLE_ANALYTICS_ID` (siehe `consts.ts` / Env-Docs)

---

## Lizenz & Team

- **Lizenz**: MIT  
- **Autor:innen**: Jakub Naruszko & Louisa Kristin Bahr  
- **Modulverantwortung**: Prof. Lehmann  
- **Abgabe**: 23.02.2026  

---

*Diese README beschreibt die **Dokumentations-Website** für Gradify. Die eigentliche Anwendung (Backend + Frontend) wird in einem separaten Repository entwickelt und betrieben.*
