/* INPUTS */
const engNameInput = document.getElementById("eng-name");
const alertIdInput = document.getElementById("alert-id");
const merNameInput = document.getElementById("mer-name");
const merIdInput = document.getElementById("mer-id");
const csmNameInput = document.getElementById("csm-name");
let issueDescInput = document.getElementById("issue-desc");
let impactInput = document.getElementById("impact");
let howResolveInput = document.getElementById("how-resolve");

/* SPANS - updating mid-text */
const idSpan = document.getElementById("span-id");
const merchantSpan = document.getElementById("span-mer");
const csmNameSpan = document.getElementById("span-csm-name");
const engNameSpan = document.getElementById("span-eng-name");
const merNameSpan = document.getElementById("span-mer-name");
const merIdSpan = document.getElementById("span-mer-id");
const issueDescSpan = document.getElementById("span-issue-desc");
const impactSpan = document.getElementById("span-impact");
const howResolveSpan = document.getElementById("span-how-resolve");

/* OUTPUTS */
const logId = () => (idSpan.innerText = alertIdInput.value);
const logMerchant = () => (merchantSpan.innerText = merNameInput.value);
alertIdInput.addEventListener("focus", logId);
merNameInput.addEventListener("focus", logMerchant);

const logCsm = () => (csmNameSpan.innerText = csmNameInput.value);
csmNameInput.addEventListener("keyup", logCsm);

const logEng = () => (engNameSpan.innerText = engNameInput.value);
engNameInput.addEventListener("keyup", logEng);

const logMerName = () => (merNameSpan.innerText = merNameInput.value);
merNameInput.addEventListener("focus", logMerName);

const logMerId = () => (merIdSpan.innerText = merIdInput.value);
merIdInput.addEventListener("focus", logMerId);

const logIssueDesc = () => (issueDescSpan.innerText = issueDescInput.value);
issueDescInput.addEventListener("keyup", logIssueDesc);

const logImpact = () => (impactSpan.innerText = impactInput.value);
impactInput.addEventListener("keyup", logImpact);

const logResolve = () => (howResolveSpan.innerText = howResolveInput.value);
howResolveInput.addEventListener("keyup", logResolve);

// Certificate expiration

// Get input
const expMerNameInput = document.getElementById("exp-mer-name");
const expEngNameInput = document.getElementById("exp-eng-name");
const expMerIdInput = document.getElementById("exp-mer-id");
const expCsmInput = document.getElementById("exp-csm-name");
const expDateInput = document.getElementById("exp-date");

// Get span
const expEngNameSpan = document.getElementById("span-exp-eng-name");
const expMerNameSpan = document.getElementById("span-exp-mer-name");
const expMerIdSpan = document.getElementById("span-exp-mer-id");
const expCsmSpan = document.getElementById("span-exp-csm-name");
const expDateSpan = document.getElementById("span-exp-date");

// Log value to span
const logExpEng = () => (expEngNameSpan.innerText = expEngNameInput.value);
expEngNameInput.addEventListener("keyup", logExpEng);
const logExpMerName = () => (expMerNameSpan.innerText = expMerNameInput.value);
expMerNameInput.addEventListener("focus", logExpMerName);
const logExpMerId = () => (expMerIdSpan.innerText = expMerIdInput.value);
expMerIdInput.addEventListener("focus", logExpMerId);
const logExpCsm = () => (expCsmSpan.innerText = expCsmInput.value);
expCsmInput.addEventListener("keyup", logExpCsm);
const logExpDate = () => (expDateSpan.innerText = expDateInput.value);
expDateInput.addEventListener("change", logExpDate);

const copyPopUp = document.querySelector(".copy-popup");

let alertType, apiType, solutionType;

const selectAlertType = sel => alertType = sel.options[sel.selectedIndex].text;
const selectApiType = sel => apiType = sel.options[sel.selectedIndex].text;
const selectImpactType = sel => solutionType = sel.options[sel.selectedIndex].text;
const selectResolutionType = sel => solutionType = sel.options[sel.selectedIndex].text;

function applyDescChanges() {
  issueDescInput.innerText = `There's a ${alertType} on the ${apiType} API`;
  logIssueDesc();
}

function applyImpactChanges() {
  impactInput.innerText = `The merchant is not receiving payments since`;
  logImpact();
}

function applyResolutionChanges() {
  howResolveInput.innerText = `Verify if the merchant is facing ${solutionType.toLowerCase()} issues`;
  logResolve();
}


/* WEBHOOK FAILURE */

/* INPUTS */
const engNameInputWeb = document.getElementById("web-eng-name");
const merNameInputWeb = document.getElementById("web-mer-name");
const merIdInputWeb = document.getElementById("web-mer-id");
const csmNameInputWeb = document.getElementById("web-csm-name");

/* SPANS - updating mid-text */
const engNameSpanWeb = document.getElementById("span-web-eng-name");
const merNameSpanWeb = document.getElementById("span-web-mer-name");
const subMerNameSpanWeb = document.getElementById("sub-span-web-mer-name");
const idSpanWeb = document.getElementById("span-web-mer-id");
const csmNameSpanWeb = document.getElementById("span-web-csm-name");

/* OUTPUTS */
const logIdWeb = () => idSpanWeb.innerText = merIdInputWeb.value;

const logMerchantWeb = () => {
  subMerNameSpanWeb.innerText = merNameInputWeb.value;
  merNameSpanWeb.innerText = merNameInputWeb.value;
};

merIdInputWeb.addEventListener("focus", logIdWeb);
merNameInputWeb.addEventListener("focus", logMerchantWeb);

const logCsmWeb = () => (csmNameSpanWeb.innerText = csmNameInputWeb.value);
csmNameInputWeb.addEventListener("keyup", logCsmWeb);

const logEngWeb = () => (engNameSpanWeb.innerText = engNameInputWeb.value);
engNameInputWeb.addEventListener("keyup", logEngWeb);


/* Copy email icon */
function copyText(elemId) {
  let r = document.createRange();
  r.selectNode(document.getElementById(elemId));
  window.getSelection().removeAllRanges();
  window.getSelection().addRange(r);
  document.execCommand("copy");
  window.getSelection().removeAllRanges();
  
  setTimeout(() => {
    copyPopUp.style.display = "none";
  }, 1500);
  setTimeout(() => {
    copyPopUp.style.display = "unset";
    document.getElementById(elemId).appendChild(copyPopUp);
  }, 100);
}



// function copyText(elemId) {
//   const textFromPage = document.getElementById(elemId);
//   navigator.clipboard.writeText(textFromPage.innerText);

//   setTimeout(() => {
//     copyPopUp.style.display = "none";
//   }, 1500);
//   setTimeout(() => {
//     copyPopUp.style.display = "unset";
//     document.getElementById(elemId).appendChild(copyPopUp);
//   }, 100);
// }