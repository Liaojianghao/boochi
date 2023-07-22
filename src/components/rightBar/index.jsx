import './rightBar.scss'

export default function RightBar() {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>你可能感兴趣的人</span>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/bocchi_avatar.jpg')} alt="" />
              <span>Bocchi</span>
            </div>
            <div className="btns">
              <button>关注</button>
              <button>忽略</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/kita_avatar.jpg')} alt="" />
              <span>Kita</span>
            </div>
            <div className="btns">
              <button>关注</button>
              <button>忽略</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/nijika_avatar.jpg')} alt="" />
              <span>Nijika</span>
            </div>
            <div className="btns">
              <button>关注</button>
              <button>忽略</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>最近修改</span>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/bocchi_avatar.jpg')} alt="" />
              <p>
                <span>Bocchi</span> 修改了封面
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/bocchi_avatar.jpg')} alt="" />
              <p>
                <span>Bocchi</span> 修改了封面
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src={require('../../assets/bocchi_avatar.jpg')} alt="" />
              <p>
                <span>Bocchi</span> 修改了封面
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src={require('../../assets/bocchi_avatar.jpg')}
                alt=""
              />
              <div className="online" />
              <span>Bocchi</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
