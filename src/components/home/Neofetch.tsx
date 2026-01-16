import React from "react";

type MachineInfo = {
  title: string;
  description: string;
  ascii: string[];
  cpu: string;
  os: string;
  gpu: string;
  kernel: string;
  ram: string;
  packages: string;
  shell: string;
  resolution: string;
  wm: string;
  terminal: string;
};

export default function MySetup() {
  const desktop: MachineInfo = {
    title: "Primary Workstation",
    description: "Daily driver for development, experiments, and tinkering",
    ascii: [
      "                .+`",
      "               `oo/`",
      "              `oooo:`",
      "             -+ooooo+:",
      "           `/:-++oooo+:",
      "          `/+++/++++++++:",
      "         `/++++++++++++++:",
      "        `/+++ooooooooooooo/`",
      "       ./oosssso++osssssso+`",
      "      .oosssso-````/ossssss+`",
      "     -ossssso.      :ssssssso.",
      "    :ossssss/        osssso+++",
    ],
    cpu: "Ryzen 3 1300X",
    os: "Arch Linux x86_64",
    gpu: "RX 550X 4GB",
    kernel: "linux (rolling)",
    ram: "32GB DDR4 2666MHz",
    packages: "pacman / yay",
    shell: "oh-my-bash",
    resolution: "1920x1080",
    wm: "hyprland",
    terminal: "kitty",
  };

  const laptop: MachineInfo = {
    title: "Lenovo Thinkpad L570",
    description: "Portable development and on-the-go tasks",
    ascii: [
      "      __________   ",
      "     |  ____  |  ",
      "     | |LAPTOP| | ",
      "     | |______| | ",
      "     |__________| ",
    ],
    cpu: "Intel i5-7200U",
    os: "Arch Linux x86_64",
    gpu: "Intel HD Graphics 620",
    kernel: "linux (rolling)",
    ram: "16GB DDR4 2133MHz",
    packages: "pacman / yay",
    shell: "oh-my-zsh",
    resolution: "1920x1080",
    wm: "hyprland",
    terminal: "kitty",
  };

  const server: MachineInfo = {
    title: "Lenovo G450",
    description:
      "Even thought it's older compare to my first laptop, it has upgradable parts. It serves as my home server for hosting personal projects and services.",
    ascii: [
      "      ________   ",
      "     |  ____  |  ",
      "     | |SERVER| | ",
      "     | |______| | ",
      "     |__________| ",
    ],
    cpu: "Intel Core 2 Duo T9600",
    os: "Arch Linux x86_64",
    gpu: "Intel GMA X4500",
    kernel: "linux (rolling), linux-lts",
    ram: "8GB DDR3 1066MHz",
    packages: "pacman / yay",
    shell: "bash / zsh",
    resolution: "1366x768",
    wm: "kde-plasma",
    terminal: "tty / ssh",
  };

  const firstDevice: MachineInfo = {
    title: "Acer Travelmate B118-M",
    description:
      "This is my first ever laptop and my first ever Linux machine.",
    ascii: [
      "      ________   ",
      "     |  ____  |  ",
      "     | |ACER| | ",
      "     | |______| | ",
      "     |__________| ",
    ],
    cpu: "Intel Celeron N4000",
    os: "Linux Mint x86_64",
    gpu: "Intel UHD Graphics 600",
    kernel: "linux (rolling)",
    ram: "4GB DDR4 2400MHz",
    packages: "apt",
    shell: "bash",
    resolution: "1366x768",
    wm: "cinnamon",
    terminal: "gnome-terminal",
  };

  return (
    <div className="space-y-10 mt-10">
      <MachineCard info={desktop} />
      <MachineCard info={laptop} />
      <MachineCard info={server} />
      <MachineCard info={firstDevice} />
    </div>
  );
}

function MachineCard({ info }: { info: MachineInfo }) {
  return (
    <div className="bg-gray-900/60 rounded p-6 backdrop-blur-sm">
      {/* Header */}
      <div className="mb-4">
        <h2 className="font-mono text-lg text-green-300">{info.title}</h2>
        <p className="text-sm text-gray-400">{info.description}</p>
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
          <InfoRow label="CPU" value={info.cpu} />
          <InfoRow label="OS" value={info.os} />
          <InfoRow label="GPU" value={info.gpu} />
          <InfoRow label="Kernel" value={info.kernel} />
          <InfoRow label="RAM" value={info.ram} />
          {info.packages && <InfoRow label="Packages" value={info.packages} />}
          <InfoRow label="Shell" value={info.shell} />
          {info.resolution && (
            <InfoRow label="Resolution" value={info.resolution} />
          )}
          {info.wm && <InfoRow label="WM" value={info.wm} />}
          <InfoRow label="Terminal" value={info.terminal} />
        </div>
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
