---
title: Configure test profiles
layout: training
permalink: documentation/Functional Testing/rWeb/JAVASCRIPT/Training Guide/Magellan/Configure test profiles
level1: Functional Testing
level2: rWeb
level3: JAVASCRIPT
level4: Training Guide
course: Magellan
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Magellan usage">Magellan usage</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Configure test profiles">Configure test profiles</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Magellan usage"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>Configure test profiles</h3>
<p>There are two ways to configure test profiles</p>
<h4>Via <strong><em>--profile</em></strong> command line argument</h4>
<ul>
<li><p><strong>Magellan</strong> can retrieve test profile information from an URL (to your hosted test profile).</p></li>
<li><p>The hosted test profile file needs to follow the format of:</p></li>
</ul>
<pre><code class="language-bash">{
  &quot;profiles&quot;: {
    &quot;microsoftedge&quot;: [{
      &quot;browser&quot;: &quot;microsoftedge_14_Windows_10_Desktop&quot;,
      &quot;resolution&quot;: &quot;1280x1024&quot;,
      &quot;executor&quot;: &quot;sauce&quot;
    }],
    &quot;tier-one-browsers&quot;: [{
       &quot;browser&quot;: &quot;microsoftedge_14_Windows_10_Desktop&quot;,
       &quot;resolution&quot;: &quot;1280x1024&quot;,
       &quot;executor&quot;: &quot;sauce&quot;
      },
      {
       &quot;browser&quot;: &quot;chrome_latest_Windows_10_Desktop&quot;,
       &quot;resolution&quot;: &quot;1280x1024&quot;,
       &quot;executor&quot;: &quot;sauce&quot;
      }
    ]
  }
}
</code></pre>
<ul>
<li>Magellan can read and resolve the hosted profile by the following command:</li>
</ul>
<pre><code class="language-bash">./node_modules/.bin/magellan --profile http://some.host#microsoftedge
</code></pre>
<ul>
<li>You can add as many test profiles as your need in the hosted file. Magellan is able to read more test profiles via:</li>
</ul>
<pre><code class="language-bash">./node_modules/.bin/magellan --profile http://some.host#microsoftedge,firefox57
</code></pre>
<ul>
<li>Or put multiple test profiles into one collection, such as <strong>tier-one-browsers</strong> in the above sample. To call it:</li>
</ul>
<pre><code class="language-bash">./node_modules/.bin/magellan --profile http://some.host#tier-one-browsers
</code></pre>
<h4>Via <em>magellan.json</em> file</h4>
<ul>
<li><strong>Magellan.json</strong> file is using the same test profile format as the hosted test profile file.</li>
<li>To use it:</li>
</ul>
<pre><code class="language-bash">./node_modules/.bin/magellan --profile tier-one-browsers
</code></pre>
</div>
<div class="training-doc-nav-btn">
</div>
