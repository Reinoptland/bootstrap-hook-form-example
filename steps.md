# Steps

```bash
npm install react-bootstrap bootstrap
npm install node-sass@4.14.1
```

1. Rename index.css to index.scss
2. Import index.scss in index.js
3. Add to index.scss

```scss
@import "~bootstrap/scss/bootstrap";
```

We can customize the theming

```scss
// Theming goes here:
$theme-colors: (
  "primary": hotpink,
  "danger": teal,
);

$enable-rounded: false;

// import the rest below:
@import "~bootstrap/scss/bootstrap";
```

Cheatsheet:

https://bootstrapvars.com/

## Making a from with react-hook-form

- Why react hook form vs. making our own form
- Alternatives: Formik

- How to use it
- How to use it with Bootstrap (we have to figure this out)
