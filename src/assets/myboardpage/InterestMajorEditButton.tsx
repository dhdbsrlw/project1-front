import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;

  background: #eeeeee99;
  & svg > path {
    fill: #43434399;
  }

  &:active {
    background: #d858881a;
    // On click
    // Change to: "Active";
    // Animate: Dissolve;
    animation-timing-function: ease-in;
    animation-duration: 200ms;
  }

  &:active > svg > path {
    fill: #d85888;
  }
`;

export default function EditButton() {
  return (
    <Button>
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
        <rect width="20" height="20" rx="5" />
        <path d="M10.7918 2.66699C11.0074 2.66699 11.2003 2.80119 11.2729 3.00212L11.7906 4.43724C11.9761 4.48344 12.1352 4.52964 12.2702 4.57804C12.4176 4.63084 12.6075 4.71077 12.8422 4.82003L14.0477 4.18204C14.1461 4.12991 14.2588 4.11109 14.3688 4.12841C14.4788 4.14573 14.5802 4.19826 14.6578 4.27811L15.7182 5.37443C15.859 5.52036 15.8986 5.73376 15.8194 5.92002L15.254 7.24514C15.3479 7.41747 15.4227 7.56487 15.4799 7.68807C15.5415 7.82226 15.6177 8.00706 15.7087 8.24539L17.0264 8.81005C17.2244 8.89438 17.3469 9.09238 17.3337 9.30431L17.2369 10.826C17.2303 10.9248 17.1948 11.0196 17.1348 11.0984C17.0748 11.1773 16.993 11.2368 16.8995 11.2696L15.6515 11.7133C15.6155 11.8856 15.5781 12.033 15.5385 12.1577C15.4747 12.3502 15.4017 12.5396 15.32 12.7253L15.947 14.1113C15.9912 14.2086 16.0031 14.3176 15.981 14.4223C15.9588 14.5269 15.9037 14.6217 15.8238 14.6928L14.6314 15.7576C14.5529 15.8274 14.4549 15.8716 14.3506 15.8841C14.2463 15.8967 14.1406 15.8771 14.0477 15.828L12.8187 15.1768C12.6264 15.2786 12.428 15.3685 12.2247 15.4459L11.6879 15.6468L11.2113 16.9668C11.176 17.0635 11.1122 17.1472 11.0285 17.207C10.9447 17.2668 10.8449 17.2999 10.742 17.302L9.34867 17.3335C9.24305 17.3363 9.13916 17.3062 9.05131 17.2475C8.96346 17.1888 8.89595 17.1043 8.85809 17.0057L8.29638 15.5192C8.10473 15.4537 7.91497 15.3828 7.72733 15.3066C7.57386 15.2401 7.42271 15.1685 7.27415 15.0917L5.88086 15.6872C5.78906 15.7263 5.68784 15.738 5.58955 15.7207C5.49125 15.7033 5.40011 15.6578 5.32721 15.5896L4.29618 14.6224C4.21942 14.5507 4.16714 14.4567 4.14675 14.3536C4.12635 14.2506 4.13886 14.1437 4.18252 14.0482L4.78163 12.7429C4.70195 12.5883 4.62808 12.4307 4.56017 12.2706C4.4809 12.0746 4.40754 11.8763 4.34018 11.6759L3.02756 11.2762C2.92086 11.244 2.8278 11.1774 2.76283 11.0868C2.69785 10.9963 2.6646 10.8868 2.66824 10.7754L2.71957 9.36665C2.72322 9.27473 2.75194 9.18557 2.8026 9.10879C2.85327 9.03202 2.92396 8.97055 3.00703 8.93105L4.38418 8.26959C4.44798 8.03566 4.50371 7.8538 4.55284 7.72107C4.62202 7.54378 4.69885 7.36958 4.7831 7.19894L4.18619 5.93762C4.14089 5.84184 4.12713 5.73415 4.14689 5.63005C4.16666 5.52596 4.21893 5.43081 4.29618 5.35829L5.32575 4.38591C5.39792 4.31783 5.48823 4.27207 5.5858 4.25411C5.68337 4.23616 5.78405 4.24678 5.87573 4.28471L7.26755 4.85963C7.42154 4.75697 7.56087 4.6741 7.687 4.60737C7.83733 4.52744 8.03825 4.44384 8.29124 4.35364L8.77523 3.00359C8.81101 2.90479 8.87641 2.81944 8.96251 2.7592C9.04861 2.69895 9.1512 2.66675 9.25628 2.66699H10.7918ZM10.0189 7.8142C8.79649 7.8142 7.80579 8.79319 7.80579 10.0017C7.80579 11.2102 8.79649 12.1899 10.0189 12.1899C11.2406 12.1899 12.2313 11.2102 12.2313 10.0017C12.2313 8.79319 11.2413 7.8142 10.0189 7.8142Z" />
      </svg>
    </Button>
  );
}
