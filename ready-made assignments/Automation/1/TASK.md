### Требования к заданию

- язык программирования и технологии: любой;
- код должен быть выложен на github;
- тесты должны работать :) Т.е. их можно запустить и увидеть результат выполнения (passed/failed).
- желательно если используешь паттерн PageObject для автотеста


### Тестовое задание №1

Автомат принимает накопительные скидочные карты и при своем расчете учитывает количество баллов, по которому начисляет процент скидки: От 0 до 100 баллов - скидка 1% От 100 до 200 баллов - скидка 3 % От 200 до 500 баллов - скидка 5% От 500 баллов - скидка 10%

**Задание**: Составить такой набор тестовых данных для автомата, при котором мы гарантированно будем знать, что в соответствии со своими накопленными баллами покупатель получит верную скидку.

**Результат**: Выложить отдельным файлом с названием TaskTestData.md

### Тестовое задание №2

**Описание**: Не так давно, команда авито доставка сделала поле “телефон” пустым при оформлении заказа с доставкой, так как у пользователей до этого были неверно указаны номера.

**Задание**: Написать end-to-end автотест, который должен:

авторизоваться на avito.ru (При локальном прогоне автотеста у вас скорее всего появится капча, ее игнорируйте, проверятся автотест будет на тестовом сервере. Для проверки работоспособности проверьте со своей или ново созданной учетной записью. При отправке задания логин и пароль оставьте пустыми!!!)
выбирать любое доставочное объявление из категории личные вещи https://www.avito.ru/sochi/lichnye_veschi?cd=1&d=1 (по ссылке уже откроются доставочные объявления)
перейти к оформлению заказа с доставкой (нажатие на кнопку "купить с доставкой")
проверить что поле телефон - пустое https://yadi.sk/i/NabEqzg2AVoMdA