---
title: Setup iOS app test on Sauce Labs
layout: training
permalink: documentation/Functional Testing/Native iOS/JAVASCRIPT/Training Guide/Setup/Setup iOS app test on Sauce Labs
level1: Functional Testing
level2: Native iOS
level3: JAVASCRIPT
level4: Training Guide
course: Setup
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Setup iOS app test on local machine">Setup iOS app test on local machine</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Setup iOS app test on Sauce Labs">Setup iOS app test on Sauce Labs</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Setup iOS app test on local machine"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>Setup iOS app sample test on Sauce Labs</h3>
<ul>
<li>Apply Sauce Labs access: <a href="http://qm.otto.walmartlabs.com:8080">here</a></li>
<li>Open terminal: (or add them into .bash_profile)</li>
</ul>
<pre><code class="language-bash">$ export SAUCE_USERNAME=${USERNAME}
$ export SAUCE_ACCESS_KEY=${ACCESSKEY}
</code></pre>
<ul>
<li>Upload the testing iOS app to Sauce Labs</li>
</ul>
<pre><code class="language-bash"># Download Walmart app
$ curl -L 'http://gec-maven-nexus.walmart.com/nexus/service/local/artifact/maven/redirect?r=pangaea_snapshots&amp;g=com.walmart.ios.development-qa-nightly&amp;a=Walmart.app&amp;v=LATEST&amp;p=zip' &gt; app/Walmart.zip &amp;&amp; unzip -o app/Walmart.zip -d app/ &amp;&amp; rm -rf app/Users app/Walmart.zip &amp;&amp; zip -r app/Walmart.zip app/Walmart.app

# Upload Walmart app to SauceLabs, and name it: Walmart_app.zip
$ curl -u ${SAUCE_USERNAME}:${SAUCE_ACCESS_KEY} -X POST &quot;http://saucelabs.com/rest/v1/storage/${SAUCE_USERNAME}/Walmart_app.zip?overwrite=true&quot; -H &quot;Content-Type: application/octet-stream&quot; --data-binary @./app/Walmart.zip
</code></pre>
<ul>
<li>To run tests with live services, use command:</li>
</ul>
<pre><code class="language-bash">DPRO=ios ./node_modules/.bin/magellan --config magellan.json --profile appium-ios-app  --test tests/app.test.js --serial -- max_test_attempts=1
</code></pre>
<ul>
<li>To run tests with mocked services, use command:</li>
</ul>
<pre><code class="language-bash">DPRO=ios ./node_modules/.bin/magellan --config magellan.json --profile appium-ios-app-mock-sauce  --test tests/app-mock.test.js --serial --max_test_attempts=1 --sauce_create_tunnels
</code></pre>
<ul>
<li>You can view your tests running at: https://saucelabs.com/beta/dashboard/tests</li>
</ul>
</div>
<div class="training-doc-nav-btn">
</div>
