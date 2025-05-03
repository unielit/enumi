import { assertEquals } from "@std/assert";

import { enumi } from "./mod.ts";

Deno.test(function kebabCase() {
  const cases = ["single", "two-parts", "three-separate-parts"] as const;
  const TestEnumi = enumi(...cases);

  assertEquals(TestEnumi.Single, cases[0]);
  assertEquals(TestEnumi.TwoParts, cases[1]);
  assertEquals(TestEnumi.ThreeSeparateParts, cases[2]);
});

Deno.test(function camelCase() {
  const cases = ["single", "twoParts", "threeSeparateParts"] as const;
  const TestEnumi = enumi(...cases);

  assertEquals(TestEnumi.Single, cases[0]);
  assertEquals(TestEnumi.TwoParts, cases[1]);
  assertEquals(TestEnumi.ThreeSeparateParts, cases[2]);
});

Deno.test(function pascalCase() {
  const cases = ["Single", "TwoParts", "ThreeSeparateParts"] as const;
  const TestEnumi = enumi(...cases);

  assertEquals(TestEnumi.Single, cases[0]);
  assertEquals(TestEnumi.TwoParts, cases[1]);
  assertEquals(TestEnumi.ThreeSeparateParts, cases[2]);
});

Deno.test(function duplicatedCases() {
  const cases = ["same", "same", "different"] as const;
  const TestEnumi = enumi(...cases);

  assertEquals(TestEnumi.Same, cases[0]);
  assertEquals(TestEnumi.Different, cases[2]);
  assertEquals([...TestEnumi], [cases[0], cases[2]]);
});

Deno.test(function noCases() {
  const cases = [] as const;
  const TestEnumi = enumi(...cases);

  assertEquals([...TestEnumi], []);
});

Deno.test(function caseDestructuring() {
  const cases = ["first-value", "second-value"];
  const TestEnumi = enumi(...cases);

  assertEquals([...TestEnumi], cases);
});
