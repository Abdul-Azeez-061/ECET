const leaderboardBody   = document.getElementById('leaderboard-body');
const analysisSection   = document.getElementById('analysis-section');
const analysisTitle     = document.getElementById('analysis-title');
const analysisContent   = document.getElementById('analysis-content');
const analysisTabs      = document.querySelectorAll('[data-tab]');
const filterBtns        = document.querySelectorAll('[data-filter]');

let leaderboard = JSON.parse(localStorage.getItem('ecet_leaderboard') || '[]');
leaderboard.sort((a, b) => (b.score / b.total) - (a.score / a.total));

let selectedUser   = null;
let activeFilter   = 'all';

// ── Subject label helper ──────────────────────────────────
function subjectLabel(key) {
    const map = { ds: 'Data Structures', cn: 'Computer Networks', os: 'Operating Systems', se: 'Software Engineering', java: 'Java Programming', wt: 'Web Technology', de: 'Digtal Electronics', dbms: 'DBMS', iot: 'Internet of Things', bd: 'Big Data', py: 'Python Programming', ap: 'Android Programming' };
    return map[key] || key || '—';
}

// ── Render table ──────────────────────────────────────────
function renderLeaderboard() {
    leaderboardBody.innerHTML = '';

    const filtered = activeFilter === 'all'
        ? leaderboard
        : leaderboard.filter(e => (e.subjectKey || 'ds') === activeFilter);

    if (filtered.length === 0) {
        leaderboardBody.innerHTML = `<tr><td colspan="5" style="text-align:center;color:#94a3b8;padding:2rem;">No results yet.</td></tr>`;
        return;
    }

    filtered.forEach((entry, index) => {
        const pct = Math.round((entry.score / entry.total) * 100);
        const tr  = document.createElement('tr');
        tr.className = `user-row rank-${index + 1}`;

        tr.innerHTML = `
            <td class="rank-cell">#${index + 1}</td>
            <td style="font-weight:600;">${entry.name}</td>
            <td><span class="subject-chip">${subjectLabel(entry.subjectKey)}</span></td>
            <td>${entry.score} / ${entry.total}</td>
            <td style="font-weight:700;color:${pct >= 75 ? '#16a34a' : pct >= 50 ? '#854d0e' : '#dc2626'}">${pct}%</td>
        `;

        tr.addEventListener('click', () => {
            document.querySelectorAll('.user-row').forEach(r => r.style.background = '');
            tr.style.background = '#eef4ff';
            selectedUser = entry;
            showAnalysis(entry);
        });

        leaderboardBody.appendChild(tr);
    });
}

// ── Analysis ──────────────────────────────────────────────
function showAnalysis(userEntry) {
    analysisTitle.textContent = `Analysis — ${userEntry.name} (${subjectLabel(userEntry.subjectKey)})`;
    analysisSection.classList.add('show');
    analysisSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setTabActive('correct');
    renderAnalysisContent('correct');
}

function setTabActive(tabId) {
    analysisTabs.forEach(t => t.classList.remove('active'));
    const btn = document.querySelector(`[data-tab="${tabId}"]`);
    if (btn) btn.classList.add('active');
}

function renderAnalysisContent(type) {
    if (!selectedUser) return;
    analysisContent.innerHTML = '';

    const { shuffledQuestions, userAnswers } = selectedUser;

    if (!shuffledQuestions || !userAnswers) {
        analysisContent.innerHTML = '<p style="color:#94a3b8;">No detailed data available.</p>';
        return;
    }

    const filtered = shuffledQuestions.filter(q => {
        const ans = userAnswers[q.id];
        if (type === 'correct')      return ans === q.answer;
        if (type === 'wrong')        return ans !== q.answer && ans !== null && ans !== undefined;
        if (type === 'not-answered') return ans === null || ans === undefined;
    });

    if (filtered.length === 0) {
        analysisContent.innerHTML = `<p style="color:#94a3b8; padding:1rem 0;">No questions in this category.</p>`;
        return;
    }

    filtered.forEach(q => {
        const card = document.createElement('div');
        card.className = 'analysis-card';

        const title = document.createElement('div');
        title.className = 'question-title';
        title.textContent = q.question;
        card.appendChild(title);

        q.options.forEach(opt => {
            const div = document.createElement('div');
            div.className = 'option-label';
            const userAns = userAnswers[q.id];

            if (type === 'correct') {
                if (opt === q.answer) div.classList.add('opt-correct');
                else                  div.classList.add('opt-gray');
            }
            if (type === 'wrong') {
                if (opt === q.answer)  div.classList.add('opt-correct');
                else if (opt === userAns) div.classList.add('opt-wrong');
                else                   div.classList.add('opt-gray');
            }
            if (type === 'not-answered') {
                if (opt === q.answer) div.classList.add('opt-correct');
                else                  div.classList.add('opt-gray');
            }

            div.textContent = opt;
            card.appendChild(div);
        });

        analysisContent.appendChild(card);
    });
}

// ── Tab / filter event listeners ──────────────────────────
analysisTabs.forEach(tab => {
    tab.addEventListener('click', function () {
        const tabId = this.getAttribute('data-tab');
        setTabActive(tabId);
        renderAnalysisContent(tabId);
    });
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        filterBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        activeFilter = this.getAttribute('data-filter');
        analysisSection.classList.remove('show');
        selectedUser = null;
        renderLeaderboard();
    });
});

// ── Clear data ────────────────────────────────────────────
document.getElementById('clear-btn').addEventListener('click', () => {
    if (confirm('Clear ALL leaderboard data? This cannot be undone.')) {
        localStorage.removeItem('ecet_leaderboard');
        leaderboard = [];
        analysisSection.classList.remove('show');
        renderLeaderboard();
    }
});

// ── Init ──────────────────────────────────────────────────
window.onload = renderLeaderboard;
