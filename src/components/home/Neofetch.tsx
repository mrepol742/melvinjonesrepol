import React from "react";

type MachineInfo = {
  title: string;
  role: string;
  ascii: string[];
  user: string;
  os: string;
  host: string;
  kernel: string;
  uptime?: string;
  packages?: string;
  shell: string;
  resolution?: string;
  de?: string;
  wm?: string;
  terminal: string;
  services?: string[];
  theme?: string;
  icons?: string;
  font?: string;
};

export default function MySetup() {
  const desktop: MachineInfo = {
    title: "Primary Workstation",
    role: "Daily driver for development, experiments, and tinkering",
    ascii: [
      "       .--.      ",
      "      |o_o |     ",
      "      |:_/ |     ",
      "     //   \\ \\   ",
      "    (|     | )   ",
      "   /'\\_   _/`\\  ",
      "   \\___)=(___/   ",
    ],
    user: "mrepol742",
    os: "Arch Linux x86_64",
    host: "archlinux",
    kernel: "linux (rolling)",
    uptime: "742d",
    packages: "pacman / yay",
    shell: "bash /zsh",
    resolution: "1920x1080",
    wm: "hyprland",
    terminal: "kitty",
    theme: "Andromeda-dark",
    icons: "Flat-Remix-Blue-Dark",
    font: "Cantarell 11",
  };

  const server: MachineInfo = {
    title: "Home Server (Repurposed Laptop)",
    role: "Self-hosted services, bots, test environments, and local infrastructure",
    ascii: [
      "      ________   ",
      "     |  ____  |  ",
      "     | |SERVER| | ",
      "     | |______| | ",
      "     |__________| ",
    ],
    user: "mrepol742",
    os: "Arch Linux x86_64",
    host: "archlinux",
    kernel: "linux (rolling), linux-lts",
    packages: "pacman / yay",
    shell: "bash / zsh",
    resolution: "1366x768",
    wm: "gnome",
    terminal: "tty / ssh",
    services: [
      "Bots, bots and bots",
      "Local APIs & test backends",
      "CI-like test builds",
      "Internal tools & experiments",
    ],
  };

  return (
    <div className="space-y-10 mt-10">
      <MachineCard info={desktop} />
      <MachineCard info={server} />
    </div>
  );
}

function MachineCard({ info }: { info: MachineInfo }) {
  return (
    <div className="bg-gray-900/60 rounded p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="font-mono text-lg text-green-300">{info.title}</h2>
        <p className="text-sm text-gray-400">{info.role}</p>
      </div>

      <div className="flex flex-col md:flex-row gap-6">
        <pre
          className="select-none font-mono text-sm leading-[1] text-green-300"
          aria-hidden
        >
          {info.ascii.map((line, i) => (
            <div key={i}>{line}</div>
          ))}
        </pre>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InfoRow label="User" value={info.user} />
          <InfoRow label="OS" value={info.os} />
          <InfoRow label="Host" value={info.host} />
          <InfoRow label="Kernel" value={info.kernel} />
          {info.uptime && <InfoRow label="Uptime" value={info.uptime} />}
          {info.packages && <InfoRow label="Packages" value={info.packages} />}
          <InfoRow label="Shell" value={info.shell} />
          {info.resolution && (
            <InfoRow label="Resolution" value={info.resolution} />
          )}
          {info.wm && <InfoRow label="WM" value={info.wm} />}
          <InfoRow label="Terminal" value={info.terminal} />
        </div>
      </div>

      {info.services && (
        <div className="mt-6">
          <div className="text-xs text-gray-400 mb-2">Running services</div>
          <div className="flex flex-wrap gap-2">
            {info.services.map((s, i) => (
              <Badge key={i} label={s} />
            ))}
          </div>
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-400">
        {info.theme && <Badge label={`Theme: ${info.theme}`} />}
        {info.icons && <Badge label={`Icons: ${info.icons}`} />}
        {info.font && <Badge label={`Font: ${info.font}`} />}
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className="w-24 text-right text-xs text-gray-400 pr-2">{label}</div>
      <div className="font-mono text-sm text-gray-200">{value}</div>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="px-2 py-1 text-xs text-gray-300 bg-gray-900/40 rounded">
      {label}
    </div>
  );
}
