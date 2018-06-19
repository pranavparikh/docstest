---
title: Parallel Sessions
layout: training
permalink: documentation/Mocking/Native Android/JAVASCRIPT/Training Guide/Mocking 301/Parallel Sessions
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Parallel Sessions">Parallel Sessions</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./APIs for SetMockId"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. What is parallel sessions and why it's needed?</h3>
<p>Parallel sessions allows you to run multiple instance of server virtually while running only one server. This is helpful when you are running multiple test cases which access the same routes but different variants as parallel sessions allow you to set different variants on same routes without conflicting. This saves CPU and RAM both as only one server is running instead of multiple.</p>
<h3>2. How Parallel Sessions works internally?</h3>
<p><img src="../../../../images/shifu_parallel_sessions.png" alt="shifu_parallel_sessions"></p>
<h3>3. How to add parallel sessions?</h3>
<blockquote>
<p>To add parallel sessions, modify run-mock-server-console.js to add 'sessions' parameter.</p>
</blockquote>
<pre><code class="language-js">require('./endpoints');
var shifu = require('shifu');
shifu.start({
  host: &quot;localhost&quot;,
  mockedDirectory: &quot;./resources/mocked-data&quot;,
  port: 8000,
  sessions: 2,
  project: 'HelloShifu'
});
</code></pre>
<p><strong>You can also start or add sessions via command line argument</strong></p>
<pre><code class="language-bash">node resources/run-mock-server-console.js --shifuSessions 2
</code></pre>
<blockquote>
<p>If you pass sessions = 2, there will be two parallel sessions along with one default session.</p>
</blockquote>
<h3>4. Supported APIs for Parallel sessions</h3>
<ol>
<li><p>Register Session
To register sessions to be used</p>
<pre><code class="language-js">var sessionId = shifu.registerSession();
</code></pre></li>
<li><p>Get Sessions
To get all the active sessions</p>
<pre><code class="language-js">var activeSessions = shifu.getSessions();
</code></pre></li>
<li><p>Check Session
To check the session status (Available or In-Use or invalid)</p>
<pre><code class="language-js">var sessionStatus = shifu.checkSession(sessionId);
</code></pre></li>
<li><p>Close Session
To de-register session for later use</p>
<pre><code class="language-js">var closeSession = shifu.closeSession(sessionId);
</code></pre></li>
</ol>
<h3>5. Using Parallel Sessions</h3>
<p>To use a parallel session call the following api:</p>
<pre><code class="language-bash">curl http://localhost:8000/_admin/api/shifu/registerSession
</code></pre>
<p>or</p>
<pre><code class="language-js">shifu.registerSession()
</code></pre>
<p>and a session id will be returned.</p>
<p>Append this sessionId to the mocked host address to use this parallel session. For ex: If your mock host server is http://localhost:8080 and your session id is <code>112233</code> then the mock server address for this parallel session will be http://localhost:8080/112233.</p>
<h3>6. Verifying parallel sessions</h3>
<p>Start mock server with two sessions. Now go to the 'Message' route. You will see three routes for message, default and two for parallel sessions that you just added. Now for each route choose a different variant and hit the URL icon. You will see that each time you will get a different value though you are hitting the same route.</p>
<h3>7. Understanding the Shifu UI with sessions</h3>
<p>Try to go through Shifu UI to understand sessions.</p>
</div>
<div class="training-doc-nav-btn">
<a href="./Exercise"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
