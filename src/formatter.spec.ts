import { expect } from "chai";
import { RuleFailure } from "tslint/lib/language/rule/rule";
import * as ts from "typescript" ;
import {Formatter} from "./jianyangFormatter";

describe("Jian Yang should", () => {
  it("hate Ericch", () => {
  //  expect(result).to.equal('Hello World!');
  const formatter: Formatter = new Formatter();
  // tslint:disable-next-line:max-line-length
  const failures: RuleFailure[] = new Array(120).fill(new RuleFailure(new MockSource() , 0, 0, "no-trailing-whitespace", "no-trailing-whitespace"));
  const errors = formatter.format(failures);
  expect(errors.indexOf("I hate Errich")).greaterThan(0);
  });
});

class MockSource implements ts.SourceFile {
    public kind: ts.SyntaxKind.SourceFile;    public statements: ts.NodeArray<ts.Statement>;
    public endOfFileToken: ts.Token<ts.SyntaxKind.EndOfFileToken>;
    public fileName: string = "MockFilename.ts";
    public text: string;
    public amdDependencies: ReadonlyArray<ts.AmdDependency>;
    public moduleName: string;
    public referencedFiles: ReadonlyArray<ts.FileReference>;
    public typeReferenceDirectives: ReadonlyArray<ts.FileReference>;
    public languageVariant: ts.LanguageVariant;
    public isDeclarationFile: boolean;
    public hasNoDefaultLib: boolean;
    public languageVersion: ts.ScriptTarget;
    public getLineAndCharacterOfPosition(pos: number): ts.LineAndCharacter {
       return {
        line: 1,
        character: 1,
       };
    }
    public getLineEndOfPosition(pos: number): number {
        throw new Error("Method not implemented.");
    }
    public getLineStarts(): ReadonlyArray<number> {
        throw new Error("Method not implemented.");
    }
    public getPositionOfLineAndCharacter(line: number, character: number): number {
        throw new Error("Method not implemented.");
    }
    public update(newText: string, textChangeRange: ts.TextChangeRange): ts.SourceFile {
        throw new Error("Method not implemented.");
    }

    // tslint:disable-next-line:variable-name
    public _declarationBrand: any;
    public flags: ts.NodeFlags;
    public decorators?: ts.NodeArray<ts.Decorator>;
    // tslint:disable-next-line:max-line-length
    public modifiers?: ts.NodeArray<ts.Token<ts.SyntaxKind.AbstractKeyword> | ts.Token<ts.SyntaxKind.AsyncKeyword> | ts.Token<ts.SyntaxKind.ConstKeyword> | ts.Token<ts.SyntaxKind.DeclareKeyword> | ts.Token<ts.SyntaxKind.DefaultKeyword> | ts.Token<ts.SyntaxKind.ExportKeyword> | ts.Token<ts.SyntaxKind.PublicKeyword> | ts.Token<ts.SyntaxKind.PrivateKeyword> | ts.Token<ts.SyntaxKind.ProtectedKeyword> | ts.Token<ts.SyntaxKind.ReadonlyKeyword> | ts.Token<ts.SyntaxKind.StaticKeyword>>;
    public parent?: ts.Node;
    public getSourceFile(): ts.SourceFile {
        throw new Error("Method not implemented.");
    }
    public getChildCount(sourceFile?: ts.SourceFile): number {
        throw new Error("Method not implemented.");
    }
    public getChildAt(index: number, sourceFile?: ts.SourceFile): ts.Node {
        throw new Error("Method not implemented.");
    }
    public getChildren(sourceFile?: ts.SourceFile): ts.Node[] {
        throw new Error("Method not implemented.");
    }
    public getStart(sourceFile?: ts.SourceFile, includeJsDocComment?: boolean): number {
        throw new Error("Method not implemented.");
    }
    public getFullStart(): number {
        throw new Error("Method not implemented.");
    }
    public getEnd(): number {
        throw new Error("Method not implemented.");
    }
    public getWidth(sourceFile?: ts.SourceFileLike): number {
        throw new Error("Method not implemented.");
    }
    public getFullWidth(): number {
        throw new Error("Method not implemented.");
    }
    public getLeadingTriviaWidth(sourceFile?: ts.SourceFile): number {
        throw new Error("Method not implemented.");
    }
    public getFullText(sourceFile?: ts.SourceFile): string {
        throw new Error("Method not implemented.");
    }
    public getText(sourceFile?: ts.SourceFile): string {
        throw new Error("Method not implemented.");
    }
    public getFirstToken(sourceFile?: ts.SourceFile): ts.Node {
        throw new Error("Method not implemented.");
    }
    public getLastToken(sourceFile?: ts.SourceFile): ts.Node {
        throw new Error("Method not implemented.");
    }
    public forEachChild<T>(cbNode: (node: ts.Node) => T, cbNodeArray?: (nodes: ts.NodeArray<ts.Node>) => T): T {
        throw new Error("Method not implemented.");
    }
    public pos: number;
    public end: number;

}
