/// <reference path="fourslash.ts" />

////{
////    [|export const [|{| "isWriteAccess": true, "isDefinition": true, "declarationRangeIndex": 0 |}x|] = 0;|]
////    [|x|];
////}

verify.singleReferenceGroup("const x: 0", "x");
