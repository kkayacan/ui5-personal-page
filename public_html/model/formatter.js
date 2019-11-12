sap.ui.define([], function () {
	"use strict";

	return {

		dummyFormatter: function (sParam) {
			switch (sParam) {
			case "true":
				return true;
			default:
				return false;
			}
		}
	};
});