---
title: Returning Response from a File
layout: training
permalink: documentation/Mocking/Native iOS/JAVASCRIPT/Training Guide/Mocking 201/Returning Response from a File
level1: Mocking
level2: Native iOS
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Request Call Information">Request Call Information</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Customizing Mocked Response">Customizing Mocked Response</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Returning Response from a File">Returning Response from a File</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Customizing Mocked Response"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. What does it mean?</h3>
<p>This feature allows you to respond with a data stored in a file instead of hard coding the response data in the routes definition. This way user does not have to change the response rather can just swap the file with different data.</p>
<h3>2. How it works?</h3>
<pre><code class="language-js">shifu.route({
  id: 'ResponseFromFile',
  label: 'Response From File',
  path: '/get/fromFile',
  handler: function(req, reply) {
    shifu.util.respondWithFile(this, reply);
  }
});
</code></pre>
<blockquote>
<p>In the above setup, file needed for default route, which is /get/fromFile should be located at <code>./mocked-data/get/fromFile/GET/default.json</code></p>
</blockquote>
<h3>3. What is <code>mockedDirectory</code> Path?</h3>
<p>Mocked directory path is the location to the base directory where all your mocked response file will be stored. This parameter is defined in run-mock-server-console.js file. It is defined at the start of mock server as shown in the code below:</p>
<pre><code class="language-js">require('./endpoints-Shifu-201');
require('shifu').start({
  host: &quot;localhost&quot;,
  mockedDirectory: &quot;./resources/mocked-data&quot;,
  port: 8000,
  project: 'HelloShifu'
});
</code></pre>
<h3>4. Automatic calculation of file location</h3>
<p>The path to the mocked data file is auto-calculated based on the route path. For variants, the name of the file should be changed from default to the variant name as shown below:</p>
<pre><code class="language-js">shifu.route({
  id: 'ResponseFromFile',
  label: 'Response From File',
  path: '/get/fromFile',
  handler: function(req, reply) {
    shifu.util.respondWithFile(this, reply);
  }
})
.variant({
  id: 'textData',
  label: 'Text Data',
  handler: function (req, reply) {
    shifu.util.respondWithFile(this, reply);
  }
})
</code></pre>
<blockquote>
<p>In the above example, mock server would look for <code>./resources/mocked-data/get/fromFile/GET/textData.txt</code> file for the variant textData</p>
</blockquote>
<h3>5. Providing custom path to the response file</h3>
<p>A custom file path could also be provided for a mocked data file. to do so, use the following code:</p>
<pre><code class="language-js">shifu.route({
  id: 'CustomResponseFile',
  label: 'Response From Custom Path',
  path: '/get/customFile',
  handler: function(req, reply) {
    shifu.util.respondWithFile(this, reply, {filePath: './custom.json'});
  }
})
</code></pre>
<blockquote>
<p>Shifu will look for the file under MockedDirectory only but at <code>./resources/mocked-data/custom.json</code></p>
</blockquote>
</div>
<div class="training-doc-nav-btn">
<a href="./Exercise"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
