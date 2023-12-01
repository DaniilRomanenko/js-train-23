class ContentContainer {
  constructor() {
    this.elements = [];
  }

  addElement(element) {
    this.elements.push(element);
  }

  removeElement(element) {
    const index = this.elements.indexOf(element);
    if (index !== -1) {
      this.elements.splice(index, 1);
    }
  }

  display() {
    throw new Error("This method should be overridden in subclasses");
  }
}

class Message extends ContentContainer {
  constructor(content) {
    super();
    this.content = content;
  }

  display() {
    console.log(this.content);
  }
}

class Article extends ContentContainer {
  constructor(title) {
    super();
    this.title = title;
  }

  display() {
    console.log(`Стаття: ${this.title}`);
    for (const element of this.elements) {
      element.display();
    }
  }
}

console.log("Завдання 1 ====================================");
// Після виконання розкоментуйте код нижче

// Створюємо об'єкт Article з назвою "Навчальна стаття"
// const article = new Article("Навчальна стаття");

// Додаємо повідомлення до статті
// article.addElement(new Message("Дуже корисна стаття"));
// article.addElement(new Message("Дякую за чудовий матеріал!"));

// Додаємо вкладене повідомлення до першого повідомлення в статті
// article.elements[0].addElement(new Message("Відповідь: Згоден!"));

// Виводимо інформацію про статтю та всі її вкладені елементи
// article.display();

// Виводимо масив вкладених елементів статті
// console.log(article.elements);
