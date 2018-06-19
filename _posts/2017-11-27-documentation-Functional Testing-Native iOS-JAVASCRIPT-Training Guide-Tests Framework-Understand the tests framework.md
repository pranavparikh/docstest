---
title: Understand the tests framework
layout: training
permalink: documentation/Functional Testing/Native iOS/JAVASCRIPT/Training Guide/Tests Framework/Understand the tests framework
level1: Functional Testing
level2: Native iOS
level3: JAVASCRIPT
level4: Training Guide
course: Tests Framework
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Execution commands">Execution commands</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Understand the tests framework">Understand the tests framework</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Execution commands"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>Tests framework structure</h3>
<h4>Recommend practice is <strong>Page Objects Model</strong> Design Pattern.</h4>
<p>In our sample boilerplate:</p>
<ol>
<li>Command parameter <strong>--test tests/app.test.js</strong> executes tests in <strong>app.test.js</strong> file.</li>
<li><strong>Tests</strong> are defined in <strong>.js</strong> files under <strong>.tests/</strong> folder, each file is a test.</li>
<li>Locators and function commands are grouped by page/screen, and are put in <strong>./lib/pages/device/</strong> folder.
E.g in <strong>app.test</strong>, the login step would require elements and commands that are defined in <strong>./lib/pages/ios/login.js</strong> file.</li>
<li>Profiles that are used to execute tests in remote, e.g. SauceLabs, are defined in magellan.json fine.</li>
<li>Local browsers are defined in nightwatch.json file, they are used for local simulator tests, and they are not supported in profiles.</li>
</ol>
<h4>Where to find mobile commands</h4>
<ol>
<li>When look at commands in page files, e.g. <strong>setMobileElValue()</strong> may look new to you. Those mobile commands are defined in <strong><em>./node_modules/testarmada-nightwatch-extra/lib/commands/mobile</em></strong>.</li>
<li>Assertions, e.g. <strong>mobileElAttrContains()</strong>, are defined in <strong><em>./node_modules/testarmada-nightwatch-extra/lib/assertions/mobile</em></strong>.</li>
<li>To use those mobile commands and assertions, need to add the following lines in nightwatch.json file:</li>
</ol>
<pre><code class="language-bash">  &quot;custom_commands_path&quot;: [
    &quot;./node_modules/testarmada-nightwatch-extra/lib/commands/mobile&quot;
  ],
  &quot;custom_assertions_path&quot;: [
    &quot;./node_modules/testarmada-nightwatch-extra/lib/assertions/mobile&quot;
  ],
</code></pre>
<ol start="4">
<li>You can also add your customized commands into folder <strong>./lib/custom_commands</strong>, to increase code reusability. And please remember to add the path to nightwatch.json file, e.g.</li>
</ol>
<pre><code class="language-bash">  &quot;custom_commands_path&quot;: [
    &quot;./node_modules/testarmada-nightwatch-extra/lib/commands/mobile&quot;,
    &quot;./lib/custom_commands&quot;
  ],
</code></pre>
<h3>Quiz</h3>
<p>Run mocked iOS app sample test in the local box with a different iOS simulator.</p>
</div>
<div class="training-doc-nav-btn">
</div>
