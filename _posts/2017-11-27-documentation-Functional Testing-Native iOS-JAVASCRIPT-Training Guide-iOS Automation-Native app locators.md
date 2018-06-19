---
title: Native app locators
layout: training
permalink: documentation/Functional Testing/Native iOS/JAVASCRIPT/Training Guide/iOS Automation/Native app locators
level1: Functional Testing
level2: Native iOS
level3: JAVASCRIPT
level4: Training Guide
course: iOS Automation
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Desired Capabilities">Desired Capabilities</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Native app locators">Native app locators</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Desired Capabilities"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>Native app locators</h3>
<ul>
<li><p>To find the native app locators, there is a handy tool:
<strong><a href="https://github.com/appium/appium-desktop">Appium Desktop</a></strong></p></li>
<li><p>It's a GUI wrapper around the Appium server, comes with an Inspector, which enables you to check out the hierarchy of your app.</p></li>
<li><p>E.g How to find the <em>Password</em> locator in Sign in screen</p></li>
</ul>
<p><img src="../../../images/SignIn.png" alt="enter image description here"></p>
<p><strong>Steps:</strong></p>
<ol>
<li>Open Appium Desktop, and start the server</li>
<li>Click <strong>Start Inspector Session</strong> button</li>
<li>Add the Desired Capabilites property one by one. Or Add them from a .json data, e.g.</li>
</ol>
<pre><code class="language-bash">{
        &quot;app&quot;: &quot;/Users/abc/app/Walmart.app&quot;,
        &quot;appiumVersion&quot;: &quot;1.7.2&quot;,
        &quot;automationName&quot;: &quot;XCUITest&quot;,
        &quot;platformName&quot;: &quot;iOS&quot;,
        &quot;platformVersion&quot;: &quot;11.2&quot;,
        &quot;deviceName&quot;: &quot;iPhone 8&quot;,
        &quot;waitForAppScript&quot;: &quot;true&quot;,
        &quot;locationServicesAuthorized&quot;: &quot;true&quot;,
        &quot;locationServicesEnabled&quot;: &quot;true&quot;,
        &quot;bundleId&quot;: &quot;com.walmart.beta.electronics&quot;
      }
</code></pre>
<ol start="4">
<li>Click <strong>Start Session</strong> to start the inspector</li>
<li>Go to the Sign In screen, and select <strong>Password</strong> field in the inspector's left preview window.
<img src="../../../images/Locators.png" alt="enter image description here"></li>
<li>Check the element's attribute. E.g for this case, it has an unique value <code>&quot;Password&quot;</code>, then we can use <strong><em>accessibility id</em></strong> as the <strong>locateStrategy</strong> and <strong><em>Password</em></strong>, as the <strong>selector</strong></li>
<li>If the element does not have an unique value, you could locate element by relative <strong>xpath</strong>. e.g. <strong><em>//XCUIElementTypeSecureTextField[@value=&quot;Password&quot;]</em></strong></li>
<li>Please note - should use <strong><em>accessibility id</em></strong> as much as possible.  <strong><em>xpath</em></strong> is slow and unreliable.</li>
</ol>
<h3>Quiz</h3>
<ul>
<li>Please find the 'Forgot your password?' locator.</li>
<li>Can you make the inspector point to the mocked App? <em>Hint: You can refer to <code>processArguments</code> desired capabilities setup in <strong>nightwatch.json</strong> file, and you need to start a mock server:</em></li>
</ul>
<pre><code class="language-bash">node ./resources/run-mock-server-console.js
</code></pre>
</div>
<div class="training-doc-nav-btn">
</div>
