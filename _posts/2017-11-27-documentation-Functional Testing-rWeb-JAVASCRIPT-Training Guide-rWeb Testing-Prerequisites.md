---
title: Prerequisites
layout: training
permalink: documentation/Functional Testing/rWeb/JAVASCRIPT/Training Guide/rWeb Testing/Prerequisites
level1: Functional Testing
level2: rWeb
level3: JAVASCRIPT
level4: Training Guide
course: rWeb Testing
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Built-in browser testing">Built-in browser testing</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Remote browser testing">Remote browser testing</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<h3>Prerequisites</h3>
<p>Even though we’ve included everything that is needed in the <strong>package.json</strong> file, it’s always good to have an idea on which dependency is a <em>must</em> for your desktop browser test.</p>
<ul>
<li>The following dependencies are required in the <strong>package.json</strong>.</li>
</ul>
<pre><code class="language-bash">{
  &quot;dependencies&quot;: {
  &quot;nightwatch&quot;: &quot;^0.9.11&quot;,
  &quot;selenium-server&quot;: &quot;^3.1.0&quot;
  }
}
</code></pre>
<ul>
<li><em><a href="https://github.com/TestArmada/magellan-local-executor">magellan-local-browser</a></em> is also required for your local test.</li>
</ul>
<pre><code class="language-bash">{
  &quot;dependencies&quot;: {
  &quot;testarmada-magellan-local-executor&quot;: &quot;^2.0.0&quot;
  }
}
</code></pre>
<ul>
<li>Depending on which browser you want to test, you need to include specific browser driver in your <strong>package.json</strong>. E.g. If you want to run your tests on both Chrome and Firefox:</li>
</ul>
<pre><code class="language-bash">{
  &quot;dependencies&quot;: {
    &quot;chromedriver&quot;: &quot;^2.27.2&quot;,
    &quot;geckodriver&quot;: &quot;^1.4.0&quot;
    }
}
</code></pre>
<ul>
<li>Then, you need to add these drivers in the <strong>nightwatch.json</strong> file. E.g.</li>
</ul>
<pre><code class="language-bash">    &quot;cli_args&quot;: {
      &quot;webdriver.chrome.driver&quot;: &quot;./node_modules/chromedriver/lib/chromedriver/chromedriver&quot;,
      &quot;webdriver.gecko.driver&quot;: &quot;./node_modules/geckodriver/bin/geckodriver&quot;
    }
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./Built-in browser testing"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
