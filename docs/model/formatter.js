sap.ui.define([], function () {
	"use strict";

	return {
		getI18nValue: function (sKey) {
			if (sKey !== undefined) {
				return this.getView().getModel("i18n").getResourceBundle().getText(sKey);
			} else {
				return "";
			}
		},
		getVisible: function (sRequested, sCurrent) {
			if (sRequested === sCurrent) {
				return true;
			}
			return false;
		}
	};
});