---
title: Page Object properties
layout: training
permalink: documentation/Functional Testing/rWeb/JAVASCRIPT/Training Guide/Tests Framework/Page Object properties
level1: Functional Testing
level2: rWeb
level3: JAVASCRIPT
level4: Training Guide
course: Tests Framework
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/checked.png" srcset="{{site.baseurl}}/images/training/checked%402x.png 2x, {{site.baseurl}}/images/training/checked%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-completed" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-completed" href="./About the tests">About the tests</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Page Object properties">Page Object properties</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
<a href="./About the tests"><img src="{{site.baseurl}}/images/training/btn-left.png" srcset="{{site.baseurl}}/images/training/btn-left%402x.png 2x, {{site.baseurl}}/images/training/btn-left%403x.png 3x" /></a>
</div>
<div class="training-content markdown">
<h3>Page Object properties</h3>
<ul>
<li>We have <strong><em>pages</em></strong>, <strong><em>elements</em></strong>, <strong><em>sections</em></strong> and <strong><em>commands</em></strong> properties under <strong>./lib</strong> directory. They are the page object properties required by <strong><em>nightwatch.js</em></strong>. For more information on how to define them please refer <a href="http://nightwatchjs.org/guide#using-page-objects">this</a>.</li>
<li><strong>page</strong> is the highest level page object property, defined base on one particular page.</li>
<li>One <strong>page</strong> can have multiple <strong>sections</strong>.</li>
<li>It is useful to define sections of a page. <strong>Sections</strong> do two things:
<ol>
<li>Provide a level of namespacing under the page</li>
<li>Provide element-level nesting so that any element defined within a section is a descendant of its parent section in the DOM</li>
</ol></li>
<li><strong>elements</strong> are the places that your tests will interact with through commands and assertions on each page. This is made simple using the <strong>elements</strong> property so that all your elements are defined in a single place.</li>
<li>You can add commands to your page object using the <strong>commands</strong> property. This is a useful way to encapsulate logic about the page that would otherwise live in a test, or multiple tests.</li>
<li><strong>command</strong> will be called in the context of the page or section where it is defined.</li>
</ul>
</div>
<div class="training-doc-nav-btn">
</div>
