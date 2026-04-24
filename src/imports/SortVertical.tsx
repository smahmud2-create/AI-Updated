import svgPaths from "./svg-lknhli3nf5";

function Icon() {
  return (
    <div className="absolute left-0 size-[24px] top-0" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <g id="Vector">
            <path d={svgPaths.p24da3900} fill="var(--fill-0, #66256A)" />
            <path d={svgPaths.p5450380} fill="var(--fill-0, #66256A)" />
            <path d={svgPaths.p24da3900} stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
            <path d={svgPaths.p5450380} stroke="var(--stroke-0, #66256A)" strokeWidth="0.5" />
          </g>
        </g>
      </svg>
    </div>
  );
}

export default function SortVertical() {
  return (
    <div className="relative size-full" data-name="Sort Vertical">
      <Icon />
    </div>
  );
}