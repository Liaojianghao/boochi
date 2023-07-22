import React from 'react'
import './navbar.scss'
import { createFromIconfontCN } from '@ant-design/icons'
import { Space } from 'antd'
import { Link } from 'react-router-dom'
const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/c/font_4178484_cbts7rfx65u.js',
})

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="title">Bocchi socail</span>
        </Link>
        <Space>
          <IconFont style={{ fontSize: '24px' }} type="icon-home" />
          <IconFont style={{ fontSize: '20px' }} type="icon-moon" />
          <IconFont style={{ fontSize: '22px' }} type="icon-app" />
        </Space>
        <div className="search">
          <Space>
            <IconFont type="icon-search" />
          </Space>
          <input type="text" placeholder="search..." />
        </div>
      </div>
      <div className="right">
        <Space>
          <IconFont style={{ fontSize: '24px' }} type="icon-user" />
          <IconFont style={{ fontSize: '24px' }} type="icon-email" />
          <IconFont style={{ fontSize: '24px' }} type="icon-bell" />
        </Space>
        <div className="user">
          <img src={require('./img/socail_avatar.jpg')} alt="" />
          <span>Takagi</span>
        </div>
      </div>
    </div>
  )
}
