---
layout: default
---

<div class="jumbotron">
	<div class="armada-at-scale">
		<span>{{site.data.global.bannerText}}</span>
	</div>
	{% if site.data.global.statistics == true %}
	<div class="metrics">
		<div class="metric-1">
			<h3 class="metric-value" id="stat1">1,234,567</h3>
			<p class="metric-description">{{site.data.statistics[0].text}}</p>
		</div>
		<div class="metric-2">
			<h3 class="metric-value" id="stat2">123,456</h3>
			<p class="metric-description">{{site.data.statistics[1].text}}</p>
		</div>
		<div class="metric-3">
			<h3 class="metric-value" id="stat3">12,345,678</h3>
			<p class="metric-description">{{site.data.statistics[2].text}}</p>
		</div>
		<div class="clear"></div>
	</div>
	{% endif %}
</div>

{% if site.data.global.announcement %}
<div class="announcement">
	<span class="announcement__text">{{site.data.global.announcement}}</span>
</div>
{% endif %}

<div class="inner-container carousel">
	{% if site.data.global.documentationAtLevel == 3 %}
	{% for prop in site.data.nav %}
	<div class="carousel__card-bg">
		<div class="carousel__card-fg">
			<img src="{{site.baseurl}}/{{site.data.index.documentationFolder}}/{{prop.title | replace: ' ', '%20'}}/images/placard.png"
				 srcset="{{site.baseurl}}/{{site.data.index.documentationFolder}}/{{prop.title | replace: ' ', '%20'}}/images/placard%402x.png 2x,
				 		 {{site.baseurl}}/{{site.data.index.documentationFolder}}/{{prop.title | replace: ' ', '%20'}}/images/placard%403x.png 3x"
				 onerror="this.src='{{site.baseurl}}/images/fleets/default-placard.png';
						  this.srcset='{{site.baseurl}}/images/fleets/default-placard%402x.png 2x, {{site.baseurl}}/images/default-placard%403x.png 3x'"
				 class="carousel__gear" />
		</div>
		<h3 class="carousel__title">{{prop.title}}</h3>
		{% if site.data.global.blurbs %}
		<p class="carousel__intro line-clamp">{% include {{prop.title | remove: " "}}.ext %}</p>
		{% endif %}
		{% for sublevel in prop.level2 %}
		<a href="{{site.baseurl}}/{{site.data.index.documentationFolder}}/{{prop.title}}/{{sublevel.title}}/Introduction"><button class="carousel__card-btn">{{sublevel.title}}</button></a>
		{% endfor %}
	</div>
	{% endfor %}
	{% else %}
	{% for prop in site.data.nav %}
	<div class="carousel__card-bg">
		<div class="carousel__card-fg">
			<img src="{{site.baseurl}}/{{site.data.index.documentationFolder}}/{{prop.title | replace: ' ', '%20'}}/images/placard.png"
				 srcset="{{site.baseurl}}/{{site.data.index.documentationFolder}}/{{prop.title | replace: ' ', '%20'}}/images/placard%402x.png 2x,
				 		 {{site.baseurl}}/{{site.data.index.documentationFolder}}/{{prop.title | replace: ' ', '%20'}}/images/placard%403x.png 3x"
				 onerror="this.src='{{site.baseurl}}/images/fleets/default-placard.png';
						  this.srcset='{{site.baseurl}}/images/fleets/default-placard%402x.png 2x, {{site.baseurl}}/images/default-placard%403x.png 3x'"
				 class="carousel__gear" />
		</div>
		<h3 class="carousel__title">{{prop.title}}</h3>
		{% if site.data.global.blurbs %}
		<p class="carousel__intro line-clamp">{% include {{prop.title | remove: " "}}.ext %}</p>
		{% endif %}
		<a href="{{prop.title}}/"><button class="carousel__card-btn">{{site.data.global.nonDocButtonText}}</button></a>
	</div>
	{% endfor %}
	{% endif %}
</div>

{% if site.data.global.features == true %}
<div class="inner-container">
	{% for feature in site.data.features %}
	<div class="col-2 feature">
		<img src="{{site.baseurl}}{{feature.imgName}}.png"
		     srcset="{{site.baseurl}}{{feature.imgName}}%402x.png 2x,
		             {{site.baseurl}}{{feature.imgName}}%403x.png 3x"
		     class="feature__img" alt="Feature icon">
		<div class="feature__text">
			<p class="feature__title">{{feature.title}}</p>
			<p class="feature__description">{{feature.description}}</p>
		</div>
	</div>
	{% endfor %}
	<div class="clear"></div>
</div>
{% endif %}

<script src="{{site.baseurl}}/js/jquery-3.3.1.min.js"></script>
<script src="{{site.baseurl}}/js/slick.js"></script>
<script type="text/javascript">

$('.carousel').slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 1279,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
});

</script>


{% if site.data.global.statistics == true %}
<script type="text/javascript">

	{% for stat in site.data.statistics %}
		{% if stat.static == true %}
		document.getElementById('{{stat.title}}').innerHTML = Number.parseInt({{stat.value}}).toLocaleString();
		{% else %}
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState === 4) {
				if (this.status === 200) {
					var data = JSON.parse(this.responseText);
					reqSuccess(data, '{{forloop.index}}');
				} else {
					reqFailed(this, '{{forloop.index}}');
				}
			}
		};
		xhttp.open("GET", "{{stat.value}}");
		xhttp.send();
		{% endif %}
	{% endfor %}

	function reqSuccess (data, index) {
		if (data !== undefined) {
			document.getElementById('stat' + index).innerHTML = Number.parseInt(data).toLocaleString();
			localStorage.setItem('stat' + index, Number.parseInt(data).toLocaleString());
		}
	}

	function reqFailed (req, index) {
		if (localStorage) {
			if (localStorage['stat' + index] !== undefined) {
				console.log('Data coming from localStorage');
				var statValue = localStorage.getItem('stat' + index);
				document.getElementById('stat' + index).innerHTML = statValue;
			} else {
				console.log('There is no local data stored for stat' + index);
				document.getElementById('stat' + index).innerHTML = req.statusText;
			}
		} else {
			console.log('Your browser does not support local storage');
			document.getElementById('stat' + index).innerHTML = req.statusText;
		}
	}

</script>
{% endif %}
