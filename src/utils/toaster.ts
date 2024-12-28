import { NotificationManager } from 'react-notifications';

const toaster = {
  success: message => NotificationManager.success(message),
  error: message => NotificationManager.error(message)
};

export default toaster;
