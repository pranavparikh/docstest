---
title: SetMockId
layout: training
permalink: documentation/Mocking/Native Android/JAVASCRIPT/Training Guide/Mocking 301/SetMockId
level1: Mocking
level2: Native Android
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 301
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Different ways of returning response data">Different ways of returning response data</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./SetMockId">SetMockId</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./APIs for SetMockId">APIs for SetMockId</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Parallel Sessions">Parallel Sessions</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Different ways of returning response data"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. What is SetMockId</h3>
<p>This feature is very handy when you want to stub all the endpoints for a particular test without manually writing the paths for those endpoints. Generally applicable in scenarios where one page calls different endpoints according to test flows. You do not need to set variant or create variants for these endpoints. You will need to manually store the stubbed JSON files in the file structure location which are specified by your endpoints. The endpoints responses can be captured and stored under mocked data directory as a one time setup.</p>
<h3>2. How SetMockId works?</h3>
<p><strong>Scenario</strong></p>
<p>Lets say your test case requires to mock two end points <code>/api/message</code> and <code>/api/product/getStatus</code>. These endpoints are called three times each. For the first end point you always want to return the same data (in json) while for the second endpoint you want to return the same data for the first and third call (in html) and a different data for the second call (in html).</p>
<p><strong>Implementation</strong></p>
<p>Create a folder under the mocked-data of your test directory (<em>this folder name is configurable when you start your mock server by passing mockedDirectory option</em>) by the name <code>test1</code>. Under this folder add the following files for your mocked response.</p>
<ul>
<li><code>api-message-GET.json</code> - This will be returned for all the calls for the first endpoint with default response code 200</li>
<li><code>api-product-getStatus-GET.html</code> - This will be returned for all the calls for the second endpoint with default response code 200, except for the second and third call as it has its own file</li>
<li><code>api-product-getStatus-GET-2.html</code> - This will be returned for the second call for the second endpoint with default response code 200</li>
<li><code>api-product-getStatus-GET-3-code-201.html</code> - This will be returned for the third call for the second endpoint with response code 201</li>
</ul>
<blockquote>
<p>Now set the setMockId either by mock api, UI or rest call to set to <code>test1</code></p>
</blockquote>
<p><strong>Explanation</strong>
The underlying mock service automatically figures out the file extension so that you do not have to specify it. If you have the same file with multiple file extension than the following order is used:</p>
<ul>
<li>JSON</li>
<li>HTML</li>
<li>TXT</li>
<li>First file encountered of any other extension</li>
</ul>
<blockquote>
<p>Once the <code>shifu.setMockId(“test1”)</code> API is called, Shifu only looks for the responses under the test1 folder. If it does not find the response, it will return 404 with the file name that it did not find. Shifu internally keeps track of the number of times each individual endpoint is called after <code>client.setMockId(“test1”)</code> API is called and first looks for the file with count specific name such as <code>api-message-GET-1.json</code>, if it does not find the said file then it looks for the default file which is <code>api-message-GET.json</code>.</p>
</blockquote>
<h3>3. Good To Know</h3>
<p>If setMockId is set, then custom file path in handler</p>
<pre><code class="language-js">shifu.util.respondWithFile(this, reply, {filePath: ‘./message/GET/default.json’});
</code></pre>
<p>and file based on URL path <code>./mocked-data/api/message/get/default.json</code> are ignored for the mocked response. Here is the order followed for file lookup:</p>
<ul>
<li>SetMockId</li>
<li>Custom File Path for default or variants endpoints.</li>
<li>File based on URL Path for default or variants endpoints.</li>
</ul>
<blockquote>
<p>SetMockId does not work with in-line Handler</p>
</blockquote>
<pre><code class="language-js">shifu.route({
  id: 'message',
  label: 'Message',
  path: '/get/message/{customerid}',
  method: 'GET',
  variantLabel: 'Hello',
  handler: function (req, reply) {
    var lname = req.query.lname;
    var fname = req.query.fname;
    var customerid = req.params.customerid;
    if (customerid.length &gt; 5) {
      reply().code(400);
    } else {
      reply('Hello ' + fname + &quot; &quot; + lname);
    }
  }
})
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./APIs for SetMockId"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
