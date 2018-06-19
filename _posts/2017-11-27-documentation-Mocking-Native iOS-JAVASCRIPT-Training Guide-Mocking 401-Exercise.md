---
title: Exercise
layout: training
permalink: documentation/Mocking/Native iOS/JAVASCRIPT/Training Guide/Mocking 401/Exercise
level1: Mocking
level2: Native iOS
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 401
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./State">State</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Mocking Utility Methods">Mocking Utility Methods</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Rest APIs">Rest APIs</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Starting HTTPS server with Mock Server">Starting HTTPS server with Mock Server</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Starting HTTPS server with Mock Server"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<ol>
<li><p>Update the previous mock server with the following:</p>
<ol>
<li>Add a logg-in route <code>api/login</code></li>
<li>Add a log-out route <code>api/logout</code></li>
<li>Add a state variable <code>loggedIn</code> and set true/false value based on the above APIs.</li>
</ol></li>
<li><p>Update the <code>get/message</code> default handler to return the message <code>Hello: fname lname</code> if user is logged in by reading from the query parameters otherwise  <code>Hello: Guest</code> is the customer Id is less than equal to 5 characters.</p></li>
<li><p>Update the <code>get/message</code> <code>Hello Universe</code> variant to modify the file to following using transpose data based on if user is logged in or logged out</p>
<pre><code class="language-js">- User Logged In
{
    message: fname lname
}

- User Logged Out
{
    message: Guest
}
</code></pre></li>
<li><p>Start mock server</p></li>
<li><p>Hit <code>get/message</code> with customer id length &lt;=5 and see you should get <code>Hello: Guest</code></p></li>
<li><p>Set the variant to <code>Hello Universe</code></p></li>
<li><p>Hit <code>get/message</code> with customer id length &lt;=5 and see you should get <code>message: Guest</code></p></li>
<li><p>Hit <code>api/login</code></p></li>
<li><p>Set the variant to default</p></li>
<li><p>Hit http://localhost:8000/get/message/12345?fname=John&amp;lname=Doe with customer id length &lt;=5 and see you should get <code>Hello: John Doe</code>.</p></li>
<li><p>Set the variant to <code>Hello Universe</code></p></li>
<li><p>Hit http://localhost:8000/get/message/12345?fname=John&amp;lname=Doe with customer id length &lt;=5 and see you should get <code>message:John Doe</code></p></li>
<li><p>Hit <code>api/logout</code> and repeat 5 to 7.</p></li>
<li><p>Create and install certificates to enable HTTPS in Shifu.</p></li>
<li><p>Update run-mock-server-console.js to enable https in mock server.</p></li>
<li><p>Start mock server and navigate to https://localhost:4444/_admin and repeat 5 to 12 steps.</p></li>
</ol>
</div>
<div class="training-doc-nav-btn">
</div>
