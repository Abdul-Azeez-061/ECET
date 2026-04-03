// Security
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')) e.preventDefault();
});
 
const sessionDataText = localStorage.getItem('ecet_current_session');
if (!sessionDataText) { window.location.href = 'index.html'; }
 
const sessionData = JSON.parse(sessionDataText);
const { score, total, subject, shuffledQuestions, userAnswers } = sessionData;
const pct = Math.round((score / total) * 100);
 
// ── Score display ─────────────────────────────────────────
document.getElementById('score-text').textContent = `${score} / ${total}`;
document.getElementById('subject-name').textContent = subject || 'ECET Mock Test';
 
const badge = document.getElementById('score-badge');
if (pct >= 75) {
    badge.innerHTML = `<span class="score-badge great">Excellent — ${pct}%</span>`;
} else if (pct >= 50) {
    badge.innerHTML = `<span class="score-badge good">Good — ${pct}%</span>`;
} else {
    badge.innerHTML = `<span class="score-badge retry">Keep Practicing — ${pct}%</span>`;
}
 
// ── Save to leaderboard ───────────────────────────────────
document.getElementById('save-btn').addEventListener('click', () => {
    const name = document.getElementById('user-name').value.trim();
    if (!name) { alert('Please enter your name to proceed!'); return; }
 
    const entry = {
        id: Date.now(), name, score, total,
        subject: subject || 'Unknown',
        subjectKey: sessionData.subjectKey || 'ds',
        userAnswers, shuffledQuestions,
        date: new Date().toISOString()
    };
 
    let leaderboard = JSON.parse(localStorage.getItem('ecet_leaderboard') || '[]');
    leaderboard.push(entry);
    localStorage.setItem('ecet_leaderboard', JSON.stringify(leaderboard));
    localStorage.removeItem('ecet_current_session');
    window.location.href = 'leaderboard.html';
});
 
// ── Answer Key ────────────────────────────────────────────
let activeTab = 'all';
 
// Summary pills
const correct  = shuffledQuestions.filter(q => userAnswers[q.id] === q.answer).length;
const wrong    = shuffledQuestions.filter(q => userAnswers[q.id] !== q.answer && userAnswers[q.id] !== null && userAnswers[q.id] !== undefined).length;
const skipped  = shuffledQuestions.filter(q => userAnswers[q.id] === null || userAnswers[q.id] === undefined).length;
 
document.getElementById('answer-key-summary').innerHTML = `
    <span style="background:#dcfce7;color:#16a34a;border:1px solid #86efac;padding:.3rem .85rem;border-radius:100px;font-size:.82rem;font-weight:600;">✓ ${correct} Correct</span>
    <span style="background:#fee2e2;color:#dc2626;border:1px solid #fca5a5;padding:.3rem .85rem;border-radius:100px;font-size:.82rem;font-weight:600;">✗ ${wrong} Wrong</span>
    <span style="background:var(--gray-100);color:var(--gray-500);border:1px solid var(--gray-200);padding:.3rem .85rem;border-radius:100px;font-size:.82rem;font-weight:600;">— ${skipped} Skipped</span>
`;
 
function renderAnswerKey(tab) {
    const container = document.getElementById('answer-key-content');
    container.innerHTML = '';
 
    const filtered = shuffledQuestions.filter(q => {
        const ans = userAnswers[q.id];
        if (tab === 'all')     return true;
        if (tab === 'correct') return ans === q.answer;
        if (tab === 'wrong')   return ans !== q.answer && ans !== null && ans !== undefined;
        if (tab === 'skipped') return ans === null || ans === undefined;
    });
 
    if (filtered.length === 0) {
        container.innerHTML = `<p style="color:#94a3b8;padding:1rem 0;">No questions in this category.</p>`;
        return;
    }
 
    filtered.forEach((q, i) => {
        const userAns = userAnswers[q.id];
        const isCorrect = userAns === q.answer;
        const isSkipped = userAns === null || userAns === undefined;
 
        const card = document.createElement('div');
        card.className = 'analysis-card';
        card.style.borderLeftColor = isCorrect ? '#16a34a' : isSkipped ? '#94a3b8' : '#dc2626';
 
        // Question header with status badge
        const header = document.createElement('div');
        header.style.cssText = 'display:flex;justify-content:space-between;align-items:flex-start;gap:1rem;margin-bottom:1rem;';
 
        const qNum = shuffledQuestions.indexOf(q) + 1;
        const titleEl = document.createElement('div');
        titleEl.className = 'question-title';
        titleEl.style.margin = '0';
        titleEl.textContent = `${qNum}. ${q.question}`;
 
        const statusBadge = document.createElement('span');
        statusBadge.style.cssText = `flex-shrink:0;font-size:.75rem;font-weight:700;padding:.25rem .7rem;border-radius:100px;white-space:nowrap;`;
        if (isCorrect) {
            statusBadge.style.background = '#dcfce7';
            statusBadge.style.color = '#16a34a';
            statusBadge.textContent = '✓ Correct';
        } else if (isSkipped) {
            statusBadge.style.background = 'var(--gray-100)';
            statusBadge.style.color = 'var(--gray-500)';
            statusBadge.textContent = '— Skipped';
        } else {
            statusBadge.style.background = '#fee2e2';
            statusBadge.style.color = '#dc2626';
            statusBadge.textContent = '✗ Wrong';
        }
 
        header.appendChild(titleEl);
        header.appendChild(statusBadge);
        card.appendChild(header);
 
        // Options
        q.options.forEach(opt => {
            const div = document.createElement('div');
            div.className = 'option-label';
 
            const isAnswer = opt === q.answer;
            const isUserPick = opt === userAns;
 
            if (isAnswer && isUserPick) {
                div.classList.add('opt-correct');
            } else if (isAnswer) {
                div.classList.add('opt-correct');
            } else if (isUserPick && !isAnswer) {
                div.classList.add('opt-wrong');
            } else {
                div.classList.add('opt-gray');
            }
 
            // Label with marker
            let marker = '';
            if (isAnswer) marker = ' ✓';
            if (isUserPick && !isAnswer) marker = ' ✗ (your answer)';
            if (isAnswer && isUserPick) marker = ' ✓ (your answer)';
 
            div.textContent = opt + marker;
            card.appendChild(div);
        });
 
        container.appendChild(card);
    });
}
 
// Tab switching
document.querySelectorAll('[data-tab]').forEach(btn => {
    btn.addEventListener('click', function () {
        document.querySelectorAll('[data-tab]').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        activeTab = this.getAttribute('data-tab');
        renderAnswerKey(activeTab);
    });
});
 
renderAnswerKey('all');
