---
title: Request Call Information
layout: training
permalink: documentation/Mocking/Services/JAVASCRIPT/Training Guide/Mocking 201/Request Call Information
level1: Mocking
level2: Services
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 201
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Dynamic URLs">Dynamic URLs</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Request Call Information">Request Call Information</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Customizing Mocked Response">Customizing Mocked Response</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Returning Response from a File">Returning Response from a File</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Dynamic URLs"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. Query Parameters</h3>
<p>Let's say you go to the following URL: http://localhost:8000/get/customerInfo/12345?ctype=new . To read the query parameter, do the following:</p>
<pre><code class="language-js">var ctype = req.query.ctype;
</code></pre>
<blockquote>
<p>To run the above scenario, hit the following in any browser with Shifu server running: http://localhost:8000/get/customerInfo/12345?ctype=new after updating the route to</p>
</blockquote>
<pre><code class="language-js">shifu.route({
  id: 'customerInfo',
  label: 'Customer Info',
  path: '/get/customerInfo/{customerid}',
  method: 'GET',
  variantLabel: 'Get Customer Info',
  handler: function (req, reply) {
    var id = req.params.customerid;
    var ctype = req.query.ctype;
    var replyString = 'Customer Type: ' + ctype + ' customer id: ' + id;
    reply(replyString);
  }
});
</code></pre>
<h3>2. Header information</h3>
<p>Let's say there is a header parameter 'name' with value 'John' is passed with the request. To read the testHeader parameter, do the following:</p>
<pre><code class="language-js">var req = req.raw.req;
var name = req.headers.name;
</code></pre>
<blockquote>
<p>To run the above scenario, use postman to make the following get call: http://localhost:8000/get/customerInfo/12345?ctype=new and add header 'name' with value 'John' after updating the route to</p>
</blockquote>
<pre><code class="language-js">shifu.route({
  id: 'customerInfo',
  label: 'Customer Info',
  path: '/get/customerInfo/{customerid}',
  method: 'GET',
  variantLabel: 'Get Customer Info',
  handler: function (req, reply) {
    var id = req.params.customerid;
    var ctype = req.query.ctype;
    var req = req.raw.req;
    var name = req.headers.name;
    var replyString = 'Customer Type: ' + ctype + ' customer id: ' + id + ' nameFromHeader: ' + name;
    reply(replyString);
  }
});
</code></pre>
<h3>3. Payload</h3>
<p>The payload can be read using the following code:</p>
<pre><code class="language-js">//fname would be &quot;Bob&quot; if the posted body content (as JSON) was {&quot;fname&quot;: &quot;Bob&quot;}
var fname = req.payload.fname;
</code></pre>
<blockquote>
<p>To run the above scenario, use postman to make the following POST call: http://localhost:8000/payload and add payload <code>{&quot;fname&quot;: &quot;Bob&quot;}</code> in the request.</p>
</blockquote>
<pre><code class="language-js">shifu.route({
  id: 'payload',
  label: 'Reading Payload',
  path: '/payload',
  method: 'POST',
  variantLabel: 'Payload',
  handler: function (req, reply) {
    var fname = req.payload.fname;
    reply(fname);
  }
});
</code></pre>
<h3>4. Content Types</h3>
<p>The mock module is independent of content-types i.e. user can set any content type and mocking route is intercepted only based on the path defined in the mocked routes file.</p>
</div>
<div class="training-doc-nav-btn">
<a href="./Customizing Mocked Response"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
