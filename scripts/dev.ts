#!/usr/bin/env node
// scripts/dev.ts

import { execSync } from "child_process";
import {cyan, green, yellow, red, bold, dim} from "colorette";

const run = (cmd: string, silent = false) => {
    execSync(cmd, { stdio: silent ? "ignore" : "inherit" });
};

const log = (msg: string) => console.log(msg);
const step = (n: number, text: string) => log(yellow(`\n${bold("Step")} ${n}/4 – ${text}`));
const success = (msg: string) => log(green(`\n${msg}\n`));

console.clear();
log(bold(cyan("\nINICIANDO NEBULA NEXT WALLET – MODO DESARROLLO\n")));
console.log(dim("─".repeat(60)) + "\n");

try {
    step(1, "Verificando sintaxis con ESLint");
    run("pnpm eslint . --ext .ts,.tsx");
    success(" ✓ Lint pasado correctamente");

    step(2, "Build de producción (detección temprana de errores)");
    run("pnpm tsc -b && pnpm next build");
    success(" ✓ Build exitoso – ¡sin errores!");

    step(3, "Limpiando caché de Next.js");
    run("pnpm rm -rf .next *.tsbuildinfo", true);
    success(" ✓ Cache limpiado");

    step(4, "Iniciando servidor de desarrollo con Turbopack");
    log(green("\n ✓ Todo listo! Arrancando Next.js...\n"));
    run("pnpm next dev");
} catch {
    log(red("\nAlgo salió mal – revisa el paso anterior"));
    process.exit(1);
}