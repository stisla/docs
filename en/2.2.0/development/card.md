# Card

---

- [Card](#card)
- [Collapsable Card](#card-collapsable)
- [Dismissible Card](#card-dismissible)

<a name="card"></a>

## Card
This template is Bootstrap 4 based, so we use the card to make the grouping in the layout.

We also changed a little style on this Bootstrap built-in card. To create a card use the following structure.

```html
<!-- card wrapper -->
  <div class="card">
    <!-- card header -->
    <div class="card-header">
      <!-- card title -->
      <h4>Card title</h4>
    </div>
    <!-- card body -->
    <div class="card-body">
      Card content
    </div>
    <!-- card footer -->
    <div class="card-footer">
      Card footer
    </div>
  </div>
```

You can also customize the border-top color of the card by adding additional classes as follows.

```html
<div class="card card-primary">
    ...
    ..
  </div>
```

Here are the colors supported on the card.

<div class="badge badge-primary">.card-primary</div>
<div class="badge badge-secondary">.card-secondary</div>
<div class="badge badge-success">.card-success</div>
<div class="badge badge-danger">.card-danger</div>
<div class="badge badge-warning">.card-warning</div>
<div class="badge badge-info">.card-info</div>
<div class="badge badge-dark">.card-dark</div>

<a name="card-collapsable"></a>

## Collapsable Card

In addition, you can also create a collapsable card.
```html
<div class="card">
    <div class="card-header">
      <h4>Show/Hide</h4>
      <!-- card toggle -->
      <div class="card-header-action">
        <a data-collapse="#mycard-collapse" class="btn btn-icon"><i class="ion ion-minus"></i></a>
      </div>
    </div>
    <!-- card collapsable content -->
    <div class="collapse show" id="mycard-collapse">
      <div class="card-body">
        You can show or hide this card.
      </div>
      <div class="card-footer">
        Card Footer
      </div>
    </div>
  </div>
```
<a name="card-dismissible"></a>

## Dismissible Card

Lastly, you can also create a dismissible card.

```html
<div class="card" id="mycard-dimiss">
    <div class="card-header">
      <h4>Dismiss</h4>
      <!-- card dismiss toggle -->
      <div class="card-header-action">
        <a data-dismiss="#mycard-dimiss" class="btn btn-icon"><i class="ion ion-close"></i></a>
      </div>
    </div>
    <div class="card-body">
      You can dimiss this card.
    </div>
    <div class="card-footer">
      Card Footer
    </div>
  </div>
```

<div class="alert alert-primary alert-has-icon mt-4">
	<div class="alert-icon"><i class="far fa-lightbulb"></i></div>
	<div class="alert-body">
			<div class="alert-title">More Information</div>
			<p>You can see other examples of card usage in the file <code>pages/bootstrap-card.html</code></p>
	</div>
</div>