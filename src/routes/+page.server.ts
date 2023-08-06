import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { firebaseInstance } from '$lib/service/firebase';
import type { Product } from '$lib/models/Product';

export const load = async () => {
	const firestoreDb = getFirestore(firebaseInstance);

	const snapshots = await getDocs(collection(firestoreDb, 'products'));

	// TODO: Use converter method to convert query data
	const products: Product[] = snapshots.docs.map(
		(snapshot) =>
			<Product>{
				id: snapshot.id,
				name: snapshot.data().name,
				currencyUnit: snapshot.data().currencyUnit,
				description: snapshot.data().description,
				price: snapshot.data().price,
				imageUrl: snapshot.data().imageUrl
			}
	);

	return {
		products
	};
};
