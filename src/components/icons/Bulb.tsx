type Props = {
  className?: string;
};

export const Bulb = ({ className }: Props) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M15 17.4V16.7193C15 15.5673 15.821 14.3105 17.1258 12.216C19.5266 8.02691 16.7083 3 12.011 3C7.31378 3 4.44324 8.02691 6.89624 12.216C7.20939 12.8444 9 15.3055 9 16.7193V17.4"
      stroke="white"
      strokeMiterlimit="10"
    />
    <path
      d="M9 16.8V18.2966C9 19.7932 10.3636 21 12 21C13.6364 21 15 19.7932 15 18.2966V16.8"
      stroke="white"
      strokeMiterlimit="10"
    />
    <path d="M14.4 9.12H12V6L9.59998 10.68H12V13.8L14.4 9.12Z" fill="white" />
    <path
      d="M9 18.6001H13.2"
      stroke="white"
      strokeWidth="0.9998"
      strokeMiterlimit="10"
    />
    <path
      d="M8.69995 16.8H15.2999"
      stroke="white"
      strokeWidth="0.9998"
      strokeMiterlimit="10"
    />
  </svg>
);
