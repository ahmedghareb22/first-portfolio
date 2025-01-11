let details = {
  "social-links": [
    "https://github.com/ahmedghareb22",
    "https://www.linkedin.com/in/ahmed-ghareb-43543b295/",
    "https://web.facebook.com/profile.php?id=100007609117650&locale=ar_AR",
  ],
  projects: [
    {
      id: 1,
      title: "Coffee Market",
      description: "a website for a coffee market",
      image: "./img/coffe.png",
      tags: ["HTML", "CSS", "MEDIA QUERY"],
      links: [
        "https://github.com/ahmedghareb22/Coffee-Website",
        "https://ahmedghareb22.github.io/Coffee-Website/",
      ],
    },
    {
      id: 2,
      title: "GOAL ECOMMERCE",
      description: "an ecommerce specialized in sports wear",
      image: "./img/gol.png",
      tags: ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "SWIPER JS"],
      links: [
        "https://github.com/ahmedghareb22/goal-copy-ecommerce",
        "https://ahmedghareb22.github.io/goal-copy-ecommerce/template.html",
      ],
    },
    {
      id: 3,
      title: "kasper website",
      description: "a website for a real state",
      image: "./img/kasper.png",
      tags: ["HTML", "CSS", "Media Query"],
      links: [
        "https://github.com/ahmedghareb22/kasper-website",
        "https://ahmedghareb22.github.io/kasper-website/",
      ],
    },
    {
      id: 4,
      title: "Cookies Website",
      description: "a website for a cookies market",
      image: "./img/cookies.png",
      tags: ["HTML", "CSS", "Media Query"],
      links: [
        "https://github.com/ahmedghareb22/cookies-shop",
        "https://ahmedghareb22.github.io/cookies-shop/",
      ],
    },
    {
      id: 5,
      title: "foodies Website",
      description: "a website for a food",
      image: "./img/foodie.png",
      tags: ["HTML", "Tailwind", "JavaScript"],
      links: ["https://github.com/ahmedghareb22/foodie-tailwind", "#"],
    },
    {
      id: 6,
      title: "Pray Times",
      description: "a website to show pray times using api",
      image: "./img/pray-times.png",
      tags: ["HTML", "css", "JavaScript", "axios", "Api handle"],
      links: [
        "https://github.com/ahmedghareb22/pray-times-one",
        "https://ahmedghareb22.github.io/pray-times-one/",
      ],
    },
  ],
};

let projectsContainer = document.getElementById("projects-container");


let projects = [...Object.entries(details)].sort()[0][1];

window.onload = function () {
  projectsContainer.innerHTML = "";
    projects.forEach((el) => {
      
      let { id, title: t, description: d, image: i, tags, links } = el;
        let [github = "#", live = "#"] = links
        
    projectsContainer.innerHTML += `
            <div class="card" id = "card-${id}">
                <div class="card-img">
                <img src="${i}" alt="${t}-image">
                </div>
                <div class="card-body">
                <h3 class="title">${t}</h3>
                <span class="description">${d}</span>
                </div>
                <div class="tags" id = "tags-${id}">
                </div>
                <div class="card-footer">
                <div class="btns">
                    <a href="${github}">see on github</a>
                    <a href="${live}">live demo</a>
                </div>
                </div>
            </div>
        `;
      let tagsContainer = document.getElementById(`tags-${id}`);
      makeTags(tags, tagsContainer)
  });
};

function makeTags(a, container) {
    let ul = document.createElement("ul");
    a.forEach((e) => {
        let txt = document.createTextNode(e),
        li = document.createElement("li");
        li.className = "tag";
        li.appendChild(txt)
        ul.appendChild(li);
    })
    container.appendChild(ul);
}
