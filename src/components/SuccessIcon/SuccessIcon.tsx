import * as React from 'react';

interface SuccessIconProps {
  fill?: string;
}

function SuccessIcon({ fill = '#FA7436' }: SuccessIconProps) {
  return (
    <svg
      width="201"
      height="201"
      viewBox="0 0 201 201"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M88.8337 115.536L70.7087 97.4112C69.1809 95.8834 67.3059 95.1196 65.0837 95.1196C62.8614 95.1196 60.917 95.9529 59.2503 97.6196C57.7226 99.1473 56.9587 101.092 56.9587 103.453C56.9587 105.814 57.7226 107.758 59.2503 109.286L83.0003 133.036C84.5281 134.564 86.4726 135.328 88.8337 135.328C91.1948 135.328 93.1392 134.564 94.667 133.036L141.959 85.7446C143.486 84.2168 144.25 82.3418 144.25 80.1196C144.25 77.8973 143.417 75.9529 141.75 74.2862C140.223 72.7584 138.278 71.9945 135.917 71.9945C133.556 71.9945 131.611 72.7584 130.084 74.2862L88.8337 115.536ZM100.5 183.87C88.9726 183.87 78.1392 181.681 68.0003 177.303C57.8614 172.931 49.042 166.995 41.542 159.495C34.042 151.995 28.1059 143.175 23.7337 133.036C19.3559 122.897 17.167 112.064 17.167 100.536C17.167 89.0084 19.3559 78.1751 23.7337 68.0362C28.1059 57.8973 34.042 49.0779 41.542 41.5779C49.042 34.0779 57.8614 28.139 68.0003 23.7612C78.1392 19.389 88.9726 17.2029 100.5 17.2029C112.028 17.2029 122.861 19.389 133 23.7612C143.139 28.139 151.959 34.0779 159.459 41.5779C166.959 49.0779 172.895 57.8973 177.267 68.0362C181.645 78.1751 183.834 89.0084 183.834 100.536C183.834 112.064 181.645 122.897 177.267 133.036C172.895 143.175 166.959 151.995 159.459 159.495C151.959 166.995 143.139 172.931 133 177.303C122.861 181.681 112.028 183.87 100.5 183.87Z"
        fill={fill}
      />
    </svg>
  );
}

export default SuccessIcon;
