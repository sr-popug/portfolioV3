import React, { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { javaScriptWords } from '../../../../scripts/javaScriptWorlds'
import { keyboard } from '../../../../scripts/keybords-letters'
import './keyboard.less'

export default function KeyBoardTraining() {
  const [nowLetter, setNowLetter] = useState(0)
  const [time, setTime] = useState('00:00')
  const [errors, setErrors] = useState(0)
  const [translate, setTranslate] = useState(0)

  const first = useRef(true)
  const made = useRef(null)
  const now = useRef(null)
  const farther = useRef(null)
  const keyboardDiv = useRef(null)

  useEffect(() => {
    firstGenerateWords(javaScriptWords)

    document.addEventListener('keydown', e => {
      if (e.key == now.current.innerHTML) {
        return trueKey()
      } else if (e.key != 'Shift' && e.key != 'Control') {
        setErrors(prev => (prev += 1))
      }
    })
  }, [])

  function firstGenerateWords(array) {
    farther.current &&
      (farther.current.innerHTML += array
        .map(() => array[Math.floor(Math.random() * array.length)] + ' ')
        .join(''))
    now.current && (now.current.innerHTML = farther.current.innerHTML.charAt(0))
    farther.current &&
      (farther.current.innerHTML = farther.current.innerHTML.slice(1))

    // добавление активных кнопок на клавиатуру
    document
      .getElementById(now.current.innerHTML.toLowerCase())
      ?.classList.add('active')

    // добавление активного shift
    if (now.current.innerHTML.toLowerCase() !== now.current.innerHTML) {
      document.getElementById('Shift')?.classList.add('active')
    }
  }
  // при нажатии верной клавиши
  function trueKey() {
    // запуск таймера по клику на верную кнопку
    if (first.current) {
      console.log(nowLetter === 0, nowLetter)
      setInterval(() => {
        setTime(
          prev =>
            Math.floor(
              (Number(prev.split(':')[0]) * 60 +
                Number(prev.split(':')[1]) +
                1) /
                60
            ) +
            ':' +
            ((Number(prev.split(':')[0]) * 60 +
              Number(prev.split(':')[1]) +
              1) %
              60)
        )
      }, 1000)
    }
    // удаление активных кнопок
    document
      .getElementById(now.current.innerHTML.toLowerCase())
      ?.classList.remove('active')
    document.getElementById('Shift')?.classList.remove('active')

    // изменение активного символа в строке
    made.current.innerHTML += now.current.innerHTML
    now.current.innerHTML = farther.current.innerHTML.charAt(0)
    farther.current.innerHTML = farther.current.innerHTML.slice(1)

    // добавление нового слова когда пользователь проходит одно слово (доделать чтобы добавляло слова не только JS)
    if (now.current.innerHTML == ' ') {
      farther.current.innerHTML +=
        '' + javaScriptWords[Math.floor(Math.random() * javaScriptWords.length)]
    }

    // добавление активных кнопок на клавиатуру
    document
      .getElementById(now.current.innerHTML.toLowerCase())
      ?.classList.add('active')

    if (now.current.innerHTML.toLowerCase() !== now.current.innerHTML) {
      document.getElementById('Shift')?.classList.add('active')
    }

    setTranslate(prev => (prev += 11))
    setNowLetter(prev => (prev += 1))
    first.current = false
  }

  return (
    <article className='training'>
      <div className='pag'>
        <NavLink to='/'>Главная</NavLink>-<NavLink to='/every'>Всякое</NavLink>-
        <NavLink to='/every/tik-tak-toe1'>Клавиатурный тренажёр</NavLink>
      </div>
      <article className='about-h2'>
        <h2 className='offer-h2 offer-offer'>
          Клавиатурный Тренажёр по JavaScript
        </h2>
      </article>
      <article className='top'>
        <section className='stroke'>
          <div
            className='text'
            style={{ transform: `translateX(-${translate}px)` }}
          >
            <span ref={made} className='made'></span>
            <span ref={now} className='now'></span>
            <span ref={farther} className='farther'></span>
          </div>
        </section>
        <section className='info'>
          <article className='text-info'>
            <section className='time'>{time} </section>
            <section className='simvols'>{nowLetter} символов</section>
            <section className='speed'>
              {(
                Number(time.split(':')[1]) &&
                nowLetter /
                  Number(
                    time.split(':').reduce((a, b) => Number(a) * 60 + Number(b))
                  )
              ).toFixed(1)}{' '}
              символ / сек
            </section>
            <section className='errors'>{errors} ошибок</section>
          </article>
        </section>
      </article>
      <article className='flex-keyboard'>
        <article ref={keyboardDiv} className='keyboard'>
          {keyboard.map(letter => {
            return (
              <div
                key={letter.id}
                className={`button ${letter.code}`}
                id={letter.sim}
              >
                {letter.sim}
              </div>
            )
          })}
        </article>
      </article>
    </article>
  )
}
