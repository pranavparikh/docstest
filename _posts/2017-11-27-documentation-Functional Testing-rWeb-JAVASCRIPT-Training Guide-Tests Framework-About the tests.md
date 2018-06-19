---
title: About the tests
layout: training
permalink: documentation/Functional Testing/rWeb/JAVASCRIPT/Training Guide/Tests Framework/About the tests
level1: Functional Testing
level2: rWeb
level3: JAVASCRIPT
level4: Training Guide
course: Tests Framework
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./About the tests">About the tests</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Page Object properties">Page Object properties</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<h3>We recommend using Page Objects methodology</h3>
<p>The Page Objects methodology is a popular pattern to write end-to-end tests by wrapping the pages or page fragments of a web app into objects. To know more about it, please read <a href="http://martinfowler.com/bliki/PageObject.html">this</a>.</p>
<h3>About the <em>tests</em></h3>
<p>For our sample framework:</p>
<ul>
<li>Create a separate folder <code>tests</code> for tests in your project. Each file inside it will be loaded as a test.</li>
<li>All the tests should extend <strong>testarmada-nightwatch-extra/lib/base-test-class</strong>, which passes certain information, such as selenium session information and test result.</li>
<li>You can override before(), beforeEach(), afterEach() and after() method or add your own methods in your base test.</li>
<li>A test can have multiple steps if needed, e.g.:</li>
</ul>
<pre><code class="language-bash">const Test = require(&quot;../lib/base-test&quot;);
module.exports = new Test({
  tags: [&quot;pageobject&quot;, &quot;web&quot;],

  &quot;Load demo first page&quot;: function(client) {
    const df = client.page[&quot;demo-first&quot;]();
    df
      .navigate()
      .api.resizeWindow(1200, 800);
  },
  &quot;Verify all cities on first page&quot;: function(client) {
    client
      .page[&quot;demo-first&quot;]()
      .assert.elContainsText(&quot;#tokyo&quot;, &quot;Tokyo&quot;)
      .assert.elContainsText(&quot;.city:eq(1) p:eq(1)&quot;, &quot;Europe&quot;);
  },
  &quot;Jump to demo second page&quot;: function(client) {
    client
      .page[&quot;demo-first&quot;]()
      .jumpToSecondDemo();
  }
});
</code></pre>
<ul>
<li>Each test should have some tags, this will make it easier to group tests when execute.</li>
</ul>
</div>
<div class="training-doc-nav-btn">
<a href="./Page Object properties"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
