import SideBar from '../../../sidebar/SideBar'
import SinglePost from '../../../singlepost/SinglePost'
import './Single.css'

export default function Single() {
  return (
    <div className='single'>
    {/* post */}
    <SinglePost/>
    <SideBar/>
    </div>
  )
}
