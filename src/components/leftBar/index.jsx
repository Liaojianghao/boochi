import './leftBar.scss'

export default function LeftBar() {
  return (
    <div className="leftbar">
      <div className="container">
        <div className="menu">
          <div className="user">
            <img src={require('../../assets/socail_avatar.jpg')} alt="" />
            <span>Takagi</span>
          </div>
          <div className="item">
            <img src={require('../../assets/1.png')} alt="" />
            <span>朋友</span>
          </div>
          <div className="item">
            <img src={require('../../assets/2.png')} alt="" />
            <span>群组</span>
          </div>
          <div className="item">
            <img src={require('../../assets/3.png')} alt="" />
            <span>商城</span>
          </div>
          <div className="item">
            <img src={require('../../assets/4.png')} alt="" />
            <span>播放</span>
          </div>
          <div className="item">
            <img src={require('../../assets/5.png')} alt="" />
            <span>回忆</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Your Shortcuts</span>
          <div className="item">
            <img src={require('../../assets/6.png')} alt="" />
            <span>活动</span>
          </div>
          <div className="item">
            <img src={require('../../assets/7.png')} alt="" />
            <span>游戏</span>
          </div>
          <div className="item">
            <img src={require('../../assets/8.png')} alt="" />
            <span>图库</span>
          </div>
          <div className="item">
            <img src={require('../../assets/9.png')} alt="" />
            <span>视频</span>
          </div>
          <div className="item">
            <img src={require('../../assets/10.png')} alt="" />
            <span>消息</span>
          </div>
        </div>
        <hr />
        <div className="menu">
          <span>Ohters</span>
          <div className="item">
            <img src={require('../../assets/13.png')} alt="" />
            <span>赞助商</span>
          </div>
          <div className="item">
            <img src={require('../../assets/11.png')} alt="" />
            <span>教程</span>
          </div>
          <div className="item">
            <img src={require('../../assets/12.png')} alt="" />
            <span>直播课</span>
          </div>
        </div>
      </div>
    </div>
  )
}
