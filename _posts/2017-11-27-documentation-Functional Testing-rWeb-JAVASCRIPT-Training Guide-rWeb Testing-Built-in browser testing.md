---
title: Built-in browser testing
layout: training
permalink: documentation/Functional Testing/rWeb/JAVASCRIPT/Training Guide/rWeb Testing/Built-in browser testing
level1: Functional Testing
level2: rWeb
level3: JAVASCRIPT
level4: Training Guide
course: rWeb Testing
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Built-in browser testing">Built-in browser testing</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Remote browser testing">Remote browser testing</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Prerequisites"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>Built-in browser testing</h3>
<ul>
<li>The sample project has some pre-configured browsers that you can use via <code>--local_browser</code> command.</li>
<li>For example, the following command triggers your test in the local Firefox.</li>
</ul>
<pre><code class="language-bash">HOST=dev.walmart.com MOCK_PORT=12000 DPRO_LOCATION=./test/automation/conf/data ./node_modules/.bin/magellan --nightwatch_config ./test/automation/conf/nightwatch.json --config ./test/automation/magellan.json --local_browser firefox
</code></pre>
<ul>
<li>Full list of built in browser can be found at <strong><em>test_settings</em></strong> part in <strong>test/automation/conf/nightwatch.json</strong> file</li>
<li>To run test with a <strong>new browser</strong>, you can just create a new entry in <strong>test_settings</strong> part</li>
</ul>
<h4>Quiz</h4>
<ul>
<li>Can you make the sample test run on your local simulator's safari browser?</li>
<li>Hint: here's the sample Capability:</li>
</ul>
<pre><code class="language-bash">    &quot;appiummweb&quot;: {
      &quot;desiredCapabilities&quot;: {
        &quot;browserName&quot;: &quot;safari&quot;,
        &quot;appiumVersion&quot;: &quot;1.7.2&quot;,
        &quot;automationName&quot;: &quot;xcuitest&quot;,
        &quot;platformName&quot;: &quot;iOS&quot;,
        &quot;platformVersion&quot;: &quot;11.2&quot;,
        &quot;deviceName&quot;: &quot;iPhone 8&quot;,
        &quot;waitForAppScript&quot;: &quot;true&quot;
      },
      &quot;selenium&quot;: {
        &quot;start_process&quot;: false
      },
      &quot;appium&quot;: {
        &quot;start_process&quot;: true
      }
   },
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./Remote browser testing"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
