---
title: Setup and run demo tests locally and on SauceLabs
layout: training
permalink: documentation/Functional Testing/rWeb/JAVASCRIPT/Training Guide/Setup/Setup and run demo tests locally and on SauceLabs
level1: Functional Testing
level2: rWeb
level3: JAVASCRIPT
level4: Training Guide
course: Setup
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Prerequisites">Prerequisites</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Setup and run demo tests locally and on SauceLabs">Setup and run demo tests locally and on SauceLabs</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Prerequisites"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>Setup</h3>
<p>In the repo root (where you did the <strong><em>builder-init</em></strong> install), please follow these steps to setup the archetype project:</p>
<pre><code class="language-bash"># 1.run archetype project
./node_modules/.bin/builder-init @walmart/otto-archetype-desktop

# 2.copy package.json from archetype to your repo
cp ./test/automation/package.json .

# 3.install the dependencies
npm install
</code></pre>
<h3>Run demo test locally:</h3>
<pre><code class="language-bash">npm run test
</code></pre>
<p>You should see  the runner <a href="https://github.com/TestArmada/magellan">magellan</a> open up 2 Chrome windows at once, and the results of the two tests are aggregated in the console.</p>
<h3>Run demo test on Sauce Labs:</h3>
<pre><code class="language-bash">npm run test:saucelabs
</code></pre>
<p>Go to SauceLabs, after log in, you should be able to view your tests running at <a href="https://saucelabs.com/beta/dashboard/tests">Dashboard</a>. The tests are using Chrome60 browser on Windows 10.</p>
</div>
<div class="training-doc-nav-btn">
</div>
