import React from "react";

export default function NeofetchTerminal({
  info = {
    ascii: [
      "       .--.      ",
      "      |o_o |     ",
      "      |:_/ |     ",
      "     //   \ \\   ",
      "    (|     | )   ",
      "   /'\_   _/`\\  ",
      "   \___)=(___/   ",
    ],
    user: "mrepol742@archlinux",
    os: "Arch Linux",
    host: "My PC",
    kernel: "Linux 6.16.4-arch1-1",
    uptime: "742d",
    packages: "1123 (pacman)",
    shell: "zsh 5.9",
    resolution: "1920x1080",
    de: "Hyprland",
    wm: "sway",
    terminal: "kitty",
    theme: "Andromeda-dark [GTK2/3]",
    icons: "Flat-Remix-Blue-Dark [GTK2/3]",
    font: "Cantarell 11 [GTK2/3]",
  },
}) {
  const {
    ascii,
    user,
    os,
    host,
    kernel,
    uptime,
    packages,
    shell,
    resolution,
    wm,
    terminal,
    theme,
    icons,
    font,
  } = info;

  return (
    <div className="w-full mt-10">
      <div className="bg-gray-900/60 rounded p-6 backdrop-blur-sm">
        <div className="flex flex-col md:flex-row gap-6">
          {/* ASCII art / Logo */}
          <div className="flex-shrink-0 flex items-start justify-center md:justify-start">
            <pre
              className="select-none font-mono text-sm leading-[1] text-green-300"
              aria-hidden
            >
              {ascii.map((line, i) => (
                <div key={i}>{line}</div>
              ))}
            </pre>
          </div>

          {/* Info list */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <InfoRow
                label={<strong className="text-green-300">User</strong>}
                value={user}
              />
              <InfoRow
                label={<strong className="text-green-300">OS</strong>}
                value={os}
              />
              <InfoRow
                label={<strong className="text-green-300">Host</strong>}
                value={host}
              />
              <InfoRow
                label={<strong className="text-green-300">Kernel</strong>}
                value={kernel}
              />
              <InfoRow
                label={<strong className="text-green-300">Uptime</strong>}
                value={uptime}
              />
              <InfoRow
                label={<strong className="text-green-300">Packages</strong>}
                value={packages}
              />
              <InfoRow
                label={<strong className="text-green-300">Shell</strong>}
                value={shell}
              />
              <InfoRow
                label={<strong className="text-green-300">Resolution</strong>}
                value={resolution}
              />
              <InfoRow
                label={<strong className="text-green-300">WM</strong>}
                value={wm}
              />
              <InfoRow
                label={<strong className="text-green-300">Terminal</strong>}
                value={terminal}
              />
            </div>

            {/* Fake CLI prompt area */}
            <div className="mt-6 bg-black/60 border border-gray-800 rounded-lg p-3 font-mono text-sm text-gray-200">
              <div className="flex items-center gap-2">
                <span className="text-green-400">{user.split("@")[0]}</span>
                <span className="text-gray-400">@</span>
                <span className="text-yellow-300">{host}</span>
                <span className="text-gray-500">:~$</span>
              </div>

              <div className="mt-3 text-gray-300">
                <code className="block">$ neofetch --config off</code>
                <small className="text-gray-500">(example command)</small>
              </div>
            </div>
          </div>
        </div>

        {/* Footer: responsive stats row */}
        <div className="mt-4 flex flex-wrap gap-2 text-xs text-gray-400">
          <Badge label={`Theme: ${theme}`} />
          <Badge label={`Icons: ${icons}`} />
          <Badge label={`Font: ${font}`} />
          <Badge label={`Shell: ${shell}`} />
          <Badge label={`Terminal: ${terminal}`} />
          <Badge label={`Packages: ${packages.split(" ")[0]}`} />
        </div>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  colSpan = 1,
}: {
  label: React.ReactNode;
  value: string;
  colSpan?: number;
}) {
  return (
    <div className={`flex items-center gap-2 col-span-${colSpan}`}>
      <div className="w-24 text-right text-xs text-gray-400 pr-2 hidden sm:block">
        {label}
      </div>
      <div className="flex-1 font-mono text-sm text-gray-200">{value}</div>
    </div>
  );
}

function Badge({ label }: { label: string }) {
  return (
    <div className="px-2 py-1 text-xs text-gray-300 bg-gray-900/30">
      {label}
    </div>
  );
}
