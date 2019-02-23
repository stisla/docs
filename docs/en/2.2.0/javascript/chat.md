# Chat

---

- [Chat](#chat)
- [Usage](#chat-usage)
- [Options](#chat-options)

<a name="chat"></a>

## Chat
In this template we provide chat box components and also we have created a simple API for you to interact with the components of the chat box.

Create a chat box component with a structure like the following.

```html
<div class="card chat-box" id="mychatbox">
    <div class="card-header">
      <h4>Chat with Dad</h4>
    </div>
    <div class="card-body chat-content">
    </div>
    <div class="card-footer chat-form">
      <form>
        <input type="text" class="form-control" placeholder="Type a message">
        <button class="btn btn-primary">
          <i class="far fa-paper-plane"></i>
        </button>
      </form>
    </div>
  </div>
```

<div class="preview">
<div class="row">
<div class="col-md-6 offset-3">
<div class="card chat-box not-docs-nav" id="mychatbox">
<div class="card-header">
<h4>Chat with Dad</h4>
</div>
<div class="card-body chat-content">
</div>
<div class="card-footer chat-form">
<form>
<input type="text" class="form-control" placeholder="Type a message">
<button class="btn btn-primary">
<i class="far fa-paper-plane"></i>
</button>
</form>
</div>
</div>
</div>
</div>
</div>

To add a new chat to the chat box above then use the following code.

```javascript
$.chatCtrl('#mychatbox', {
    text: 'Halo',
    picture: '../dist/img/avatar/avatar-1.png'
  });
```

And To make it on the left then use the `position: 'chat-left'` key.

```javascript
$.chatCtrl('#mychatbox', {
    position: 'chat-left',
    text: 'Halo',
    picture: '../dist/img/avatar/avatar-1.png'
  });
```

Here is an example of a chat box that will display when the form is submitted.

```javascript
$("#chat-form").submit(function() {
    var me = $(this),
        this_text = me.find('input').val(),
        this_picture = '../dist/img/avatar/avatar-1.png';

    $.chatCtrl({
      text: this_text,
      picture: this_picture
    });
    return false;
  });
```
<div class="preview">
<div class="row">
<div class="col-md-6 offset-3">
<div class="card chat-box not-docs-nav" id="mychatbox-1">
<div class="card-header">
<h4>Chat with Dad</h4>
</div>
<div class="card-body chat-content">
</div>
<div class="card-footer chat-form">
<form id="chat-form">
<input type="text" class="form-control" placeholder="Type a message">
<button class="btn btn-primary">
<i class="far fa-paper-plane"></i>
</button>
</form>
</div>
</div>
</div>
</div>
</div>

<a name="chat-usage"></a>

## Usage
```javascript
$.chatCtrl(selector, object);
```

<a name="chat-options"></a>

## Options
<table class="table table-striped">
<thead>
    <tr>
    <th>Options</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
    <tr>
    <td>position</td>
    <td><div class="badge badge-primary">String</div></td>
    <td><div class="badge badge-secondary">chat-right</div></td>
    <td>Class for chat position</td>
    </tr>
    <tr>
    <td>text</td>
    <td><div class="badge badge-primary">String</div></td>
    <td><div class="badge badge-secondary">null</div></td>
    <td>Chat content</td>
    </tr>
    <tr>
    <td>time</td>
    <td><div class="badge badge-primary">String</div></td>
    <td><div class="badge badge-secondary">now</div></td>
    <td>Chat time</td>
    </tr>
    <tr>
    <td>picture</td>
    <td><div class="badge badge-primary">String</div></td>
    <td><div class="badge badge-secondary">null</div></td>
    <td>Chat user picture</td>
    </tr>
    <tr>
    <td>type</td>
    <td><div class="badge badge-primary">String</div></td>
    <td><div class="badge badge-secondary">text</div></td>
    <td>Chat type, set to 'typing' to give 'typing' mode</td>
    </tr>
    <tr>
    <td>timeout</td>
    <td><div class="badge badge-primary">Number</div></td>
    <td><div class="badge badge-secondary">0</div></td>
    <td>Delay displaying chat</td>
    </tr>
    <tr>
    <td>onShow</td>
    <td><div class="badge badge-primary">Function</div></td>
    <td><div class="badge badge-secondary">null</div></td>
    <td>Callback when chat are displayed</td>
    </tr>
</tbody>
</table>

<div class="alert alert-danger mt-4 alert-has-icon">
<div class="alert-icon"><i class="far fa-lightbulb"></i></div>
<div class="alert-body">
<div class="alert-title">Important</div>
<p>This component requires other libraries such as 'NiceScroll' and 'Moment.js'. So, do not forget to include those libraries.</p>
</div>
</div>
