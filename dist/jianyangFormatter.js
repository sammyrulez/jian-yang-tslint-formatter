"use strict";
/**
 * @license
 *
 * Copyright 2018 Sammyrulez, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const abstractFormatter_1 = require("tslint/lib/language/formatter/abstractFormatter");
const chalk_1 = require("chalk");
const Utils = require("tslint/lib/utils");
class Formatter extends abstractFormatter_1.AbstractFormatter {
    constructor() {
        super(...arguments);
        this.quotes = ["This code smells like a dead pig.",
            "Hello, I went to China to do new new Internet. Thank you. Enjoy your house. I love you. Jian-Yang.",
            "The witch lost his mind.",
            "This code is just like Errich. Errich is dead",
            "My corrupt uncle sent a death certificate from China but to send body is too expensive.",
            "I cremate a pig because a pig is most like a fat human.Your code is a pig.",
            "That is racist.",
            "Big mortgage. Seven credit cards. Big technical debt.",
            "This is my code now.",
            " I hate Errich.",
            " In China, last name comes first.",
            // tslint:disable-next-line:max-line-length
            "Hello. I am gone, but Jian-Yang is a very good friend and very smart. I want him to be the leader of the house and control all of the friends. Goodbye.",
            "I want your house. Thank you.",
            "Shit-ton. Yes.",
            "We're leaving now. International flight. Four hours early.",
            "This could've killed me. Now I can give it to Erlich.",
            "Hello. Congratulations. You're pregnant.",
            " No, and \"not hot dog.\"",
            "Erlich was right. You are a white witch.",
            "These are from your mom.",
            "I was driving next to a store window, and I stop and look in my reflection. I looked like an asshole.",
            "My grandmother gave me a family recipe before she died in a horrible way.",
        ];
    }
    /* tslint:enable:object-literal-sort-keys */
    format(failures) {
        failures = this.sortFailures(failures);
        const outputLines = this.mapToMessages(failures);
        // Removes initial blank line
        if (outputLines[0] === "") {
            outputLines.shift();
        }
        return `${outputLines.join("\n\n")}\n`;
    }
    mapToMessages(failures) {
        if (failures.length === 0) {
            return [];
        }
        const outputLines = [];
        let currentFile;
        for (const failure of failures) {
            const fileName = failure.getFileName();
            const lineAndCharacter = failure.getStartPosition().getLineAndCharacter();
            let positionTuple = this.pad(`${lineAndCharacter.line + 1}:${lineAndCharacter.character + 1}`, 7);
            // Output the name of each file once
            if (currentFile !== fileName) {
                outputLines.push("");
                outputLines.push(`${fileName}${chalk_1.default.hidden(`:${positionTuple}`)}`);
                currentFile = fileName;
            }
            let failureString = this.quotes[Math.floor(Math.random() * this.quotes.length)];
            // Rule
            let ruleName = failure.getRuleName();
            // Output
            const output = `${positionTuple}  ${ruleName} \n\t\" ${failureString}\"`;
            outputLines.push(output);
        }
        return outputLines;
    }
    pad(str, len) {
        const padder = Array(len + 1).join(" ");
        return (str + padder).substring(0, padder.length);
    }
}
/* tslint:disable:object-literal-sort-keys */
Formatter.metadata = {
    formatterName: "jianyang",
    description: "Formatter with HBO Silicon Valley jian-yang quotes",
    descriptionDetails: Utils.dedent `
            The output matches what is produced by ESLint's stylish formatter. Just a bit more funny and less useful and informative`,
    sample: Utils.dedent `
        myFile.ts
        1:14  semicolon  Missing semicolon`,
    consumer: "human",
};
exports.Formatter = Formatter;
