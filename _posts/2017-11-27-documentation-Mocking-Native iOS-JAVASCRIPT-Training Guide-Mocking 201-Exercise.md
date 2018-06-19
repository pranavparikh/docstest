---
title: Exercise
layout: training
permalink: documentation/Mocking/Native iOS/JAVASCRIPT/Training Guide/Mocking 201/Exercise
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Returning Response from a File">Returning Response from a File</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Returning Response from a File"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. Update the previous mock server with the following</h3>
<p>a. Update the route <code>/get/message</code> to a dynamic URL which takes <code>customer id</code> as a parameter.</p>
<p>b. Update the 'Hello World' variant to
- return the following file with auto file location calculation.
<code>json { &quot;message&quot; : &quot;Hello World&quot; }</code>
- Set the following header params in response
<code>{ fname: John lname: Doe }</code></p>
<ol>
<li>Update the <code>Hello Universe</code> variant
<ul>
<li>to return the following file and the file location should be hard coded.</li>
</ul>
<pre><code class="language-json">{
    &quot;message&quot; : &quot;Hello Universe&quot;
}
</code></pre>
<ul>
<li>Set the following cookie params in response</li>
</ul>
<pre><code>{
    customerId: 123456
}
</code></pre></li>
<li>Update the default handler to do the following:
<ul>
<li>Add reading of query parameter 'fname' and 'lname' from the request.</li>
<li>If the customer id is greater than 5 characters
<ul>
<li>return 'invalid id' as response</li>
</ul></li>
<li>If the customer id is less than or equal to 5 characters
<ul>
<li>return following response from the handler (<strong>NOT</strong> Using The File)
<blockquote>
<p>Hello - fname lname</p>
</blockquote></li>
</ul></li>
</ul></li>
<li>Add a <code>POST</code> route <code>/set/customerId</code> and in default handler read the payload value and log it on console.</li>
</ol>
<pre><code class="language-json">{
    &quot;customerid&quot;: 123456
}
</code></pre>
<h3>2. Start mock server</h3>
<ol>
<li>Make a REST call to <code>/get/message</code> with customer id greater than 5 characters and check the response is <code>Invalid Id</code></li>
<li>Make a REST call to <code>/get/message</code> with customer id equal to 5 characters and check the response to be <code>Hello undefined undefined</code></li>
<li>Make a REST call to <code>http://localhost:8000/get/message/12345?fname=John&amp;lname=Doe</code> and check the response to be <code>Hello John Doe</code></li>
<li>Switch to <code>Hello World</code> variant and check the response is <code>&quot;message&quot; : &quot;Hello World&quot;</code> and use dev tools on Chrome browser to verify that the header params are set (fname: John and lname: Doe)</li>
<li>Switch to <code>Hello Universe</code> variant and check the response is <code>&quot;message&quot; : &quot;Hello Universe&quot;</code> and use dev tools on Chrome browser to verify that the cookie is set (customerId: <code>123456</code>)</li>
<li>Make a post call to mock server at <code>http://localhost:8000/set/customerId</code> using Postman (or any other HTTP client) with the following data and verify that <code>12345</code> is logged on the console</li>
</ol>
<pre><code class="language-json">{
 &quot;customerId&quot; : 12345
}
</code></pre>
</div>
<div class="training-doc-nav-btn">
</div>
