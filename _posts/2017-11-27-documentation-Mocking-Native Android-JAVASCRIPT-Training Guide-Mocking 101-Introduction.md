---
title: Introduction
layout: training
permalink: documentation/Mocking/Native Android/JAVASCRIPT/Training Guide/Mocking 101/Introduction
level1: Mocking
level2: Native Android
level3: JAVASCRIPT
level4: Training Guide
course: Mocking 101
---
<div class="sidebar">
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/actived.png" srcset="{{site.baseurl}}/images/training/actived%402x.png 2x, {{site.baseurl}}/images/training/actived%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-current" href="./Introduction">Introduction</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Setting and Installing Mock Server">Setting and Installing Mock Server</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Adding Routes for Mocking">Adding Routes for Mocking</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Introduction to Mocking UI">Introduction to Mocking UI</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /><hr class="training-doc-link-left__hr training-doc-link-left__hr-pending" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Introduction to Variants">Introduction to Variants</a></p>
</div>
<div class="training-doc-link">
<div class ="training-doc-link-left">
<img class="training-doc-link-left__img" src="{{site.baseurl}}/images/training/unread.png" srcset="{{site.baseurl}}/images/training/unread%402x.png 2x, {{site.baseurl}}/images/training/unread%403x.png 3x" /></div>
<p class="training-doc-link__text">
<a class="training-doc-link__text-pending" href="./Exercise">Exercise</a></p>
</div>
</div>
<div class="training-doc-nav-btn">
</div>
<div class="training-content markdown">
<h3>1. What is Shifu?</h3>
<p>We provide a mocking solution which can be leveraged to quickly stub the REST API responses that are used by your application during development or testing. The application points to the mock service host address instead of the live service, pre-recorded responses are then returned for various endpoints from the mock service. Since there is minimal logic when writing mock service, maintaining and development cost for mock service is minimal. Some of the major development pain-points addressed by the mocking solution are:</p>
<ul>
<li>Unstable services</li>
<li>Inconsistent Data</li>
<li>Test against negative or unreal scenarios</li>
</ul>
<h3>2. Architectural Explanation</h3>
<p><img src="../../../../images/mock_service_design.png" alt="mock_service_design"></p>
<h3>3. High Level Key Features</h3>
<ul>
<li><strong>UI Interface:</strong> Mock service UI for manual testing/debugging.</li>
<li><strong>Test Reuse:</strong> Execute same test cases against mock or live service.</li>
<li><strong>Drop-And-Respond:</strong> Respond with a mocked data file based on the url route path automatically by dropping mocked data file in folder mapping to url path.</li>
<li><strong>Response Reuse:</strong> Ability to use same json response file and change data dynamically for mocked response for various variants.</li>
<li><strong>Test De-coupling:</strong> No coupling with test cases - Test cases are independent of mock implementation except that setting the desired response for the mock service (which has no impact if the test case is run against a live service).</li>
<li><strong>Common Utilities:</strong> Common utility methods are provided as part of this solution which allows quicker test development.</li>
<li><strong>HTTPS Support:</strong> HTTPS support for all the urls.</li>
<li><strong>Magellan/Nightwatch integration:</strong> Ability to use mocking service with Magellan tests.</li>
<li><strong>Parallel sessions:</strong> Support for single instance mock server for parallel processes</li>
<li><strong>Swagger integration:</strong> Automatic mock creator for web-services with swagger definition.</li>
<li><strong>Server states:</strong> Ability to mock server state.</li>
</ul>
<h3>4. Mock Terminology</h3>
<ul>
<li>Routes</li>
<li>Variants</li>
<li>Handler</li>
<li>SetMockId</li>
<li>Admin UI</li>
<li>RespondWithFile</li>
</ul>
</div>
<div class="training-doc-nav-btn">
<a href="./Setting and Installing Mock Server"><img src="{{site.baseurl}}/images/training/btn-right.png" srcset="{{site.baseurl}}/images/training/btn-right%402x.png 2x, {{site.baseurl}}/images/training/btn-right%403x.png 3x" /></a>
</div>
