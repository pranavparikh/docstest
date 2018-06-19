---
title: Starting HTTPS server with Mock Server
layout: training
permalink: documentation/Mocking/Native iOS/JAVASCRIPT/Training Guide/Mocking 401/Starting HTTPS server with Mock Server
level1: Mocking
level2: Native iOS
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 401
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/checked.png" srcset="/images/training/checked@2x.png 2x, /images/training/checked@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./State">State</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/checked.png" srcset="/images/training/checked@2x.png 2x, /images/training/checked@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Mocking Utility Methods">Mocking Utility Methods</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/checked.png" srcset="/images/training/checked@2x.png 2x, /images/training/checked@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Rest APIs">Rest APIs</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/actived.png" srcset="/images/training/actived@2x.png 2x, /images/training/actived@3x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Starting HTTPS server with Mock Server">Starting HTTPS server with Mock Server</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="/images/training/unread.png" srcset="/images/training/unread@2x.png 2x, /images/training/unread@3x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Rest APIs"><img src="/images/training/btn-left.png" srcset="/images/training/btn-left@2x.png 2x, /images/training/btn-left@3x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. Updating run-mock-server-console.js to enable HTTPS</h3>
<pre><code class="language-js">require('./endpoints');
var fs = require('fs');
var shifu = require('shifu');
 
shifu.start({
  host: &quot;localhost&quot;,  
  mockedDirectory: &quot;./resources/mocked-data&quot;,
  port: 8000,
  httpsPort: 4444,
  project: 'HelloShifu'
});
</code></pre>
<blockquote>
<p>The default port for HTTPS is <code>4444</code></p>
</blockquote>
<h3>2. Starting mock server with HTTPS enabled</h3>
<p>Once you add the above code, the mock server will provide the HTTPS and HTTPS support by default. Hence when the mock server starts up, you will see both the ports open. Note that the mock server auto generates the certificates (key.pem and cert.pem). If you want to provide your own key and certificate, you can provide it under the mocked data directory.</p>
</div>
<div class="training-doc-nav-btn">
<a href="./Exercise"><img src="/images/training/btn-right.png" srcset="/images/training/btn-right@2x.png 2x, /images/training/btn-right@3x.png 3x" /></a>
</div>