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
 <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aurastyles/dist/aurastyles.min.css">
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
  - **Margin:**
  ```bash
 .m-{size}, .mx-{size}, .my-{size}, .mt-{size}
  ```
- **Padding:**
  ```bash
    .p-{size}, .px-{size}, .py-{size}, .pt-{size},
  ```
- **Gap:**
  ```bash
  .gap-{size}, .gap-x-{size}, .gap-y-{size}
  ```


  ### Typography:  
  - **Font Size::**
  ```bash
  .text-{size} (e.g., .text-sm, .text-lg, .text-2xl)
  ```
- **Font Weight:**
  ```bash
   .font-{weight} (e.g., .font-bold, .font-light)
  ```
- **Text Alignment::**
  ```bash
  .text-left, .text-center, .text-right
  ```


  ### Responsive Design:
  Use responsive variants of utilities by prefixing them with breakpoints:
  - **Small Screen::**
  ```bash
  .sm:{utility} (e.g., .sm:text-lg, .sm:bg-red-500)
  ```
- **Medium Screens:**
  ```bash
   .md:{utility} (e.g., .md:p-8, .md:flex)
  ```
- **Large Screens:::**
  ```bash
  .lg:{utility} (e.g., .lg:text-3xl, .lg:gap-6)
  ```




  ## Components:
  AuraStyles also includes pre-built components for common UI elements:
- **Buttons:**
  ```bash
    <button class="btn btn-primary">Primary Button</button>
    <button class="btn btn-secondary">Secondary Button</button>
  ```
- **Cards:**
  ```bash
    <div class="card">
      <img src="https://via.placeholder.com/400x200" alt="Card Image" class="card-img">
      <div class="card-body">
         <h3 class="card-title">Card Title</h3>
        <p class="card-text">This is a card with an image and text.</p>
    </div>
  </div>
  ```
- **Navbar:**
 ```bash
    <nav class="navbar">
      <a href="#" class="navbar-brand">AuraStyles</a>
        <ul class="navbar-nav">
        <li class="nav-item"><a href="#" class="nav-link">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Contact</a></li>
      </ul>
  </nav>
  ```
## Customization:
AuraStyles is highly customizable. You can override the default variables in your project:
```bash
    // Override default colors
     $primary: #6a11cb;
     $secondary: #2dd4bf;

   // Import AuraStyles
   @import '~aurastyles/src/aurastyles';
```



# License
AuraStyles is licensed under the MIT License.
