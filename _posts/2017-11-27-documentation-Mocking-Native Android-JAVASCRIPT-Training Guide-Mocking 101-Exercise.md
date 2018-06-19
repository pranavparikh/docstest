---
title: Exercise
layout: training
permalink: documentation/Mocking/Native Android/JAVASCRIPT/Training Guide/Mocking 101/Exercise
level1: Mocking
level2: Native Android
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 101
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Introduction">Introduction</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Setting and Installing Mock Server">Setting and Installing Mock Server</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Adding Routes for Mocking">Adding Routes for Mocking</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Introduction to Mocking UI">Introduction to Mocking UI</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./Introduction to Variants">Introduction to Variants</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./Introduction to Variants"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>1. Create mock server with the following</h3>
<ol>
<li>Add a <code>GET</code> route <code>/get/message</code> with default variant returning <code>Hello</code>
<ul>
<li>Add a variant that returns &quot;Hello World&quot;</li>
<li>Add another variant that returns &quot;Hello Universe&quot;</li>
</ul></li>
<li>Add another <code>GET</code> route <code>/get/numbers</code> with default variant returning incremental values starting from 1
<ul>
<li>Add a variant that returns even number starting from 2 in increments</li>
<li>Add another variant to return odd numbers starting from 1 in increments</li>
</ul></li>
</ol>
<h3>2. Start mock server</h3>
<ol>
<li>Make a REST call to <code>/get/message</code> and verify default variant returns 'Hello'
<ul>
<li>Switch back and forth to other two variants and verify that you see 'Hello World' and 'Hello Universe' message respectively.</li>
</ul></li>
<li>Make a REST call to <code>/get/numbers</code> and verify default variant returns numbers in incremental order
<ul>
<li>Switch back and forth to other two variants and verify that you see even and odd numbers in incremental order respectively.</li>
</ul></li>
</ol>
</div>
<div class="training-doc-nav-btn">
</div>
