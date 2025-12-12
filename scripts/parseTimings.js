const fs = require("fs");

function parseTimings() {
    const outputFile = "test-output.json";

    if (!fs.existsSync(outputFile)) {
        console.error("No se encontró test-output.json. Ejecuta primero:");
        console.error("jest --json --outputFile=test-output.json");
        process.exit(1);
    }

    const data = JSON.parse(fs.readFileSync(outputFile, "utf8"));
    const testResults = data.testResults || [];

    const timings = testResults.map(test => ({
        file: test.name,
        executionTimeMs: test.perfStats.end - test.perfStats.start
    }));

    console.log("Tiempos de ejecución por archivo:");
    timings.forEach(t => {
        console.log(`- ${t.file}: ${t.executionTimeMs} ms`);
    });
}

parseTimings();
