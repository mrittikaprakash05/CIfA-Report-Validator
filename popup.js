document.getElementById('checkBtn').addEventListener('click', validateReport);

function validateReport() {
    const text = document.getElementById('reportInput').value;
    const resultsDiv = document.getElementById('results');
    
  
    resultsDiv.classList.remove('hidden');

    // 1. Check for OASIS ID 
    
    const oasisRegex = /[a-z]{2,}\d*-\d{4,}/i;
    updateStatus('oasisCheck', oasisRegex.test(text), "OASIS ID found", "Missing OASIS ID (Required for Grey Lit)");

    // 2. for UK National Grid Reference (NGR)
    
    const ngrRegex = /[A-Z]{2}\s*\d{2,5}\s*\d{2,5}/;
    updateStatus('ngrCheck', ngrRegex.test(text), "NGR Coordinate found", "Missing National Grid Reference (OSGB36)");

    // 3. Checks Non-Technical Summary
    
    const summaryRegex = /non[-\s]technical summary|executive summary/i;
    updateStatus('summaryCheck', summaryRegex.test(text), "Summary Section found", "Missing 'Non-technical Summary'");

    // 4. Methodology Check
    const methodRegex = /methodology|fieldwork methods|recording system/i;
    updateStatus('methodCheck', methodRegex.test(text), "Methodology found", "Missing Methodology section");

    // 5. Bibliography 
    const biblioRegex = /bibliography|references|works cited/i;
    updateStatus('biblioCheck', biblioRegex.test(text), "Bibliography found", "Missing Bibliography");

    // 6. for Word Count & Keyword density
    const words = text.trim().split(/\s+/).length;
    document.getElementById('wordCount').innerText = words;

    // Checking for specific Archaeology Keywords 
    const keywords = ['context', 'trench', 'stratigraphy', 'sherd', 'cut', 'fill', 'deposit', 'archive', 'museum'];
    let keyCount = 0;
    const lowerText = text.toLowerCase();
    keywords.forEach(k => {
        if (lowerText.includes(k)) keyCount++;
    });
    document.getElementById('keywordCount').innerText = keyCount;

  
    const feedbackBox = document.getElementById('feedback');
    if (words < 100) {
        feedbackBox.innerText = "Warning: Text seems too short to be a valid report.";
    } else if (keyCount < 2) {
        feedbackBox.innerText = "Warning: Low density of archaeological terminology.";
    } else {
        feedbackBox.innerText = "";
    }
}

function updateStatus(elementId, isValid, successMsg, errorMsg) {
    const el = document.getElementById(elementId);
    const icon = el.querySelector('.icon');
    
    if (isValid) {
        el.className = 'check-item success';
        icon.innerText = '✅';
        el.title = successMsg;
    } else {
        el.className = 'check-item error';
        icon.innerText = '❌';
        el.title = errorMsg; 
        
        
    }
}
