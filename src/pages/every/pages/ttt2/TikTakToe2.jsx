import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import modal from '../../../../store/modal'

export default function TikTakToe2() {
	const [oneP, setOneP] = useState(0)
	const [twoP, setTwoP] = useState(0)
	const [field, setField] = useState(['', '', '', '', '', '', '', '', ''])
	const [whoMove, setWhoMove] = useState('X')
	const fields = useRef(null)
	const fieldClick = e => {
		if (e.target.innerHTML == '') {
			field[e.target.classList[1].split('')[1]] = whoMove

			if (whoMove === 'X') {
				setWhoMove('O')
			} else {
				setWhoMove('X')
			}

			if (
				(field[0] === field[1] && field[1] === field[2] && field[2]) ||
				(field[3] === field[4] && field[4] === field[5] && field[5]) ||
				(field[6] === field[7] && field[7] === field[8] && field[8]) ||
				(field[0] === field[3] && field[3] === field[6] && field[6]) ||
				(field[1] === field[4] && field[4] === field[7] && field[7]) ||
				(field[2] === field[5] && field[5] === field[8] && field[8]) ||
				(field[0] === field[4] && field[4] === field[8] && field[8]) ||
				(field[2] === field[4] && field[4] === field[6] && field[6])
			) {
				if (whoMove === 'X') {
					setOneP(prev => (prev += 1))
					modal.setMiniModal('Победил X')
				} else {
					setTwoP(prev => (prev += 1))
					modal.setMiniModal('Победил O')
				}
				setWhoMove('X')
				setField(['', '', '', '', '', '', '', '', ''])
			}
			if (
				field[0] &&
				field[1] &&
				field[2] &&
				field[3] &&
				field[4] &&
				field[5] &&
				field[6] &&
				field[7] &&
				field[8]
			) {
				setWhoMove('X')
				setField(['', '', '', '', '', '', '', '', ''])
				modal.setMiniModal('Ничья!')
			}
		} else {
			return
		}
	}

	const reset = () => {
		setWhoMove('X')
		setField(['', '', '', '', '', '', '', '', ''])
	}
	const resetScore = () => {
		setWhoMove('X')
		setField(['', '', '', '', '', '', '', '', ''])
		setOneP(0)
		setTwoP(0)
	}
	return (
		<article className='tik-tak-toe__page'>
			<div className='pag'>
				<NavLink to='/'>Главная</NavLink>-<NavLink to='/every'>Всякое</NavLink>-
				<NavLink to='/every/tik-tak-toe2'>
					Крестики нолики для 2 игроков
				</NavLink>
			</div>
			<div className='about-h2'>
				<h2 className='offer-h2 offer-offer'>
					Крестики - Нолики для 2 игроков
				</h2>
			</div>
			<div className='buttons'>
				<button onClick={reset}>Сбросить поле</button>
				<button onClick={resetScore}>Сбросить всё</button>
			</div>
			<div className='about-grid'>
				<div ref={fields} onClick={fieldClick} className='field-for-game'>
					<div className='field f0'>{field[0]}</div>
					<div className='field f1'>{field[1]}</div>
					<div className='field f2'>{field[2]}</div>
					<div className='field f3'>{field[3]}</div>
					<div className='field f4'>{field[4]}</div>
					<div className='field f5'>{field[5]}</div>
					<div className='field f6'>{field[6]}</div>
					<div className='field f7'>{field[7]}</div>
					<div className='field f8'>{field[8]}</div>
				</div>
			</div>
			<div className='score'>
				{oneP} : {twoP}
			</div>
		</article>
	)
}
