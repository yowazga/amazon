export const cart = [];

export function addToCart(productId) {
	let matchigItem;

	cart.forEach((cartItem) => {
		if (productId === cartItem.productId)
			matchigItem = cartItem;
	});

	if (matchigItem)
		matchigItem.quantity++;
	else {
		cart.push({
			productId: productId,
			quantity: 1
		});
	}
}