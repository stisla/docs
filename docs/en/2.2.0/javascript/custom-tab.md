# Custom Tab

---

- [Custom Tab](#custom-tab)

<a name="custom-tab"></a>

## Custom Tab
In addition to Bootstrap's own tabs, we also create simple functions for creating tabs.

We create this function so you can create tabs on every element you want. Here is a sample code to create a custom tab.

```html
<ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
      <a class="nav-link active" data-tab="mygroup-tab" href="#tab-home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-tab="mygroup-tab" href="#tab-profile">Profile</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" data-tab="mygroup-tab" href="#tab-contact">Contact</a>
    </li>
  </ul>
  <div id="tab-home" class="active" data-tab-group="mygroup-tab">
    Home
  </div>
  <div id="tab-profile" data-tab-group="mygroup-tab">
    Profile
  </div>
  <div id="tab-contact" data-tab-group="mygroup-tab">
    Contact
  </div>
```
<div class="preview">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
    <li class="nav-item">
        <a class="nav-link active" data-tab="mygroup-tab" href="#tab-home">Home</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-tab="mygroup-tab" href="#tab-profile">Profile</a>
    </li>
    <li class="nav-item">
        <a class="nav-link" data-tab="mygroup-tab" href="#tab-contact">Contact</a>
    </li>
    </ul>
    <div id="tab-home" class="active" data-tab-group="mygroup-tab">
    Home
    </div>
    <div id="tab-profile" data-tab-group="mygroup-tab">
    Profile
    </div>
    <div id="tab-contact" data-tab-group="mygroup-tab">
    Contact
    </div>
</div>