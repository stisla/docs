# Modal

---

- [Modal](#modal)
- [Modal Usage](#modal-usage)
- [Modal Options](#modal-options)

<a name="modal"></a>

## Modal
As we know, to create a modal in Bootstrap requires the HTML structure to be a modal. It might be easy if we just make some modals. But, if we want to make a lot of modals would require a lot of HTML structure as well.

In this template we have provided a simple plugin to create a reusable modal. So you no longer need the HTML structure for every time you want to create a modal.

Here is a simple modal example.

```html
<button class="btn btn-primary" id="toggle-modal">Launch Modal</button>
  <script>
    $('#toggle-modal').fireModal({
      title: 'My Modal',
      content: 'Hello!'
    });
  </script>
```
<div class="preview">
<div class="text-center">
<button class="btn btn-primary" id="toggle-modal">Launch Modal</button>
</div>
</div>

Also, you can add buttons on modal.

```html
<button class="btn btn-primary" id="toggle-modal-1">Launch Modal</button>
  <script>
    $('#toggle-modal-1').fireModal({
      title: 'My Modal',
      body: 'Hello, dude!',
      buttons: [
        {
          text: 'Close',
          class: 'btn btn-secondary',
          handler: function(current_modal) {
          $.destroyModal(current_modal);
          }
        }
      ]
    });
  </script>
```
<div class="preview">
<div class="text-center">
<button class="btn btn-primary" id="toggle-modal-1">Launch Modal</button>
</div>
</div>

In addition, you can also create a simple confirmation box by using this attribute on your button.

```html
<button class="btn btn-danger" data-confirm="Are you sure?|This action can't be undone">Delete</button>
```
<div class="preview">
<div class="text-center">
<button class="btn btn-danger" data-confirm="Are you sure?|This action can't be undone" data-confirm-yes="alert('Deleted');" data-confirm-no="alert('You\'re awesome');">Delete</button>
</div>
</div>

<a name="modal-usage"></a>
## Usage

**Syntax**
```javascript
$('#toggle').fireModal(options);
```

<a name="modal-options"></a>

## Options
<table class="table table-striped">
<tr>
<th>Name</th>
<th>Type</th>
<th>Default</th>
<th data-width="600">Description</th>
</tr>
<tr>
<td>size</td>
<td><code>string</code></td>
<td><code>modal-md</code></td>
<td>Bootstrap modal size class</td>
</tr>
<tr>
<td>center</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Position the modal in the center of the screen</td>
</tr>
<tr>
<td>animation</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Provides animated effects on modal</td>
</tr>
<tr>
<td>title</td>
<td><code>string</code></td>
<td><code>Modal Title</code></td>
<td>Title for your modal</td>
</tr>
<tr>
<td>closeButton</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Close button for modal</td>
</tr>
<tr>
<td>header</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Modal header</td>
</tr>
<tr>
<td>bodyClass</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>Classes for modal body, for example <code>my-modal body-class</code></td>
</tr>
<tr>
<td>footerClass</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>Classes for modal footer, for example <code>my-modal footer-class</code></td>
</tr>
<tr>
<td>body</td>
<td><code>string</code></td>
<td><code>null</code></td>
<td>Content for your modal, can be <code>string</code> or <i>selector</i>, for example: <code>#modal-login-part</code> and add the <code>modal-part</code> class to the element.</td>
</tr>
<tr>
<td>buttons</td>
<td><code>object</code></td>
<td><code>[]</code></td>
<td>Add some buttons to the modal footer, for example: <pre data-name="Modal Buttons" class="language-js"><code>[{
submit: true | false,
class: 'custom-class',
id: 'my-id',
text: 'Submit',
handler: () => {
alert('Clicked');
}
}]</code></pre></td>
</tr>
<tr>
<td>autoFocus</td>
<td><code>boolean</code></td>
<td><code>true</code></td>
<td>Automatic focus on the first input element in the modal body (if any)</td>
</tr>
<tr>
<td>created</td>
<td><code>function</code></td>
<td><code>null</code></td>
<td>Callback when a modal element has been created</td>
</tr>
<tr>
<td>appended</td>
<td><code>function</code></td>
<td><code>null</code></td>
<td>Callback when a modal element has been appended to the document body</td>
</tr>
<tr>
<td>submit</td>
<td><code>function</code></td>
<td><code>null</code></td>
<td>Callback when the form in the modal body is submitted</td>
</tr>
<tr>
<td>modal</td>
<td><code>object</code></td>
<td><code>{}</code></td>
<td>Bootstrap modal options, <a href="https://getbootstrap.com/docs/4.1/components/modal/#options">click here</a> for details</td>
</tr>
</table>
