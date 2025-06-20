const projects = [
  {
    id: '4ui3u4212312',
    img: '/memora.png',
    title: 'Memora',
    description:
      'визуальный редактор, позволяющий пользователю создавать и управлять блоками контента (такими как текст, изображения и ссылки) с помощью drag-and-drop интерфейса. Пользователь может добавлять элементы на "доску", перемещать их, редактировать содержимое в удобных диалоговых окнах и сохранять структуру.',
    tech: ['NextJS', 'TypeScript'],
    techs: ['next', 'ts', 'redux', 'tailwind'],
    date: '03-05-2025',
    link: 'https://memora-kappa.vercel.app/',
    linkGH: 'https://github.com/sr-popug/memora',
  },
  {
    id: '4ui3u42',
    img: '/prytki.png',
    title: 'Прятки в темноте',
    description:
      'Сайт квеста в Мурманске под название "Прятки в темноте" сделан на NextJS. Сайт адаптивен под разные типы устройств. Есть возможность бронирования определенного времени.',
    tech: ['NextJS', 'TypeScript'],
    techs: ['next', 'ts', 'tailwind'],
    date: '09-11-2024',
    link: 'https://prytki2.vercel.app/',
    linkGH: 'https://github.com/sr-popug/prytki2',
  },
  {
    id: '32oii0irp235',
    img: '/neduca.png',
    title: 'Neduca',
    description:
      'Обучающая платформа, написанная на NextJS. На ней в большинстве своём рассматривается именно практическая часть обучения таким технологиям как JavaScript, TypeScript, React, NextJS. НА сайте можно проходить тесты по интересующей вас технологии или решать тематические задачи разной сложности. Также есть специальный клавиатурный тренажёр в котором генерируются слова именно под изучаемую технологию. ',
    techs: ['next', 'ts', 'sass'],
    date: '23-06-2024',
    tech: ['NextJS', 'TypeScript'],
    link: 'https://neduca.vercel.app',
    linkGH: 'https://github.com/sr-popug/neduca',
  },
  {
    id: '32oii0irp',
    img: '/dushtask.png',
    title: 'DushTask',
    description:
      'Удобный сайт для контроля ваших проектов. Внутри каждого проекта есть задачи и подзадачи с процентом их выполнения. Также у каждого проекта есть записная книжка с форматированием текста. На сайте реализована авторизация. У каждого проекта есть удобный блокнот с форматированием текста, который позволяет записывать заметки. По мере выполнения подзадач общий процент выполнения проекта увеличивается. ',
    techs: ['react', 'axios', 'mobx', 'less'],
    date: '23-06-2024',
    tech: ['React', 'NodeJS'],
    link: 'https://dushtask-client.vercel.app/',
    linkGH: 'https://github.com/sr-popug/dushtask-client',
  },
  {
    id: 'i304i03i40wg',
    title: 'NASA app',
    img: '/nasa.png',
    description:
      'Данный сайт создан с целью практики работы с открытыми API и Тайпскриптом. В этом проекте я работаю с Yandex API с открытым апи NASA. Сайт написан на React собранный с помощью Vite, для удобной стилизации используется препроцессор less.',
    techs: ['next', 'less', 'ts'],
    tech: ['NextJS', 'TypeScript'],
    date: '11-05-2024',
    link: 'https://nasa-amber.vercel.app',
    linkGH: 'https://github.com/sr-popug/nasa',
  },
  {
    id: '32i40',
    img: '/gosurf.png',

    title: 'Go SURF',
    description:
      'Сайт туристической компании, которая предлагает серфинг на разных пляжах. На сайте множество слайдеров, интерактивных кнопок и необычных решений. Сайт адаптивен под разные типы устройств. Этот сайт заставил меня изучить все мелочи адаптивной верстки.',
    tech: ['React', 'LESS'],
    techs: ['react', 'sass', 'gsap'],
    date: '16-01-2024',
    link: 'https://sr-popug.github.io/GoSurf/',
    linkGH: 'https://github.com/sr-popug/GoSurf',
  },

  // {
  // 	id: '4ui3u42',
  // 	img: '/murman.png',
  // 	title: 'Murman Events',
  // 	description:
  // 		'Новостной сайт моего родного города, на котором можно увидеть мероприятия, происходящие в ближайшее время. Любой пользователь может отправить на модерацию свое мероприятие, а после одобрения администрацией это мероприятие добавиться на сайт. Есть админ панель и множество проверок форм, поиск по мероприятиям и удобный интерфейс.',
  // 	techs: ['react', 'axios', 'mobx', 'less'],
  // 	date: '23-12-2023',
  // 	tech: ['React', 'NodeJS'],
  // 	link: 'https://sr-popug.github.io/GoSurf/',
  // 	linkGH: 'https://github.com/sr-popug/murman-events-client',
  // },
  {
    id: 'pr0ioaecnwel',
    img: '/mnbn.png',
    title: 'MNBN',
    description:
      'Очередной лендинг туристической компании, которая предлагает отправиться в путешествие по горам. Тут реализованны прекрасные parallax и GSAP эффекты.',
    techs: ['react', 'gsap', 'sass'],
    tech: ['React', 'GSAP'],
    link: 'https://sr-popug.github.io/MNBN/',
    linkGH: 'https://github.com/sr-popug/MNBN/',
    date: '17-08-2022',
  },
  {
    id: 'knOBGO40BVIPWH',
    title: 'SOS Game',
    img: '/sos.png',
    description:
      'Небольшой лендинг c красивыми анимациями появления. Используется GSAP библиотека, чтобы сайт казался максимально динамичным. Тут реализованны самые разные приемы вёрстки. Сайт адаптивен под разные браузеры и устройства',
    techs: ['react', 'gsap', 'less'],
    tech: ['React', 'GSAP'],
    date: '21-01-2022',
    link: 'https://sr-popug.github.io/SOS/',
    linkGH: 'https://github.com/sr-popug/SOS/',
  },
]
export default projects
