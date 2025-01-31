const MAX_FLOW = 319290;

// UI Navigation Functions
function showKgToPercentage() {
    document.getElementById('converter').classList.add('hidden');
    document.getElementById('kgToPercentage').classList.add('active');
    document.getElementById('percentageToKg').classList.remove('active');
}

function showPercentageToKg() {
    document.getElementById('converter').classList.add('hidden');
    document.getElementById('percentageToKg').classList.add('active');
    document.getElementById('kgToPercentage').classList.remove('active');
}

function goBack() {
    document.getElementById('kgToPercentage').classList.remove('active');
    document.getElementById('percentageToKg').classList.remove('active');
    document.getElementById('converter').classList.remove('hidden');
}

// Conversion Functions
function convertKgToPercentage() {
    const flow = parseFloat(document.getElementById('kgInput').value);
    if (isNaN(flow)) return;
    
    const percentage = ((flow / MAX_FLOW) * 100).toFixed(2);
    document.getElementById('kgResult').innerHTML = `
        <div style="color: var(--primary);">${flow} kg/hr =</div>
        <div style="font-size: 1.25rem; margin-top: 0.5rem;">${percentage}%</div>
    `;
}

function convertPercentageToKg() {
    const percent = parseFloat(document.getElementById('percentInput').value);
    if (isNaN(percent)) return;
    
    const gasflow = ((percent * MAX_FLOW) / 100).toFixed(2);
    document.getElementById('percentResult').innerHTML = `
        <div style="color: var(--primary);">${percent}% =</div>
        <div style="font-size: 1.25rem; margin-top: 0.5rem;">${gasflow} kg/hr</div>
    `;
}