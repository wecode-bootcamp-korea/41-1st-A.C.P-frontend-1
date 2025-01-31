import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FETCH_ORDERED_API } from '../../config';
import OrderedInfo from './components/OrderedInfo';
import './Ordered.scss';

function Ordered({ state }) {
  const [orderedInfo, setOrderedInfo] = useState([]);

  // BE와 통신세팅 -> 오더페이지에서 넘어온 데이터 뿌려주는 fetch 코드
  useEffect(() => {
    fetch(`${FETCH_ORDERED_API}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => res.json())
      .then(data => {
        setOrderedInfo(data);
        console.log(orderedInfo);
      });
  }, []);

  return (
    <div className="ordered">
      <div className="orderedTop">
        <div className="orderedLogo">
          <img src="/images/ordered/logo(252525).png" alt="로고" />
        </div>
        <h2>
          고객님의 주문이 완료되었습니다.
          <br />
          감사합니다.
        </h2>
      </div>
      <div className="orderedBottom">
        <table>
          <thead>
            <tr>
              {ORDERED_TABLE_TITLE.map(item => {
                return <th key={item.id}>{item.title}</th>;
              })}
            </tr>
          </thead>
          <tfoot>
            <OrderedInfo />
            {/* {orderedInfo.length > 0 &&
              orderedInfo.map(info => {
                const arr = Object.keys(info);
                let name = '';
                arr.forEach(element => {
                  if (element.includes('name')) {
                    name = element;
                    return;
                  }
                });
                return (
                  <OrderedInfo key={info[name]} info={info} name={info[name]} />
                );
              })} */}
          </tfoot>
        </table>
        <div className="orderedHomeBtn">
          <Link to="/">
            <button>홈</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

const ORDERED_TABLE_TITLE = [
  { id: 1, title: '주문번호' },
  { id: 2, title: '상품명' },
  { id: 3, title: '수량' },
  { id: 4, title: '배송지' },
  { id: 5, title: '수령희망일' },
];

export default Ordered;
