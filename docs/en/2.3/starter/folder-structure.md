# Folder Structure

---

- [Folder Structure](#folder-structure)

<a name="#folder-structure"></a>

## Folder Structure
First of all, we will recognize the folder structure of this template. It's easy to understand, like any other template you have ever encountered.

```html
+---dist
  |   +---css
  |   +---fonts
  |   +---img
  |   +---js
  |   \---modules
  +---documentation
  |   +---css
  |   \---js
  +---pages
  +---sources
  |   +---ai
  |   \---scss
  |       +---components
  |       +---override
  |       \---theme
```

Let's get to know the description of each folder.

| Folder Name                     | Description                                                                                                                                                                                                    |
|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `dist/`                         | All distribution files are placed here, such as CSS, Images, third-party libraries, fonts and JavaScript.                                                                                                      |
| `dist/css/`                     | All CSS files are placed here, namely `style.css` and `custom.css`. **DO NOT TOUCH** the `style.css` file, if you want to change the existing CSS rules, please use the `custom.css` file.                     |
| `dist/fonts/`                   | All font files are here, the font used by this template.                                                                                                                                                       |
| `dist/img/`                     | You can find all the images used by this template in this folder. Also, we have created several sample images.                                                                                                 |
| `dist/js/`                      | All JS files are placed here, namely `stisla.js`, `scripts.js` and `custom.js`. Some HTML pages have 1 JavaScript file for functionality. We make it an external file to make it easier and for good practice. |
| `dist/modules/`                 | All third-party libraries, if you find a bug in one library, please report it to the developer of each library. Also, put the library that you want to add in this folder.                                     |
| `documentation/`                | Forget anything in this folder, only contains documentation.                                                                                                                                                   |
| `pages/`                        | This folder only contains pages in the template.                                                                                                                                                               |
| `dist/sources/`                 | All development files are placed here, such as `SCSS` and `Adobe Illustrator`.                                                                                                                                 |
| `dist/sources/ai/`              | All files regarding Adobe Illustrator.                                                                                                                                                                         |
| `dist/sources/scss/`            | All files regarding SASS.                                                                                                                                                                                      |
| `dist/sources/scss/components/` | All component CSS rules are here.                                                                                                                                                                              |
| `dist/sources/scss/override/`   | We overwritten some CSS Bootstrap rules and placed them in this file.                                                                                                                                          |
| `dist/sources/scss/theme/`      | All CSS rules in this template.                                                                                                                                                                                |