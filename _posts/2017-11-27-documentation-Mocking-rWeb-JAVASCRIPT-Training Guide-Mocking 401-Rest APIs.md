---
title: Rest APIs
layout: training
permalink: documentation/Mocking/rWeb/JAVASCRIPT/Training Guide/Mocking 401/Rest APIs
level1: Mocking
level2: rWeb
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Rest APIs">Rest APIs</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Starting HTTPS server with Mock Server">Starting HTTPS server with Mock Server</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Mocking Utility Methods"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. Set Variant</h3>
<pre><code class="language-js">Method    : POST
Syntax    : {host}:{port}/_admin/api/route/{routeId}
Rest API  : curl -H &quot;Content-Type: application/json&quot; -X POST -d '{&quot;variant&quot;:&quot;preorder&quot;}' http://localhost:8000/_admin/api/route/getCollection?returnConfig=true
shifu.route({
    id: 'getCollection',
    label: 'Get Collection',
    path: '/product/grouping/api/collection/{collectionId}',
 
    variantLabel: 'default',
    handler: function(req, reply) {
        var response = getResponseData('/product/grouping/api/collection', 'default');
        reply(response);
    }
})
.variant({
    id: 'preorder',
    label: 'Get Pre-order Collection',
    handler: function (req, reply) {
        reply({message: 'hello pre-order'});
    }
});
</code></pre>
<blockquote>
<p>To get the config back as a response, add query parameter <code>returnConfig=true</code> as shown in example above</p>
</blockquote>
<h3>2. Set Mock Id</h3>
<pre><code>Method    : GET
Syntax    : {host}:{port}/_admin/api/shifu/setMockId/{mockid}/{sessionid}
Rest API  : curl http://localhost:8000/_admin/api/shifu/setMockId/1234/default
</code></pre>
<h3>3. Get Mock Id</h3>
<pre><code>Method    : GET
Syntax    : {host}:{port}/_admin/api/shifu/getMockId/{sessionid}
Rest API  : curl http://localhost:8000/_admin/api/shifu/getMockId/default
</code></pre>
<h3>4. Reset Mock Id</h3>
<pre><code>Method    : GET
Syntax    : {host}:{port}/_admin/api/shifu/resetMockId/{sessionid}
Rest API  : curl http://localhost:8000/_admin/api/shifu/resetMockId/default
</code></pre>
<h3>5. Get Url Count</h3>
<pre><code>Method    : GET
Syntax    : {host}:{port}/_admin/api/shifu/getURLCount/{sessionid}
Rest API  : curl http://localhost:8000/_admin/api/shifu/getURLCount/default
</code></pre>
<h3>6. Reset Url Count</h3>
<pre><code>Method    : GET
Syntax    : {host}:{port}/_admin/api/shifu/resetURLCount/{sessionid}
Rest API  : curl http://localhost:8000/_admin/api/shifu/resetURLCount/default
</code></pre>
<h3>7. Re-set the state of Mock Server</h3>
<pre><code>Method    : POST
Syntax    : {host}:{port}/_admin/api/state/reset
Rest API  : curl -X POST http://localhost:8000/_admin/api/state/reset
</code></pre>
<h3>8. Register Session</h3>
<pre><code>Method    : GET
Syntax    : {host}:{port}/_admin/api/shifu/registerSession
Rest API  : curl http://localhost:8000/_admin/api/shifu/registerSession
</code></pre>
<h3>9. Get Sessions</h3>
<pre><code>Method    : GET
Syntax    : {host}:{port}/_admin/api/shifu/getSessions
Rest API  : curl http://localhost:8000/_admin/api/shifu/getSessions
</code></pre>
<h3>10. Check Session</h3>
<pre><code>Method    : GET
Syntax    : {host}:{port}/_admin/api/shifu/checkSession/{sessionid}
Rest API  : curl http://localhost:8000/_admin/api/shifu/checkSession/{sessionid}
</code></pre>
<h3>11. Close Session</h3>
<pre><code>Method    : GET
Syntax    : {host}:{port}/_admin/api/shifu/closeSession/{sessionid}
Rest API  : curl http://localhost:8000/_admin/api/shifu/closeSession/{sessionid}
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./Starting HTTPS server with Mock Server"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
