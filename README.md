# AuraStyles ✨

A lightweight, customizable, and easy-to-use CSS library for modern web development. Inspired by TailwindCSS, AuraStyles provides utility-first classes for rapid UI development with a touch of elegance.

## Features

- **Utility-First Classes**: Quickly style elements with atomic CSS classes.
- **Responsive Design**: Built-in support for responsive layouts.
- **Customizable**: Easily extend or modify the default theme.
- **No JavaScript**: Pure CSS, no dependencies required.
- **Flexible**: Works with any framework or vanilla HTML.
- **Theming**: Includes a rich color palette and easy theming options.

## Installation

You can install AuraStyles via npm:

```bash
npm install aurastyles
```
Or include it directly in your HTML via CDN:
```bash
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aurastyles/dist/aurastyles.min.css">
```
# Usage.

## Basic Setup


After installing AuraStyles, include it in your project:

```bash
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AuraStyles Example</title>
  <link rel="stylesheet" href="path/to/aurastyles.css">
</head>
<body>
  <div class="bg-primary-500 text-white p-4">
    <h1 class="text-2xl font-bold">Welcome to AuraStyles!</h1>
    <p class="mt-2">A lightweight and elegant CSS library.</p>
  </div>
</body>
</html>
```
### Utility Classes
AuraStyles provides a wide range of utility classes for styling:
### colors:
- **Text Colors:**
  ```bash
  .text-{color}-{shade} (e.g., .text-primary-500, .text-gray-800)
  ```
- **background:**
  ```bash
  .bg-{color}-{shade} (e.g., .bg-red-300, .bg-green-600)
  ```
- **Border Colors:**
  ```bash
  .border-{color}-{shade} (e.g., .border-blue-400)
  ```
### Spacing:  
  
