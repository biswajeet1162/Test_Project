$(function () {
	// Detect Publisher "Edit" view
	if (location.href.indexOf('JSPeditPageContent.do') > 0) {
		// Code here will run when viewing site in Edit View - needed when certain elements break Edit View
		// Example: $('.container-accolades, .container-tagline').remove();
	} else {
		// Code in this section will not run on Publisher edit view

		// Fix link targets
		var url=location.protocol+"//"+location.host,good=$("body").hasClass("fl-target-ignore"),docs=/\.(?:pdf|docx?|xlsx?|pptx?|xml)$/i,js=/^javascript:/i;good||$("a").each(function(f,c){var b=$(c),e=b.hasClass("fl-target-ignore"),d=c.href,a=b.attr("href");""===a||void 0===a||e||a.match(/^#/)||a.match(js)||b.attr("target",d.match(docs)||0!==d.indexOf(url)?"_blank":"_self")});
	}
});
