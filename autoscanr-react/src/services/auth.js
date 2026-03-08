/**
 * AutoScanR — Demo Auth Service
 * Gère login / logout / getUser avec localStorage (pas de backend)
 */

const VALID_EMAIL = 'demo@autoscanr.com';
const VALID_PASSWORD = 'AutoScanR2026!';
const STORAGE_KEY = 'autoscanr_user';

/**
 * Tente de connecter l'utilisateur.
 * @param {string} email
 * @param {string} password
 * @returns {{ success: boolean, error?: string }}
 */
export function login(email, password) {
    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
        const user = { email };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
        return { success: true };
    }
    return { success: false, error: 'Identifiant ou mot de passe incorrect.' };
}

/**
 * Déconnecte l'utilisateur courant.
 */
export function logout() {
    localStorage.removeItem(STORAGE_KEY);
}

/**
 * Retourne l'utilisateur actuellement connecté ou null.
 * @returns {{ email: string } | null}
 */
export function getUser() {
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : null;
    } catch {
        return null;
    }
}
