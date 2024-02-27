const library = []
//Добавление книг
const addBook = (name, author, year, genre, count) => {
    library.push({
        'name': name ,
        'author': author,
        'year': year,
        'genre': genre,
        'count': count
    })
}
//Удалние книг
const removeBook = (Name) => {
    for (let i = 0; i < library.length; i += 1) {
        if (library[i]?.name === Name) {
            library.splice(i,1);
        }
    }
}
//Поиск по автору
const findBooksByAuthor = (Author) => {
    return library.filter(({author}) => author === Author)
}
//Фильтр по жанру 
const filterBooksByGenre = (Genre) => {
    return library.filter(({genre}) => genre === Genre)

}
//Количество жанров в библеотеке
const genreReport = () => {
    const result = {};
    for (const array of library) {
        if (!Object.hasOwn(result, array?.genre)) {
            result[`${array?.genre}`] = 0;
          }
        result[`${array?.genre}`] += 1;
        }
    return result
}
// Среднее количество строк
const averagePagesReport = () => {
    return library.reduce((acc, library) => {
        return acc + library.count;
      }, 0) / library.length
}
// Фильт по годам
const yearReport = () => {
    return library.sort((a, b) => b.year - a.year);
} // Завершение кода


addBook("Хоббит", "Дж. Р. Р. Толкиен", 1937, "Фэнтези", 310);
addBook("Гарри Поттер и философский камень", "Дж. К. Роулинг", 1997, "Фэнтези", 223);
addBook("1984", "Джордж Оруэлл", 1949, "Антиутопия", 328);

// Поиск книг по автору
console.log('Поиск книг по автору:')
console.log(findBooksByAuthor("Дж. Р. Р. Толкиен"), '\n');
// Фильтрация книг по жанру
console.log('Фильтрация книг по жанру:')
console.log(filterBooksByGenre("Фэнтези"), '\n');
// Генерация отчета по количеству книг каждого жанра
console.log('Генерация отчета по количеству книг каждого жанра:')
console.log(genreReport(), '\n');
// Генерация отчета по среднему количеству страниц
console.log('Генерация отчета по среднему количеству страниц:')
console.log(`Среднее количество страниц: ${averagePagesReport()}`, '\n');
// Удаление книги и вывод обновленной библиотеки
console.log('Удаление книги и вывод обновленной библиотеки:')
removeBook("1984"); console.log(library, '\n');
// Генерация отчета по дате издания
console.log('Генерация отчета по дате издания:')
console.log(yearReport(), '\n')


