"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TableReporter {
    onRunStart(results, options) {
        // Your implementation here
    }
    onTestStart(test) {
        // Your implementation here
    }
    onTestResult(test, testResult, aggregatedResult) {
        // Your implementation here
    }
    onRunComplete(contexts, results) {
        const table = [];
        results.testResults.forEach((testResult) => {
            testResult.testResults.forEach((result) => {
                table.push({
                    filePath: result.fullName,
                    description: result.fullName,
                    status: result.status,
                    duration: result.duration,
                });
            });
        });
        console.table(table);
    }
    getLastError() {
        // Your implementation here
    }
}
exports.default = TableReporter;
