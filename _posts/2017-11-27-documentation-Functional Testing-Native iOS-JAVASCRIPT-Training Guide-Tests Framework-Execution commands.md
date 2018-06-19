---
title: Execution commands
layout: training
permalink: documentation/Functional Testing/Native iOS/JAVASCRIPT/Training Guide/Tests Framework/Execution commands
level1: Functional Testing
level2: Native iOS
level3: JAVASCRIPT
level4: Training Guide
course: Tests Framework
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Execution commands">Execution commands</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Understand the tests framework">Understand the tests framework</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<h3>Execution commands</h3>
<p>After getting your tests up and running, you probably have tons of questions regarding how this work, let’s start with the command that we are using to get the tests running in local box, which is:</p>
<pre><code class="language-bash">$ npm run test:ios
</code></pre>
<ul>
<li>To understand what is <strong>npm run</strong>, please check <a href="https://docs.npmjs.com/cli/run-script">here</a>.</li>
<li><strong><em>test:ios</em></strong> is a 'script' defined in <strong>package.json</strong> file, which is:</li>
</ul>
<pre><code class="language-bash">&quot;test:ios&quot;: &quot;DPRO=ios ./node_modules/.bin/magellan --config magellan.json --local_browser appiumiosapp  --test tests/app.test.js --serial --max_test_attempts=1&quot;
</code></pre>
<ul>
<li>Commands parameters <strong><em>--test</em></strong> , <strong><em>--serial</em></strong>, <strong><em>--max_test_attempts</em></strong>, etc are all magellan arguments. To find all magellan command line arguments and the usages:</li>
</ul>
<pre><code class="language-bash">./node_modules/.bin/magellan --help
</code></pre>
<ul>
<li><p>Magellan is part of the functional JS TDK, and it is designed for running tests in massive scale.</p>
<p>Following is an example that telling magellan to run tests with 30 workers, 5 retry attempts per failed test</p></li>
</ul>
<pre><code class="language-bash">./node_modules/.bin/magellan --max_workers 30 --max_test_attempts 5
</code></pre>
<ul>
<li><p><strong><em>DPRO=ios</em></strong> is telling tests to load data from <strong>./conf/data/ios.js</strong></p>
<p><strong>DPRO</strong>  - data provider, support both .json and .js file. We recommend .js format.
Each <strong>.js</strong> data file should return a <strong>json</strong> object. Please check <a href="https://github.com/TestArmada/dpro">here</a>, for more details</p></li>
</ul>
<pre><code class="language-bash"> # Example:
 # To load from ${REPO_ROOT}/config/data/local.js
 DPRO=local ./node_modules/.bin/magellan --test xxxxx ......
</code></pre>
<ul>
<li><p><strong>--local_browser appiumiosapp</strong> tells tests to use <a href="https://github.com/TestArmada/magellan-local-executor">testarmada-magellan-local-executor</a> . It loads Desired Capabilities from nightwatch.json.</p>
<p><strong>Executor</strong>  - acts as a middle layer between magellan and test framework to drive test run (via framework) based on a specific need (differentiated by executing environments).</p></li>
</ul>
</div>
<div class="training-doc-nav-btn">
<a href="./Understand the tests framework"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
