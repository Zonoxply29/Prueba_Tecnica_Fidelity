import { execFileSync } from "node:child_process";
import {
    cpSync,
    existsSync,
    mkdirSync,
    rmSync,
    writeFileSync,
} from "node:fs";
import { resolve } from "node:path";

const rootDirectory = process.cwd();
const distDirectory = resolve(rootDirectory, "dist");

function copyDirectory(directoryName) {
    const source = resolve(
        rootDirectory,
        "src",
        directoryName,
    );

    const destination = resolve(
        distDirectory,
        directoryName,
    );

    if (!existsSync(source)) {
        return;
    }

    cpSync(source, destination, {
        recursive: true,
    });
}

try {
    console.log("Limpiando carpeta dist...");

    rmSync(distDirectory, {
        recursive: true,
        force: true,
    });

    mkdirSync(resolve(distDirectory, "css"), {
        recursive: true,
    });

    console.log("Compilando Sass...");

    const sassCliPath = resolve(
        rootDirectory,
        "node_modules",
        "sass",
        "sass.js",
    );

    execFileSync(
        process.execPath,
        [
            sassCliPath,
            "src/scss/main.scss",
            "dist/css/main.css",
            "--style=compressed",
            "--no-source-map",
        ],
        {
            cwd: rootDirectory,
            stdio: "inherit",
        },
    );

    console.log("Generando HTML desde PHP...");

    const generatedHtml = execFileSync(
        "php",
        ["src/index.php"],
        {
            cwd: rootDirectory,
            encoding: "utf8",
        },
    );

    writeFileSync(
        resolve(distDirectory, "index.html"),
        generatedHtml,
        "utf8",
    );

    console.log("Copiando JavaScript y recursos...");

    copyDirectory("js");
    copyDirectory("assets");

    writeFileSync(
        resolve(distDirectory, ".nojekyll"),
        "",
        "utf8",
    );

    console.log("Build generado correctamente en dist/");
} catch (error) {
    console.error("Error durante el build:");
    console.error(error.message);

    process.exit(1);
}