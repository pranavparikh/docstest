---
title: Introduction to Variants
layout: training
permalink: documentation/Mocking/Services/JAVASCRIPT/Training Guide/Mocking 101/Introduction to Variants
level1: Mocking
level2: Services
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Adding Routes for Mocking">Adding Routes for Mocking</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Introduction to Mocking UI">Introduction to Mocking UI</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Introduction to Variants">Introduction to Variants</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Introduction to Mocking UI"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. What are variants?</h3>
<p>Variants allows to return a different data set for a given mocked route. Variants can be selected in the admin UI to determine what type of response a route should have. Routes are defined using the variant method on the Route object (returned by calling the route method). An object parameter is provided with the following attributes</p>
<ul>
<li>id: the variant id - used for the RESTful admin API and profile settings</li>
<li>label: (optional) the variant label - used for display on the admin panel</li>
<li>handler: (optional) the HAPI route handler which provides the route response</li>
</ul>
<p>Variants are useful because they allow you to test multiple scenarios that can happen with your route. Say, for example, you have a route exposing the ability to update a password. You might have several exceptional scenarios that you would want to test out (each could be a variant that you simply select to tell the route handler to use the appropriate response)</p>
<ul>
<li>the password was reset successfully</li>
<li>the password didn't pass validation</li>
<li>the old password wasn't entered correctly</li>
<li>the username doesn't exist</li>
<li>and so on...</li>
</ul>
<h3>2. Default Handler</h3>
<p>The handler defined under route is the default handler</p>
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
<h3>3. Creating a variant</h3>
<pre><code class="language-js">shifu.route({
    id: 'message',
    label: 'Message',
    path: '/get/message',
    method: 'GET',
    variantLabel: 'Hello',
    handler: function (req, reply) {
        reply('Hello');
    }
})
.variant({
    id: 'hello',
    label: 'Hello World',
    handler: function (req, reply) {
        reply('Hello World');
    }
});
</code></pre>
<h3>4. Selecting a different variant to be returned from UI</h3>
<p>You can select a different variant from admin UI to determine what type of response a route should have.</p>
<h3>5. Adding more variants</h3>
<pre><code class="language-js">shifu.route({
    id: 'message',
    label: 'Message',
    path: '/get/message',
    method: 'GET',
    variantLabel: 'Hello',
    handler: function (req, reply) {
        reply('Hello');
    }
})
.variant({
    id: 'hello',
    label: 'Hello World',
    handler: function (req, reply) {
        reply('Hello World');
    }
})
.variant({
    id: 'helloUniverse',
    label: 'Hello Universe',
    handler: function (req, reply) {
        reply('Hello Universe');
    }
});
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./Exercise"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
