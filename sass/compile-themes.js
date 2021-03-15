const path = require("path");
const fs = require("fs");

function compileThemes() {
    const stylesPath = path.resolve(__dirname, "src/styles/");
    const themesPath = path.resolve(__dirname, "src/styles/themes/");
    const generatedDirectory = path.resolve(__dirname, "src/styles/generated");
    const mainFileName = "app.scss";
    let dirent;
    let variablesArray = []

    
    // Generate the css root variables for every theme
    const themesDir = fs.opendirSync(themesPath);
    while ((dirent = themesDir.readSync()) !== null) {
        if (dirent.isDirectory()) continue;
        // Don't recompile already generated files
        if (dirent.name.endsWith("-vars.scss")) continue;
        // Generate the :root files with different vars
        variablesArray = generateCssVariables(path.resolve(themesPath, dirent.name));
    }
    themesDir.closeSync();
    
    if (!fs.existsSync(generatedDirectory)) {
        fs.mkdirSync(generatedDirectory);
    }
    
    const stylesDir = fs.opendirSync(stylesPath);
    while ((dirent = stylesDir.readSync()) !== null) {
        if (dirent.isDirectory()) continue;
        // If we are dealing with the main file remove all the theme imports and change the name
        if(dirent.name == mainFileName) {
            replaceVariables(path.resolve(stylesPath, dirent.name), variablesArray, generatedDirectory, "-generated");
            const filepath = path.resolve(generatedDirectory, path.basename(dirent.name, ".scss")+"-generated.scss");
            let file = require("fs").readFileSync(filepath, "utf-8");
            file = file.replace(new RegExp("@import.*themes/.*", "g"), "");
            fs.writeFileSync(filepath, file);
        } else {
            replaceVariables(path.resolve(stylesPath, dirent.name), variablesArray, generatedDirectory);
        }
    }
    stylesDir.closeSync();
}

function replaceVariables(filepath, variableNames, generatedDirectory, append="") {
    let file = require("fs").readFileSync(filepath, "utf-8");
    variableNames.forEach((name) => {
        file = replaceAll(file, "\\" + name, `var(--${name.split("$")[1]})`);
    })
    const newFileName = path.basename(filepath, ".scss")+append+".scss";
    fs.writeFileSync(path.resolve(generatedDirectory, newFileName), file);
}

function replaceAll(str, find, replace) {
    const exp = new RegExp(`(${find})([^\\w-])`, "g");
    return str.replace(exp, replace+"$2");
}

function generateCssVariables(filepath) {
    const getNameAndValue = /^\$([\w-]+):?\s(.*);/;
    const getImport = /@import.*/;
    const lines = require("fs")
        .readFileSync(filepath, "utf-8")
        .split("\n")
        .filter(Boolean);

    // Generate the css root variables
    let generatedVariables = "";
    let variablesArray = []

    // First copy the imports over
    lines.forEach((line) => {
        const importMatch = line.match(getImport);
        if (importMatch != null) {
            generatedVariables += importMatch[0] + "\n";
        }
    });

    generatedVariables += ":root {";

    // Generate the variables
    lines.forEach((line) => {
        const match = line.match(getNameAndValue);
        if (match != null) {
            // Use the special sass syntax for the variables when applicable #{$sass-variable}
            if(match[2].startsWith("$")){
                generatedVariables += `--${match[1]}: #{${match[2]}};`;
            } else {
                generatedVariables += `--${match[1]}: ${match[2]};`;
            }
            variablesArray.push("$"+match[1]);
        }
    });
    generatedVariables += "}";
    const splitPath = filepath.split(/\.(?=[^\.]+$)/);
    const newPath = splitPath[0]+'-vars.'+splitPath[1];
    fs.writeFileSync(
        newPath,
        generatedVariables
    );

    return variablesArray;
}

compileThemes();
