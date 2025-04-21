import { useState } from "react";
import Item from "./Item";
import OrderModal from "./OrderModal";
import { useCart } from "../contexts/CartContext"; // Context 훅 추가

function Menu({ menu }) {
  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  const { addToCart } = useCart(); // Context에서 장바구니 추가 함수 가져오기

  if (!menu)
    return (
      <div style={{ textAlign: "center", margin: "80px" }}>
        메뉴 정보가 없어요!
      </div>
    );

  const categories = Object.keys(menu);
  return (
    <>
      {categories.map((category) => (
        <section key={category}>
          <h2>{category}</h2>
          <ul className="menu">
            {menu[category].map((item) => (
              <Item
                key={item.name}
                item={item}
                clickHandler={() => {
                  setModalMenu(item);
                  setModalOn(true);
                }}
              />
            ))}
          </ul>
        </section>
      ))}
      {modalOn && (
        <OrderModal
          modalMenu={modalMenu}
          setModalOn={setModalOn}
          onAddToCart={addToCart} // props 대신 Context 함수 전달
        />
      )}
    </>
  );
}

export default Menu;

