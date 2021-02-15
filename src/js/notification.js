import { defaults, notice, success, info, error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';

import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';

defaults.styling = 'material';
defaults.icons = 'material';

const setNotification = function (arg, dataLength) {
  if (arg === 'success') {
    return success({
      title: 'Success!',
      text: 'Search completed',
    });
  }

  if (arg === 'info') {
    defaults.delay = 2500;
    return info({
      text: `Resulting in ${dataLength} options`,
    });
  }

  if (arg === 'notice') {
    defaults.delay = 1500;
    return notice({
      text: 'Please, specify your search criteria.',
    });
  }

  if (arg === 'error') {
    defaults.delay = 1500;
    return error({
      text: '! Incorrect query',
    });
  }
};

export default setNotification;
