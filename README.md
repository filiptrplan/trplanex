# trplanex
My personal component library.

## Components
This is a list of currently available components for the trplanex library.
 - [Typography](#typography)
 - [Buttons](#buttons)
 - [Forms](#forms)
 - [Alerts](#alerts)
 - [Navbar](#navbar)

### Typography
The following tags are styled by default without adding classes: 
 - `p`
 - `h1-h6`
 - `small`
 - `a`

![Typography](https://i.imgur.com/MVaSMbh.png)

### Buttons
```html
<button class="btn is-primary">Login</button>
<button class="btn is-secondary">Cancel</button>
```
![Buttons](https://i.imgur.com/A72QKly.png)

### Forms
```html
<label for="text">Username</label><br />
<input placeholder="Username" class="text-input" id="text" name="text" type="text" />
<br />
<div class="checkbox-container">
    <span class="checkbox-input">
        <input type="checkbox" name="checkbox" id="checkbox" checked />
        <span class="checkbox-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46 46" aria-hidden="true" focusable="false">
                <polyline class="path" fill="none" stroke-width="10" points="41 5 18 36 5 22"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </span>
    </span>
    <label class="checkbox-label" for="checkbox">Checkbox - Checked</label>
</div>
```
![Forms](https://i.imgur.com/UszHoVL.png)

### Alerts
**DISCLAIMER**: You have to import the `src/js/alert.js` file or the `dist/main.js` file into your project in order for the close button to work.
```html
<div class="alert is-danger">
    This is a sample alert! This is a sample alert! This is a sample
    alert! This is a sample alert! This is a sample alert!
    <button class="alert-close">
        <span class="material-icons"> clear </span>
    </button>
</div>
<div class="alert is-secondary">
    This is a sample alert!
    <button class="alert-close">
        <span class="material-icons"> clear </span>
    </button>
</div>
```
![Alerts](https://i.imgur.com/onBuYpL.png)

### Navbar
```html
<nav class="navbar">
    <div class="logo-container">
        <div class="logo"><img src="sample_logo.png" alt="" /></div>
        <h1 class="name">Trplanex</h1>
    </div>
    <ul class="nav-links">
        <li class="nav-item is-active">
            <a href="#" class="nav-link is-active">Home</a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link">Contact</a>
        </li>
        <li class="nav-item is-dropdown">
            <a href="#" class="nav-link">Pricing</a>
            <span class="material-icons dropdown-icon">
                arrow_drop_down
            </span>
            <div class="dropdown">
                <ul class="nav-links">
                    <li class="nav-item">
                        <a href="#" class="nav-link">Free plan</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Pro plan</a>
                    </li>
                    <li class="nav-item">
                        <a href="#" class="nav-link">Custom Pricing</a>
                    </li>
                </ul>
            </div>
        </li>
    </ul>
</nav> 
```
![Navbar](https://i.imgur.com/2OGcexJ.png)


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

### **Typography colors** 
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

### **Background colors**
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

