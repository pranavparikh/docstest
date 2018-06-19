---
title: Setting and Installing Mock Server
layout: training
permalink: documentation/Mocking/Services/JAVASCRIPT/Training Guide/Mocking 101/Setting and Installing Mock Server
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Setting and Installing Mock Server">Setting and Installing Mock Server</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Adding Routes for Mocking">Adding Routes for Mocking</a></p>
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
<a href="./Introduction"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. Pre-requisites</h3>
<ul>
<li>node.js 4+ (npm is included in the package)</li>
</ul>
<h3>2. Add mock dependency to <code>package.json</code></h3>
<pre><code class="language-json">&quot;dependencies&quot;: {
  &quot;shifu&quot;: &quot;^1.0.0&quot;
}
</code></pre>
<h3>3. Add <code>.npmrc</code> file to the project</h3>
<pre><code class="language-bash">registry=https://registry.npmjs.org/
strict-ssl=false
</code></pre>
<h3>4. Install mock dependency with <code>npm install</code></h3>
<p>Run <code>npm install</code> command to install mock related dependencies.</p>
<h3>5. Add <code>resources/endpoints.js</code> and create <code>./resources/mocked-data</code> directory to store the mock data.</h3>
<pre><code class="language-js">require('./endpoints');
require('shifu').start({
  host: &quot;localhost&quot;,
  mockedDirectory: &quot;./resources/mocked-data&quot;,
  port: 8000,
  project: 'HelloShifu'
});
</code></pre>
<h3>6. Add <code>resources/run-mock-server-console.js</code></h3>
<pre><code class="language-js">require('./endpoints');
require('shifu').start({
  host: &quot;localhost&quot;,
  mockedDirectory: &quot;./resources/mocked-data&quot;,
  port: 8000,
  project: 'HelloShifu'
});
</code></pre>
<p>Please note that you will need to replace <code>HelloShifu</code> for key <code>project</code> field with your project name(without dashes).</p>
<h3>7. Add script to start mock server in <code>package.json</code></h3>
<pre><code class="language-json">&quot;scripts&quot;: {
  &quot;lint&quot;: &quot;eslint . --ext .js&quot;,
  &quot;start-server&quot;: &quot;node ./resources/run-mock-server-console.js&quot;
},
</code></pre>
<h3>8. Test mock server can be started</h3>
<pre><code class="language-bash">npm run start-server
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./Adding Routes for Mocking"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
