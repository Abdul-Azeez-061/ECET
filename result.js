// Security
document.addEventListener('contextmenu', e => e.preventDefault());
document.addEventListener('keydown', e => {
    if (e.key === 'F12' ||
        (e.ctrlKey && e.shiftKey && ['I','J','C'].includes(e.key)) ||
        (e.ctrlKey && e.key === 'U')) e.preventDefault();
});

const sessionDataText = localStorage.getItem('ecet_current_session');
if (!sessionDataText) {
    window.location.href = 'index.html';
}

const sessionData = JSON.parse(sessionDataText);
const { score, total, subject } = sessionData;
const pct = Math.round((score / total) * 100);

// Display
document.getElementById('score-text').textContent = `${score} / ${total}`;
document.getElementById('subject-name').textContent = subject || 'ECET Mock Test';

// Score badge
const badge = document.getElementById('score-badge');
if (pct >= 75) {
    badge.innerHTML = `<span class="score-badge great">Excellent — ${pct}%</span>`;
} else if (pct >= 50) {
    badge.innerHTML = `<span class="score-badge good">Good — ${pct}%</span>`;
} else {
    badge.innerHTML = `<span class="score-badge retry">Keep Practicing — ${pct}%</span>`;
}

document.getElementById('save-btn').addEventListener('click', () => {
    const name = document.getElementById('user-name').value.trim();
    if (!name) {
        alert('Please enter your name to proceed!');
        return;
    }

    const entry = {
        id: Date.now(),
        name,
        score,
        total,
        subject: subject || 'Unknown',
        subjectKey: sessionData.subjectKey || 'ds',
        userAnswers: sessionData.userAnswers,
        shuffledQuestions: sessionData.shuffledQuestions,
        date: new Date().toISOString()
    };

    let leaderboard = JSON.parse(localStorage.getItem('ecet_leaderboard') || '[]');
    leaderboard.push(entry);
    localStorage.setItem('ecet_leaderboard', JSON.stringify(leaderboard));
    localStorage.removeItem('ecet_current_session');
    window.location.href = 'leaderboard.html';
});
