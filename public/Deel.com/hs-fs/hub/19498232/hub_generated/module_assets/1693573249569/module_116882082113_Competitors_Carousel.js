  var module_116882082113 = (function() {
    var __hs_messages = {};
    i18n_getmessage = function() {
      return hs_i18n_getMessage(__hs_messages, hsVars['language'], arguments); 
    };
    i18n_getlanguage = function() {
      return hsVars['language']; 
    };
{% for item in module.tabbs_repeator %}
	{% inline_rich_text field="left_content" value="" %}
	{% inline_text field="company_name" value="" %}
	{% inline_text field="compititor_name" value="" %}
	{% for item2 in item.comparision_repeator %}
		{% inline_text field="comparision_title" value="" %}
		
		{% inline_text field="deel_text" value="" %}
		{% inline_text field="compititior_text" value="" %}
		{% if item2.deel_image.src %}
			{% set sizeAttrs = 'width="" height=""' %}
			{% if item2.deel_image.size_type == 'auto' %}
				{% set sizeAttrs = 'width="" height="" style="max-width: 100%; height: auto;"' %}
			{% elif item2.deel_image.size_type == 'auto_custom_max' %}
				{% set sizeAttrs = 'width="" height="" style="max-width: 100%; height: auto;"' %}
			{% endif %}
			 {% set loadingAttr = item2.deel_image.loading != 'disabled' ? 'loading=""' : '' %}
			<img src="" alt=""  >
		{% endif %}
		{% if item2.compititor_image.src %}
			{% set sizeAttrs = 'width="" height=""' %}
			{% if item2.compititor_image.size_type == 'auto' %}
				{% set sizeAttrs = 'width="" height="" style="max-width: 100%; height: auto;"' %}
			{% elif item2.compititor_image.size_type == 'auto_custom_max' %}
				{% set sizeAttrs = 'width="" height="" style="max-width: 100%; height: auto;"' %}
			{% endif %}
			 {% set loadingAttr = item2.compititor_image.loading != 'disabled' ? 'loading=""' : '' %}
			<img src="" alt=""  >
		{% endif %}
	{% endfor %}
	{% if item.right_image.src %}
		{% set sizeAttrs = 'width="" height=""' %}
		{% if item.right_image.size_type == 'auto' %}
			{% set sizeAttrs = 'width="" height="" style="max-width: 100%; height: auto;"' %}
		{% elif item.right_image.size_type == 'auto_custom_max' %}
			{% set sizeAttrs = 'width="" height="" style="max-width: 100%; height: auto;"' %}
		{% endif %}
		 {% set loadingAttr = item.right_image.loading != 'disabled' ? 'loading=""' : '' %}
		<img src="" alt=""  >
	{% endif %}
{% endfor %}
  })();
