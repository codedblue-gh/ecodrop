interface AngleArrowIconProps {
  className?: string;
  fill?: string;
}
export const AngleArrowIcon = ({
  className = '',
  fill = 'white',
}: AngleArrowIconProps) => (
  <svg
    className={className}
    viewBox='0 0 63 63'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12 4L11.9806 11.3801H10.6053L10.7409 6.2276L4.98789 12L4 11.0121L9.75303 5.23971L4.60048 5.35593V4H12Z'
      fill={fill}></path>
  </svg>
);
