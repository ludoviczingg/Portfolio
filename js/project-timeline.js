document.addEventListener("DOMContentLoaded", () => {
    const timeline = document.querySelector(".project-timeline");
    if (!timeline) return;

    const list = timeline.querySelector(".project-timeline-list");
    const projects = Array.from(
        document.querySelectorAll("main article.project-detail[id]")
    );

    if (!list || projects.length === 0) {
        timeline.hidden = true;
        return;
    }

    const linksById = new Map();

    // Construire la frise à partir des vrais articles présents sur la page.
    projects.forEach((project, index) => {
        const title = project.querySelector(".project-detail-head h2, h2");
        if (!title) return;

        const number = project.querySelector(".project-number, .game-number");
        const item = document.createElement("li");
        const link = document.createElement("a");
        const indexLabel = document.createElement("span");
        const projectLabel = document.createElement("span");

        const numberText = number
            ? number.textContent.trim().replace(/^PROJET\s+/i, "").replace(/^JEU\s+/i, "")
            : String(index + 1).padStart(2, "0");

        link.className = "project-timeline-link";
        link.href = `#${encodeURIComponent(project.id)}`;

        indexLabel.className = "project-timeline-index";
        indexLabel.textContent = numberText;

        projectLabel.className = "project-timeline-label";
        projectLabel.textContent = title.textContent.trim();

        link.append(indexLabel, projectLabel);
        item.append(link);
        list.append(item);
        linksById.set(project.id, link);

        // Mettre à jour l'état actif immédiatement au clic.
        link.addEventListener("click", () => {
            setActive(project.id);
        });
    });

    function setActive(projectId) {
        linksById.forEach((link, id) => {
            const active = id === projectId;
            link.classList.toggle("is-active", active);
            if (active) {
                link.setAttribute("aria-current", "location");
            } else {
                link.removeAttribute("aria-current");
            }
        });
    }

    // Surligner le projet qui occupe la zone de lecture.
    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver((entries) => {
            const visible = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

            if (visible.length) {
                setActive(visible[0].target.id);
            }
        }, {
            root: null,
            rootMargin: "-22% 0px -65% 0px",
            threshold: 0
        });

        projects.forEach((project) => observer.observe(project));
    }

    // Garder le dernier projet actif lorsqu'on atteint le bas de la page.
    window.addEventListener("scroll", () => {
        const nearBottom =
            window.innerHeight + window.scrollY >=
            document.documentElement.scrollHeight - 80;

        if (nearBottom && projects.length) {
            setActive(projects[projects.length - 1].id);
        }
    }, { passive: true });

    if (projects.length) {
        setActive(projects[0].id);
    }
});
