---
title: Magellan usage
layout: training
permalink: documentation/Functional Testing/rWeb/JAVASCRIPT/Training Guide/Magellan/Magellan usage
level1: Functional Testing
level2: rWeb
level3: JAVASCRIPT
level4: Training Guide
course: Magellan
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Magellan usage">Magellan usage</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Configure test profiles">Configure test profiles</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<p><a href="https://github.com/TestArmada/magellan"><strong>Magellan</strong></a> is a massively parallel test runner. By distributing tests across available CPU cores, Magellan blazes through long test suites in a fraction of the time, aggregating results in one friendly report.</p>
<p>There are two ways to tell magellan how you want to scale your tests:</p>
<h3>Via Command Line Arguments</h3>
<p>All command line arguments of <strong>magellan</strong> and its components (executors, reporters and plugins) that are enabled can be listed out by running following command:</p>
<pre><code class="language-bash">./node_modules/.bin/magellan --help
</code></pre>
<p>E.g. Run tests with 30 workers, 5 retry attempts per failed test:</p>
<pre><code class="language-bash">./node_modules/.bin/magellan --max_workers 30 --max_test_attempts 5
</code></pre>
<h3>Via magellan.json File</h3>
<p>All command line arguments of <strong>magellan</strong> can be placed into <code>magellan.json</code>. You can copy the key value pair straightly into it.</p>
<p>For example,</p>
<pre><code class="language-bash">./node_modules/.bin/magellan --max_workers 30
</code></pre>
<p>Is equal to this in magellan.json file:</p>
<pre><code class="language-bash">{
  &quot;max_workers&quot;: 30
}
</code></pre>
<h3>Configuration Notes</h3>
<ul>
<li><p>If a configuration exists in both  <em>magellan.json</em>  and command line arguments, the one in  <strong>magellan.json</strong>  will take effect.</p></li>
<li><p><strong>Magellan</strong> searches <strong>magellan.json</strong> in your repo root by default. If you put it in a different folder, make sure to tell where it is by:</p></li>
</ul>
<pre><code class="language-bash">./node_modules/.bin/magellan --config ${PATH_TO_MAGELLAN.JSON}
</code></pre>
<h3>Quick Reference Guide for Command-Line Use</h3>
<ul>
<li>By default,  <strong>magellan</strong> will run your test suite the fastest way possible, in parallel</li>
<li>You can also run it serially (one at a time) by using <strong>--serial</strong> option</li>
<li>You can view detailed debug info in <em>--serial</em> mode, with <strong>--debug</strong> option</li>
<li>To control which tests to run, could use <strong>--tag</strong>, <strong>--tags</strong> option</li>
</ul>
<pre><code class="language-bash">#Specify one tag:
$ magellan --tag=smoke
#Specify multiple tags:
$ magellan --tags=smoke,web
</code></pre>
<ul>
<li>To limit the tests by a file path prefix, use the <strong>--group</strong> option</li>
<li>To run <strong>one specific test</strong>, use the <strong>--test</strong> flag with a path to the test file</li>
</ul>
</div>
<div class="training-doc-nav-btn">
<a href="./Configure test profiles"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
