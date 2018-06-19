---
title: Dynamic URLs
layout: training
permalink: documentation/Mocking/Services/JAVASCRIPT/Training Guide/Mocking 201/Dynamic URLs
level1: Mocking
level2: Services
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 201
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/actived.png" srcset="/images/training/actived@2x.png 2x, /images/training/actived@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Dynamic URLs">Dynamic URLs</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/unread.png" srcset="/images/training/unread@2x.png 2x, /images/training/unread@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Request Call Information">Request Call Information</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/unread.png" srcset="/images/training/unread@2x.png 2x, /images/training/unread@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Customizing Mocked Response">Customizing Mocked Response</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/unread.png" srcset="/images/training/unread@2x.png 2x, /images/training/unread@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Returning Response from a File">Returning Response from a File</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/unread.png" srcset="/images/training/unread@2x.png 2x, /images/training/unread@3x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<h3>1. How to create dynamic urls</h3>
<pre><code>/get/customerInfo/{customerid}/{zipcode}
</code></pre>
<h3>2. Adding a dynamic URL in mock server</h3>
<pre><code class="language-js">shifu.route({
  id: 'customerInfo',
  label: 'Customer Info',
  path: '/get/customerInfo/{customerid}',
  method: 'GET',
  variantLabel: 'Get Customer Info',
  handler: function (req, reply) {
    reply('How to read the customer id :(');
  }
});
</code></pre>
<h3>3. Reading dynamic URL parameters</h3>
<pre><code class="language-js">var id = req.params.customerid;
</code></pre>
<h3>4. Using dynamic values to define response</h3>
<pre><code class="language-js">shifu.route({
  id: 'customerInfo',
  label: 'Customer Info',
  path: '/get/customerInfo/{customerid}',
  method: 'GET',
  variantLabel: 'Get Customer Info',
  handler: function (req, reply) {
    var id = req.params.customerid;
    reply('Customer id is ' + id + ' :)');
  }
});
</code></pre>
<h3>5. Passing dynamic URL parameters from the Shifu UI</h3>
<p>Try to pass dynamic url parameters generated from Shifu UI</p>
</div>
<div class="training-doc-nav-btn">
<a href="./Request Call Information"><img src="/images/training/btn-right.png" srcset="/images/training/btn-right@2x.png 2x, /images/training/btn-right@3x.png 3x" /></a>
</div>
