---
title: Remote browser testing
layout: training
permalink: documentation/Functional Testing/rWeb/JAVASCRIPT/Training Guide/rWeb Testing/Remote browser testing
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Built-in browser testing">Built-in browser testing</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Remote browser testing">Remote browser testing</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Built-in browser testing"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>Remote browser testing</h3>
<p>Don’t have a desired browser in your local? No worry, you can use the following executors for remote test.</p>
<ul>
<li><a href="https://github.com/TestArmada/magellan-saucelabs-executor">magellan-saucelabs-executor</a>: Drive tests on <a href="https://saucelabs.com/">Saucelabs</a></li>
<li><a href="https://github.com/TestArmada/magellan-testobject-executor">magellan-testobject-executor</a>: Drive tests on <a href="https://testobject.com/">TestObject</a></li>
<li><a href="https://github.com/TestArmada/magellan-browserstack-executor">magellan-browserstack-executor</a>: Drive tests on <a href="https://www.browserstack.com/">Browserstack</a></li>
<li><a href="https://github.com/TestArmada/magellan-seleniumgrid-executor">magellan-seleniumgrid-executor</a>:  Drive tests in selenium grid</li>
</ul>
<h3>Enable an executor</h3>
<p>To do the remote browser test, you need to enable an executor:</p>
<ul>
<li>Install the wanted executor via <strong>npm install</strong> or add it into your <strong>package.json</strong> file.</li>
<li>E.g. install from <strong>npm install</strong>:</li>
</ul>
<pre><code class="language-bash">npm install testarmada-magellan-saucelabs-executor --save
</code></pre>
<ul>
<li>Add following code in your <code>magellan.json</code></li>
</ul>
<pre><code class="language-bash">{
  &quot;executors&quot;: [
    &quot;testarmada-magellan-saucelabs-executor&quot;
  ],
  &quot;strategy_bail&quot;: &quot;testarmada-magellan-early-bail-strategy&quot;
}
</code></pre>
<ul>
<li>Please note: Some executors need specific configuration to be functional. Please refer to the <em>README.md</em> in executor’s repo for detail configuration.</li>
</ul>
<h3>Run tests with multiple executors</h3>
<p>Magellan allows to run tests with one or more executors at the same time. This is done by passing a specific command line argument to magellan.</p>
<ul>
<li>For local tests, after enable <em><a href="https://github.com/TestArmada/magellan-local-executor">magellan-local-executor</a></em></li>
</ul>
<pre><code class="language-bash"># to run test in Chrome
--local_browser chrome
# to run test in both Chrome and Firefox
--local_browsers chrome, firefox
</code></pre>
<h4>Quiz</h4>
<ul>
<li>Can you enable both <em><a href="https://github.com/TestArmada/magellan-local-executor">magellan-local-executor</a></em> and <em><a href="https://github.com/TestArmada/magellan-saucelabs-executor">magellan-saucelabs-executor</a></em> for your test? and run test in local Chrome and Chrome 60 on Sauce Labs?</li>
</ul>
</div>
<div class="training-doc-nav-btn">
</div>
