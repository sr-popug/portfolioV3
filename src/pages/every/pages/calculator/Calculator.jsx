import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './calculator.less'

export default function Calculator() {
	const [userOutput, setUserOutput] = useState('0')
	const output = useRef(null)
	function ctg(x) {
		return 1 / Math.tan(x)
	}
	const buttonClick = e => {
		if (userOutput == '0' && e.target.innerHTML != '.') {
			setUserOutput('')
		}
		if (
			e.target.classList[0] === 'plus' ||
			e.target.classList[0] === 'min' ||
			e.target.classList[0] === 'mult' ||
			e.target.classList[0] === 'share' ||
			e.target.classList[0] === 'dot' ||
			e.target.classList[0] === 'pow'
		) {
			if (
				userOutput.split('')[userOutput.split('').length - 1] == '^' ||
				userOutput.split('')[userOutput.split('').length - 1] == '.' ||
				userOutput.split('')[userOutput.split('').length - 1] == '÷' ||
				userOutput.split('')[userOutput.split('').length - 1] == '×' ||
				userOutput.split('')[userOutput.split('').length - 1] == '-' ||
				userOutput.split('')[userOutput.split('').length - 1] == '+'
			) {
				setUserOutput(prev => prev.substring(0, prev.length - 1))
			}
		}

		if (
			e.target.classList[0] === 'num' ||
			e.target.classList[0] === 'plus' ||
			e.target.classList[0] === 'min' ||
			e.target.classList[0] === 'mult' ||
			e.target.classList[0] === 'share' ||
			e.target.classList[0] === 'dot' ||
			e.target.classList[0] === 'pi' ||
			e.target.classList[0] === 'right'
		) {
			output.current.scrollTo(0, output.current.scrollWidth)
			setUserOutput(prev => (prev += e.target.innerHTML))
		}
		if (e.target.classList[0] === 'left') {
			if (
				!isNaN(
					Number(userOutput.substring(userOutput.length - 1, userOutput.length))
				) &&
				userOutput !== '0'
			) {
				return setUserOutput(prev => (prev += '×' + e.target.innerHTML))
			}
			setUserOutput(prev => (prev += e.target.innerHTML))
		}
		// if (e.target.classList[0] === 'sqr') {
		// 	if (
		// 		!isNaN(
		// 			Number(userOutput.substring(userOutput.length - 1, userOutput.length))
		// 		) &&
		// 		userOutput !== '0'
		// 	) {
		// 		return setUserOutput(prev => (prev += '×√'))
		// 	}
		// 	setUserOutput(prev => (prev += '√'))
		// }
		if (e.target.classList[0] === 'pow') {
			setUserOutput(prev => (prev += '^'))
		}
		if (e.target.classList[0] === 'fact') {
			setUserOutput(prev => (prev += '!'))
		}
		if (
			e.target.classList[0] === 'sin' ||
			e.target.classList[0] === 'cos' ||
			e.target.classList[0] === 'tg' ||
			e.target.classList[0] === 'ctg'
		) {
			if (
				!isNaN(
					Number(userOutput.substring(userOutput.length - 1, userOutput.length))
				) &&
				userOutput !== '0'
			) {
				return setUserOutput(
					prev => (prev += '×' + `${e.target.classList[0]}(`)
				)
			}
			setUserOutput(prev => (prev += `${e.target.classList[0]}(`))
		}
		if (e.target.classList[0] === 'delete') {
			setUserOutput(prev => prev.substring(0, prev.length - 1))
			if (userOutput == 'Error') {
				setUserOutput('0')
			}
			if (userOutput.length === 1) {
				setUserOutput('0')
			}
		}
		if (e.target.classList[0] === 'clean') {
			setUserOutput('0')
		}
		if (e.target.classList[0] === 'res') {
			setUserOutput(prev => prev.replaceAll('^', '**'))
			setUserOutput(prev => prev.replaceAll('÷', '/'))
			setUserOutput(prev => prev.replaceAll('×', '*'))
			// setUserOutput(prev => prev.replaceAll('√', 'Math.sqrt'))
			setUserOutput(prev => prev.replaceAll('sin', 'Math.sin'))
			setUserOutput(prev => prev.replaceAll('cos', 'Math.cos'))
			setUserOutput(prev => prev.replaceAll('ctg', '1/Math.tan'))
			setUserOutput(prev => prev.replaceAll('tg', 'Math.tan'))
			setUserOutput(prev => prev.replaceAll('π', '3.1415'))

			if (
				userOutput.split('')[userOutput.split('').length - 1] == '**' ||
				userOutput.split('')[userOutput.split('').length - 1] == '.' ||
				userOutput.split('')[userOutput.split('').length - 1] == '/' ||
				userOutput.split('')[userOutput.split('').length - 1] == '*' ||
				userOutput.split('')[userOutput.split('').length - 1] == '-' ||
				userOutput.split('')[userOutput.split('').length - 1] == '+'
			) {
				setUserOutput(prev => prev.substring(0, prev.length - 1))
			}

			setUserOutput(prev => {
				try {
					return eval(prev) + ''
				} catch (error) {
					setUserOutput('Error')
				}
			})
		}
	}
	return (
		<article className='calculator'>
			<div className='pag'>
				<NavLink to='/'>Главная</NavLink>-<NavLink to='/every'>Всякое</NavLink>-
				<NavLink to='/every/calculator'>Калькулятор</NavLink>
			</div>
			<div className='about-field'>
				<div className='field'>
					<div ref={output} className='output'>
						{userOutput}
					</div>
					<div onClick={buttonClick} className='buttons'>
						<button className='sin'>sin</button>
						<button className='cos'>cos</button>
						<button className='tg'>tg</button>
						<button className='ctg'>ctg</button>

						<button className='pow'>
							x<span>y</span>
						</button>
						<button className='pi'>π</button>
						<button className='left'>(</button>
						<button className='right'>)</button>

						<button className='clean yellow'>C</button>
						<button className='delete yellow'>{'←'}</button>
						<button className='share yellow  operation'>÷</button>

						<button className='num num1'>1</button>
						<button className='num num2'>2</button>
						<button className='num num3'>3</button>
						<button className='mult yellow operation'>×</button>

						<button className='num num4'>4</button>
						<button className='num num5'>5</button>
						<button className='num num6'>6</button>
						<button className='min yellow operation'>-</button>

						<button className='num num7'>7</button>
						<button className='num num8'>8</button>
						<button className='num num9 '>9</button>
						<button className='plus yellow operation'>+</button>

						<button className='num num0'>0</button>
						<button className='dot'>.</button>
						<button className='res yellow'>=</button>
					</div>
				</div>
			</div>
		</article>
	)
}
