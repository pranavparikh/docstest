---
title: Prerequisites
layout: training
permalink: documentation/Functional Testing/rWeb/JAVASCRIPT/Training Guide/Setup/Prerequisites
level1: Functional Testing
level2: rWeb
level3: JAVASCRIPT
level4: Training Guide
course: Setup
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Prerequisites">Prerequisites</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Setup and run demo tests locally and on SauceLabs">Setup and run demo tests locally and on SauceLabs</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<p>Most of you must already know some about web automation. In this training series, we will show you how to leverage Test Armada tools to make end-to-end tests easy, reliable, and massively parallel distributing tests across available resources both locally and remotely.</p>
<h3>Prerequisites</h3>
<ol>
<li>Hostname mapping and open certain ports</li>
</ol>
<ul>
<li>Please add the following hostname mapping in the <strong>/etc/hosts</strong> file</li>
</ul>
<pre><code class="language-bash">127.0.0.1 dev.walmart.com
</code></pre>
<ul>
<li>Demo test will use ports range [12000, 12010], please make sure your machine allows those ports</li>
</ul>
<ol start="2">
<li>Install <a href="https://github.com/creationix/nvm">nvm</a>
We recommend using <strong>nvm</strong> to manage your node and npm version. The sample project recommends <strong>node@6.11.2</strong> and above,  <strong>npm@3.10.10</strong> and above.</li>
</ol>
<pre><code class="language-bash">nvm install 6.11.2
nvm use 6.11.2
</code></pre>
<ol start="3">
<li><p>Install <a href="https://github.com/FormidableLabs/builder-init">builder-init</a></p>
<p>The sample project relies on FormidableLabs' <a href="https://github.com/FormidableLabs/builder">builder</a>. Please make sure you have <code>builder-init</code> npm installed.</p></li>
</ol>
<pre><code class="language-bash">npm install builder-init
</code></pre>
<ol start="4">
<li><p>Apply <a href="saucelabs.com">SauceLabs</a> credentials (username and api-key)</p>
<p>The demo tests can be executed on SauceLabs. To use it, please make sure you have:</p></li>
</ol>
<ul>
<li>SauceLabs account</li>
<li>Have the following credentials set up in <strong>~/.bashrc</strong> file</li>
</ul>
<pre><code class="language-bash">export SAUCE_CONNECT_VERSION=4.4.11
export SAUCE_USERNAME=${YOUR_SAUCE_NAME}
export SAUCE_ACCESS_KEY=${YOUR_SAUCE_API_TOKEN}
</code></pre>
<ol start="5">
<li>Install <a href="https://www.google.com/chrome/browser/desktop/index.html">Chrome</a> browser, if you don't have it yet</li>
</ol>
</div>
<div class="training-doc-nav-btn">
<a href="./Setup and run demo tests locally and on SauceLabs"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
