const projects = [
{
    id: "retail-playground",
    title: "Retail Playground & Simulation",
    status: "In Development",
    statusColor: "amber",
    summary: "Autonomous multi-agent retail simulation featuring multi-turn customer-to-clerk dialogues, threshold-based procurement audits, and end-of-day ledger reconciliation.",
    tags: ["Python", "Multi-Agent", "Autonomous Systems", "SQLite", "Simulation"],
    detailPage: "projects/retail-playground.html",
    repoUrl: "https://github.com/bjornargu/retail_playground"
  },
  {
    id: "soar-engine",
    title: "Lightweight SOAR Engine",
    status: "Active",
    statusColor: "emerald",
    summary: "Host-level security orchestration system that ingests authentication logs, enriches indicators via AbuseIPDB, leverages Gemini 3.8 for contextual threat analysis and alert summarization, and enforces automated iptables mitigations.",
    tags: ["Python", "FastAPI", "Gemini 3.8", "iptables", "AbuseIPDB", "Linux"],
    detailPage: "projects/lightweight-soar.html",
    repoUrl: "https://github.com/bjornargu/lightweight-soar" 
  },
  {
    id: "sio-menu",
    title: "SiØ Campus Menu Chrome Extension",
    status: "Active",
    statusColor: "emerald",
    summary: "Lightweight browser extension that scrapes and parses university diner menus, providing campus selection, localization, daily meal highlights, and persistent local storage. Mostly made out of curiosity for browser extensions and for fun.",
    tags: ["JavaScript", "Chrome Extensions", "DOMParser", "Async/Await", "Local Storage"],
    detailPage: "projects/sio-menu.html",
    repoUrl: "https://github.com/bjornargu/sio_menu" 
  }
];

function renderProjects() {
  const container = document.getElementById("project-grid");
  if (!container) return;

  container.innerHTML = projects.map(project => {
    const isEmerald = project.statusColor === "emerald";
    const badgeStyle = isEmerald
      ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
      : "bg-amber-500/10 text-amber-400 border-amber-500/20";

    const tagsHtml = project.tags
      .map(tag => `<span class="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-xs font-mono">${tag}</span>`)
      .join("");

    return `
      <article class="p-6 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-slate-700 transition flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-3">
            <h3 class="text-xl font-semibold text-white tracking-tight">${project.title}</h3>
            <span class="text-xs font-mono px-2 py-0.5 rounded border ${badgeStyle}">${project.status}</span>
          </div>
          <p class="text-slate-300 text-sm mb-4 leading-relaxed">${project.summary}</p>
          <div class="flex flex-wrap gap-1.5 mb-6">
            ${tagsHtml}
          </div>
        </div>
        <div class="flex items-center gap-4 text-sm font-medium border-t border-slate-800/80 pt-4">
          <a href="${project.detailPage}" class="text-sky-400 hover:text-sky-300 transition flex items-center gap-1">
            Project Summary &rarr;
          </a>
          <a href="${project.repoUrl}" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-white transition">
            Source Code
          </a>
        </div>
      </article>
    `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", renderProjects);