---
title: Mocking Utility Methods
layout: training
permalink: documentation/Mocking/rWeb/JAVASCRIPT/Training Guide/Mocking 401/Mocking Utility Methods
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
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Mocking Utility Methods">Mocking Utility Methods</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Rest APIs">Rest APIs</a></p>
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
<a href="./State"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. RespondWithFile Utility</h3>
<pre><code class="language-js">shifu.route({
  id: 'message',
  label: 'hello message',
  path: '/message',
 
  handler: function(req, reply) {
    shifu.util.respondWithFile(this, reply);
  }
})
</code></pre>
<ol>
<li><p>Setting Code</p>
<pre><code class="language-js">shifu.route({
    id: 'message',
    label: 'hello message',
    path: '/message',

    handler: function(req, reply) {
        shifu.util.respondWithFile(this, reply, {code: 400});
    }
})
</code></pre></li>
<li><p>Custom File Location</p>
<pre><code class="language-js">shifu.route({
    id: 'message',
    label: 'hello message',
    path: '/message',

    handler: function(req, reply) {
        shifu.util.respondWithFile(this, reply, {code: 400, filePath: '../mocked-data/fileName.json'});
    }
})
</code></pre></li>
<li><p>Setting Headers</p>
<pre><code class="language-js">shifu.route({
id: 'message',
label: 'hello message',
path: '/message',

handler: function(req, reply) {
    var myHeaders = {
        header1: 'test1',
        header2: 'test2',
        header3: true
    };
    shifu.util.respondWithFile(this, reply, {code: 400, filePath: '../mocked-data/fileName.json', headers: myHeaders});
}
});
</code></pre></li>
<li><p>Setting Cookies</p>
<pre><code class="language-js">shifu.route({
id: 'message',
label: 'hello message',
path: '/message',

handler: function(req, reply) {
    var myHeaders = {
        header1: 'test1',
        header2: 'test2',
        header3: true
    };

    var cookies = [
        {name: 'com.wm.customer', value: 'vz7.0b5c56'},
        {name: 'CID', value: 'SmockedCID', options: {domain: 'domain', path: '/'}},
        {name: 'anotherCookie', value: 'cookieValue'}
    ];
    shifu.util.respondWithFile(this, reply, {code: 400, filePath: '../mocked-data/fileName.json', headers: myHeaders, cookies: cookies});
}
});
</code></pre></li>
<li><p>Setting Delay</p>
<pre><code class="language-js">shifu.route({
    id: 'message',
    label: 'hello message',
    path: '/message',
    handler: function(req, reply) {
        var myHeaders = {
            header1: 'test1',
            header2: 'test2',
            header3: true
        };
        var cookies = [
            {name: 'com.wm.customer', value: 'vz7.0b5c56'},
            {name: 'CID', value: 'SmockedCID', options: {domain: 'domain', path: '/'}},
            {name: 'anotherCookie', value: 'cookieValue'}
        ];
        shifu.util.respondWithFile(this, reply, {code: 400, filePath: '../mocked-data/fileName.json', headers: myHeaders, cookies: cookies, delay: 1000});
    }
});
</code></pre></li>
<li><p>Modifying Static JSON response</p>
<p>If you have many variants for a REST end point and the mocked data for all variants can use the same JSON response with few changes to the values, than this feature is what you need. This feature allows you to dynamically change a JSON file before sending the response back from the mock server for the request. It removes the need of having one to one mapping of static JSON files with each variants.</p>
<pre><code class="language-json">// Static Response JSON File
{
    &quot;id&quot;: &quot;1234&quot;,
    &quot;name&quot;: &quot;toothpaste&quot;,
    &quot;details&quot;: [
        {
            &quot;flavor&quot;: &quot;Mint 1&quot;,
            &quot;Size&quot;: &quot;10&quot;,
            &quot;Size_Type&quot;: &quot;ounce&quot;
        },
        {
            &quot;flavor&quot;: &quot;Mint&quot;,
            &quot;Size&quot;: &quot;10&quot;,
            &quot;Size_Type&quot;: &quot;ounce&quot;
        }
    ]
}
</code></pre>
<pre><code class="language-js">// Sample code for substituting id from 1234 to 7777 and flavor from Mint to Mint 2 for second array element in routes

shifu.route({
    id: 'Get Collection',
    label: 'Get Collections',
    path: '/product/grouping/api/collection/{collectionId}',

    handler: function(req, reply) {
        var dataToChange = {
            'id': '7777',
            'details[1].flavor': 'Mint 2'
        }
        shifu.util.respondWithFile(this, reply, {transpose: dataToChange}); 
    }
});
</code></pre>
<pre><code class="language-json">// Dynamic Response JSON File returned from Mock service

{
    &quot;id&quot;: &quot;7777&quot;,
    &quot;name&quot;: &quot;toothpaste&quot;,
    &quot;details&quot;: [
        {
            &quot;flavor&quot;: &quot;Mint 1&quot;,
            &quot;Size&quot;: &quot;10&quot;,
            &quot;Size_Type&quot;: &quot;ounce&quot;
        },
        {
            &quot;flavor&quot;: &quot;Mint 2&quot;,
            &quot;Size&quot;: &quot;10&quot;,
            &quot;Size_Type&quot;: &quot;ounce&quot;
        }
    ]
}
</code></pre></li>
</ol>
<h3>2. Logging utility</h3>
<p>Shifu exposes a logging utility which can be used to log data</p>
<pre><code class="language-js">shifu.log.debug('This is debug Message');
shifu.log.info('This is info Message');
shifu.log.error('This is error Message');
shifu.log.warn('This is warn Message');
shifu.log.setLogLevel('debug');
shifu.log.getLogLevel();
shifu.log.resetLogLevel();
// default level is INFO
</code></pre>
<h3>3. Responding with a specific variant in handlers (respondWithMockVariant)</h3>
<p>This function will respond with a variant on the main route handler. The <code>variant</code> passed in MUST be the variant on existing route.</p>
<pre><code class="language-js">shifu.util.respondWithMockVariant(this, 'variant', reply);
</code></pre>
<p>The <code>variant</code> passed in MUST be the variant on existing route.</p>
<pre><code class="language-js">shifu.route({
    id: 'respondWithVariant',
    label: 'Respond With Variant',
    path: '/respondWithVariant',
    variantLabel: 'Respond With Variant Main Route',
    handler: function (req, reply) {
        shifu.util.respondWithMockVariant(this, 'variant', reply); // make sure that the variant exist in the same route.
    }
})
.variant({
    id: 'variant',
    label: 'Respond With Variant Variant Route',
    handler: function (req, reply) {
        reply({'message': 'I am an example of respond_with_mock_variant instead of response of main route '});
    }
});
</code></pre>
<h3>4. GetUrlCount</h3>
<p>To get URL count for all Rest APIs mocked by mock server</p>
<pre><code class="language-js">Shifu API : shifu.getURLCount(&quot;default&quot;);
</code></pre>
<h3>5. ResetUrlCount</h3>
<p>To resets URL count to zero</p>
<pre><code class="language-js">Shifu API : shifu.resetURLCount(&quot;default&quot;);
</code></pre>
</div>
<div class="training-doc-nav-btn">
<a href="./Rest APIs"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
