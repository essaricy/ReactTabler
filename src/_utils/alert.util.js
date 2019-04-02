import * as AlertConstants from '../_constants/alert.constant';

export function getAlert(type) {
  return AlertConstants.Types.filter(x => x.name === type)[0];
}
