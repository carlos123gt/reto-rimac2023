import { type SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#03050F"
      d="M17.506 13.775V6.25a1.88 1.88 0 0 0-1.875-1.875H4.37A1.88 1.88 0 0 0 2.494 6.25v7.525H.625v1.875A1.88 1.88 0 0 0 2.5 17.525h15a1.88 1.88 0 0 0 1.875-1.875v-1.875h-1.869ZM10 6.25c.344 0 .625.281.625.625A.627.627 0 0 1 10 7.5a.627.627 0 0 1-.625-.625c0-.344.281-.625.625-.625Zm8.125 9.4a.627.627 0 0 1-.625.625h-15a.627.627 0 0 1-.625-.625v-.625H7.5c0 .344.281.625.625.625h3.75a.627.627 0 0 0 .625-.625h5.625v.625Z"
    />
  </svg>
)
export default SvgComponent
