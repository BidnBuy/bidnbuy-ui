type BidIconProps = {
  className?: string
  width?: number
  height?: number
}


const BidIcon = ({ className = "", width =20, }: BidIconProps) => {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.6699 16.6692V18.3359H0.669922V16.6692H10.6699ZM11.1574 0.574219L17.6391 7.05588L16.4608 8.23422L15.5766 7.94005L13.5141 10.0026L18.2283 14.7167L17.0499 15.8951L12.3358 11.1809L10.3324 13.1842L10.5683 14.1276L9.38909 15.3059L2.90742 8.82422L4.08575 7.64505L5.02909 7.88088L10.2733 2.63672L9.97909 1.75339L11.1574 0.574219ZM11.7466 3.52088L5.85409 9.41255L8.79992 12.3592L14.6924 6.46755L11.7466 3.52088Z"
        fill="white"
      />
    </svg>
  );
};

export default BidIcon;
