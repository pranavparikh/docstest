---
title: Desired Capabilities
layout: training
permalink: documentation/Functional Testing/Native iOS/JAVASCRIPT/Training Guide/iOS Automation/Desired Capabilities
level1: Functional Testing
level2: Native iOS
level3: JAVASCRIPT
level4: Training Guide
course: iOS Automation
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Desired Capabilities">Desired Capabilities</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Native app locators">Native app locators</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<h3>After we understand the tests framework, we can start to take a closer look on how native iOS app automation works</h3>
<h4>Underlying we are using <a href="http://appium.io"><strong>Appium</strong></a> to drive native iOS app automation</h4>
<ul>
<li>Most concepts are similar for web and app automations, a few things maybe new to people who come from web automation world:</li>
</ul>
<p><strong>Desired Capabilities</strong></p>
<ul>
<li>Desired capabilities are a set of keys and values (i.e., a map or hash) sent to the Appium server to tell the server what kind of automation session we're interested in starting up.</li>
<li>There are various capabilities which can modify the behavior of the server during automation.</li>
<li>For example, we could set the <strong>platformName</strong> capability to <strong>iOS</strong> to tell Appium that we want an iOS session, rather than an Android one. See the <a href="http://appium.io/docs/en/writing-running-appium/caps/index.html">capabilities doc</a> for the complete list of capabilities available for Appium.</li>
<li>For our sample repo, Desired Capabilities are defined either in profiles in <strong>magellan.json</strong> file or <strong><em>./conf/nightwatch.json</em></strong> file. You can specify to use which one in your command line.</li>
<li>For example, in your command, you can specify it via <code>--profile appium-ios-app</code>, which is defined in <strong>magellan.json</strong> file.</li>
</ul>
</div>
<div class="training-doc-nav-btn">
<a href="./Native app locators"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
