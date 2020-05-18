import React from 'react';

import { ProductList } from './styles';
import { MdAddShoppingCart } from 'react-icons/md';

function Home() {
	return (
		<ProductList>
			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
					alt="Tenis"
				/>
				<strong>Tênis Legal</strong>
				<span>R$ 100,00</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>

			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
					alt="Tenis"
				/>
				<strong>Tênis Legal</strong>
				<span>R$ 100,00</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>

			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
					alt="Tenis"
				/>
				<strong>Tênis Legal</strong>
				<span>R$ 100,00</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>

			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
					alt="Tenis"
				/>
				<strong>Tênis Legal</strong>
				<span>R$ 100,00</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>

			<li>
				<img
					src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ts=1571078789&ims=326x"
					alt="Tenis"
				/>
				<strong>Tênis Legal</strong>
				<span>R$ 100,00</span>

				<button type="button">
					<div>
						<MdAddShoppingCart size={16} color="#fff" /> 3
					</div>
					<span>ADICIONAR AO CARRINHO</span>
				</button>
			</li>
		</ProductList>
	);
}

export default Home;
