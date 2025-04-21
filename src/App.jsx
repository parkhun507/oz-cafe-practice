import { useState } from "react";
import "./App.scss";
import data from "./assets/data";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";
import { CartProvider } from "./contexts/CartContext"; // Context Provider 추가

function App() {
  const [menu] = useState(data.menu); // 메뉴 데이터는 변동 없으므로 setMenu 제거 가능

  return (
    <CartProvider> {/* Context로 cart 상태 감싸기 */}
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Menu menu={menu} />} /> {/* props 간소화 */}
            <Route path="/cart" element={<Cart />} /> {/* 모든 props 제거 */}
          </Routes>
        </main>
      </div>
    </CartProvider>
  );
}

export default App;

