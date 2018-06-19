---
title: Exercise
layout: training
permalink: documentation/Mocking/rWeb/JAVASCRIPT/Training Guide/Mocking 301/Exercise
level1: Mocking
level2: rWeb
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./SetMockId">SetMockId</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./APIs for SetMockId">APIs for SetMockId</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Parallel Sessions">Parallel Sessions</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Parallel Sessions"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<ol>
<li><p>Update the previous mock server with the following:</p>
<ol>
<li>Update the <code>Hello World</code> variant of 'get/message' request to
<ul>
<li>Remove the header parameters</li>
<li>Return the file as before by using RespondWithFile without handler</li>
</ul></li>
<li>Update the default handler to return ONLY code 400 if the customer id is greater than 5 characters</li>
</ol></li>
<li><p>Start mock server and test Step 1</p></li>
<li><p>Now add data for setMockId for <code>/get/message</code> and <code>/get/number</code> routes.</p>
<ol>
<li><p>Return the following for URL hit count 1</p>
<ul>
<li>/get/message</li>
</ul>
<pre><code class="language-json">{
    &quot;message&quot; : 1
}
</code></pre>
<ul>
<li>/get/number</li>
</ul>
<pre><code class="language-json">{
    &quot;number&quot; : 1
}
</code></pre></li>
<li><p>Return the following for URL hit count 2</p>
<ul>
<li>/get/message</li>
</ul>
<pre><code class="language-json">{
    &quot;message&quot; : 2
}
</code></pre>
<ul>
<li>/get/number</li>
</ul>
<pre><code class="language-json">{
    &quot;number&quot; : 2
}
</code></pre></li>
<li><p>Return the following for default</p>
<ul>
<li>/get/message</li>
</ul>
<pre><code class="language-json">{
    &quot;message&quot; : &quot;Undefined&quot;
}
</code></pre>
<ul>
<li>/get/number</li>
</ul>
<pre><code class="language-json">{
    &quot;number&quot; : &quot;Undefined&quot;
}
</code></pre></li>
</ol></li>
<li><p>Call API to setMockId to the folder name via Shifu UI</p></li>
<li><p>Hit the rest endpoint <code>/get/message</code> and <code>/get/number</code> one time each and verify the response is <code>&quot;message&quot; : 1</code> and <code>&quot;number&quot; : 1</code> respectively.</p></li>
<li><p>Hit the rest endpoint <code>/get/message</code> and <code>/get/number</code> once more and verify the response for second hit is <code>&quot;message&quot; : 2</code> and <code>&quot;number&quot; : 2</code> respectively.</p></li>
<li><p>Hit the rest endpoint <code>/get/message</code> and <code>/get/number</code> one more time to verify that the response is <code>&quot;message&quot; : &quot;undefined&quot;</code> and <code>&quot;number&quot; : &quot;undefined&quot;</code> respectively.</p></li>
<li><p>Call ResetMockId API via Shifu UI</p></li>
<li><p>Hit the rest endpoint <code>/get/message</code> and <code>/get/number</code> once each and verify the response is based on the handler and not on SetMockId - <strong><em>You may have to add appropriate file based on the route path.</em></strong></p></li>
<li><p>Update run-mock-server-console.js to add two parallel sessions to the server.</p></li>
<li><p>Now call GetSessionId to register a session using Shifu UI.</p></li>
<li><p>Now set <code>Hello World</code> and <code>Hello Universe</code> variant for <code>get/message</code> api for the two sessions Ids respectively.</p></li>
<li><p>Now hit the server <code>https://localhost:8000/sessionId/get/message</code> for different session Ids and verify that you get different responses as per each variant.</p></li>
</ol>
</div>
<div class="training-doc-nav-btn">
</div>
