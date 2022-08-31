import React from 'react'

export default function badge({ content, bg, clr }) {
  return (
    <div className='div'>
      <span className='style'>{content}</span>
      <style jsx>{`
        .style {
          color: ${clr};
          background-color: ${bg};
          border-radius: 10px;
          margin-right: 5px;
          padding: 1px 6px;
        }
        .div {
          margin-top: 9px;
          margin-bottom: 9px;
          display: inline-block;
          border-radius: 10px;
          font-size: 12px;
        }
      `}</style>
    </div>
  )
}
