sap.ui.define([
	"sap/ui/core/UIComponent"
], function (UIComponent) {
	"use strict";

	return UIComponent.extend("com.keremkayacan.base.Component", {

		metadata: {
			manifest: "json"
		},

		init: function () {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			document.title = this.getModel("i18n").getResourceBundle().getText("appTitle");
		}

	});

});