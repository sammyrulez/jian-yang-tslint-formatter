"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const rule_1 = require("tslint/lib/language/rule/rule");
const jianyangFormatter_1 = require("./jianyangFormatter");
describe("Jian Yang should", () => {
    it("hate Ericch", () => {
        //  expect(result).to.equal('Hello World!');
        const formatter = new jianyangFormatter_1.Formatter();
        // tslint:disable-next-line:max-line-length
        const failures = [new rule_1.RuleFailure(new MockSource(), 0, 0, "no-trailing-whitespace", "no-trailing-whitespace")];
        const errors = formatter.format(failures);
        chai_1.expect(errors.indexOf("I hate Errich")).greaterThan(0);
    });
});
class MockSource {
    constructor() {
        this.fileName = "MockFilename.ts";
    }
    getLineAndCharacterOfPosition(pos) {
        return {
            line: 1,
            character: 1,
        };
    }
    getLineEndOfPosition(pos) {
        throw new Error("Method not implemented.");
    }
    getLineStarts() {
        throw new Error("Method not implemented.");
    }
    getPositionOfLineAndCharacter(line, character) {
        throw new Error("Method not implemented.");
    }
    update(newText, textChangeRange) {
        throw new Error("Method not implemented.");
    }
    getSourceFile() {
        throw new Error("Method not implemented.");
    }
    getChildCount(sourceFile) {
        throw new Error("Method not implemented.");
    }
    getChildAt(index, sourceFile) {
        throw new Error("Method not implemented.");
    }
    getChildren(sourceFile) {
        throw new Error("Method not implemented.");
    }
    getStart(sourceFile, includeJsDocComment) {
        throw new Error("Method not implemented.");
    }
    getFullStart() {
        throw new Error("Method not implemented.");
    }
    getEnd() {
        throw new Error("Method not implemented.");
    }
    getWidth(sourceFile) {
        throw new Error("Method not implemented.");
    }
    getFullWidth() {
        throw new Error("Method not implemented.");
    }
    getLeadingTriviaWidth(sourceFile) {
        throw new Error("Method not implemented.");
    }
    getFullText(sourceFile) {
        throw new Error("Method not implemented.");
    }
    getText(sourceFile) {
        throw new Error("Method not implemented.");
    }
    getFirstToken(sourceFile) {
        throw new Error("Method not implemented.");
    }
    getLastToken(sourceFile) {
        throw new Error("Method not implemented.");
    }
    forEachChild(cbNode, cbNodeArray) {
        throw new Error("Method not implemented.");
    }
}
