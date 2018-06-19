---
title: State
layout: training
permalink: documentation/Mocking/rWeb/JAVASCRIPT/Training Guide/Mocking 401/State
level1: Mocking
level2: rWeb
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 401
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./State">State</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Mocking Utility Methods">Mocking Utility Methods</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Rest APIs">Rest APIs</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Starting HTTPS server with Mock Server">Starting HTTPS server with Mock Server</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<h3>1. What is state?</h3>
<p>State allows you to maintain state of your server, for example if a user is logged in or logged out. The mock server internally uses <code>Hapi</code> node server, which helps you return the state of the current application state. Within any response handler, use <code>this.state('varName')</code> to access an object stored in the state and this.state<code>('varName', 'varValue')</code> where varValue can be any type of object you want to set the state.</p>
<h3>2. How to set a state in mock server?</h3>
<pre><code class="language-js">shifu.route({
  path: '/api/login',
  label: 'LogIn',
  method: 'POST',
  handler: function(request, reply) {
    // now you can use this.state('loggedIn') in any route handler to see if the user has logged in
    this.state('loggedIn', true);
    reply().code(204);
  }
});
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./Mocking Utility Methods"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
