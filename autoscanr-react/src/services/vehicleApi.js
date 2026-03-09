/**
 * AutoScanR — Vehicle Information Service
 * Interagit avec une API de plaques / VIN (démo)
 */

const API_BASE_URL = 'https://api.example-vehicle-data.com'; // Hypothetical base URL
const API_TOKEN = import.meta.env.VITE_API_TOKEN;

/**
 * Mock data for fallback when API fails or token is missing
 */
const MOCK_VEHICLE = {
    brand: 'RENAULT',
    model: 'CLIO V',
    plate: 'AB-123-CD',
    vin: 'VF1RJA00000000000',
    year: '2022',
    fuel: 'Essence',
    compatible: true,
};

/**
 * Récupère les informations d'un véhicule par sa plaque.
 * @param {string} plaque 
 * @returns {Promise<Object>}
 */
export async function getVehicleInfo(plaque) {
    // Check if we have a token, otherwise fallback immediately to mock
    if (!API_TOKEN) {
        console.warn('VehicleApi: VITE_API_TOKEN manquant. Utilisation des données mockées.');
        return new Promise(resolve => {
            setTimeout(() => resolve(MOCK_VEHICLE), 800);
        });
    }

    try {
        // Step 1: Get basic info from plate
        const plateRes = await fetch(`${API_BASE_URL}/plate/FR/${plaque}?token=${API_TOKEN}`);
        if (!plateRes.ok) throw new Error('Erreur API plaque');

        const plateData = await plateRes.json();

        // Step 2: If VIN is present, enrich with VIN info
        if (plateData.vin) {
            const vinRes = await fetch(`${API_BASE_URL}/vin/${plateData.vin}?token=${API_TOKEN}`);
            if (vinRes.ok) {
                const vinData = await vinRes.json();
                return { ...plateData, ...vinData };
            }
        }

        return plateData;
    } catch (error) {
        console.error('VehicleApi Error:', error);
        // Fallback to mock for demo purposes if API fails
        return MOCK_VEHICLE;
    }
}
