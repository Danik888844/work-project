# En

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 17.3.7 and will be gradually improved.

This project implements: adding, viewing and deleting information. Externally, only Angular Material is used. Page one, it presents:
- "Add element" button
- table with data (fields, view and delete buttons)

When you click on the "Add element" button, a dialog box will open with the following fields: Code, Name, Quantity, Price. Filling out all fields is required; without this, the “Add” button will be inactive, otherwise you can click the “Cancel” button (or click outside the modal window).

The default table contains data from the JSON file "data.json". On the right side of each line there are two icons: in the form of an eye - viewing, in the form of a trash can - deleting.
When you click on view, a modal window will open with unchanged fields and a “Cancel” button.
When you click delete, the row in which this action was performed will disappear from the table.

To run the project, Angular is required, install `npm install -g @angular/cli`.

After cloning the project, you need to run the following command `npm install`.

The project is launched in the code editor terminal via `npm run start`.

If the terminal shows the error “script execution is disabled on this system” then:
- powerShell from admin
- Set-ExecutionPolicy RemoteSigned
- We answer the question: A (Yes for everyone)

The project is launched locally, at `http://localhost:4200/`

# Ru

Этот проект сгенерирован с помощью [Angular CLI](https://github.com/angular/angular-cli) версии 17.3.7. Постепенно дорабатывается.

В данном проекте реализовано: добавление, просмотр и удаление информации. Внешне использован только Angular Material. Страница одна, на ней представлены:
- кнопка "Добавить элемент"
- таблица с данными (поля, кноки просмотра и удаления)

При нажатии на кнопку "Добавить элемент" будет открыто диалоговое окно с полями: Код, Название, Количество, Цена. Заполнение всех полей обязательно, без этого кнопка "Добавить" будет неактивна, в противном случае можно нажать кнопку "Отмена" (либо нажать вне модального окна).

Таблица по умолчанию содержит данные из JSON файла "data.json". В правой части каждой строки две иконки: в виде глаза - просмотр, в виде мусорного ведра - удаление.
При нажатии на просмотр, откроется модальное окно с неизмениемыми полями и кнопкой "Отмена". 
При нажатии на удаление, строка в которой было произведено это действие - исчезнет с таблицы.

Для запуска проекта требуется Angular, для установки `npm install -g @angular/cli`. 

После клонирования прокта необходимо запустить следующую команду `npm install`.

Запуск проекта осуществляется в терминале редактора кода через `npm run start`.

Если в терминале ошибка "выполнение сценариев отключено в этой системе" то:
- powerShell от админа
- Set-ExecutionPolicy RemoteSigned
- На вопрос отвечаем: A (Да для всех)

Проект запускается локально, по адресу `http://localhost:4200/`