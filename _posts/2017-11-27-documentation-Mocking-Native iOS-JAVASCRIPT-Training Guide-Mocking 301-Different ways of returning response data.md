---
title: Different ways of returning response data
layout: training
permalink: documentation/Mocking/Native iOS/JAVASCRIPT/Training Guide/Mocking 301/Different ways of returning response data
level1: Mocking
level2: Native iOS
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 301
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/actived.png" srcset="/images/training/actived@2x.png 2x, /images/training/actived@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Different ways of returning response data">Different ways of returning response data</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/unread.png" srcset="/images/training/unread@2x.png 2x, /images/training/unread@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./SetMockId">SetMockId</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/unread.png" srcset="/images/training/unread@2x.png 2x, /images/training/unread@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./APIs for SetMockId">APIs for SetMockId</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/unread.png" srcset="/images/training/unread@2x.png 2x, /images/training/unread@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Parallel Sessions">Parallel Sessions</a></p>
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
<h3>1. Returning only the code</h3>
<pre><code class="language-js">shifu.route({
 id: 'message',
 label: 'hello message',
 path: '/message',
 handler: function(req, reply) {
   reply().code(400);
 }
})
</code></pre>
<h3>2. Using <code>RespondWithFile</code> without handler</h3>
<pre><code class="language-js">shifu.route({
  path: '/api/customer/getId',
  label: 'Get Customer Id',
  method: 'GET',
 }).respondWithFile();
</code></pre>
<h3>3. Returning static mocked data with a response code</h3>
<pre><code class="language-js">shifu.route({
  id: 'message',
  label: 'hello message',
  path: '/message',
 
  handler: function(req, reply) {
    shifu.util.respondWithFile(this, reply, {code: 400});
  }
})
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./SetMockId"><img src="/images/training/btn-right.png" srcset="/images/training/btn-right@2x.png 2x, /images/training/btn-right@3x.png 3x" /></a>
</div>
