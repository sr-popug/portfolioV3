import { makeAutoObservable } from 'mobx'
class modalsStore {
	miniModal = ''
	constructor() {
		makeAutoObservable(this)
	}

	setMiniModal(text) {
		this.miniModal = text
		document.querySelector('.mini-modal').classList.add('active')
		setTimeout(() => {
			document.querySelector('.mini-modal').classList.remove('active')
		}, 3000)
	}
}
export default new modalsStore()
