// This is Fluent-style icon
import * as React from 'react';
import cx from 'classnames';
import { createSvgIcon } from '../utils/createSvgIcon';
import { iconClassNames } from '../utils/iconClassNames';

export const NotepadPersonIcon = createSvgIcon({
  svg: ({ classes }) => (
    <svg role="presentation" focusable="false" viewBox="0 0 20 20" className={classes.svg}>
      <path
        className={cx(iconClassNames.outline, classes.outlinePart)}
        d="M7.5 7C7.22386 7 7 7.22385 7 7.5C7 7.77614 7.22386 8 7.5 8H12.5C12.7761 8 13 7.77614 13 7.5C13 7.22385 12.7761 7 12.5 7H7.5ZM7 10.5C7 10.2239 7.22386 9.99999 7.5 9.99999H12.1707C12.0602 10.3128 12 10.6494 12 11H7.5C7.22386 11 7 10.7761 7 10.5ZM15 4.5V8C15.3497 8 15.6866 8.0602 16 8.171V4.5C16 3.67157 15.3284 3 14.5 3H14V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V3H10.5V2.5C10.5 2.22386 10.2761 2 10 2C9.72386 2 9.5 2.22386 9.5 2.5V3H7V2.5C7 2.22386 6.77614 2 6.5 2C6.22386 2 6 2.22386 6 2.5V3H5.5C4.67157 3 4 3.67157 4 4.5V16.5C4 17.3284 4.67157 18 5.5 18H10.7509C10.6273 17.8209 10.5169 17.6308 10.4213 17.4302C10.3549 17.2909 10.296 17.1474 10.2449 17H5.5C5.22386 17 5 16.7761 5 16.5V4.5C5 4.22386 5.22386 4 5.5 4H14.5C14.7761 4 15 4.22386 15 4.5ZM7.5 13C7.22386 13 7 13.2238 7 13.5C7 13.7761 7.22386 14 7.5 14H9.5C9.77614 14 10 13.7761 10 13.5C10 13.2238 9.77614 13 9.5 13H7.5ZM17 11C17 10.2597 16.5978 9.61337 16 9.26756C15.7058 9.09739 15.3643 8.99999 15 8.99999C13.8954 8.99999 13 9.89542 13 11C13 12.1046 13.8954 13 15 13C15.3643 13 15.7058 12.9026 16 12.7324C16.5978 12.3866 17 11.7403 17 11ZM11 15.5C11 15.672 11.0109 15.8388 11.0321 16C11.0797 16.3621 11.1793 16.6964 11.324 17C11.5329 17.4383 11.8358 17.8127 12.2121 18.1148C12.9534 18.7098 13.9469 19 15 19C16.0531 19 17.0466 18.7098 17.7879 18.1148C18.541 17.5103 19 16.6161 19 15.5C19 14.6716 18.3284 14 17.5 14L12.5 14C11.6716 14 11 14.6716 11 15.5Z"
      />
      <path
        d="M7 2.5C7 2.22386 6.77614 2 6.5 2C6.22386 2 6 2.22386 6 2.5V3H5.5C4.67157 3 4 3.67157 4 4.5V16.5C4 17.3284 4.67157 18 5.5 18H10.7509C10.6273 17.8209 10.5169 17.6308 10.4213 17.4302C10.2301 17.0291 10.1015 16.5933 10.0406 16.1304C10.0136 15.9247 10 15.7143 10 15.5C10 14.1207 11.1171 13.0022 12.4959 13L12.5 13L12.7639 13C12.2889 12.4692 12 11.7683 12 11H7.5C7.22386 11 7 10.7761 7 10.5C7 10.2239 7.22386 9.99999 7.5 9.99999H12.1707C12.5825 8.8348 13.6938 8 15 8C15.3497 8 15.6866 8.0602 16 8.171V4.5C16 3.67157 15.3284 3 14.5 3H14V2.5C14 2.22386 13.7761 2 13.5 2C13.2239 2 13 2.22386 13 2.5V3H10.5V2.5C10.5 2.22386 10.2761 2 10 2C9.72386 2 9.5 2.22386 9.5 2.5V3H7V2.5ZM7 7.5C7 7.22385 7.22386 7 7.5 7H12.5C12.7761 7 13 7.22385 13 7.5C13 7.77614 12.7761 8 12.5 8H7.5C7.22386 8 7 7.77614 7 7.5ZM7 13.5C7 13.2238 7.22386 13 7.5 13H9.5C9.77614 13 10 13.2238 10 13.5C10 13.7761 9.77614 14 9.5 14H7.5C7.22386 14 7 13.7761 7 13.5ZM17 11C17 10.2597 16.5978 9.61337 16 9.26756C15.7058 9.09739 15.3643 8.99999 15 8.99999C13.8954 8.99999 13 9.89542 13 11C13 12.1046 13.8954 13 15 13C15.3643 13 15.7058 12.9026 16 12.7324C16.5978 12.3866 17 11.7403 17 11ZM11 15.5C11 15.672 11.0109 15.8388 11.0321 16C11.0797 16.3621 11.1793 16.6964 11.324 17C11.5329 17.4383 11.8358 17.8127 12.2121 18.1148C12.9534 18.7098 13.9469 19 15 19C16.0531 19 17.0466 18.7098 17.7879 18.1148C18.541 17.5103 19 16.6161 19 15.5C19 14.6716 18.3284 14 17.5 14L12.5 14C11.6716 14 11 14.6716 11 15.5Z"
        className={cx(iconClassNames.filled, classes.filledPart)}
      />
    </svg>
  ),
  displayName: 'NotepadPersonIcon',
});
