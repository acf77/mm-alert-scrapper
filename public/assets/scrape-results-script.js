/* INPUTS */
const engNameInput = document.getElementById('eng-name');
const alertIdInput = document.getElementById('alert-id');
const merNameInput = document.getElementById('mer-name');
const merIdInput = document.getElementById('mer-id');
const csmNameInput = document.getElementById('csm-name');
const issueDescInput = document.getElementById('issue-desc');
const impactInput = document.getElementById('impact');
const howResolveInput = document.getElementById('how-resolve');

/* SPANS - updating mid-text */
const idSpan = document.getElementById('span-id');
const merchantSpan = document.getElementById('span-mer');
const csmNameSpan = document.getElementById('span-csm-name');
const engNameSpan = document.getElementById('span-eng-name');
const merNameSpan = document.getElementById('span-mer-name');
const merIdSpan = document.getElementById('span-mer-id');
const issueDescSpan = document.getElementById("span-issue-desc");
const impactSpan = document.getElementById("span-impact");
const howResolveSpan = document.getElementById("span-how-resolve");

/* OUTPUTS */
const logId = () => idSpan.innerText = alertIdInput.value;
const logMerchant = () => merchantSpan.innerText = merNameInput.value;
const logCsm = () => csmNameSpan.innerText = csmNameInput.value;
const logEng = () => engNameSpan.innerText = engNameInput.value;
const logMerName = () => merNameSpan.innerText = merNameInput.value;
const logMerId = () => merIdSpan.innerText = merIdInput.value;
const logIssueDesc = () => issueDescSpan.innerText = issueDescInput.value;
const logImpact = () => impactSpan.innerText = impactInput.value;
const logResolve = () => howResolveSpan.innerText = howResolveInput.value;

alertIdInput.addEventListener('focus', logId);
merNameInput.addEventListener('focus', logMerchant);
csmNameInput.addEventListener('keyup', logCsm);
engNameInput.addEventListener('keyup', logEng);
merNameInput.addEventListener('focus', logMerName);
merIdInput.addEventListener('focus', logMerId);
issueDescInput.addEventListener('keyup', logIssueDesc);
impactInput.addEventListener('keyup', logImpact);
howResolveInput.addEventListener('keyup', logResolve);


// Certificate expiration

// Get input
const expMerNameInput = document.getElementById('exp-mer-name');
const expEngNameInput = document.getElementById('exp-eng-name');
const expMerIdInput = document.getElementById('exp-mer-id');
const expCsmInput = document.getElementById('exp-csm-name');
const expDateInput = document.getElementById('exp-date');

// Get span
const expEngNameSpan = document.getElementById('span-exp-eng-name');
const expMerNameSpan = document.getElementById('span-exp-mer-name');
const expMerIdSpan = document.getElementById('span-exp-mer-id');
const expCsmSpan = document.getElementById('span-exp-csm-name');
const expDateSpan = document.getElementById('span-exp-date');

// Log value to span
const logExpEng = () => expEngNameSpan.innerText = expEngNameInput.value;
expEngNameInput.addEventListener('keyup', logExpEng);
const logExpMerName = () => expMerNameSpan.innerText = expMerNameInput.value;
expMerNameInput.addEventListener('focus', logExpMerName);
const logExpMerId= () => expMerIdSpan.innerText = expMerIdInput.value;
expMerIdInput.addEventListener('focus', logExpMerId);
const logExpCsm= () => expCsmSpan.innerText = expCsmInput.value;
expCsmInput.addEventListener('keyup', logExpCsm);
const logExpDate= () => expDateSpan.innerText = expDateInput.value;
expDateInput.addEventListener('change', logExpDate);

