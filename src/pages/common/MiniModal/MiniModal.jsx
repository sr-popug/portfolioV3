import { observer } from 'mobx-react-lite'
import modals from '../../../store/modal'
import './miniModal.less'
const MiniModal = observer(() => {
	return <div className='mini-modal'>{modals.miniModal}</div>
})
export default MiniModal
