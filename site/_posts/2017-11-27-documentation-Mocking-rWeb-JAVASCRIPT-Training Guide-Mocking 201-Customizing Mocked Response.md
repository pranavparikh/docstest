---
title: Customizing Mocked Response
layout: training
permalink: documentation/Mocking/rWeb/JAVASCRIPT/Training Guide/Mocking 201/Customizing Mocked Response
level1: Mocking
level2: rWeb
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 201
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/checked.png" srcset="/images/training/checked@2x.png 2x, /images/training/checked@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Dynamic URLs">Dynamic URLs</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/checked.png" srcset="/images/training/checked@2x.png 2x, /images/training/checked@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Request Call Information">Request Call Information</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/actived.png" srcset="/images/training/actived@2x.png 2x, /images/training/actived@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Customizing Mocked Response">Customizing Mocked Response</a></p>
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
<a href="./Request Call Information"><img src="/images/training/btn-left.png" srcset="/images/training/btn-left@2x.png 2x, /images/training/btn-left@3x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. Set custom headers</h3>
<pre><code class="language-js">shifu.route({
  id: 'header',
  label: 'Custom Headers',
  path: '/set/headers',
  handler: function(req, reply) {
  reply({message: 'custom headers'})
    .header('header1', 'test1')
    .header('header2', 'test2')
    .header('header3', 'test3')
  }
})
 
shifu.route({
  id: 'header',
  label: 'Custom Headers',
  path: '/set/headers',
  handler: function (req, reply) {
    var myHeaders = {
      header1: 'test1',
      header2: 'test2',
      header3: true
    };
    shifu.util.respondWithFile(this, reply, {headers: myHeaders});
  }
});
</code></pre>
<h3>2. Set custom cookies</h3>
<pre><code class="language-js">shifu.route({
  id: 'cookies',
  label: 'Custom Cookies',
  path: '/set/cookies',
  handler: function(req, reply) {
    reply({message: 'test'})
    .state('cookie1', 'testCookie1')
    .state('cookie2', 'testCookie2')
    }
});
 
shifu.route({
  id: 'cookies',
  label: 'Custom Cookies',
  path: '/set/cookies',
  handler: function (req, reply) {
    var cookies = [
      {name: 'cookie1', value: 'testCookie1'},
      {name: 'cookie2', value: 'testCookie2'},
    ];
    shifu.util.respondWithFile(this, reply, {cookies: cookies});
  }
});
</code></pre>
<h3>3. Set CORS headers</h3>
<pre><code class="language-js">var corsHeaders = {
  origin: ['*'],
  headers: [&quot;Access-Control-Allow-Headers&quot;, &quot;Origin, X-Requested-With, Content-Type, Accept&quot;],
  credentials: true,
}
 
// Items
shifu.route({
  id: 'corsheaders',
  label: 'CORS',
  path: '/set/cors',
 
  config: {
    cors: corsHeaders
  },
  handler: function(req, reply) {
    reply('cors headers set');
  }
});
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./Returning Response from a File"><img src="/images/training/btn-right.png" srcset="/images/training/btn-right@2x.png 2x, /images/training/btn-right@3x.png 3x" /></a>
</div>
