---
---

var faqsNav;

(function () {

  // Disable platform and language dropdowns
  $('#platform').prop('disabled', true);
  $('#language').prop('disabled', true);

  // Populate fleets
  faqsNav = {{ site.data.faqs-nav | jsonify }};
  for (category in faqsNav) {
    $('#fleet').append('<option value="' + category + '">' + category + '</option>');
  }

  updateOutput('select');

})();


$('#fleet').change(function () {

  // Get selected value
  var val = $(this).val();

  // Reset both platforms and languages when category changes
  $('#platform').html('<option value="select">Select Platform</option>');
  $('#language').html('<option value="select">Select Language</option>');

  // Update platforms based on current selection
  populatePlatforms(val);

  updateOutput(val);

});


$('#platform').change(function () {
  
  // Get selected value
  var val = $(this).val();

  // Get other unchanged selections
  var category = $('#fleet').val();

  // Reset languages when platform changes
  $('#language').html('<option value="select">Select Language</option>');

  // Update languages based on current selection
  populateLanguages(category, val);

  // Update output
  updateOutput(category, (val !== 'select') ? val : '');
  

});


$('#language').change(function () {
  
  // Get selected value
  var val = $(this).val();

  // Get other unchanged selections
  var category = $('#fleet').val();
  var platform = $('#platform').val();

  // Update output
  updateOutput(category, platform, (val !== 'select') ? val : '');

});


// Clear filters
$('#clear').click(function () {
  $('#fleet').val('select').trigger('change');;
})


function updateOutput(category, platform, language) {

  var faqs = {{ site.data.faqs | jsonify }};

  // Clear output
  $('.faq-output').html('');

  for (faq in faqs) {

    if (faqs[faq].level1 === category && faqs[faq].level2 === platform && faqs[faq].level3 === language) {
      appendOutput(faqs[faq]);
    }

    if (platform && !language) {

      if (faqs[faq].level1 === category && faqs[faq].level2 === platform) {
        appendOutput(faqs[faq]);
      }

    } else if (!platform && !language) {

      if (faqs[faq].level1 === category) {
        appendOutput(faqs[faq]);
      }

    }

  }

  // enable accordion toggling after output is updated
  enableAccordion();

  // Show back to top button if content size exceeds browser window size
  $('.back-to-top__img').css('display', ($('.container').height() > $(window).height()) ? 'block' : 'none');

  // Enable syntax-highlighting
  Prism.highlightAll();

}


function appendOutput(faq) {
  $('.faq-output').append('<h4 class="accordion-toggle">' + faq.question + '</h4>');
  $('.faq-output').append('<div class="accordion-content">' + faq.answer + '</div>');
  $('.faq-output').append('<hr class="faq-output__hr" />');
}


function populatePlatforms(category) {

  // Enable or disable platforms and languages dropdown
  $('#platform').prop('disabled', category === 'select');
  $('#language').prop('disabled', true);

  for (platform in faqsNav[category]) {

    $('#platform').append('<option value="' + platform + '">' + platform + '</option>');

    // If 1 platform present then autofill
    if (Object.keys(faqsNav[category]).length === 1) {
      $('#platform').val(platform);

      populateLanguages(category, platform);

    }

  }

}


function populateLanguages(category, platform) {

  // Enable or disable languages dropdown
  $('#language').prop('disabled', platform === 'select');

  for (language in faqsNav[category][platform]) {

    $('#language').append('<option value="' + language + '">' + language + '</option>');

    // If 1 language present then auto fill
    if (Object.keys(faqsNav[category][platform]).length === 1) {
      $('#language').val(language);
    }
  }

}


// Accordion script

function enableAccordion() {

  $('#accordion').find('.accordion-toggle').click(function () {

    //Expand or collapse this panel
    $(this).next().slideToggle('fast');

    // Toggle plus/minus icon on this panel
    if ($(this).css('background-image').indexOf('plus') !== -1) {
      addMinusHoverIcon(this);
      $(this)
        .mouseover(function () { addMinusHoverIcon(this); })
        .mouseout(function () { addMinusIcon(this); });
    } else {
      addPlusHoverIcon(this);
      $(this)
        .mouseover(function () { addPlusHoverIcon(this); })
        .mouseout(function () { addPlusIcon(this); });
    }

    //Hide the other panels
    $(".accordion-content").not($(this).next()).slideUp('fast');

    // Reset icon to plus on other panels
    addPlusIcon($('.accordion-toggle').not($(this)));
    $('.accordion-toggle').not($(this)).mouseover(function () {
      addPlusHoverIcon(this);
    }).mouseout(function () {
      addPlusIcon(this);
    });

  });

}


// Plus and Minus Icons

function addMinusIcon(faq) {
  $(faq).css('background-image', 'url(/images/faqs/minus-icon.png)');
  $(faq).css('background-image', '-webkit-image-set(url(/images/faqs/minus-icon.png) 1x, url(/images/faqs/minus-icon@2x.png) 2x, url(/images/faqs/minus-icon@3x.png) 3x)');
}

function addMinusHoverIcon(faq) {
  $(faq).css('background-image', 'url(/images/faqs/minus-icon-hover.png)');
  $(faq).css('background-image', '-webkit-image-set(url(/images/faqs/minus-icon-hover.png) 1x, url(/images/faqs/minus-icon-hover@2x.png) 2x, url(/images/faqs/minus-icon-hover@3x.png) 3x)');
}

function addPlusIcon(faq) {
  $(faq).css('background-image', 'url(/images/faqs/plus-icon.png)');
  $(faq).css('background-image', '-webkit-image-set(url(/images/faqs/plus-icon.png) 1x, url(/images/faqs/plus-icon@2x.png) 2x, url(/images/faqs/plus-icon@3x.png) 3x)');
}

function addPlusHoverIcon(faq) {
  $(faq).css('background-image', 'url(/images/faqs/plus-icon-hover.png)');
  $(faq).css('background-image', '-webkit-image-set(url(/images/faqs/plus-icon-hover.png) 1x, url(/images/faqs/plus-icon-hover@2x.png) 2x, url(/images/faqs/plus-icon-hover@3x.png) 3x)');
}


// Back to top hover
$('.back-to-top__img').mouseover(function () {
  $(this).prop('src', '/images/faqs/back-to-top-icon-hover.png');
  $(this).prop('srcset', '/images/faqs/back-to-top-icon-hover@2x.png 2x, /images/faqs/back-to-top-icon-hover@3x.png 3x');
}).mouseout(function () {
  $(this).prop('src', '/images/faqs/back-to-top-icon.png');
  $(this).prop('srcset', '/images/faqs/back-to-top-icon@2x.png 2x, /images/faqs/back-to-top-icon@3x.png 3x');
});

// Back to top action
$('.back-to-top__img').click(function (e) {
  e.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 'fast');
});
