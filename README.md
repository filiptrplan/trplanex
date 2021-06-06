# trplanex
My personal component library.

## Colors and theming
These are the SASS variables you can modify to achieve your unique theming. The themes are stored in `src/styles/themes/`.

### **Main colors**
Mostly used for emphasizing visual elements.
```scss
// Primary color (buttons, links)
$primary: $purple-500;
$primary-light: $purple-400;
$primary-dark: $purple-600;
// Danger color
$danger: $red-500;
$danger-light: $red-400;
$danger-dark: $red-600;
```

### **Typography** 
Colors used for typography.
```scss
// The main text color
$text-color: $gray-200;
// Color used for emphasizin text (h1-h6, ...)
$emphasis-text-color: white;
// The colors of the navigation links in the unfocused state
$nav-link-color: $gray-400;
// Hover color of the navigation links
$nav-link-hover: white;
```

### **Background**
Used for backgrounds of various elements.
```scss
// The color of the page
$main-bg-color: $gray-800;
// Dark variant of the background color
$main-bg-dark: lighten($main-bg-color, 2%);
// Used for contrasting emphasized elements on the background color
$main-bg-contrast: $gray-100;
// Color used for backgrounds of "raised" elements
$box-bg: $gray-600;
```

