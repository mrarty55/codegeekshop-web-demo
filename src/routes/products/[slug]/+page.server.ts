import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseInstance } from '$lib/service/firebase';
import type { Product } from '$lib/models/Product';

export const load = async ({ params }) => {
	const firestoreDb = getFirestore(firebaseInstance);

	const ref = doc(firestoreDb, 'products', params.slug);

	const snapshot = await getDoc(ref);

	return {
		product: snapshot.exists()
			? <Product>{
					id: snapshot.id,
					name: snapshot.data().name,
					currencyUnit: snapshot.data().currencyUnit,
					description: snapshot.data().description,
					price: snapshot.data().price,
					imageUrl: snapshot.data().imageUrl
			  }
			: null
	};
};
