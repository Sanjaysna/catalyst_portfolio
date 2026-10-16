/**
 * CATALYST — Render Module
 * Dynamic DOM card injection (100% data-driven)
 * Each card is a single clickable <a> anchor navigating to resume.html?m=<slug>
 */

// SVG Fallback Avatar data URI
const SVG_FALLBACK_AVATAR = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23D0C4FB"/><circle cx="50" cy="38" r="20" fill="%23111"/><ellipse cx="50" cy="85" rx="32" ry="22" fill="%23111"/></svg>`;

/**
 * Render all member cards into the team grid
 * @param {Array} roster - Array of member objects
 * @param {HTMLElement} container - The container grid element
 */
export function renderTeamGrid(roster, container) {
  if (!container) return;
  container.innerHTML = '';

  roster.forEach((member) => {
    const card = document.createElement('a');
    card.href = `resume.html?m=${encodeURIComponent(member.slug)}`;
    card.className = 'member-card';
    card.dataset.slug = member.slug;
    card.dataset.role = member.role;
    card.style.backgroundColor = member.accent;
    card.setAttribute('aria-label', `View resume for ${member.name}, ${member.role}`);

    // Leadership stickers
    let leadershipBadge = '';
    if (member.role === 'Captain') {
      leadershipBadge = `
        <div class="captain-crown-badge" title="Team Captain">
          <svg viewBox="0 0 24 24" fill="#111">
            <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5m14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
          </svg>
        </div>
      `;
    } else if (member.role === 'Vice Captain') {
      leadershipBadge = `
        <div class="vice-star-badge" title="Vice Captain">
          <svg viewBox="0 0 24 24">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9"/>
          </svg>
        </div>
      `;
    }

    card.innerHTML = `
      <div class="card-top-row">
        <span class="card-number">${member.number}</span>
        <span class="card-role-pill">${member.role}</span>
      </div>

      <div class="card-photo-frame">
        ${leadershipBadge}
        <img 
          src="${member.photo}" 
          alt="Portrait of ${member.name}" 
          class="card-photo-img" 
          loading="lazy"
          style="object-position: ${member.objectPosition || '50% 20%'};"
          onerror="this.onerror=null; this.src='${SVG_FALLBACK_AVATAR}';"
        />
      </div>

      <div class="card-info">
        <h3 class="card-name">${member.name}</h3>
        <p class="card-bio">${member.shortBio}</p>
        <div class="card-resume-btn">
          <span>VIEW RESUME</span>
          <span aria-hidden="true">→</span>
        </div>
      </div>
    `;

    container.appendChild(card);
  });
}
