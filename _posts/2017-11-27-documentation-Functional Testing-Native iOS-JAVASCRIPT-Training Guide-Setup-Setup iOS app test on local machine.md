---
title: Setup iOS app test on local machine
layout: training
permalink: documentation/Functional Testing/Native iOS/JAVASCRIPT/Training Guide/Setup/Setup iOS app test on local machine
level1: Functional Testing
level2: Native iOS
level3: JAVASCRIPT
level4: Training Guide
course: Setup
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Setup iOS app test on local machine">Setup iOS app test on local machine</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Setup iOS app test on Sauce Labs">Setup iOS app test on Sauce Labs</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<p>New to native iOS app testing? No worry, you don’t need to know much to set it up. Let's get your first native iOS app test up and running in a couple of minutes.</p>
<h3>Setup iOS app test on local machine</h3>
<h4>Prerequisites:</h4>
<ul>
<li>Install <a href="https://developer.apple.com/download/">Xcode 9.2</a></li>
<li>Install Node.js &gt;= v4.x.x</li>
<li>Install <a href="http://nodejs.org/">npm</a>. Check that you have at least <strong>npm</strong> version 3 or above (required by <em>appium@1.7.x</em>):</li>
</ul>
<pre><code class="language-bash">$ npm --version
# If not, install npm3
$ npm install -g npm@3
</code></pre>
<ul>
<li>Please map <strong>dev.walmart.com</strong> to <strong>127.0.0.1</strong> in your host file</li>
</ul>
<h4>Setup Steps:</h4>
<ul>
<li>Get the sample code and install the node package dependencies:</li>
</ul>
<pre><code class="language-bash"># Create a workspace and get the smaple code
$ git clone git@gecgithub01.walmart.com:otto/boilerplate-nightwatch-mobile.git
$ cd boilerplate-nightwatch-mobile 
$ npm install
$ npm install appium@1.7.2
$ npm install wd
</code></pre>
<ul>
<li>Verify all the required items are setup properly by running appium-doctor:</li>
</ul>
<pre><code class="language-bash"># install appium-doctor (may require sudo)
$ npm install appium-doctor -g
# check that all iOS dependencies are set up correctly
$ appium-doctor --ios
</code></pre>
<ul>
<li>Download <a href="http://gec-maven-nexus.walmart.com/nexus/service/local/artifact/maven/redirect?r=pangaea_snapshots&amp;g=com.walmart.ios.development-qa-nightly&amp;a=Walmart.app&amp;v=LATEST&amp;p=zip">Walmart app</a> and renamed to <strong>Walmart.zip</strong>. Unzip it under <strong>./app</strong> directory, delete <strong><em>Users</em></strong> folder. Compress <strong><em>./app/Walmart</em></strong> to <strong>./app/Walmart.zip</strong>, replace the the original one</li>
<li>Or get the Walmart.app by using the following command option:</li>
</ul>
<pre><code class="language-bash">curl -L 'http://gec-maven-nexus.walmart.com/nexus/service/local/artifact/maven/redirect?r=pangaea_snapshots&amp;g=com.walmart.ios.development-qa-nightly&amp;a=Walmart.app&amp;v=LATEST&amp;p=zip' &gt; app/Walmart.zip &amp;&amp; unzip -o app/Walmart.zip -d app/ &amp;&amp; rm -rf app/Users app/Walmart.zip &amp;&amp; zip -r app/Walmart.zip app/Walmart.app
</code></pre>
<ul>
<li>Please make sure you have iPhone 8, iOS 11.2 simulator before execute the sample test.</li>
<li>If you would like to try out some different simulators, please modify the <strong><em>appiumiosapp</em></strong> part in <strong>.conf/nightwatch.json</strong> file.</li>
<li>Try the sample test:</li>
</ul>
<pre><code class="language-bash">$ npm run test:ios
</code></pre>
<ul>
<li>If you don't have SauceLabs credential , please remove this line in <strong><em>./magellan.json</em></strong> file:</li>
</ul>
<pre><code class="language-bash">&quot;testarmada-magellan-saucelabs-executor&quot;
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./Setup iOS app test on Sauce Labs"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
