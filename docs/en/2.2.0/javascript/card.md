# Card

---

- [Card](#card)

<a name="card"></a>

## Card
In the card component we have created a simple API to change the card mode into progress.

Of course, this will make it easier for you when you want to create a form with AJAX and when the form is submitted then the card will display loading on the card.

```html
<div class="card" id="mycard-form">
    <div class="card-header">
      <h4>Card title</h4>
    </div>
    <div class="card-body">
      <button class="btn btn-primary" onclick="$.cardProgress('#mycard-form')">Progress</button>
    </div>
    <div class="card-footer">
      Card Footer
    </div>
  </div>
```
<div class="preview">
    <div class="card" id="mycard-form">
        <div class="card-header">
        <h4>Card title</h4>
        </div>
        <div class="card-body">
        <button class="btn btn-primary" onclick="$.cardProgress('#mycard-form')">Progress</button>
        </div>
        <div class="card-footer">
        Card Footer
        </div>
    </div>
</div>

And use `$.cardProgressDismiss(selector, callback);` to remove progress on card.

---

## Usage

**Syntax**
```javascript
$.cardProgress(selector, options)
```

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
<td>dismiss</td>
<td><div class="badge badge-primary">Boolean</div></td>
<td><div class="badge badge-secondary">false</div></td>
<td>Displaying the dismiss button</td>
</tr>
<tr>
<td>dismissText</td>
<td><div class="badge badge-primary">String</div></td>
<td><div class="badge badge-secondary">Cancel</div></td>
<td>Text form dismiss button</td>
</tr>
<tr>
<td>onDismiss(card)</td>
<td><div class="badge badge-primary">Function</div></td>
<td><div class="badge badge-secondary">null</div></td>
<td>Callback when the dismiss button is clicked</td>
</tr>
</tbody>
</table>
