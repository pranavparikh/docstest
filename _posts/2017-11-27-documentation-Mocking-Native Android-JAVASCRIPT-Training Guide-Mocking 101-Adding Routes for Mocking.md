---
title: Adding Routes for Mocking
layout: training
permalink: documentation/Mocking/Native Android/JAVASCRIPT/Training Guide/Mocking 101/Adding Routes for Mocking
level1: Mocking
level2: Native Android
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 101
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Introduction">Introduction</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Setting and Installing Mock Server">Setting and Installing Mock Server</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Adding Routes for Mocking">Adding Routes for Mocking</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Introduction to Mocking UI">Introduction to Mocking UI</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Introduction to Variants">Introduction to Variants</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Setting and Installing Mock Server"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. What REST APIs can be mocked?</h3>
<ul>
<li>GET</li>
<li>HEAD</li>
<li>POST</li>
<li>PUT</li>
<li>PATCH</li>
<li>DELETE</li>
<li>OPTIONS</li>
</ul>
<h3>2. Add a route to be mocked in <code>endpoints.js</code></h3>
<pre><code class="language-js">shifu.route({
  id: 'helloWorld',
  label: 'Hello World',
  path: '/helloWorld',
  method: 'GET',
  handler: function (req, reply) {
    reply('Hello World');
  }
});
</code></pre>
<p><strong>Now start mock server and hit http://localhost:8000/helloWorld</strong></p>
<h3>3. Understanding route parameters</h3>
<ul>
<li>id: Unique route id</li>
<li>label: Description of the route</li>
<li>path: Path of the route</li>
<li>method: HTTP method</li>
<li>handler: Function which handles the request for the path</li>
</ul>
<h3>4. Adding multiple routes to be mocked</h3>
<pre><code class="language-js">shifu.route({
  id: 'helloUniverse',
  label: 'Hello Universe',
  path: '/helloUniverse',
  method: 'GET',
  handler: function (req, reply) {
    reply('Hello Universe');
  }
});
</code></pre>
<p><strong>Now start mock server and hit http://localhost:8000/helloUniverse</strong></p>
</div>
<div class="training-doc-nav-btn">
<a href="./Introduction to Mocking UI"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
