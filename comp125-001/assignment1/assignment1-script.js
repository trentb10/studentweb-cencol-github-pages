// global vars
var age = document.getElementById("age");
var gender = "female";
var activityLevel = 1.4;
var bmr; var tee;
var formula = document.getElementById("formula").selectedIndex

var unitsIndex = document.getElementById("units").selectedIndex;
/* metric units */
var heightcm = document.getElementById("heightcm");
var weightkg = document.getElementById("weightkg");
/* imperial units */
var heightft = document.getElementById("heightft");
var heightin = document.getElementById("heightin");
var weightlb = document.getElementById("weightlb");

// listeners

document.getElementById("calculate").addEventListener("click", calculateBmr);
/* customization options */
document.getElementById("formula").addEventListener("change", changeFormula);
document.getElementById("units").addEventListener("change", changeUnit);
/* set gender */
document.getElementById("genderM").addEventListener("click", setGenderMale);
document.getElementById("genderF").addEventListener("click", setGenderFemale);
/* set activity level */
document.getElementById("activityLevelLow").addEventListener("click", setActivityLevelLow);
document.getElementById("activityLevelMed").addEventListener("click", setActivityLevelMed);
document.getElementById("activityLevelHigh").addEventListener("click", setActivityLevelHigh);

// functions

function changeUnit() {
	unitsIndex = document.getElementById("units").selectedIndex;
	var metric = document.getElementById("metric");
	var imperial = document.getElementById("imperial");

	if (unitsIndex === 0) { /* metric */
		metric.style.display = "inline";
		imperial.style.display = "none";
	} else if (unitsIndex === 1) { /* imperial */
		metric.style.display = "none";
		imperial.style.display = "inline";
	}

	/* reset all fields regardless of choice */

	heightcm.value = ""; weightkg.value = "";
	heightft.value = ""; heightin.value = ""; weightlb.value = "";
}

function changeFormula() { formula = document.getElementById("formula").selectedIndex; }

function setGenderMale() { gender = "male"; }

function setGenderFemale() { gender = "female"; }

function setActivityLevelLow() { activityLevel = 1.4; }

function setActivityLevelMed() { activityLevel = 1.7; }

function setActivityLevelHigh() { activityLevel = 2; }

function setDefaultValues() {
	if (unitsIndex === 0) {
		if (heightcm.value == "") {
			heightcm.value = "0";
		}
		if (weightkg.value == "") {
			weightkg.value = "0";
		}
	} else if (unitsIndex === 1) {
		if (heightin.value == "") {
			heightin.value = "0";
		}
		if (heightft.value == "") {
			heightft.value = "0";
		}
		if (weightlb.value == "") {
			weightlb.value = "0";
		}
	}

	if (age.value == "") {
		age.value = "0";
	}
}

function calculateBmr() {
	window.scrollTo(0, 740);
	setDefaultValues(); /* if user didn't enter values to input boxes for some reason, default unfilled values to 0 */

	var heightInchTotal = (Number(heightft.value) * 12) + Number(heightin.value);

	switch (formula) {
		case 0:
			if (unitsIndex === 0) {
				if (gender == "male") {
					bmr = 66.47 + (13.75 * weightkg.value) + (5.003 * heightcm.value) - (6.755 * age.value);
				} else if (gender == "female") {
					bmr = 655.1 + (9.563 * weightkg.value) + (1.85 * heightcm.value) - (4.676 * age.value);
				}
			} else if (unitsIndex === 1) {
				if (gender == "male") {
					bmr = 66.47 + (6.24 * weightlb.value) + (12.7 * heightInchTotal) - (6.755 * age.value);
				} else if (gender == "female") {
					bmr = 655.1 + (4.35 * weightlb.value) + (4.7 * heightInchTotal) - (4.7 * age.value);
				}
			}
			break;
		case 1:
			if (unitsIndex === 0) {
				if (gender == "male") {
					bmr = (10 * weightkg.value) + (6.25 * heightcm.value) - (5 * age.value) + 5;
				} else if (gender == "female") {
					bmr = (10 * weightkg.value) + (6.25 * heightcm.value) - (5 * age.value) - 161;
				}
			} else if (unitsIndex === 1) {
				if (gender == "male") {
					bmr = (4.536 * weightlb.value) + (15.88 * heightInchTotal) - (5 * age.value) + 5;
				} else if (gender == "female") {
					bmr = (4.536 * weightlb.value) + (15.88 * heightInchTotal) - (5 * age.value) - 161;
				}
			}
	}

	tee = bmr * activityLevel;
	
	document.getElementById("bmr").textContent = bmr.toFixed(3);
	document.getElementById("tee").textContent = tee.toFixed(3);
}