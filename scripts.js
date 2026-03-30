const grid = document.getElementById("grid");
    links.forEach(link => {
      const card = document.createElement("a");
      card.className = "card";
      card.href = link.url;
      card.target = "_blank";
      card.innerHTML = `
        <div class="icon">${link.icon}</div>
        <div>
          <h2>${link.title}</h2>
          <p>${link.description}</p>
        </div>`;
      grid.appendChild(card);
    });