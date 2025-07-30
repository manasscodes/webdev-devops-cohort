# HTML

Html stands for Hyper text Markup Language. It is the foundation of Building unstyled Websites.

## Step 1
Create Simple Html File Locally

```html
<html>
     <title>
          Visual Studio Code
     </title>
</html>
```

## Step 2 - Tags

- `div`, `span`
- `head`
- `body`
- `h1`, `h2`, `h3`, `h4`, `h5`, `h6`
- `b`, `i`, `u`
- `a`
- `img`
- `input`
- `button`
- `br`

### HTML Tags Explained

#### 1. `<div>`
- **Description:** The `<div>` (division) tag is a block-level container used to group other HTML elements together. It is commonly used for layout and styling purposes.
- **Example:**
  ```html
  <div>
    <p>This is inside a div.</p>
  </div>
  ```
- **Notes:** `<div>` takes up the full width available by default.

#### 2. `<span>`
- **Description:** The `<span>` tag is an inline container used to mark up a part of a text or a document. It is mainly used for styling a specific portion of text.
- **Example:**
  ```html
  <span style="color: red;">Red Text</span>
  ```
- **Notes:** Unlike `<div>`, `<span>` does not start on a new line.

#### 3. `<head>`
- **Description:** The `<head>` tag contains meta-information about the HTML document, such as its title, character set, styles, and scripts.
- **Example:**
  ```html
  <head>
    <title>My Webpage</title>
  </head>
  ```
- **Notes:** Content inside `<head>` does not appear on the web page.

#### 4. `<body>`
- **Description:** The `<body>` tag contains all the content that is visible on the web page, such as text, images, links, etc.
- **Example:**
  ```html
  <body>
    <h1>Hello World!</h1>
  </body>
  ```
- **Notes:** There is only one `<body>` per HTML document.

#### 5. Headings: `<h1>`, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>`
- **Description:** These tags define headings, from most important (`<h1>`) to least important (`<h6>`).
- **Example:**
  ```html
  <h1>Main Heading</h1>
  <h2>Subheading</h2>
  ```
- **Notes:** Headings help structure your content and are important for SEO.

#### 6. `<b>`, `<i>`, `<u>`
- **`<b>` (Bold):** Makes text bold, used for drawing attention without implying importance.
  ```html
  <b>Bold Text</b>
  ```
- **`<i>` (Italic):** Makes text italic, often used for emphasis or technical terms.
  ```html
  <i>Italic Text</i>
  ```
- **`<u>` (Underline):** Underlines text.
  ```html
  <u>Underlined Text</u>
  ```
- **Notes:** For semantic emphasis, prefer `<strong>` and `<em>`.

#### 7. `<a>`
- **Description:** The anchor tag is used to create hyperlinks to other web pages, files, locations within the same page, email addresses, etc.
- **Example:**
  ```html
  <a href="https://www.example.com">Visit Example</a>
  ```
- **Notes:** The `href` attribute specifies the link destination.

#### 8. `<img>`
- **Description:** Embeds an image in the web page.
- **Example:**
  ```html
  <img src="image.jpg" alt="Description of image">
  ```
- **Notes:** The `src` attribute is the image URL, and `alt` provides alternative text for accessibility.

#### 9. `<input>`
- **Description:** Used to create interactive controls in a web form that users can use to enter data.
- **Example:**
  ```html
  <input type="text" placeholder="Enter your name">
  ```
- **Notes:** The `type` attribute defines the input type (text, password, checkbox, etc.).

#### 10. `<button>`
- **Description:** Represents a clickable button, used to submit forms or trigger actions.
- **Example:**
  ```html
  <button>Click Me</button>
  ```
- **Notes:** Can be used inside forms or with JavaScript for interactivity.

#### 11. `<br>`
- **Description:** Inserts a line break in the text, moving the following content to a new line.
- **Example:**
  ```html
  Line 1<br>
  Line 2
  ```
- **Notes:** `<br>` is an empty (self-closing) tag and should be used sparingly for line breaks, not for layout.

---
