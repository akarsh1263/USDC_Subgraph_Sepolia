import { messaging } from './firebaseInit';

export const requestPermission = async () => {
  try {
    await messaging.requestPermission();
    const token = await messaging.getToken();
    console.log('Notification token:', token);
    return token;
  } catch (error) {
    console.error("Permission denied", error);
  }
};

export const sendNotification = (title, message) => {
  new Notification(title, { body: message });
};
