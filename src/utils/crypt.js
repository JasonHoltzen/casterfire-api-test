import tweetnacl from 'tweetnacl';
const { secretbox, randomBytes } = tweetnacl;
import tweetnaclUtil from 'tweetnacl-util';
const { decodeUTF8, encodeUTF8, encodeBase64, decodeBase64 } = tweetnaclUtil;

const newNonce = () => randomBytes(secretbox.nonceLength);

//generate a new key
export const genKey = () => encodeBase64(randomBytes(secretbox.keyLength));

//encrypt
export const en = (json, key) => {
	const keyUint8Array = decodeBase64(key);
	const nonce = newNonce();
	const messageUint8 = decodeUTF8(JSON.stringify(json));
	const box = secretbox(messageUint8, nonce, keyUint8Array);
	const fullMessage = new Uint8Array(nonce.length + box.length);
	fullMessage.set(nonce);
	fullMessage.set(box, nonce.length);
	const base64FullMessage = encodeBase64(fullMessage);

	return base64FullMessage;
};

//decrypt
export const de = (messageWithNonce, key) => {
	const keyUint8Array = decodeBase64(key);
	const messageWithNonceAsUint8Array = decodeBase64(messageWithNonce);
	const nonce = messageWithNonceAsUint8Array.slice(0, secretbox.nonceLength);
	const message = messageWithNonceAsUint8Array.slice(
		secretbox.nonceLength,
		messageWithNonce.length
	);
	const decrypted = secretbox.open(message, nonce, keyUint8Array);

	if (!decrypted) {
		console.log("couldn't decrypt message");
		throw new Error("couldn't decrypt message");
	}

	const base64DecryptedMessage = encodeUTF8(decrypted);

	return JSON.parse(base64DecryptedMessage);
};
