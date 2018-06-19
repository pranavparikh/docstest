---
title: Trouble shooting tips
layout: training
permalink: documentation/Functional Testing/Native iOS/JAVASCRIPT/Training Guide/Trouble Shooting/Trouble shooting tips
level1: Functional Testing
level2: Native iOS
level3: JAVASCRIPT
level4: Training Guide
course: Trouble Shooting
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Trouble shooting tips">Trouble shooting tips</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<h4>Trouble shooting tips</h4>
<ul>
<li>Java version error</li>
</ul>
<pre><code class="language-bash">Exception in thread &quot;main&quot; java.lang.UnsupportedClassVersionError: org/openqa/grid/selenium/GridLauncherV3 : Unsupported major.minor version 52.0
         at java.lang.ClassLoader.defineClass1(Native Method)
         at java.lang.ClassLoader.defineClass(ClassLoader.java:800)
...
</code></pre>
<p><strong>Tips</strong>: Please check your java version (java -version), you should use java 1.8. You can download it <a href="http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html">here</a>.</p>
<ul>
<li>host pointing error</li>
</ul>
<pre><code class="language-bash">Error: getaddrinfo ENOTFOUND travis.dev
    at errnoException (dns.js:28:10)
    at GetAddrInfoReqWrap.onlookup \[as oncomplete\] (dns.js:76:26)
...
</code></pre>
<p><strong>Tips</strong>: Please add travis.dev into your hosts file(/etc/hosts)</p>
<ul>
<li>Want to make sure shifu server up and running, check <a href="http://dev.walmart.com:12000/shifu">this</a></li>
</ul>
<p><strong>Some general trouble shooting tips for Appium iOS app automation:</strong></p>
<ul>
<li>When run simulator test, please sure the <strong><em>accessibility helper</em></strong> is turned off in your <strong>Settings</strong> app</li>
<li>Make sure the app is compiled for the simulator (or real device) as appropriate (e.g. in debug mode for the simulator), or you might get a  <em>posix spawn</em>  error.</li>
<li>If this is the first time you've run Appium, make sure to authorize the use of Instruments. See the  <a href="http://appium.io/docs/en/drivers/ios-uiautomation/index.html">UIAutomation Driver</a>  doc.</li>
<li>Tests on iOS may exhibit symptoms similar to a memory leak including sluggish performance or hangs. If you experience this problem, it's likely due to a known issue with NSLog. One option is to remove NSLog from your code.</li>
<li>Sometimes iOS UI elements become invalidated milliseconds after they are found. This results in an error that looks like <strong><em>(null) cannot be tapped</em></strong>. Sometimes the only solution is to put the finding-and-clicking code in a retry block.</li>
</ul>
</div>
<div class="training-doc-nav-btn">
</div>
