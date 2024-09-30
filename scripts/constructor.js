class ThemePage {
    constructor() {
      this.container = document.createElement('section');
      this.container.classList.add('theme-page');
      this.titleElement = document.createElement('h2');
      this.descriptionElement = document.createElement('p');
      this.imageElement = document.createElement('img');
      this.container.appendChild(this.titleElement);
      this.container.appendChild(this.descriptionElement);
      this.container.appendChild(this.imageElement);
    }
  
    render(title, description, imageUrl) {
      this.titleElement.textContent = title;
      this.descriptionElement.textContent = description;
      this.imageElement.src = imageUrl;
      this.imageElement.alt = title;
      document.getElementById('main').appendChild(this.container);
    }
  }
  
  class BeachTheme extends ThemePage {
    constructor() {
      super();
    }
  
    render() {
      super.render(
        'Beach Paradise',
        'Explore the breathtaking beaches of the French Riviera.',
        `../img/constructor-beach.jpg`
      );
    }
  }
  
  class HistoricTheme extends ThemePage {
    constructor() {
      super();
    }
  
    render() {
      super.render(
        'Historic Charm',
        'Discover the rich history and cultural heritage of the region.',
        `../img/constructor-historic.jpg`
      );
    }
  }
  
  class AdventureTheme extends ThemePage {
    constructor() {
      super();
    }
  
    render() {
      super.render(
        'Adventure Awaits',
        'Embark on thrilling adventures in the stunning landscapes.',
        `../img/constructor1.jpg`
      );
    }
  }
  
  const beachPage = new BeachTheme();
  const historicPage = new HistoricTheme();
  const adventurePage = new AdventureTheme();
  
  beachPage.render();
  historicPage.render();
  adventurePage.render();
  