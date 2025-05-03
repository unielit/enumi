# Enumi

Enumi is a lightweight utility for creating string enums in TypeScript without the need to use the verbose `enum` syntax, which is not allowed when using the `erasableSyntaxOnly` flag.

Instead of writing:

```ts
enum HttpStatusCode {
  Ok = "ok",
  NotFound = "not-found",
  InternalServerError = "internal-server-error",
}
```

You can simply write:

```ts
const HttpStatusCode = enumi("ok", "not-found", "internal-server-error");
```

Kebab-case strings are automatically converted to PascalCase, allowing you to use them with conventional enum syntax:

```ts
getErrorMessage(HttpStatusCode.NotFound);
```

To retrieve all values from an enumeration as a string array, use the spread syntax:

```ts
const cases = [...enumi("pretty", "cool")];
assertEquals(cases, ["pretty", "cool"]);
```

Duplicate values are automatically removed:

```ts
const cases = [...enumi("pretty", "pretty", "cool")];
assertEquals(cases, ["pretty", "cool"]);
```
